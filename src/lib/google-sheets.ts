/**
 * Google Sheets CSV fetcher and parser.
 * Fetches published Google Sheets as CSV and parses into typed row arrays.
 */

const SPREADSHEET_BASE =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhQ-3CsamygPv-uwT3hEyEnBQcC0aUSpDkGNH-AUaKoBu29-OXm8pOt56AI-h1kqvVswkxGSziHqd8";

export const SHEET_GIDS = {
  dailyMetrics: "0",
  campaignROI: "700216614",
  campaignDetails: "423561413",
  customerSentiment: "1534677174",
  callOutcomes: "2088778796",
  beforeAfter: "155325360",
} as const;

export type SheetName = keyof typeof SHEET_GIDS;

function csvUrl(gid: string): string {
  return `${SPREADSHEET_BASE}/pub?output=csv&gid=${gid}`;
}

/**
 * Parse CSV text into array of objects keyed by header row.
 * Handles quoted fields, commas inside quotes, and newlines in quotes.
 */
export function parseCSV(text: string): Record<string, string>[] {
  const lines: string[][] = [];
  let current: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < text.length && text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        current.push(field.trim());
        field = "";
      } else if (ch === "\n" || (ch === "\r" && text[i + 1] === "\n")) {
        current.push(field.trim());
        field = "";
        if (current.some((c) => c.length > 0)) lines.push(current);
        current = [];
        if (ch === "\r") i++;
      } else {
        field += ch;
      }
    }
  }
  // Last field
  current.push(field.trim());
  if (current.some((c) => c.length > 0)) lines.push(current);

  if (lines.length < 2) return [];

  const headers = lines[0].map((h) => h.replace(/\s+/g, " ").trim());
  const rows: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const row: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = lines[i][j] || "";
    }
    rows.push(row);
  }
  return rows;
}

// In-memory cache: sheet data with TTL
interface CacheEntry {
  data: Record<string, string>[];
  fetchedAt: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch a single sheet as parsed CSV rows. Uses server-side cache.
 */
export async function fetchSheet(
  sheetName: SheetName
): Promise<Record<string, string>[]> {
  const gid = SHEET_GIDS[sheetName];
  const cached = cache.get(gid);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached.data;
  }

  const url = csvUrl(gid);
  const res = await fetch(url, {
    next: { revalidate: 300 }, // Next.js ISR: revalidate every 5 min
  });

  if (!res.ok) {
    console.error(`Failed to fetch sheet ${sheetName} (gid=${gid}): ${res.status}`);
    return cached?.data || [];
  }

  const text = await res.text();
  const data = parseCSV(text);
  cache.set(gid, { data, fetchedAt: Date.now() });
  return data;
}

/**
 * Fetch all sheets in parallel. Returns a map of sheet name to rows.
 */
export async function fetchAllSheets(): Promise<
  Record<SheetName, Record<string, string>[]>
> {
  const entries = Object.keys(SHEET_GIDS) as SheetName[];
  const results = await Promise.all(entries.map((name) => fetchSheet(name)));
  const out = {} as Record<SheetName, Record<string, string>[]>;
  entries.forEach((name, i) => {
    out[name] = results[i];
  });
  return out;
}

/**
 * Invalidate cache for all sheets (force fresh fetch next time).
 */
export function invalidateCache(): void {
  cache.clear();
}

/**
 * Helper: get a numeric value from a row, defaulting to 0.
 */
export function num(row: Record<string, string>, ...keys: string[]): number {
  for (const key of keys) {
    const val = row[key];
    if (val !== undefined && val !== "") {
      const n = Number(val.replace(/[,%$]/g, ""));
      if (!isNaN(n)) return n;
    }
  }
  return 0;
}

/**
 * Helper: get string value from a row with fallback keys.
 */
export function str(row: Record<string, string>, ...keys: string[]): string {
  for (const key of keys) {
    const val = row[key];
    if (val !== undefined && val !== "") return val;
  }
  return "";
}

/**
 * Normalize column header by lowercasing and removing extra spaces.
 */
export function normalizeHeader(h: string): string {
  return h.toLowerCase().replace(/[_\-\s]+/g, " ").trim();
}

/**
 * Find a column in a row by trying multiple possible header names.
 */
export function findColumn(
  row: Record<string, string>,
  ...candidates: string[]
): string | undefined {
  const normalizedKeys = new Map<string, string>();
  for (const key of Object.keys(row)) {
    normalizedKeys.set(normalizeHeader(key), key);
  }
  for (const candidate of candidates) {
    const norm = normalizeHeader(candidate);
    const actual = normalizedKeys.get(norm);
    if (actual !== undefined) return row[actual];
    // Also try partial match
    for (const [normKey, actualKey] of normalizedKeys) {
      if (normKey.includes(norm) || norm.includes(normKey)) {
        return row[actualKey];
      }
    }
  }
  return undefined;
}
