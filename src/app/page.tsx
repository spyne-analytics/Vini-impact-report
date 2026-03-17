"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import ConfigRibbon from "@/components/ConfigRibbon";
import ReportView from "@/components/ReportView";
import { C, font, mono, serif } from "@/lib/colors";
import type { Enterprise, ReportConfig, RooftopData, GroupReportData, SheetExtraData } from "@/lib/types";

const DEFAULT_CONFIG: ReportConfig = {
  enterprise: "",
  viewMode: "group",
  rooftop: "",
  reportMonth: "",
  insights: ["", "", ""],
};

export default function HomePage() {
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [config, setConfig] = useState<ReportConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const [rooftopData, setRooftopData] = useState<RooftopData | null>(null);
  const [groupData, setGroupData] = useState<GroupReportData | null>(null);
  const [fromDrillDown, setFromDrillDown] = useState(false);
  const [sheetExtra, setSheetExtra] = useState<SheetExtraData | null>(null);

  const reportRef = useRef<HTMLDivElement>(null);

  // Load enterprises on mount
  useEffect(() => {
    fetch("/api/enterprises")
      .then((r) => r.json())
      .then((data) => {
        setEnterprises(data.enterprises);
        setMonths(data.months);
        if (data.enterprises.length > 0) {
          const first = data.enterprises[0];
          setConfig((c) => ({
            ...c,
            enterprise: first.name,
            rooftop: first.rooftops[0] || "",
            viewMode: first.rooftops.length >= 2 ? "group" : "rooftop",
          }));
        }
      });
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!config.enterprise) return;
    setLoading(true);
    setGenerated(false);
    setFromDrillDown(false);

    try {
      // Fetch report data and extra sheet data in parallel
      const sheetPromise = fetch("/api/sheet-data").then((r) => r.json()).catch(() => null);

      if (config.viewMode === "group") {
        const params = new URLSearchParams({ enterprise: config.enterprise });
        if (config.reportMonth) params.set("month", config.reportMonth);
        const res = await fetch(`/api/group-report-data?${params}`);
        const data = await res.json();
        setGroupData(data);
        setRooftopData(null);
      } else {
        const params = new URLSearchParams({ rooftop: config.rooftop });
        if (config.reportMonth) params.set("month", config.reportMonth);
        const res = await fetch(`/api/report-data?${params}`);
        const data = await res.json();
        setRooftopData(data);
        setGroupData(null);
      }

      const extra = await sheetPromise;
      if (extra && !extra.error) setSheetExtra(extra);
      setGenerated(true);
    } catch (e) {
      console.error("Failed to load report data:", e);
    } finally {
      setLoading(false);
    }
  }, [config]);

  const handleDrillDown = useCallback(async (rooftopName: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ rooftop: rooftopName });
      if (config.reportMonth) params.set("month", config.reportMonth);
      const res = await fetch(`/api/report-data?${params}`);
      const data = await res.json();
      setRooftopData(data);
      setConfig((c) => ({ ...c, viewMode: "rooftop", rooftop: rooftopName }));
      setFromDrillDown(true);
    } catch (e) {
      console.error("Drill-down failed:", e);
    } finally {
      setLoading(false);
    }
  }, [config.reportMonth]);

  const handleBackToGroup = useCallback(() => {
    setConfig((c) => ({ ...c, viewMode: "group" }));
    setFromDrillDown(false);
    setRooftopData(null);
  }, []);

  const handleRefresh = useCallback(async () => {
    await fetch("/api/refresh", { method: "POST" }).catch(() => {});
    if (generated) handleGenerate();
  }, [generated, handleGenerate]);

  const handleReset = useCallback(() => {
    setConfig(DEFAULT_CONFIG);
    setGenerated(false);
    setRooftopData(null);
    setGroupData(null);
    setFromDrillDown(false);
    setSheetExtra(null);
    if (enterprises.length > 0) {
      const first = enterprises[0];
      setConfig({
        ...DEFAULT_CONFIG,
        enterprise: first.name,
        rooftop: first.rooftops[0] || "",
        viewMode: first.rooftops.length >= 2 ? "group" : "rooftop",
      });
    }
  }, [enterprises]);

  const handleDownloadPDF = useCallback(async () => {
    const el = reportRef.current;
    if (!el) return;

    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    // Hide no-print elements
    const noPrintEls = el.querySelectorAll<HTMLElement>(".no-print");
    noPrintEls.forEach((e) => (e.style.display = "none"));

    const canvas = await html2canvas(el, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: C.paper,
      logging: false,
    });

    // Restore no-print elements
    noPrintEls.forEach((e) => (e.style.display = ""));

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF("p", "mm", [imgWidth, imgHeight]);

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      imgWidth,
      imgHeight
    );

    const safeName = (config.viewMode === "group" ? config.enterprise : config.rooftop)
      .replace(/[^a-zA-Z0-9]/g, "_");
    const prefix = config.viewMode === "group" ? "Vini_AI_Group_Report" : "Vini_AI_Report";
    pdf.save(`${prefix}_${safeName}.pdf`);
  }, [config]);

  return (
    <div style={{ fontFamily: font, background: C.paper, color: C.ink, minHeight: "100vh" }}>
      <ConfigRibbon
        enterprises={enterprises}
        months={months}
        config={config}
        onConfigChange={setConfig}
        onGenerate={handleGenerate}
        onReset={handleReset}
        onRefresh={handleRefresh}
        loading={loading}
      />

      <div ref={reportRef}>
        {generated ? (
          <>
            {/* Download button */}
            <div className="no-print" style={{ maxWidth: 880, margin: "0 auto", padding: "16px 56px 0", display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={handleDownloadPDF}
                style={{
                  fontFamily: mono,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: C.teal,
                  color: "#fff",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download PDF
              </button>
            </div>

            <main style={{ maxWidth: 880, margin: "0 auto", padding: "0 56px 56px" }}>
              <ReportView
                viewMode={config.viewMode}
                rooftopData={rooftopData}
                groupData={groupData}
                rooftopName={config.rooftop}
                insights={config.insights}
                onDrillDown={handleDrillDown}
                onBackToGroup={handleBackToGroup}
                fromDrillDown={fromDrillDown}
                sheetExtra={sheetExtra}
              />

              {/* Footer */}
              <div className="no-print" style={{ marginTop: 28, padding: "16px 0", borderTop: `1.5px solid ${C.rule}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ fontFamily: font, fontWeight: 700, fontSize: 13 }}>Vini AI &mdash; Impact Report</div>
                <div style={{ fontFamily: mono, fontSize: 10, color: C.muted }}>Questions? Reach your Vini success team</div>
              </div>
            </main>

            {/* Print footer */}
            <div className="print-footer" style={{ display: "none" }}>
              <div style={{ fontFamily: font, fontWeight: 700, fontSize: 9, color: C.ink }}>Vini AI &mdash; Impact Report</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: C.muted }}>Questions? Reach your Vini success team</div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div style={{ maxWidth: 880, margin: "0 auto", padding: "120px 56px", textAlign: "center" }}>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: C.teal, marginBottom: 16, fontWeight: 500 }}>Vini AI</div>
            <h1 style={{ fontFamily: serif, fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 12 }}>Monthly Impact Report</h1>
            <p style={{ fontFamily: serif, fontSize: 14, color: C.muted, lineHeight: 1.6, maxWidth: 440, margin: "0 auto 32px" }}>
              Select an enterprise and configure your report settings above, then click <strong style={{ color: C.ink }}>Generate Report</strong> to view your impact analysis.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              {[
                { num: "01", label: "Select Enterprise" },
                { num: "02", label: "Choose View Mode" },
                { num: "03", label: "Pick Report Month" },
                { num: "04", label: "Generate Report" },
              ].map((step) => (
                <div key={step.num} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 600, color: C.teal, letterSpacing: "0.15em" }}>{step.num}</span>
                  <span style={{ fontFamily: mono, fontSize: 10, color: C.muted }}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
