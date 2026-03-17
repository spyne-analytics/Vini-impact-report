import { NextResponse } from "next/server";
import { invalidateCache } from "@/lib/google-sheets";

export async function POST() {
  invalidateCache();
  return NextResponse.json({ success: true, message: "Cache invalidated. Next request will fetch fresh data from Google Sheets." });
}
