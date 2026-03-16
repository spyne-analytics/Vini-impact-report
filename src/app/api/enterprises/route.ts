import { NextResponse } from "next/server";
import { loadEnterprises, getAvailableMonths } from "@/lib/data-utils";

export async function GET() {
  const enterprises = loadEnterprises();
  const months = getAvailableMonths();
  return NextResponse.json({ enterprises, months });
}
