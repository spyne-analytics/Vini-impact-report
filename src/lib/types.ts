export interface SentimentData {
  angry?: number;
  happy?: number;
  neutral?: number;
  sad?: number;
}

export interface MonthlyData {
  label: string;
  total_calls: number;
  qualified_calls: number;
  appointments: number;
  callbacks?: number;
  warm_transfers?: number;
  query_resolved?: number;
  during_hours?: number;
  after_hours?: number;
  avg_duration?: number;
}

export interface SectionData {
  totalCalls: number;
  qualifiedCalls: number;
  queryResolved: number;
  callbacks: number;
  warmTransfers: number;
  appointments: number;
  routedToTeam: number;
  avgScore: number | null;
  avgDuration: number;
  resRate: number;
  qualRate: number;
  duringHours: number;
  afterHours: number;
  sentiment: SentimentData | null;
  monthly: MonthlyData[];
}

export interface HeroMonthly {
  label: string;
  calls: number;
  qual: number;
  appts: number;
  routed: number;
}

export interface HeroData {
  totalCalls: number;
  qualifiedCalls: number;
  appointments: number;
  routedToTeam: number;
  qualRate: number;
  afterHoursShare: number;
  salesAppts: number;
  serviceAppts: number;
  callbacks: number;
  warmTransfers: number;
}

export interface OutcomeItem {
  label: string;
  value: number;
}

export interface RooftopData {
  sections: string[];
  period: string;
  monthsActive: number;
  hero: HeroData;
  heroMonthly: HeroMonthly[];
  sectionData: Record<string, SectionData>;
  outcomesByAgent: Record<string, OutcomeItem[] | null>;
}

export type AllData = Record<string, RooftopData>;

export interface Enterprise {
  name: string;
  rooftops: string[];
}

export interface ReportConfig {
  enterprise: string;
  viewMode: "group" | "rooftop";
  rooftop: string;
  reportMonth: string;
  insights: [string, string, string];
}

export interface GroupReportData {
  enterprise: string;
  rooftops: string[];
  aggregatedHero: HeroData;
  aggregatedHeroMonthly: HeroMonthly[];
  rooftopBreakdown: {
    name: string;
    totalCalls: number;
    qualifiedCalls: number;
    appointments: number;
    qualRate: number;
  }[];
  sections: string[];
  sectionData: Record<string, SectionData>;
  outcomesByAgent: Record<string, OutcomeItem[] | null>;
  period: string;
  monthsActive: number;
}

/** Additional sheet data from Google Sheets */
export interface SheetExtraData {
  campaignROI: Record<string, string>[];
  campaignDetails: Record<string, string>[];
  beforeAfter: Record<string, string>[];
}
