import { NextRequest, NextResponse } from "next/server";
import { getGroupReportData, getGroupReportDataLive } from "@/lib/data-utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const enterprise = searchParams.get("enterprise");
  const month = searchParams.get("month");

  if (!enterprise) {
    return NextResponse.json({ error: "Missing enterprise parameter" }, { status: 400 });
  }

  // Try live data from Google Sheets first, fall back to static
  let data;
  try {
    data = await getGroupReportDataLive(enterprise, month || undefined);
  } catch {
    data = null;
  }

  // Fallback to static data
  if (!data) {
    data = getGroupReportData(enterprise, month || undefined);
  }

  if (!data) {
    return NextResponse.json({ error: "Enterprise not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
