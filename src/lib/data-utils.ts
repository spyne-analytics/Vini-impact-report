import fs from "fs";
import path from "path";
import { Enterprise, RooftopData, HeroData, HeroMonthly, SectionData, GroupReportData, OutcomeItem } from "./types";
import { ALL_DATA } from "./all-data";

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

function filterMonthlyData(
  monthly: { label: string; total_calls: number; qualified_calls: number; appointments: number }[],
  selectedMonth: string
): { label: string; total_calls: number; qualified_calls: number; appointments: number }[] {
  const sortedMonths = [...monthly].sort((a, b) => monthLabelToSortKey(a.label) - monthLabelToSortKey(b.label));
  const idx = sortedMonths.findIndex((m) => m.label === selectedMonth);
  if (idx === -1) return [];
  const start = Math.max(0, idx - 5);
  return sortedMonths.slice(start, idx + 1);
}

function getMonthData(
  monthly: { label: string; total_calls: number; qualified_calls: number; appointments: number }[],
  monthLabel: string
) {
  return monthly.find((m) => m.label === monthLabel) || null;
}

function getPreviousMonthLabel(monthLabel: string): string {
  const { month, year } = parseMonthLabel(monthLabel);
  const monthNum = MONTH_ORDER[month] || 1;
  const prevMonthNum = monthNum === 1 ? 12 : monthNum - 1;
  const prevYear = monthNum === 1 ? year - 1 : year;
  const prevMonthName = Object.entries(MONTH_ORDER).find(([, v]) => v === prevMonthNum)?.[0] || "Jan";
  return `${prevMonthName} '${String(prevYear).slice(2)}`;
}

export function getRooftopDataForMonth(
  rooftopName: string,
  monthLabel: string
): RooftopData | null {
  const data = ALL_DATA[rooftopName];
  if (!data) return null;

  const heroMonthly = data.heroMonthly;
  const monthEntry = heroMonthly.find((m) => {
    const { month: selMon } = parseMonthLabel(monthLabel);
    return m.label === selMon;
  });

  if (!monthEntry) {
    // Check if any section has data for this month
    let hasData = false;
    for (const sd of Object.values(data.sectionData)) {
      if (sd.monthly.some((m) => m.label === monthLabel)) {
        hasData = true;
        break;
      }
    }
    if (!hasData) return null;
  }

  // Filter section monthly data to last 6 months up to selected
  const filteredSectionData: Record<string, SectionData> = {};
  for (const [key, sd] of Object.entries(data.sectionData)) {
    const filtered = filterMonthlyData(sd.monthly, monthLabel);
    const currentMonth = getMonthData(sd.monthly, monthLabel);
    if (currentMonth) {
      filteredSectionData[key] = {
        ...sd,
        totalCalls: currentMonth.total_calls,
        qualifiedCalls: currentMonth.qualified_calls,
        appointments: currentMonth.appointments,
        qualRate: currentMonth.total_calls > 0
          ? Math.round((currentMonth.qualified_calls / currentMonth.total_calls) * 1000) / 10
          : 0,
        monthly: filtered,
      };
    } else {
      filteredSectionData[key] = { ...sd, monthly: filtered };
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
  const enterprises = loadEnterprises();
  const enterprise = enterprises.find((e) => e.name === enterpriseName);
  if (!enterprise) return null;

  const validRooftops = enterprise.rooftops.filter((r) => ALL_DATA[r]);
  if (validRooftops.length === 0) return null;

  // Aggregate hero data
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
    const r = ALL_DATA[name];

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

      // Aggregate monthly data
      for (const m of sd.monthly) {
        const existing = agg.monthly.find((x) => x.label === m.label);
        if (existing) {
          existing.total_calls += m.total_calls;
          existing.qualified_calls += m.qualified_calls;
          existing.appointments += m.appointments;
        } else {
          agg.monthly.push({ ...m });
        }
      }

      // Aggregate outcomes
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

  // Finalize section aggregations
  for (const [, sd] of Object.entries(aggSectionData)) {
    sd.qualRate = sd.totalCalls > 0
      ? Math.round((sd.qualifiedCalls / sd.totalCalls) * 1000) / 10
      : 0;
    sd.resRate = sd.totalCalls > 0
      ? Math.round((sd.queryResolved / sd.totalCalls) * 1000) / 10
      : 0;
    sd.monthly.sort((a, b) => monthLabelToSortKey(a.label) - monthLabelToSortKey(b.label));
  }

  // Convert outcome maps to sorted arrays
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

  // Sort heroMonthly
  const heroMonthlyArr = [...monthlyMap.values()];
  const heroMonthOrder = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  heroMonthlyArr.sort((a, b) => {
    const ai = heroMonthOrder.indexOf(a.label);
    const bi = heroMonthOrder.indexOf(b.label);
    return ai - bi;
  });

  // Determine period
  const allMonths = new Set<string>();
  for (const r of validRooftops) {
    const data = ALL_DATA[r];
    for (const sd of Object.values(data.sectionData)) {
      for (const m of sd.monthly) allMonths.add(m.label);
    }
  }
  const sortedMonths = [...allMonths].sort((a, b) => monthLabelToSortKey(a) - monthLabelToSortKey(b));
  const period = sortedMonths.length > 0
    ? `${sortedMonths[0]} \u2014 ${sortedMonths[sortedMonths.length - 1]}`
    : "";

  const maxMonths = Math.max(...validRooftops.map((r) => ALL_DATA[r].monthsActive));

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
