"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCalendarAlt,
  faHashtag,
  faGlobe,
  faBook,
  faImage,
  faBolt,
  faTerminal,
  faCheck,
  faTimes,
  faCodeBranch,
  faLayerGroup,
  faExternalLinkAlt,
  faFileCode,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

interface FontEvaluation {
  fontName: string;
  classification: string;
  status: "verified" | "rejected" | "partial";
  justificationResult: string;
  chandrakkalaFidelity: string;
  notes: string;
}

interface ScriptStep {
  id: string;
  title: string;
  runtimeHook: string;
  description: string;
  codeSnippet: string;
}

const FONT_TEST_MATRIX: FontEvaluation[] = [
  {
    fontName: "Gayathri",
    classification: "Display / Body Unicode",
    status: "verified",
    justificationResult: "Zero glyph overlap on full justify",
    chandrakkalaFidelity: "100% stable",
    notes: "Flawless rendering with World-Ready Composer. Designated as primary editorial face.",
  },
  {
    fontName: "Anek Malayalam",
    classification: "Headline / Modern Grotesk",
    status: "verified",
    justificationResult: "Clean character kerning",
    chandrakkalaFidelity: "100% stable",
    notes: "Exceptional weight distribution across header hierarchy and category tags.",
  },
  {
    fontName: "Chilanka",
    classification: "Cursive / Feature Accent",
    status: "verified",
    justificationResult: "Balanced cursive loops",
    chandrakkalaFidelity: "100% stable",
    notes: "Reserved for editorial columns, pull quotes, and signature pieces.",
  },
  {
    fontName: "Manjari",
    classification: "Sans-Serif Body",
    status: "verified",
    justificationResult: "Consistent inter-word gaps",
    chandrakkalaFidelity: "100% stable",
    notes: "High legibility for condensed multi-column news dispatches.",
  },
  {
    fontName: "Arima",
    classification: "Calligraphic Serif",
    status: "rejected",
    justificationResult: "Severe glyph misalignment",
    chandrakkalaFidelity: "Dropped ligatures",
    notes: "Characters broken and misaligned during column block justification.",
  },
  {
    fontName: "Noto Sans Malayalam",
    classification: "Standard System",
    status: "rejected",
    justificationResult: "Chandrakkala detachment",
    chandrakkalaFidelity: "Unstable combining marks",
    notes: "Combining diacritics disconnected when spacing was adjusted by the engine.",
  },
  {
    fontName: "Noto Serif Malayalam",
    classification: "Document Serif",
    status: "rejected",
    justificationResult: "PDF rasterization dropout",
    chandrakkalaFidelity: "Render failure on export",
    notes: "Font appeared correctly in layout preview but vanished entirely in the final PDF raster stream.",
  },
];

const SCRIPT_PIPELINE_STEPS: ScriptStep[] = [
  {
    id: "iso-date",
    title: "1. Deterministic ISO Stamp",
    runtimeHook: "app.activeDocument.filePath",
    description:
      "Calculates the target publication date from the active edition's file metadata and formats a standardized YYYYMMDD timestamp for zero-clash web distribution.",
    codeSnippet: `var currentDate = new Date();
var isoDate = currentDate.getFullYear() +
  ("0" + (currentDate.getMonth() + 1)).slice(-2) +
  ("0" + currentDate.getDate()).slice(-2);

var doc = app.activeDocument;
var outputFolder = doc.filePath + "/render";
var pdfFilePath = outputFolder + "/" + isoDate + ".pdf";`,
  },
  {
    id: "pdf-export",
    title: "2. Headless PDF Serialization",
    runtimeHook: "doc.exportFile(PDF_TYPE)",
    description:
      "Invokes the optimized '[Smallest File Size]' preset, verifies preset existence, and compiles vector typography and raster images into a lightweight publication binary.",
    codeSnippet: `var pdfExportPreset = app.pdfExportPresets.itemByName("[Smallest File Size]");
if (!pdfExportPreset.isValid) {
  alert("FATAL: PDF export preset not configured.");
} else {
  // Asynchronous headless export to distribution folder
  doc.exportFile(ExportFormat.PDF_TYPE, File(pdfFilePath), false, pdfExportPreset);
}`,
  },
  {
    id: "jpg-raster",
    title: "3. Cover Thumbnail Generation",
    runtimeHook: "app.jpegExportPreferences",
    description:
      "Isolates Page 1 from the publication spread, rasterizes it at 69 DPI RGB with baseline encoding, and writes a web-ready JPG thumbnail matching the PDF filename.",
    codeSnippet: `app.jpegExportPreferences.properties = {
  antiAlias: true,
  embedColorProfile: true,
  exportResolution: 69,
  jpegColorSpace: JpegColorSpaceEnum.rgb,
  jpegExportRange: ExportRangeOrAllPages.exportRange,
  jpegQuality: JPEGOptionsQuality.low,
  pageString: doc.pages[0].name
};
doc.exportFile(ExportFormat.jpg, File(outputFolder + "/" + isoDate + ".jpg"), false);`,
  },
];

const ARCHITECTURAL_PILLARS = [
  {
    number: "01",
    title: "The 'nda' Glitch Elimination & Unicode Migration",
    techBadge: "Character Encoding Normalization",
    problem:
      "Legacy publishing relied on ASCII-mapped FML series fonts typed via external ISM software. In this encoding, the Malayalam conjunct 'nda' was internally encoded as a discretionary hyphen (0x00AD). When passed through the typesetting engine, it mutated into an invalid broken character (ï).",
    solution:
      "Replaced proprietary FML encoding with native Unicode across all editorial templates. Configured Windows Indic Inscript input directly inside InDesign, eradicating the need for third-party conversion utilities and eliminating 100% of character corruption.",
  },
  {
    number: "02",
    title: "Adobe World-Ready Paragraph Composer Integration",
    techBadge: "Indic Text Layout Engine",
    problem:
      "The default Western text composer treats complex Indic scripts as isolated Latin characters, leading to mid-word line breaks, broken conjunct consonants, and detached diacritics during multi-column justification.",
    solution:
      "Enforced the World-Ready Paragraph Composer engine paired with an integrated Malayalam Hyphenation User Dictionary. This enforces grammatical syllable boundaries during full block justification, ensuring zero visual orphan glyphs.",
  },
  {
    number: "03",
    title: "Dynamic Master Spreads & Layered Content Isolation",
    techBadge: "Layout Hierarchy & Page Geometry",
    problem:
      "Static page numbers placed on editable layers blocked global content selection (Ctrl+A) and corrupted pagination sequences whenever an editor moved or swapped an article spread.",
    solution:
      "Architected locked master layers with native auto-numbering markers programmed to conditionally exclude Page 1 (Front Page). Editors can reorder pages arbitrarily while the entire publication automatically re-indexes sequentially.",
  },
  {
    number: "04",
    title: "Proportional Frame Fitting & Auto-Resizing Tags",
    techBadge: "Object Style Automation",
    problem:
      "Editorial staff spent up to 60 minutes per edition manually scaling image frames and drawing individual colored background boxes behind category tag banners.",
    solution:
      "Engineered smart Object Style Presets with persistent proportional auto-fitting parameters and dynamic text frame auto-sizing with relative padding constraints. Headings auto-expand vertically; category badges auto-expand horizontally.",
  },
];

const AUDIT_METRICS = [
  {
    value: "91.7%",
    label: "Production Latency Drop",
    detail: "5.0 hours compressed to ~25 minutes",
    context: "Cycle Time",
  },
  {
    value: "7 -> 0",
    label: "Manual Bottlenecks",
    detail: "Zero manual date entries or file renames",
    context: "Automation",
  },
  {
    value: "100%",
    label: "Unicode Standardized",
    detail: "Complete elimination of legacy FML series",
    context: "Typography",
  },
  {
    value: "1-Click",
    label: "Publish Pipeline",
    detail: "ISO PDF + Thumbnail generated simultaneously",
    context: "Distribution",
  },
];

export default function NewspaperCaseStudy() {
  const [activeScriptStepId, setActiveScriptStepId] = useState<string>("iso-date");
  const [fontFilter, setFontFilter] = useState<"all" | "verified" | "rejected">("all");

  const activeStep = useMemo(
    () => SCRIPT_PIPELINE_STEPS.find((s) => s.id === activeScriptStepId) || SCRIPT_PIPELINE_STEPS[0],
    [activeScriptStepId],
  );

  const filteredFonts = useMemo(() => {
    if (fontFilter === "all") return FONT_TEST_MATRIX;
    return FONT_TEST_MATRIX.filter((f) => f.status === fontFilter);
  }, [fontFilter]);

  return (
    <main className="min-h-[100dvh] bg-[#fafaf9] dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* 1. ASYMMETRIC HERO SECTION (DESIGN_VARIANCE = 8, Split 58/42) */}
      <section className="border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[92dvh]">
          {/* Left Column: Context & Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800/80">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono tracking-tight text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>CASE STUDY : EDITORIAL AUTOMATION & TYPOGRAPHY</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-none text-zinc-950 dark:text-zinc-50 mb-6">
                Newspaper
                <br />
                Production
                <br />
                <span className="text-zinc-400 dark:text-zinc-600">Engine.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[60ch] font-normal mb-10">
                Architected an end-to-end publishing pipeline for a daily Malayalam newspaper. Overhauled broken legacy
                ASCII encoding, integrated Adobe World-Ready typography algorithms, and deployed ExtendScript
                automation—cutting daily cycle time from{" "}
                <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">5 hours down to 25 minutes</strong>.
              </p>
            </div>

            {/* Snapshot Metadata Bar */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Domain
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block">
                  Daily Print Media
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Core Runtime
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block font-mono">
                  ExtendScript (ES3)
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Typography Engine
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block">
                  World-Ready Composer
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Input Method
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block">
                  Native Inscript / Indic
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive ExtendScript & Terminal Console */}
          <div className="lg:col-span-5 bg-zinc-100/50 dark:bg-zinc-950 flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faFileCode} className="text-xs text-zinc-600 dark:text-zinc-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    ExtendScript Pipeline Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  EXPORT AUTOMATION
                </span>
              </div>

              {/* Step Selectors */}
              <div className="grid grid-cols-3 gap-2 my-6">
                {SCRIPT_PIPELINE_STEPS.map((step) => {
                  const isActive = step.id === activeScriptStepId;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveScriptStepId(step.id)}
                      className={`relative p-2.5 rounded-lg border text-left transition-all duration-200 ${
                        isActive
                          ? "bg-white dark:bg-zinc-900 border-zinc-400 dark:border-zinc-700 shadow-sm"
                          : "bg-transparent border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <span className="block text-[11px] font-mono font-semibold truncate text-zinc-800 dark:text-zinc-200">
                        {step.title.split(". ")[1]}
                      </span>
                      <span className="block text-[9px] font-mono text-zinc-500 truncate mt-0.5">{step.id}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeScriptIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-500"
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Step Terminal Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="space-y-4"
                >
                  <div className="bg-white dark:bg-zinc-900/90 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                      <span>HOOK: {activeStep.runtimeHook}</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold font-mono">AUTOMATED</span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-3 mb-1">{activeStep.title}</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {activeStep.description}
                    </p>

                    <div className="p-3.5 bg-zinc-950 text-zinc-300 rounded-lg font-mono text-[11px] overflow-x-auto border border-zinc-800">
                      <pre className="whitespace-pre-wrap leading-relaxed text-amber-300/90">
                        {activeStep.codeSnippet}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Highlight */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 dark:text-zinc-400">PUBLISHING CYCLE REDUCTION</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold font-mono">
                300 mins <span className="text-amber-500">→ 25 mins (-91.7%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUANTIFIED METRICS MATRIX (VISUAL_DENSITY = 4, Airy & Architectural) */}
      <section className="py-20 lg:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Audit & Performance Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
              Production Velocity Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIT_METRICS.map((metric, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-3">
                    {metric.context}
                  </span>
                  <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tight text-zinc-950 dark:text-zinc-50 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{metric.label}</h3>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-4">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL PILLARS & ROOT CAUSE ANALYSIS (Divide-y Grouping) */}
      <section className="py-20 lg:py-28 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Context Column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Engineering Breakthroughs
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                  Solving the Malayalam Desktop Publishing Barrier
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  Regional print media across India has historically been crippled by legacy ASCII font encodings,
                  creating systemic rendering defects and manual layout overhead. The solution required a comprehensive
                  overhaul of the font engine, layout composer, and automation scripts.
                </p>

                {/* Workflow Comparison Box */}
                <div className="mt-8 p-5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 block mb-3">
                    Daily Edition Workflow Time
                  </span>

                  <div className="space-y-3 font-mono text-[11px]">
                    <div>
                      <div className="flex justify-between text-zinc-500 mb-1">
                        <span>Legacy Manual Routine</span>
                        <span>300 mins (5.0h)</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-400 w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-amber-600 dark:text-amber-400 font-semibold mb-1">
                        <span>ExtendScript Automated Suite</span>
                        <span>25 mins (-91.7%)</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[8.3%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Structural Pillars */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
                {ARCHITECTURAL_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="py-8 first:pt-0 last:pb-0 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{pillar.number}</span>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pillar.title}</h3>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 self-start sm:self-auto border border-zinc-200 dark:border-zinc-700">
                        {pillar.techBadge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs leading-relaxed">
                      <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                        <span className="block font-mono text-zinc-600 dark:text-zinc-400 uppercase text-[10px] tracking-wider mb-1 font-semibold">
                          Root Defect
                        </span>
                        <p className="text-zinc-600 dark:text-zinc-400">{pillar.problem}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <span className="block font-mono text-amber-600 dark:text-amber-400 uppercase text-[10px] tracking-wider mb-1 font-semibold">
                          Engineered Resolution
                        </span>
                        <p className="text-zinc-700 dark:text-zinc-300">{pillar.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPOGRAPHY ENGINE & FONT COMPATIBILITY TEST LAB */}
      <section className="py-20 lg:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Empirical Evaluation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
                Unicode Font Compatibility Matrix
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {(["all", "verified", "rejected"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFontFilter(filter)}
                  className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all ${
                    fontFilter === filter
                      ? "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-transparent"
                      : "bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                  }`}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900/60 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400">
                    <th className="py-3.5 px-6 font-semibold">FONT FAMILY</th>
                    <th className="py-3.5 px-6 font-semibold">CLASSIFICATION</th>
                    <th className="py-3.5 px-6 font-semibold">STATUS</th>
                    <th className="py-3.5 px-6 font-semibold">JUSTIFICATION BEHAVIOR</th>
                    <th className="py-3.5 px-6 font-semibold">CHANDRAKKALA STABILITY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {filteredFonts.map((font, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-950 dark:text-zinc-50">{font.fontName}</td>
                      <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400">{font.classification}</td>
                      <td className="py-4 px-6">
                        {font.status === "verified" ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px]">
                            <FontAwesomeIcon icon={faCheck} className="text-[9px]" />
                            VERIFIED
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-[11px]">
                            <FontAwesomeIcon icon={faTimes} className="text-[9px]" />
                            REJECTED
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6">{font.justificationResult}</td>
                      <td className="py-4 px-6">{font.chandrakkalaFidelity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & HANDOFF */}
      <footer className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              ExtendScript Suite · Unicode Standards · Adobe World-Ready Composer
            </span>
          </div>

          <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
            Automated Publishing Architecture for Malayalam Daily Newspaper
          </div>
        </div>
      </footer>
    </main>
  );
}
