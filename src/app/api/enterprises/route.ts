import { NextResponse } from "next/server";
import { loadEnterprises, getAvailableMonths, getAvailableMonthsLive } from "@/lib/data-utils";

export async function GET() {
  const enterprises = loadEnterprises();

  // Try live months from Google Sheets, fall back to static
  let months: string[];
  try {
    months = await getAvailableMonthsLive();
    if (months.length === 0) months = getAvailableMonths();
  } catch {
    months = getAvailableMonths();
  }

  return NextResponse.json({ enterprises, months });
}
