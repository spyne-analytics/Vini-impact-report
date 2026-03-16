"use client";

import { useState, useEffect } from "react";
import {
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  ComposedChart, Area, Line, Bar, LabelList,
} from "recharts";
import { C, font, mono, serif } from "@/lib/colors";
import type {
  RooftopData, HeroData, HeroMonthly, SectionData, OutcomeItem,
  GroupReportData,
} from "@/lib/types";

/* ═══ SUB-COMPONENTS ═══ */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setV(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(16px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
      {children}
    </div>
  );
}

function MiniBarSpark({ data, dataKey, color, count = 6 }: { data: HeroMonthly[]; dataKey: keyof HeroMonthly; color: string; count?: number }) {
  const slice = data.slice(-count);
  const max = Math.max(...slice.map((d) => (d[dataKey] as number) || 0), 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 36 }}>
      {slice.map((d, i) => (
        <div key={i} style={{ width: 14, height: `${Math.max(((d[dataKey] as number) / max) * 100, 4)}%`, background: color, borderRadius: 2, opacity: 0.55 + (i / slice.length) * 0.45 }} />
      ))}
    </div>
  );
}

function CompBar({ segments, height = 8 }: { segments: { value: number; label: string; color: string }[]; height?: number }) {
  const total = segments.reduce((a, s) => a + s.value, 0);
  if (total === 0) return null;
  return (
    <div>
      <div style={{ display: "flex", height, borderRadius: height / 2, overflow: "hidden", width: "100%" }}>
        {segments.map((s, i) => <div key={i} style={{ width: `${(s.value / total) * 100}%`, background: s.color }} />)}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
        {segments.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: 2, background: s.color }} />
            <span style={{ fontFamily: mono, fontSize: 9, color: C.muted }}>
              {s.label}: <strong style={{ color: C.ink, fontWeight: 700 }}>{s.value.toLocaleString()}</strong> ({Math.round((s.value / total) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricPill({ value, label, highlight, accent }: { value: string | number; label: string; highlight?: boolean; accent?: string }) {
  const dark = highlight === true;
  const ac = accent || C.tealLight;
  return (
    <div style={{ background: dark ? C.ink : C.cream, border: `1px solid ${dark ? C.ink : C.rule}`, color: dark ? C.paper : C.ink, padding: "12px 16px", flex: "1 1 0", minWidth: 110 }}>
      <div style={{ fontFamily: font, fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 4, color: dark ? ac : C.ink }}>
        {typeof value === "number" ? value.toLocaleString() : value}
      </div>
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.85)" : C.muted, lineHeight: 1.4 }}>
        {label}
      </div>
    </div>
  );
}

function StageBlock({ num, title, accent, children, bar }: { num: string; title: string; accent: string; children: React.ReactNode; bar?: React.ReactNode }) {
  return (
    <div className="avoid-break" style={{ marginBottom: 10, padding: "14px 18px 12px", background: C.paper, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${accent}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>Stage {num}</span>
        <span style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: C.ink }}>{title}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{children}</div>
      {bar && <div style={{ marginTop: 14 }}>{bar}</div>}
    </div>
  );
}

const MONTH_ORDER: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

function TrendChart({ data, accent, fullMonths, isOutbound }: { data: SectionData["monthly"]; accent: string; fullMonths: string[]; isOutbound?: boolean }) {
  if (!data || data.length < 1) return null;
  const dataMap: Record<string, (typeof data)[0]> = {};
  data.forEach((d) => { dataMap[d.label] = d; });
  const months = fullMonths.length > 0 ? fullMonths : data.map((d) => d.label);
  const normalized = months.map((m) => dataMap[m] ? { ...dataMap[m] } : { label: m, total_calls: 0, qualified_calls: 0, appointments: 0 });
  if (normalized.length < 2) return null;
  const legends = isOutbound
    ? [{ label: "Contacts initiated", color: accent }, { label: "Contacted", color: C.green }, { label: "Appointments", color: C.ink }]
    : [{ label: "Conversations", color: accent }, { label: "Qualified", color: C.green }, { label: "Appointments", color: C.ink }];
  const tooltipNames = isOutbound ? ["Contacts", "Contacted", "Appointments"] : ["Conversations", "Qualified", "Appointments"];
  return (
    <div style={{ marginTop: 8, padding: "12px 18px 8px", background: C.cream, border: `1px solid ${C.rule}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted }}>Monthly Trend</div>
        <div style={{ display: "flex", gap: 14 }}>
          {legends.map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 10, height: 2, background: l.color, borderRadius: 1 }} />
              <span style={{ fontFamily: mono, fontSize: 7, color: C.muted }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 180, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={normalized} margin={{ top: 8, right: 8, left: -16, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.rule} vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 10, fontFamily: mono, fill: C.muted }} axisLine={{ stroke: C.rule }} tickLine={false} tickMargin={8} />
            <YAxis tick={{ fontSize: 9, fontFamily: mono, fill: C.muted }} axisLine={false} tickLine={false} tickMargin={4} />
            <Tooltip contentStyle={{ background: C.ink, border: "none", borderRadius: 6, fontFamily: mono, fontSize: 10, color: C.paper, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }} itemStyle={{ color: C.paper }} />
            <Area type="monotone" dataKey="total_calls" fill={accent} fillOpacity={0.06} stroke={accent} strokeWidth={2} name={tooltipNames[0]} dot={{ r: 3, fill: accent, stroke: C.paper, strokeWidth: 1.5 }} />
            <Line type="monotone" dataKey="qualified_calls" stroke={C.green} strokeWidth={2} name={tooltipNames[1]} dot={{ r: 2.5, fill: C.green, stroke: C.paper, strokeWidth: 1.5 }} />
            <Line type="monotone" dataKey="appointments" stroke={C.ink} strokeWidth={1.5} strokeDasharray="5 4" name={tooltipNames[2]} dot={{ r: 2, fill: C.ink, stroke: C.paper, strokeWidth: 1.5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function AgentSubsection({ title, direction, agentType, data, accent, fullMonths }: {
  title: string; direction: string; agentType: string; data: SectionData; accent: string; fullMonths: string[];
}) {
  const isSales = agentType === "Sales";
  const isInbound = direction === "Inbound";
  const accentLight = isSales ? C.tealLight : C.blueLight;
  const dirIcon = isInbound ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
  );
  const header = (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ width: 28, height: 28, borderRadius: 5, background: accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>{dirIcon}</div>
      <div>
        <div style={{ fontFamily: font, fontSize: 15, fontWeight: 800 }}>{title}</div>
        <div style={{ fontFamily: mono, fontSize: 8, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 1 }}>{direction} &middot; {agentType}</div>
      </div>
    </div>
  );

  if (isInbound) {
    const stage1 = "Inbound Capture";
    const stage2 = isSales ? "Buyer Intent Assessment" : "Service Intent Assessment";
    const stage3 = "Dealer Handoff";
    return (
      <div style={{ marginBottom: 28 }}>
        {header}
        <StageBlock num="1" title={stage1} accent={accent} bar={(data.duringHours > 0 || data.afterHours > 0) ? <CompBar segments={[{ value: data.duringHours, label: "During hours", color: accent }, { value: data.afterHours, label: "After hours", color: accentLight }]} /> : undefined}>
          <MetricPill highlight value={data.totalCalls} label="Total Conversations" accent={accentLight} />
          {data.duringHours > 0 && <MetricPill value={data.duringHours.toLocaleString()} label="During Hours" />}
          {data.afterHours > 0 && <MetricPill value={data.afterHours.toLocaleString()} label="After Hours" />}
          {data.avgDuration > 0 && <MetricPill value={`${data.avgDuration.toFixed(1)}m`} label="Avg Call Duration" />}
        </StageBlock>
        <StageBlock num="2" title={stage2} accent={accent}>
          <MetricPill highlight value={data.qualifiedCalls} label={isSales ? "Real Buyers Identified" : "Service-Ready Requests"} accent={accentLight} />
          <MetricPill value={`${data.qualRate}%`} label="Qualification Rate" />
          {data.queryResolved > 0 && <MetricPill value={data.queryResolved} label="Queries Resolved" />}
          {data.resRate > 0 && <MetricPill value={`${data.resRate}%`} label="Resolution Rate" />}
        </StageBlock>
        <StageBlock num="3" title={stage3} accent={accent}>
          <MetricPill highlight value={data.appointments} label="Appointments Booked" accent={C.green} />
          {data.routedToTeam > 0 && <MetricPill value={data.routedToTeam} label="Routed to Team" />}
        </StageBlock>
        <TrendChart data={data.monthly} accent={accent} fullMonths={fullMonths} />
      </div>
    );
  }

  // Outbound
  const contactRate = data.totalCalls > 0 ? Math.round((data.qualifiedCalls / data.totalCalls) * 100) : 0;
  const conversionRate = data.qualifiedCalls > 0 ? Math.round((data.appointments / data.qualifiedCalls) * 100) : 0;
  const campaignTypes = isSales
    ? ["Sales follow-up", "Equity mining", "Lease maturity"]
    : ["Recall notification", "Service reminder", "Customer follow-up"];
  return (
    <div style={{ marginBottom: 28 }}>
      {header}
      <div className="avoid-break" style={{ marginBottom: 10, padding: "14px 18px 14px", background: C.paper, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${accent}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>Phase 1</span>
          <span style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: C.ink }}>Campaign Outreach</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "stretch" }}>
          <MetricPill value="\u2014" label="Campaigns Run" />
          <MetricPill highlight value={data.totalCalls} label="Customer Contacts Initiated" accent={accentLight} />
          <div style={{ background: C.cream, border: `1px solid ${C.rule}`, padding: "12px 16px", flex: "1 1 0", minWidth: 160 }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>Campaigns Executed</div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {campaignTypes.map((c, i) => (
                <span key={i} style={{ fontFamily: mono, fontSize: 8, padding: "2px 8px", borderRadius: 3, background: `${accent}10`, color: accent, fontWeight: 500, border: `1px solid ${accent}20` }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="avoid-break" style={{ marginBottom: 10, padding: "14px 18px 14px", background: C.paper, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${accent}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, fontWeight: 600 }}>Phase 2</span>
          <span style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: C.ink }}>Customer Engagement</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
          <MetricPill highlight value={data.qualifiedCalls} label="Contacted Successfully" accent={accentLight} />
          <MetricPill value={`${contactRate}%`} label="Contact Rate" />
        </div>
        <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, marginBottom: 8 }}>Interaction Outcomes</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <MetricPill value="\u2014" label="Voice Mail" />
          <MetricPill value="\u2014" label="Call Failed" />
          <MetricPill value="\u2014" label="Rejected" />
          <MetricPill value="\u2014" label="Opted Out" />
          {data.avgDuration > 0 && <MetricPill value={`${data.avgDuration.toFixed(1)}m`} label="Avg Duration" />}
        </div>
      </div>
      <div className="avoid-break" style={{ marginBottom: 10, padding: "14px 18px 14px", background: C.paper, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${C.green}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: C.green, fontWeight: 600 }}>Phase 3</span>
          <span style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: C.ink }}>Appointment Booking</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <MetricPill highlight value={data.appointments} label="Appointments Scheduled" accent={C.green} />
          <MetricPill value={`${conversionRate}%`} label="Booking Rate" />
        </div>
      </div>
      {/* Context: actual conversations from Daily Metrics */}
      {data.totalCalls > 0 && (
        <div style={{ fontFamily: mono, fontSize: 8, color: C.muted, padding: "8px 18px", borderLeft: `3px solid ${C.rule}` }}>
          {data.totalCalls} conversations completed via Vini &middot; {data.qualifiedCalls} qualified &middot; {data.appointments} appointments
        </div>
      )}
      {/* Campaign totals note */}
      <div style={{ fontFamily: mono, fontSize: 7, color: C.muted, fontStyle: "italic", padding: "4px 18px" }}>
        Campaign totals shown across full reporting period
      </div>
      <TrendChart data={data.monthly} accent={accent} fullMonths={fullMonths} isOutbound />
    </div>
  );
}

/* ═══ ROOFTOP REPORT VIEW ═══ */

interface RooftopReportProps {
  data: RooftopData;
  name: string;
  insights: [string, string, string];
  onBackToGroup?: () => void;
}

function RooftopReport({ data, name, insights, onBackToGroup }: RooftopReportProps) {
  const HERO = data.hero;
  const HERO_MONTHLY = data.heroMonthly;
  const hasSales = data.sections.some((s) => s.startsWith("Sales"));
  const hasService = data.sections.some((s) => s.startsWith("Service"));
  const salesSections = ["Sales Inbound", "Sales Outbound"]
    .filter((s) => data.sectionData[s] && data.sectionData[s].totalCalls > 0);
  const serviceSections = ["Service Inbound", "Service Outbound"]
    .filter((s) => data.sectionData[s] && data.sectionData[s].totalCalls > 0);
  const outcomeAgents = data.sections.filter((s) => data.outcomesByAgent && data.outcomesByAgent[s] !== undefined);

  const allMonthLabels = new Set<string>();
  Object.values(data.sectionData).forEach((sd) => {
    (sd.monthly || []).forEach((m) => allMonthLabels.add(m.label));
  });
  const fullMonthLabels = [...allMonthLabels].sort((a, b) => {
    const [am, ay] = a.split(" '");
    const [bm, by] = b.split(" '");
    if (ay !== by) return Number(ay) - Number(by);
    return (MONTH_ORDER[am] || 0) - (MONTH_ORDER[bm] || 0);
  });

  const hasInsights = insights.some((i) => i.trim().length > 0);

  return (
    <>
      {/* Back to group banner */}
      {onBackToGroup && (
        <div className="no-print" style={{ background: C.teal, padding: "10px 56px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }} onClick={onBackToGroup}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          <span style={{ fontFamily: mono, fontSize: 11, color: "#fff", fontWeight: 500 }}>Back to Group View</span>
        </div>
      )}

      {/* Header */}
      <FadeIn delay={50}>
        <div style={{ paddingTop: 48, paddingBottom: 16 }}>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: C.teal, marginBottom: 8, fontWeight: 500 }}>Vini AI</div>
          <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.2, margin: "0 0 5px" }}>Impact Report</h1>
          <div style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{name}</div>
          <div style={{ fontFamily: mono, fontSize: 10, color: C.muted }}>{data.period}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", borderTop: `2px solid ${C.ink}`, borderBottom: `1.5px solid ${C.ink}`, marginBottom: 24 }}>
          <div style={{ padding: "10px 20px", borderRight: `1px solid ${C.rule}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 3 }}>Reporting Period</div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600 }}>{data.period}</div>
          </div>
          <div style={{ padding: "10px 20px", borderRight: `1px solid ${C.rule}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 3 }}>Months Active</div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600 }}>{data.monthsActive}</div>
          </div>
          <div style={{ padding: "10px 20px", flex: 1 }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>Active Agent Sections</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {data.sections.map((s) => (
                <span key={s} style={{ fontFamily: mono, fontSize: 9, padding: "3px 10px", borderRadius: 3, background: s.startsWith("Sales") ? C.tealPale : C.bluePale, color: s.startsWith("Sales") ? C.teal : C.blue, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Key Insights */}
      {hasInsights && (
        <FadeIn delay={80}>
          <div style={{ marginBottom: 20, padding: "16px 20px", background: C.cream, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${C.teal}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 600, marginBottom: 10 }}>Key Insights</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {insights.filter((i) => i.trim()).map((insight, idx) => (
                <p key={idx} style={{ fontFamily: serif, fontSize: 12, color: C.ink, lineHeight: 1.7, margin: 0 }}>{insight}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* 01 Key Outcomes */}
      <FadeIn delay={130}>
        <div className="page-break-after" style={{ marginBottom: 20 }}>
          <div style={{ padding: "20px 0 10px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>01</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>Key Outcomes This Period</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", border: `1.5px solid ${C.ink}`, minHeight: 200 }}>
            <div style={{ background: C.ink, padding: "24px 20px 18px", borderRight: "1px solid rgba(245,240,232,0.1)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>Conversations Handled</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.tealLight, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.totalCalls.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: "auto" }}>{HERO.qualRate}% qualification rate</div>
              <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="calls" color={C.tealLight} count={8} /></div>
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", borderRight: `1px solid ${C.rule}`, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Real Buyer Intent Identified</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.qualifiedCalls.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>Qualified from {HERO.totalCalls.toLocaleString()} conversations</div>
              <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="qual" color={C.teal} count={8} /></div>
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", borderRight: `1px solid ${C.rule}`, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Appointments Booked</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.appointments.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>{HERO.salesAppts} sales &middot; {HERO.serviceAppts} service</div>
              <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="appts" color={C.green} count={8} /></div>
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Customers Routed to Team</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.routedToTeam.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>{HERO.callbacks} callbacks + {HERO.warmTransfers} warm transfers</div>
              <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="routed" color={C.blue} count={8} /></div>
            </div>
          </div>

          {/* Timing chart */}
          {(() => {
            const ahPct = HERO.afterHoursShare / 100;
            const timingData = HERO_MONTHLY.map((m) => {
              const d = Math.round(m.calls * (1 - ahPct));
              const a = Math.round(m.calls * ahPct);
              return { label: m.label, during: d, after: a, total: d + a };
            });
            const totalDuring = timingData.reduce((s, d) => s + d.during, 0);
            const totalAfter = timingData.reduce((s, d) => s + d.after, 0);
            return (
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted }}>When Customers Reached Out</div>
                  <div style={{ display: "flex", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 2, background: C.teal, opacity: 0.7 }} />
                      <span style={{ fontFamily: mono, fontSize: 8, color: C.muted }}>During hours <strong style={{ color: C.ink }}>{totalDuring.toLocaleString()}</strong></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 2, background: C.blue, opacity: 0.5 }} />
                      <span style={{ fontFamily: mono, fontSize: 8, color: C.muted }}>After hours <strong style={{ color: C.ink }}>{totalAfter.toLocaleString()}</strong></span>
                    </div>
                  </div>
                </div>
                <div style={{ height: 180, width: "100%", background: C.cream, border: `1px solid ${C.rule}`, padding: "12px 12px 4px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={timingData} margin={{ top: 18, right: 4, left: -16, bottom: 4 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={C.rule} vertical={false} />
                      <XAxis dataKey="label" tick={{ fontSize: 9, fontFamily: mono, fill: C.muted }} axisLine={{ stroke: C.rule }} tickLine={false} tickMargin={6} />
                      <YAxis tick={{ fontSize: 9, fontFamily: mono, fill: C.muted }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ background: C.ink, border: "none", borderRadius: 6, fontFamily: mono, fontSize: 10, color: C.paper }} itemStyle={{ color: C.paper }} />
                      <Bar dataKey="during" stackId="stack" fill={C.teal} fillOpacity={0.7} name="During Hours" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="after" stackId="stack" fill={C.blue} fillOpacity={0.5} name="After Hours" radius={[2, 2, 0, 0]}>
                        <LabelList dataKey="total" position="top" style={{ fontSize: 9, fontFamily: mono, fill: C.muted, fontWeight: 600 }} />
                      </Bar>
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })()}

          {/* Executive Insight */}
          <div style={{ marginTop: 14, padding: "16px 20px", background: C.cream, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${C.teal}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 600, marginBottom: 6 }}>Executive Insight</div>
            <p style={{ fontFamily: serif, fontSize: 12, color: C.ink, lineHeight: 1.7, margin: 0 }}>
              {HERO.afterHoursShare}% of all customer demand arrived outside dealership hours &mdash; calls, inquiries, and service requests that would have gone unanswered without an always-on AI agent. Vini converted {HERO.qualRate}% of total volume into qualified, actionable intent for your team.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* 02 Sales */}
      {hasSales && (
        <FadeIn delay={200}>
          <div className="page-break-before print-page-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "24px 0 12px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 18 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>02</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>The Work Behind the Numbers</h2>
              <span style={{ fontStyle: "italic", color: C.muted, fontSize: 12, marginLeft: "auto", fontFamily: serif }}>Agent-level performance breakdown</span>
            </div>
            {salesSections.map((s) => (
              <AgentSubsection key={s} title={s} direction={s.split(" ")[1]} agentType="Sales" data={data.sectionData[s]} accent={C.teal} fullMonths={fullMonthLabels} />
            ))}
          </div>
        </FadeIn>
      )}

      {!hasSales && (
        <FadeIn delay={200}>
          <div className="page-break-before print-page-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "24px 0 12px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 18 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>02</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>The Work Behind the Numbers</h2>
              <span style={{ fontStyle: "italic", color: C.muted, fontSize: 12, marginLeft: "auto", fontFamily: serif }}>Agent-level performance breakdown</span>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Service sections */}
      {hasService && serviceSections.map((s, i) => (
        <FadeIn delay={350 + i * 50} key={s}>
          <div className="page-break-before print-page-top">
            <AgentSubsection title={s} direction={s.split(" ")[1]} agentType="Service" data={data.sectionData[s]} accent={C.blue} fullMonths={fullMonthLabels} />
          </div>
        </FadeIn>
      ))}

      {/* 03 Call Outcomes */}
      {outcomeAgents.length > 0 && (
        <FadeIn delay={420}>
          <div className="outcomes-section print-page-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "24px 0 12px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 18 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>03</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>What Customers Asked About</h2>
              <span style={{ fontStyle: "italic", color: C.muted, fontSize: 12, marginLeft: "auto", fontFamily: serif }}>Top call outcomes by agent</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(outcomeAgents.length, 4)}, 1fr)`, border: `1.5px solid ${C.ink}`, marginBottom: 32 }}>
              {outcomeAgents.map((section, colIdx) => {
                const isSales = section.startsWith("Sales");
                const accent = isSales ? C.teal : C.blue;
                const items = ((data.outcomesByAgent[section] || []) as OutcomeItem[]).filter((d) => !["Call Aborted", "Call Disconnected"].includes(d.label));
                const hasData = items && items.length > 0;
                const maxVal = hasData ? items[0].value : 1;
                return (
                  <div key={section} style={{ borderRight: colIdx < outcomeAgents.length - 1 ? `1px solid ${C.rule}` : "none", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "14px 20px", background: isSales ? C.ink : C.cream, borderBottom: `1px solid ${isSales ? "rgba(245,240,232,0.1)" : C.rule}` }}>
                      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, fontWeight: 600, marginBottom: 2 }}>{section}</div>
                      <div style={{ fontFamily: mono, fontSize: 9, color: isSales ? "rgba(255,255,255,0.8)" : C.muted }}>{hasData ? `Top ${items.length} outcomes` : "No outcome data"}</div>
                    </div>
                    <div style={{ padding: "18px 20px", background: C.cream, flex: 1, display: "flex", flexDirection: "column", justifyContent: hasData ? "flex-start" : "center" }}>
                      {hasData ? items.map((d, i) => (
                        <div key={i} style={{ marginBottom: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                            <span style={{ fontFamily: mono, fontSize: 9, color: C.muted }}>{d.label}</span>
                            <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: C.ink, marginLeft: 8 }}>{d.value}</span>
                          </div>
                          <div style={{ height: 14, background: C.paper, borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(d.value / maxVal) * 100}%`, background: `linear-gradient(90deg, ${accent}20, ${accent}60)`, borderRadius: 3 }} />
                          </div>
                        </div>
                      )) : (
                        <div style={{ textAlign: "center", padding: "32px 12px" }}>
                          <div style={{ fontFamily: mono, fontSize: 9, color: C.muted }}>Outcome data not available</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}

/* ═══ GROUP REPORT VIEW ═══ */

interface GroupReportViewProps {
  data: GroupReportData;
  insights: [string, string, string];
  onDrillDown: (rooftopName: string) => void;
}

function GroupReport({ data, insights, onDrillDown }: GroupReportViewProps) {
  const HERO = data.aggregatedHero;
  const HERO_MONTHLY = data.aggregatedHeroMonthly;
  const hasInsights = insights.some((i) => i.trim().length > 0);

  const allMonthLabels = new Set<string>();
  Object.values(data.sectionData).forEach((sd) => {
    (sd.monthly || []).forEach((m) => allMonthLabels.add(m.label));
  });
  const fullMonthLabels = [...allMonthLabels].sort((a, b) => {
    const [am, ay] = a.split(" '");
    const [bm, by] = b.split(" '");
    if (ay !== by) return Number(ay) - Number(by);
    return (MONTH_ORDER[am] || 0) - (MONTH_ORDER[bm] || 0);
  });

  const hasSales = data.sections.some((s) => s.startsWith("Sales"));
  const hasService = data.sections.some((s) => s.startsWith("Service"));
  const salesSections = ["Sales Inbound", "Sales Outbound"]
    .filter((s) => data.sectionData[s] && data.sectionData[s].totalCalls > 0);
  const serviceSections = ["Service Inbound", "Service Outbound"]
    .filter((s) => data.sectionData[s] && data.sectionData[s].totalCalls > 0);
  const outcomeAgents = data.sections.filter((s) => data.outcomesByAgent && data.outcomesByAgent[s] !== undefined);

  return (
    <>
      {/* Header */}
      <FadeIn delay={50}>
        <div style={{ paddingTop: 48, paddingBottom: 16 }}>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: C.teal, marginBottom: 8, fontWeight: 500 }}>Vini AI</div>
          <h1 style={{ fontFamily: serif, fontSize: 26, fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.2, margin: "0 0 5px" }}>Group Impact Report</h1>
          <div style={{ fontFamily: font, fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{data.enterprise}</div>
          <div style={{ fontFamily: mono, fontSize: 10, color: C.muted }}>{data.period} &middot; {data.rooftops.length} rooftops</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", borderTop: `2px solid ${C.ink}`, borderBottom: `1.5px solid ${C.ink}`, marginBottom: 24 }}>
          <div style={{ padding: "10px 20px", borderRight: `1px solid ${C.rule}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 3 }}>Reporting Period</div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600 }}>{data.period}</div>
          </div>
          <div style={{ padding: "10px 20px", borderRight: `1px solid ${C.rule}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 3 }}>Rooftops</div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 600 }}>{data.rooftops.length}</div>
          </div>
          <div style={{ padding: "10px 20px", flex: 1 }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 4 }}>Active Sections</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {data.sections.map((s) => (
                <span key={s} style={{ fontFamily: mono, fontSize: 9, padding: "3px 10px", borderRadius: 3, background: s.startsWith("Sales") ? C.tealPale : C.bluePale, color: s.startsWith("Sales") ? C.teal : C.blue, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Key Insights */}
      {hasInsights && (
        <FadeIn delay={80}>
          <div style={{ marginBottom: 20, padding: "16px 20px", background: C.cream, border: `1px solid ${C.rule}`, borderLeft: `3px solid ${C.teal}` }}>
            <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal, fontWeight: 600, marginBottom: 10 }}>Key Insights</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {insights.filter((i) => i.trim()).map((insight, idx) => (
                <p key={idx} style={{ fontFamily: serif, fontSize: 12, color: C.ink, lineHeight: 1.7, margin: 0 }}>{insight}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      )}

      {/* 01 Key Outcomes */}
      <FadeIn delay={130}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ padding: "20px 0 10px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>01</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>Group Outcomes</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", border: `1.5px solid ${C.ink}`, minHeight: 180 }}>
            <div style={{ background: C.ink, padding: "24px 20px 18px", borderRight: "1px solid rgba(245,240,232,0.1)", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginBottom: 12 }}>Conversations Handled</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.tealLight, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.totalCalls.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: "auto" }}>{HERO.qualRate}% qualification rate</div>
              {HERO_MONTHLY.length > 0 && <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="calls" color={C.tealLight} count={8} /></div>}
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", borderRight: `1px solid ${C.rule}`, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Qualified Leads</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.qualifiedCalls.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>From {HERO.totalCalls.toLocaleString()} total</div>
              {HERO_MONTHLY.length > 0 && <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="qual" color={C.teal} count={8} /></div>}
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", borderRight: `1px solid ${C.rule}`, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Appointments</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.appointments.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>{HERO.salesAppts} sales &middot; {HERO.serviceAppts} service</div>
              {HERO_MONTHLY.length > 0 && <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="appts" color={C.green} count={8} /></div>}
            </div>
            <div style={{ background: C.paper, padding: "24px 20px 18px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: 12 }}>Routed to Team</div>
              <div style={{ fontFamily: font, fontSize: 34, fontWeight: 900, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{HERO.routedToTeam.toLocaleString()}</div>
              <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 10, color: C.muted, marginBottom: "auto" }}>{HERO.callbacks} callbacks + {HERO.warmTransfers} transfers</div>
              {HERO_MONTHLY.length > 0 && <div style={{ marginTop: 14 }}><MiniBarSpark data={HERO_MONTHLY} dataKey="routed" color={C.blue} count={8} /></div>}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Rooftop Breakdown Table */}
      <FadeIn delay={200}>
        <div className="page-break-before print-page-top" style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "20px 0 10px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 12 }}>
            <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>02</span>
            <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>Rooftop Breakdown</h2>
            <span className="no-print" style={{ fontStyle: "italic", color: C.muted, fontSize: 12, marginLeft: "auto", fontFamily: serif }}>Click row to drill down</span>
          </div>
          <div style={{ border: `1.5px solid ${C.ink}`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: mono, fontSize: 11 }}>
              <thead>
                <tr style={{ background: C.ink, color: C.paper }}>
                  <th style={{ textAlign: "left", padding: "10px 16px", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Rooftop</th>
                  <th style={{ textAlign: "right", padding: "10px 16px", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Calls</th>
                  <th style={{ textAlign: "right", padding: "10px 16px", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Qualified</th>
                  <th style={{ textAlign: "right", padding: "10px 16px", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Appts</th>
                  <th style={{ textAlign: "right", padding: "10px 16px", fontWeight: 600, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase" }}>Qual Rate</th>
                </tr>
              </thead>
              <tbody>
                {data.rooftopBreakdown.map((row, i) => (
                  <tr
                    key={row.name}
                    className="rooftop-row"
                    onClick={() => onDrillDown(row.name)}
                    style={{ background: i % 2 === 0 ? C.paper : C.cream, borderBottom: `1px solid ${C.rule}`, transition: "background 0.15s" }}
                  >
                    <td style={{ padding: "10px 16px", fontWeight: 500, fontSize: 10 }}>{row.name}</td>
                    <td style={{ textAlign: "right", padding: "10px 16px", fontWeight: 700 }}>{row.totalCalls.toLocaleString()}</td>
                    <td style={{ textAlign: "right", padding: "10px 16px" }}>{row.qualifiedCalls.toLocaleString()}</td>
                    <td style={{ textAlign: "right", padding: "10px 16px" }}>{row.appointments.toLocaleString()}</td>
                    <td style={{ textAlign: "right", padding: "10px 16px" }}>
                      <span style={{ padding: "2px 8px", borderRadius: 3, fontSize: 10, fontWeight: 600, background: row.qualRate >= 50 ? "#D1FAE5" : row.qualRate >= 25 ? "#FEF3C7" : "#FEE2E2", color: row.qualRate >= 50 ? "#065F46" : row.qualRate >= 25 ? "#92400E" : "#991B1B" }}>
                        {row.qualRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      {/* Section breakdowns */}
      {hasSales && salesSections.length > 0 && (
        <FadeIn delay={300}>
          <div className="page-break-before print-page-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "24px 0 12px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 18 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>03</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>Aggregated Sales Performance</h2>
            </div>
            {salesSections.map((s) => (
              <AgentSubsection key={s} title={`${s} (Group)`} direction={s.split(" ")[1]} agentType="Sales" data={data.sectionData[s]} accent={C.teal} fullMonths={fullMonthLabels} />
            ))}
          </div>
        </FadeIn>
      )}

      {hasService && serviceSections.length > 0 && (
        <FadeIn delay={400}>
          <div className="page-break-before print-page-top">
            {serviceSections.map((s) => (
              <AgentSubsection key={s} title={`${s} (Group)`} direction={s.split(" ")[1]} agentType="Service" data={data.sectionData[s]} accent={C.blue} fullMonths={fullMonthLabels} />
            ))}
          </div>
        </FadeIn>
      )}

      {/* Outcomes */}
      {outcomeAgents.length > 0 && (
        <FadeIn delay={450}>
          <div className="outcomes-section print-page-top">
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "24px 0 12px", borderBottom: `1.5px solid ${C.ink}`, marginBottom: 18 }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", color: C.teal, textTransform: "uppercase" }}>04</span>
              <h2 style={{ fontFamily: font, fontSize: 19, fontWeight: 700, margin: 0 }}>What Customers Asked About</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(outcomeAgents.length, 4)}, 1fr)`, border: `1.5px solid ${C.ink}`, marginBottom: 32 }}>
              {outcomeAgents.map((section, colIdx) => {
                const isSales = section.startsWith("Sales");
                const accent = isSales ? C.teal : C.blue;
                const items = ((data.outcomesByAgent[section] || []) as OutcomeItem[]).filter((d) => !["Call Aborted", "Call Disconnected"].includes(d.label));
                const hasItems = items && items.length > 0;
                const maxVal = hasItems ? items[0].value : 1;
                return (
                  <div key={section} style={{ borderRight: colIdx < outcomeAgents.length - 1 ? `1px solid ${C.rule}` : "none", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "14px 20px", background: isSales ? C.ink : C.cream, borderBottom: `1px solid ${isSales ? "rgba(245,240,232,0.1)" : C.rule}` }}>
                      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, fontWeight: 600, marginBottom: 2 }}>{section}</div>
                      <div style={{ fontFamily: mono, fontSize: 9, color: isSales ? "rgba(255,255,255,0.8)" : C.muted }}>{hasItems ? `Top ${items.length} outcomes` : "No data"}</div>
                    </div>
                    <div style={{ padding: "18px 20px", background: C.cream, flex: 1 }}>
                      {hasItems ? items.map((d, i) => (
                        <div key={i} style={{ marginBottom: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                            <span style={{ fontFamily: mono, fontSize: 9, color: C.muted }}>{d.label}</span>
                            <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: C.ink, marginLeft: 8 }}>{d.value}</span>
                          </div>
                          <div style={{ height: 14, background: C.paper, borderRadius: 3, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${(d.value / maxVal) * 100}%`, background: `linear-gradient(90deg, ${accent}20, ${accent}60)`, borderRadius: 3 }} />
                          </div>
                        </div>
                      )) : (
                        <div style={{ textAlign: "center", padding: "32px 12px" }}>
                          <div style={{ fontFamily: mono, fontSize: 9, color: C.muted }}>No data</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}

/* ═══ MAIN EXPORT ═══ */

interface ReportViewProps {
  viewMode: "group" | "rooftop";
  rooftopData: RooftopData | null;
  groupData: GroupReportData | null;
  rooftopName: string;
  insights: [string, string, string];
  onDrillDown: (rooftopName: string) => void;
  onBackToGroup: () => void;
  fromDrillDown: boolean;
}

export default function ReportView({
  viewMode, rooftopData, groupData, rooftopName, insights,
  onDrillDown, onBackToGroup, fromDrillDown,
}: ReportViewProps) {
  if (viewMode === "group" && groupData) {
    return <GroupReport data={groupData} insights={insights} onDrillDown={onDrillDown} />;
  }

  if (viewMode === "rooftop" && rooftopData) {
    return (
      <RooftopReport
        data={rooftopData}
        name={rooftopName}
        insights={insights}
        onBackToGroup={fromDrillDown ? onBackToGroup : undefined}
      />
    );
  }

  return null;
}
