import fs from "fs";
import path from "path";
import { Enterprise, RooftopData, HeroData, HeroMonthly, SectionData, GroupReportData, OutcomeItem, MonthlyData } from "./types";
import { ALL_DATA } from "./all-data";
import { buildAllDataFromSheets } from "./sheet-data-builder";

// ─── Cached live data from Google Sheets ───
let liveData: Awaited<ReturnType<typeof buildAllDataFromSheets>> | null = null;
let liveDataFetchedAt = 0;
const LIVE_DATA_TTL_MS = 5 * 60 * 1000; // 5 minutes

async function getLiveData() {
  if (liveData && Date.now() - liveDataFetchedAt < LIVE_DATA_TTL_MS) {
    return liveData;
  }
  try {
    liveData = await buildAllDataFromSheets();
    liveDataFetchedAt = Date.now();
    return liveData;
  } catch (err) {
    console.error("Failed to fetch live data from Google Sheets:", err);
    return null;
  }
}

/**
 * Get the active data source: live sheets if available, otherwise static.
 */
async function getActiveData(): Promise<Record<string, RooftopData>> {
  const live = await getLiveData();
  if (live && Object.keys(live.allData).length > 0) {
    return live.allData;
  }
  return ALL_DATA;
}

/**
 * Get campaign ROI data (only from live sheets).
 */
export async function getCampaignROI(): Promise<Record<string, string>[]> {
  const live = await getLiveData();
  return live?.campaignROI || [];
}

/**
 * Get campaign details (only from live sheets).
 */
export async function getCampaignDetails(): Promise<Record<string, string>[]> {
  const live = await getLiveData();
  return live?.campaignDetails || [];
}

/**
 * Get before-after data (only from live sheets).
 */
export async function getBeforeAfter(): Promise<Record<string, string>[]> {
  const live = await getLiveData();
  return live?.beforeAfter || [];
}

export function loadEnterprises(): Enterprise[] {
  const csvPath = path.join(process.cwd(), "data", "enterprises.csv");
  const csv = fs.readFileSync(csvPath, "utf-8");
  const lines = csv.trim().split("\n").slice(1);

  const map = new Map<string, string[]>();
  for (const line of lines) {
    const match = line.match(/^([^,]+),\"?([^"]+)\"?$/);
    if (!match) continue;
    const enterprise = match[1].trim();
    const rooftop = match[2].trim();
    if (!map.has(enterprise)) map.set(enterprise, []);
    map.get(enterprise)!.push(rooftop);
  }

  return Array.from(map.entries())
    .map(([name, rooftops]) => ({ name, rooftops: rooftops.sort() }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getRooftopData(rooftopName: string): RooftopData | null {
  return ALL_DATA[rooftopName] || null;
}

export async function getRooftopDataLive(rooftopName: string): Promise<RooftopData | null> {
  const data = await getActiveData();
  return data[rooftopName] || null;
}

const MONTH_ORDER: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

function parseMonthLabel(label: string): { month: string; year: number } {
  const parts = label.split(" '");
  return { month: parts[0], year: 2000 + parseInt(parts[1] || "26") };
}

function monthLabelToSortKey(label: string): number {
  const { month, year } = parseMonthLabel(label);
  return year * 100 + (MONTH_ORDER[month] || 0);
}

export function getAvailableMonths(): string[] {
  const allMonths = new Set<string>();
  for (const rooftop of Object.values(ALL_DATA)) {
    for (const section of Object.values(rooftop.sectionData)) {
      for (const m of section.monthly) {
        allMonths.add(m.label);
      }
    }
  }
  return [...allMonths].sort((a, b) => monthLabelToSortKey(a) - monthLabelToSortKey(b));
}

export async function getAvailableMonthsLive(): Promise<string[]> {
  const data = await getActiveData();
  const allMonths = new Set<string>();
  for (const rooftop of Object.values(data)) {
    for (const section of Object.values(rooftop.sectionData)) {
      for (const m of section.monthly) {
        allMonths.add(m.label);
      }
    }
  }
  return [...allMonths].sort((a, b) => monthLabelToSortKey(a) - monthLabelToSortKey(b));
}

function filterMonthlyData(
  monthly: MonthlyData[],
  selectedMonth: string
): MonthlyData[] {
  const sortedMonths = [...monthly].sort((a, b) => monthLabelToSortKey(a.label) - monthLabelToSortKey(b.label));
  const idx = sortedMonths.findIndex((m) => m.label === selectedMonth);
  if (idx === -1) return [];
  const start = Math.max(0, idx - 5);
  return sortedMonths.slice(start, idx + 1);
}

function getMonthData(
  monthly: MonthlyData[],
  monthLabel: string
) {
  return monthly.find((m) => m.label === monthLabel) || null;
}

export function getRooftopDataForMonth(
  rooftopName: string,
  monthLabel: string
): RooftopData | null {
  return getRooftopDataForMonthFromSource(ALL_DATA, rooftopName, monthLabel);
}

export async function getRooftopDataForMonthLive(
  rooftopName: string,
  monthLabel: string
): Promise<RooftopData | null> {
  const data = await getActiveData();
  return getRooftopDataForMonthFromSource(data, rooftopName, monthLabel);
}

function getRooftopDataForMonthFromSource(
  source: Record<string, RooftopData>,
  rooftopName: string,
  monthLabel: string
): RooftopData | null {
  const data = source[rooftopName];
  if (!data) return null;

  const heroMonthly = data.heroMonthly;
  const monthEntry = heroMonthly.find((m) => {
    const { month: selMon } = parseMonthLabel(monthLabel);
    return m.label === selMon;
  });

  if (!monthEntry) {
    let hasData = false;
    for (const sd of Object.values(data.sectionData)) {
      if (sd.monthly.some((m) => m.label === monthLabel)) {
        hasData = true;
        break;
      }
    }
    if (!hasData) return null;
  }

  const filteredSectionData: Record<string, SectionData> = {};
  for (const [key, sd] of Object.entries(data.sectionData)) {
    const filtered = filterMonthlyData(sd.monthly, monthLabel);
    const currentMonth = getMonthData(sd.monthly, monthLabel);
    if (currentMonth) {
      const totalCalls = currentMonth.total_calls || 0;
      const qualifiedCalls = currentMonth.qualified_calls || 0;
      const callbacks = currentMonth.callbacks ?? sd.callbacks;
      const warmTransfers = currentMonth.warm_transfers ?? sd.warmTransfers;
      const queryResolved = currentMonth.query_resolved ?? sd.queryResolved;
      const duringHours = currentMonth.during_hours ?? sd.duringHours;
      const afterHours = currentMonth.after_hours ?? sd.afterHours;
      const avgDuration = currentMonth.avg_duration ?? sd.avgDuration;

      filteredSectionData[key] = {
        ...sd,
        totalCalls,
        qualifiedCalls,
        appointments: currentMonth.appointments || 0,
        callbacks,
        warmTransfers,
        routedToTeam: callbacks + warmTransfers,
        queryResolved,
        duringHours,
        afterHours,
        avgDuration,
        qualRate: totalCalls > 0
          ? Math.round((qualifiedCalls / totalCalls) * 1000) / 10
          : 0,
        resRate: totalCalls > 0
          ? Math.round((queryResolved / totalCalls) * 1000) / 10
          : 0,
        monthly: filtered,
      };
    } else {
      filteredSectionData[key] = {
        ...sd,
        totalCalls: 0, qualifiedCalls: 0, appointments: 0,
        routedToTeam: 0, callbacks: 0, warmTransfers: 0,
        queryResolved: 0, duringHours: 0, afterHours: 0,
        qualRate: 0, resRate: 0, avgDuration: 0,
        monthly: filtered,
      };
    }
  }

  return {
    ...data,
    sectionData: filteredSectionData,
  };
}

export function getGroupReportData(
  enterpriseName: string,
  monthLabel?: string
): GroupReportData | null {
  return getGroupReportDataFromSource(ALL_DATA, enterpriseName, monthLabel);
}

export async function getGroupReportDataLive(
  enterpriseName: string,
  monthLabel?: string
): Promise<GroupReportData | null> {
  const data = await getActiveData();
  return getGroupReportDataFromSource(data, enterpriseName, monthLabel);
}

function getGroupReportDataFromSource(
  source: Record<string, RooftopData>,
  enterpriseName: string,
  monthLabel?: string
): GroupReportData | null {
  const enterprises = loadEnterprises();
  const enterprise = enterprises.find((e) => e.name === enterpriseName);
  if (!enterprise) return null;

  const validRooftops = enterprise.rooftops.filter((r) => source[r]);
  if (validRooftops.length === 0) return null;

  const aggHero: HeroData = {
    totalCalls: 0, qualifiedCalls: 0, appointments: 0, routedToTeam: 0,
    qualRate: 0, afterHoursShare: 0, salesAppts: 0, serviceAppts: 0,
    callbacks: 0, warmTransfers: 0,
  };

  let totalAfterHours = 0;
  let totalForAfterHoursCalc = 0;

  const rooftopBreakdown: GroupReportData["rooftopBreakdown"] = [];
  const allSections = new Set<string>();
  const aggSectionData: Record<string, SectionData> = {};
  const aggOutcomes: Record<string, Map<string, number>> = {};
  const monthlyMap = new Map<string, HeroMonthly>();

  for (const name of validRooftops) {
    const r = source[name];

    aggHero.totalCalls += r.hero.totalCalls;
    aggHero.qualifiedCalls += r.hero.qualifiedCalls;
    aggHero.appointments += r.hero.appointments;
    aggHero.routedToTeam += r.hero.routedToTeam;
    aggHero.salesAppts += r.hero.salesAppts;
    aggHero.serviceAppts += r.hero.serviceAppts;
    aggHero.callbacks += r.hero.callbacks;
    aggHero.warmTransfers += r.hero.warmTransfers;
    totalAfterHours += r.hero.totalCalls * (r.hero.afterHoursShare / 100);
    totalForAfterHoursCalc += r.hero.totalCalls;

    rooftopBreakdown.push({
      name,
      totalCalls: r.hero.totalCalls,
      qualifiedCalls: r.hero.qualifiedCalls,
      appointments: r.hero.appointments,
      qualRate: r.hero.qualRate,
    });

    for (const m of r.heroMonthly) {
      const existing = monthlyMap.get(m.label);
      if (existing) {
        existing.calls += m.calls;
        existing.qual += m.qual;
        existing.appts += m.appts;
        existing.routed += m.routed;
      } else {
        monthlyMap.set(m.label, { ...m });
      }
    }

    for (const s of r.sections) {
      allSections.add(s);
      const sd = r.sectionData[s];
      if (!sd) continue;

      if (!aggSectionData[s]) {
        aggSectionData[s] = {
          totalCalls: 0, qualifiedCalls: 0, queryResolved: 0,
          callbacks: 0, warmTransfers: 0, appointments: 0,
          routedToTeam: 0, avgScore: null, avgDuration: 0,
          resRate: 0, qualRate: 0, duringHours: 0, afterHours: 0,
          sentiment: null, monthly: [],
        };
      }

      const agg = aggSectionData[s];
      agg.totalCalls += sd.totalCalls;
      agg.qualifiedCalls += sd.qualifiedCalls;
      agg.queryResolved += sd.queryResolved;
      agg.callbacks += sd.callbacks;
      agg.warmTransfers += sd.warmTransfers;
      agg.appointments += sd.appointments;
      agg.routedToTeam += sd.routedToTeam;
      agg.duringHours += sd.duringHours;
      agg.afterHours += sd.afterHours;

      for (const m of sd.monthly) {
        const existing = agg.monthly.find((x) => x.label === m.label);
        if (existing) {
          existing.total_calls += m.total_calls;
          existing.qualified_calls += m.qualified_calls;
          existing.appointments += m.appointments;
          existing.callbacks = (existing.callbacks || 0) + (m.callbacks || 0);
          existing.warm_transfers = (existing.warm_transfers || 0) + (m.warm_transfers || 0);
          existing.query_resolved = (existing.query_resolved || 0) + (m.query_resolved || 0);
          existing.during_hours = (existing.during_hours || 0) + (m.during_hours || 0);
          existing.after_hours = (existing.after_hours || 0) + (m.after_hours || 0);
        } else {
          agg.monthly.push({ ...m });
        }
      }

      const outcomes = r.outcomesByAgent?.[s];
      if (outcomes) {
        if (!aggOutcomes[s]) aggOutcomes[s] = new Map();
        for (const o of outcomes) {
          aggOutcomes[s].set(o.label, (aggOutcomes[s].get(o.label) || 0) + o.value);
        }
      }
    }
  }

  aggHero.qualRate = aggHero.totalCalls > 0
    ? Math.round((aggHero.qualifiedCalls / aggHero.totalCalls) * 1000) / 10
    : 0;
  aggHero.afterHoursShare = totalForAfterHoursCalc > 0
    ? Math.round((totalAfterHours / totalForAfterHoursCalc) * 1000) / 10
    : 0;

  for (const [, sd] of Object.entries(aggSectionData)) {
    sd.qualRate = sd.totalCalls > 0
      ? Math.round((sd.qualifiedCalls / sd.totalCalls) * 1000) / 10
      : 0;
    sd.resRate = sd.totalCalls > 0
      ? Math.round((sd.queryResolved / sd.totalCalls) * 1000) / 10
      : 0;
    sd.monthly.sort((a, b) => monthLabelToSortKey(a.label) - monthLabelToSortKey(b.label));
  }

  const outcomesByAgent: Record<string, OutcomeItem[] | null> = {};
  for (const s of allSections) {
    const map = aggOutcomes[s];
    if (map && map.size > 0) {
      outcomesByAgent[s] = [...map.entries()]
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 8);
    } else {
      outcomesByAgent[s] = null;
    }
  }

  const heroMonthlyArr = [...monthlyMap.values()];
  const heroMonthOrder = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  heroMonthlyArr.sort((a, b) => {
    const ai = heroMonthOrder.indexOf(a.label);
    const bi = heroMonthOrder.indexOf(b.label);
    return ai - bi;
  });

  const allMonths = new Set<string>();
  for (const r of validRooftops) {
    const data = source[r];
    for (const sd of Object.values(data.sectionData)) {
      for (const m of sd.monthly) allMonths.add(m.label);
    }
  }
  const sortedMonths = [...allMonths].sort((a, b) => monthLabelToSortKey(a) - monthLabelToSortKey(b));
  const period = sortedMonths.length > 0
    ? `${sortedMonths[0]} \u2014 ${sortedMonths[sortedMonths.length - 1]}`
    : "";

  const maxMonths = Math.max(...validRooftops.map((r) => source[r].monthsActive));

  return {
    enterprise: enterpriseName,
    rooftops: validRooftops,
    aggregatedHero: aggHero,
    aggregatedHeroMonthly: heroMonthlyArr,
    rooftopBreakdown: rooftopBreakdown.sort((a, b) => b.totalCalls - a.totalCalls),
    sections: [...allSections].sort(),
    sectionData: aggSectionData,
    outcomesByAgent,
    period,
    monthsActive: maxMonths,
  };
}
