/**
 * Transforms raw Google Sheets CSV data into the app's data model.
 * Adaptive column detection handles various header naming conventions.
 */

import {
  fetchAllSheets,
  num,
  str,
  type SheetName,
} from "./google-sheets";
import type {
  AllData,
  RooftopData,
  SectionData,
  HeroData,
  HeroMonthly,
  MonthlyData,
  SentimentData,
  OutcomeItem,
} from "./types";

// ─── Column name candidates for adaptive matching ───

function findVal(row: Record<string, string>, ...candidates: string[]): string {
  for (const c of candidates) {
    // Exact match (case-insensitive)
    for (const key of Object.keys(row)) {
      if (key.toLowerCase().trim() === c.toLowerCase().trim()) return row[key];
    }
  }
  // Partial match
  for (const c of candidates) {
    for (const key of Object.keys(row)) {
      if (key.toLowerCase().includes(c.toLowerCase())) return row[key];
    }
  }
  return "";
}

function numVal(row: Record<string, string>, ...candidates: string[]): number {
  const v = findVal(row, ...candidates);
  if (!v) return 0;
  const n = Number(v.replace(/[,%$\s]/g, ""));
  return isNaN(n) ? 0 : n;
}

// ─── Month parsing helpers ───

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_ORDER: Record<string, number> = {};
MONTH_NAMES.forEach((m, i) => { MONTH_ORDER[m] = i + 1; });

function parseMonthFromDate(dateStr: string): string | null {
  if (!dateStr) return null;

  // Try "Mon 'YY" format (e.g. "Aug '25")
  const shortMatch = dateStr.match(/^([A-Za-z]{3})\s*'(\d{2})$/);
  if (shortMatch) return `${shortMatch[1]} '${shortMatch[2]}`;

  // Try "Month YYYY" or "Mon YYYY"
  const longMatch = dateStr.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (longMatch) {
    const m = longMatch[1].slice(0, 3);
    const y = longMatch[2].slice(2);
    if (MONTH_ORDER[m]) return `${m} '${y}`;
  }

  // Try date formats: MM/DD/YYYY, YYYY-MM-DD, DD/MM/YYYY
  const dateMatch = dateStr.match(/(\d{1,4})[\/\-](\d{1,2})[\/\-](\d{2,4})/);
  if (dateMatch) {
    let month: number;
    let year: string;
    if (dateMatch[1].length === 4) {
      // YYYY-MM-DD
      month = parseInt(dateMatch[2]);
      year = dateMatch[1].slice(2);
    } else if (parseInt(dateMatch[1]) > 12) {
      // DD/MM/YYYY
      month = parseInt(dateMatch[2]);
      year = dateMatch[3].length === 4 ? dateMatch[3].slice(2) : dateMatch[3];
    } else {
      // MM/DD/YYYY
      month = parseInt(dateMatch[1]);
      year = dateMatch[3].length === 4 ? dateMatch[3].slice(2) : dateMatch[3];
    }
    if (month >= 1 && month <= 12) {
      return `${MONTH_NAMES[month - 1]} '${year}`;
    }
  }

  return null;
}

function monthLabelToSortKey(label: string): number {
  const parts = label.split(" '");
  const month = parts[0];
  const year = 2000 + parseInt(parts[1] || "26");
  return year * 100 + (MONTH_ORDER[month] || 0);
}

// ─── Determine section name from row data ───

function inferSection(row: Record<string, string>): string {
  const section = findVal(row, "section", "agent section", "agent_section", "agent type", "agent_type", "type");
  if (section) return section;

  const direction = findVal(row, "direction", "call direction", "call_direction");
  const dept = findVal(row, "department", "dept", "category");
  if (direction && dept) return `${dept} ${direction}`;

  return "Sales Inbound"; // default
}

// ─── Build AllData from sheets ───

export async function buildAllDataFromSheets(): Promise<{
  allData: AllData;
  campaignROI: Record<string, string>[];
  campaignDetails: Record<string, string>[];
  beforeAfter: Record<string, string>[];
}> {
  const sheets = await fetchAllSheets();

  const allData: AllData = {};

  // ─── Process Daily Metrics ───
  const dailyMetrics = sheets.dailyMetrics;
  if (dailyMetrics.length > 0) {
    // Group by rooftop
    const byRooftop = new Map<string, Record<string, string>[]>();
    for (const row of dailyMetrics) {
      const rooftop = findVal(row, "rooftop", "rooftop name", "rooftop_name", "dealership", "dealer", "name", "dealer name", "dealer_name");
      if (!rooftop) continue;
      if (!byRooftop.has(rooftop)) byRooftop.set(rooftop, []);
      byRooftop.get(rooftop)!.push(row);
    }

    for (const [rooftopName, rows] of byRooftop) {
      const sectionMap = new Map<string, Record<string, string>[]>();
      for (const row of rows) {
        const section = inferSection(row);
        if (!sectionMap.has(section)) sectionMap.set(section, []);
        sectionMap.get(section)!.push(row);
      }

      const sections = [...sectionMap.keys()].sort();
      const sectionData: Record<string, SectionData> = {};
      let totalCalls = 0, totalQualified = 0, totalAppts = 0, totalRouted = 0;
      let totalCallbacks = 0, totalWarmTransfers = 0;
      let totalDuring = 0, totalAfter = 0;
      let salesAppts = 0, serviceAppts = 0;
      const heroMonthlyMap = new Map<string, HeroMonthly>();
      const allMonthLabels = new Set<string>();

      for (const [sectionName, sectionRows] of sectionMap) {
        // Group section rows by month
        const monthlyMap = new Map<string, MonthlyData>();
        let sTotalCalls = 0, sQualified = 0, sAppts = 0, sRouted = 0;
        let sCallbacks = 0, sWarmTransfers = 0, sQueryResolved = 0;
        let sDuring = 0, sAfter = 0;
        let sDurationSum = 0, sDurationCount = 0;
        let sAngry = 0, sHappy = 0, sNeutral = 0, sSad = 0;
        let hasSentiment = false;

        for (const row of sectionRows) {
          const dateStr = findVal(row, "date", "month", "period", "report month", "report_month");
          const monthLabel = parseMonthFromDate(dateStr);

          const calls = numVal(row, "total calls", "total_calls", "calls", "conversations", "total conversations");
          const qualified = numVal(row, "qualified calls", "qualified_calls", "qualified", "real buyers", "real_buyers");
          const appts = numVal(row, "appointments", "appts", "appointments booked");
          const routed = numVal(row, "routed to team", "routed_to_team", "routed");
          const callbacks = numVal(row, "callbacks", "callback");
          const warmTransfers = numVal(row, "warm transfers", "warm_transfers");
          const queryResolved = numVal(row, "query resolved", "queries resolved", "query_resolved", "resolved");
          const during = numVal(row, "during hours", "during_hours", "business hours");
          const after = numVal(row, "after hours", "after_hours");
          const duration = numVal(row, "avg duration", "avg_duration", "average duration", "avg call duration");

          const angry = numVal(row, "angry", "sentiment angry");
          const happy = numVal(row, "happy", "sentiment happy");
          const neutral = numVal(row, "neutral", "sentiment neutral");
          const sad = numVal(row, "sad", "sentiment sad");
          if (angry + happy + neutral + sad > 0) hasSentiment = true;

          sTotalCalls += calls;
          sQualified += qualified;
          sAppts += appts;
          sRouted += routed || (callbacks + warmTransfers);
          sCallbacks += callbacks;
          sWarmTransfers += warmTransfers;
          sQueryResolved += queryResolved;
          sDuring += during;
          sAfter += after;
          if (duration > 0) { sDurationSum += duration; sDurationCount++; }
          sAngry += angry;
          sHappy += happy;
          sNeutral += neutral;
          sSad += sad;

          if (monthLabel) {
            allMonthLabels.add(monthLabel);
            const existing = monthlyMap.get(monthLabel);
            if (existing) {
              existing.total_calls += calls;
              existing.qualified_calls += qualified;
              existing.appointments += appts;
              existing.callbacks = (existing.callbacks || 0) + callbacks;
              existing.warm_transfers = (existing.warm_transfers || 0) + warmTransfers;
              existing.query_resolved = (existing.query_resolved || 0) + queryResolved;
              existing.during_hours = (existing.during_hours || 0) + during;
              existing.after_hours = (existing.after_hours || 0) + after;
            } else {
              monthlyMap.set(monthLabel, {
                label: monthLabel,
                total_calls: calls,
                qualified_calls: qualified,
                appointments: appts,
                callbacks,
                warm_transfers: warmTransfers,
                query_resolved: queryResolved,
                during_hours: during,
                after_hours: after,
                avg_duration: duration,
              });
            }

            // Aggregate into hero monthly
            const hm = heroMonthlyMap.get(monthLabel);
            if (hm) {
              hm.calls += calls;
              hm.qual += qualified;
              hm.appts += appts;
              hm.routed += routed || (callbacks + warmTransfers);
            } else {
              heroMonthlyMap.set(monthLabel, {
                label: monthLabel.split(" '")[0], // Short label for hero monthly
                calls,
                qual: qualified,
                appts,
                routed: routed || (callbacks + warmTransfers),
              });
            }
          }
        }

        const monthly = [...monthlyMap.values()].sort(
          (a, b) => monthLabelToSortKey(a.label) - monthLabelToSortKey(b.label)
        );

        const qualRate = sTotalCalls > 0 ? Math.round((sQualified / sTotalCalls) * 1000) / 10 : 0;
        const resRate = sTotalCalls > 0 ? Math.round((sQueryResolved / sTotalCalls) * 1000) / 10 : 0;

        sectionData[sectionName] = {
          totalCalls: sTotalCalls,
          qualifiedCalls: sQualified,
          queryResolved: sQueryResolved,
          callbacks: sCallbacks,
          warmTransfers: sWarmTransfers,
          appointments: sAppts,
          routedToTeam: sRouted || (sCallbacks + sWarmTransfers),
          avgScore: null,
          avgDuration: sDurationCount > 0 ? Math.round((sDurationSum / sDurationCount) * 100) / 100 : 0,
          resRate,
          qualRate,
          duringHours: sDuring,
          afterHours: sAfter,
          sentiment: hasSentiment ? { angry: sAngry, happy: sHappy, neutral: sNeutral, sad: sSad } : null,
          monthly,
        };

        totalCalls += sTotalCalls;
        totalQualified += sQualified;
        totalAppts += sAppts;
        totalRouted += sRouted || (sCallbacks + sWarmTransfers);
        totalCallbacks += sCallbacks;
        totalWarmTransfers += sWarmTransfers;
        totalDuring += sDuring;
        totalAfter += sAfter;

        if (sectionName.toLowerCase().includes("sales")) salesAppts += sAppts;
        if (sectionName.toLowerCase().includes("service")) serviceAppts += sAppts;
      }

      // Build hero data
      const qualRate = totalCalls > 0 ? Math.round((totalQualified / totalCalls) * 1000) / 10 : 0;
      const afterHoursShare = (totalDuring + totalAfter) > 0
        ? Math.round((totalAfter / (totalDuring + totalAfter)) * 1000) / 10
        : 0;

      const sortedMonths = [...allMonthLabels].sort(
        (a, b) => monthLabelToSortKey(a) - monthLabelToSortKey(b)
      );
      const period = sortedMonths.length > 0
        ? `${sortedMonths[0]} \u2014 ${sortedMonths[sortedMonths.length - 1]}`
        : "";

      const heroMonthly = [...heroMonthlyMap.values()].sort(
        (a, b) => {
          // Sort by the full month label key if available
          const aKey = sortedMonths.find((m) => m.startsWith(a.label));
          const bKey = sortedMonths.find((m) => m.startsWith(b.label));
          if (aKey && bKey) return monthLabelToSortKey(aKey) - monthLabelToSortKey(bKey);
          return (MONTH_ORDER[a.label] || 0) - (MONTH_ORDER[b.label] || 0);
        }
      );

      const hero: HeroData = {
        totalCalls,
        qualifiedCalls: totalQualified,
        appointments: totalAppts,
        routedToTeam: totalRouted,
        qualRate,
        afterHoursShare,
        salesAppts,
        serviceAppts,
        callbacks: totalCallbacks,
        warmTransfers: totalWarmTransfers,
      };

      allData[rooftopName] = {
        sections,
        period,
        monthsActive: sortedMonths.length,
        hero,
        heroMonthly,
        sectionData,
        outcomesByAgent: {},
      };
    }
  }

  // ─── Process Call Outcomes ───
  const callOutcomes = sheets.callOutcomes;
  if (callOutcomes.length > 0) {
    const byRooftop = new Map<string, Map<string, Map<string, number>>>();
    for (const row of callOutcomes) {
      const rooftop = findVal(row, "rooftop", "rooftop name", "rooftop_name", "dealership", "dealer", "name");
      const section = findVal(row, "section", "agent section", "agent_section", "agent type", "agent_type") || inferSection(row);
      const outcome = findVal(row, "outcome", "call outcome", "call_outcome", "reason", "topic", "label");
      const count = numVal(row, "count", "value", "total", "calls", "frequency");

      if (!rooftop || !outcome) continue;

      if (!byRooftop.has(rooftop)) byRooftop.set(rooftop, new Map());
      const sectionMap = byRooftop.get(rooftop)!;
      if (!sectionMap.has(section)) sectionMap.set(section, new Map());
      const outcomeMap = sectionMap.get(section)!;
      outcomeMap.set(outcome, (outcomeMap.get(outcome) || 0) + count);
    }

    for (const [rooftop, sectionMap] of byRooftop) {
      if (!allData[rooftop]) continue;
      for (const [section, outcomeMap] of sectionMap) {
        const items: OutcomeItem[] = [...outcomeMap.entries()]
          .map(([label, value]) => ({ label, value }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 10);
        if (!allData[rooftop].outcomesByAgent) allData[rooftop].outcomesByAgent = {};
        allData[rooftop].outcomesByAgent[section] = items;
      }
    }
  }

  // ─── Process Customer Sentiment ───
  const sentiment = sheets.customerSentiment;
  if (sentiment.length > 0) {
    for (const row of sentiment) {
      const rooftop = findVal(row, "rooftop", "rooftop name", "rooftop_name", "dealership", "dealer", "name");
      const section = findVal(row, "section", "agent section", "agent_section", "agent type") || inferSection(row);
      if (!rooftop || !allData[rooftop]) continue;

      const sd = allData[rooftop].sectionData[section];
      if (sd) {
        const sentimentData: SentimentData = {
          angry: numVal(row, "angry", "sentiment angry"),
          happy: numVal(row, "happy", "sentiment happy"),
          neutral: numVal(row, "neutral", "sentiment neutral"),
          sad: numVal(row, "sad", "sentiment sad"),
        };
        if ((sentimentData.angry || 0) + (sentimentData.happy || 0) + (sentimentData.neutral || 0) + (sentimentData.sad || 0) > 0) {
          sd.sentiment = sentimentData;
        }
      }
    }
  }

  return {
    allData,
    campaignROI: sheets.campaignROI,
    campaignDetails: sheets.campaignDetails,
    beforeAfter: sheets.beforeAfter,
  };
}
