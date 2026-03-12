"use client";

import { useState, useRef, useEffect } from "react";
import { C, mono, font } from "@/lib/colors";
import type { Enterprise, ReportConfig } from "@/lib/types";

interface SearchableDropdownProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  placeholder: string;
  width?: string;
}

function SearchableDropdown({ value, options, onChange, placeholder, width }: SearchableDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="search-dropdown" style={{ width: width || "auto", minWidth: 200 }}>
      <input
        value={open ? search : value}
        placeholder={placeholder}
        onFocus={() => { setOpen(true); setSearch(""); }}
        onChange={(e) => setSearch(e.target.value)}
      />
      {open && (
        <div className="dropdown-list">
          {filtered.length === 0 && (
            <div className="dropdown-item" style={{ color: C.muted, fontStyle: "italic" }}>
              No matches
            </div>
          )}
          {filtered.map((o) => (
            <div
              key={o}
              className={`dropdown-item ${o === value ? "active" : ""}`}
              onClick={() => {
                onChange(o);
                setOpen(false);
                setSearch("");
              }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface ConfigRibbonProps {
  enterprises: Enterprise[];
  months: string[];
  config: ReportConfig;
  onConfigChange: (config: ReportConfig) => void;
  onGenerate: () => void;
  onReset: () => void;
  loading: boolean;
}

export default function ConfigRibbon({
  enterprises,
  months,
  config,
  onConfigChange,
  onGenerate,
  onReset,
  loading,
}: ConfigRibbonProps) {
  const [insightsOpen, setInsightsOpen] = useState(false);

  const currentEnterprise = enterprises.find((e) => e.name === config.enterprise);
  const rooftops = currentEnterprise?.rooftops || [];
  const showViewToggle = rooftops.length >= 2;
  const showRooftopDropdown = config.viewMode === "rooftop";

  const updateConfig = (partial: Partial<ReportConfig>) => {
    onConfigChange({ ...config, ...partial });
  };

  return (
    <div
      className="no-print"
      style={{
        background: C.ink,
        padding: "14px 32px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Row 1: Main controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        {/* Enterprise */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <label style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
            Enterprise
          </label>
          <SearchableDropdown
            value={config.enterprise}
            options={enterprises.map((e) => e.name)}
            onChange={(val) => {
              const ent = enterprises.find((e) => e.name === val);
              updateConfig({
                enterprise: val,
                rooftop: ent?.rooftops[0] || "",
                viewMode: (ent?.rooftops.length || 0) >= 2 ? "group" : "rooftop",
              });
            }}
            placeholder="Select enterprise..."
            width="240px"
          />
        </div>

        {/* View Toggle */}
        {showViewToggle && (
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <label style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
              View
            </label>
            <div style={{ display: "flex", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
              {(["group", "rooftop"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => updateConfig({ viewMode: mode })}
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    padding: "7px 16px",
                    border: "none",
                    cursor: "pointer",
                    background: config.viewMode === mode ? C.teal : "transparent",
                    color: config.viewMode === mode ? "#fff" : "rgba(245,240,232,0.6)",
                    fontWeight: config.viewMode === mode ? 600 : 400,
                    transition: "all 0.2s",
                  }}
                >
                  {mode === "group" ? "Group-Wide" : "Rooftop"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rooftop dropdown */}
        {showRooftopDropdown && (
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <label style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
              Rooftop
            </label>
            <SearchableDropdown
              value={config.rooftop}
              options={rooftops}
              onChange={(val) => updateConfig({ rooftop: val })}
              placeholder="Select rooftop..."
              width="280px"
            />
          </div>
        )}

        {/* Report Month */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <label style={{ fontFamily: mono, fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
            Report Month
          </label>
          <select
            value={config.reportMonth}
            onChange={(e) => updateConfig({ reportMonth: e.target.value })}
            style={{
              fontFamily: mono,
              fontSize: 12,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: C.paper,
              padding: "8px 14px",
              borderRadius: 4,
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="" style={{ color: C.ink, background: "#fff" }}>
              All Time
            </option>
            {months.map((m) => (
              <option key={m} value={m} style={{ color: C.ink, background: "#fff" }}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Insights toggle */}
        <button
          onClick={() => setInsightsOpen(!insightsOpen)}
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(245,240,232,0.7)",
            padding: "7px 14px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {insightsOpen ? "Hide" : "Show"} Insights {insightsOpen ? "\u25B2" : "\u25BC"}
        </button>

        {/* Reset */}
        <button
          onClick={onReset}
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(245,240,232,0.5)",
            padding: "7px 14px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        {/* Generate */}
        <button
          onClick={onGenerate}
          disabled={loading || !config.enterprise}
          style={{
            fontFamily: mono,
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: loading ? C.muted : C.teal,
            color: "#fff",
            border: "none",
            padding: "8px 22px",
            borderRadius: 4,
            cursor: loading ? "wait" : "pointer",
            fontWeight: 600,
            opacity: !config.enterprise ? 0.4 : 1,
          }}
        >
          {loading ? "Loading..." : "Generate Report"}
        </button>
      </div>

      {/* Row 2: Key Insights (collapsible) */}
      {insightsOpen && (
        <div
          style={{
            marginTop: 14,
            padding: "14px 0 4px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 12,
          }}
        >
          {([0, 1, 2] as const).map((i) => (
            <div key={i}>
              <label
                style={{
                  fontFamily: mono,
                  fontSize: 8,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.5)",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                Key Insight {i + 1}
              </label>
              <textarea
                className="insight-textarea"
                value={config.insights[i]}
                onChange={(e) => {
                  const newInsights: [string, string, string] = [...config.insights];
                  newInsights[i] = e.target.value;
                  updateConfig({ insights: newInsights });
                }}
                placeholder={`Enter insight ${i + 1}...`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Enterprise info */}
      {currentEnterprise && (
        <div style={{ marginTop: 8, display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontFamily: mono, fontSize: 9, color: "rgba(245,240,232,0.35)" }}>
            {currentEnterprise.rooftops.length} rooftop{currentEnterprise.rooftops.length !== 1 ? "s" : ""}
          </span>
          <span style={{ fontFamily: mono, fontSize: 9, color: "rgba(245,240,232,0.2)" }}>|</span>
          <span style={{ fontFamily: mono, fontSize: 9, color: "rgba(245,240,232,0.35)" }}>
            {config.viewMode === "group" ? "Group-wide view" : config.rooftop}
          </span>
        </div>
      )}
    </div>
  );
}
