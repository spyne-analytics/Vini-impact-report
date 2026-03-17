import { NextRequest, NextResponse } from "next/server";
import { getCampaignROI, getCampaignDetails, getBeforeAfter } from "@/lib/data-utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sheet = searchParams.get("sheet");

  try {
    if (sheet === "campaignROI") {
      return NextResponse.json(await getCampaignROI());
    }
    if (sheet === "campaignDetails") {
      return NextResponse.json(await getCampaignDetails());
    }
    if (sheet === "beforeAfter") {
      return NextResponse.json(await getBeforeAfter());
    }

    // Return all additional sheet data
    const [campaignROI, campaignDetails, beforeAfter] = await Promise.all([
      getCampaignROI(),
      getCampaignDetails(),
      getBeforeAfter(),
    ]);

    return NextResponse.json({ campaignROI, campaignDetails, beforeAfter });
  } catch (err) {
    console.error("Failed to fetch sheet data:", err);
    return NextResponse.json({ error: "Failed to fetch sheet data" }, { status: 500 });
  }
}
