import { NextRequest, NextResponse } from "next/server";
import { getRooftopData, getRooftopDataForMonth } from "@/lib/data-utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rooftop = searchParams.get("rooftop");
  const month = searchParams.get("month");

  if (!rooftop) {
    return NextResponse.json({ error: "Missing rooftop parameter" }, { status: 400 });
  }

  const data = month ? getRooftopDataForMonth(rooftop, month) : getRooftopData(rooftop);

  if (!data) {
    return NextResponse.json({ error: "Rooftop not found or no data for selected month" }, { status: 404 });
  }

  return NextResponse.json(data);
}
