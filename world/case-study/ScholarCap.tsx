"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFileAlt,
  faDatabase,
  faUniversity,
  faTable,
  faCreditCard,
  faExternalLinkAlt,
  faBolt,
  faShieldAlt,
  faCheckCircle,
  faTerminal,
  faArrowRight,
  faLayerGroup,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

interface PipelineStage {
  id: string;
  command: string;
  title: string;
  category: string;
  icon: any;
  runtime: string;
  recordsProcessed: string;
  summary: string;
  technicalDetails: string[];
  sampleOutput: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "form",
    command: "python pipeline.py --stage parse-forms",
    title: "Document Parsing & Sanitization",
    category: "Data Ingestion",
    icon: faFileAlt,
    runtime: "1.24s",
    recordsProcessed: "3,214 Forms",
    summary:
      "Extracts semi-structured tabular records from incoming Word document (.docx) submissions with fuzzy-match key normalization and encoding error repairs.",
    technicalDetails: [
      "Custom python-docx binary XML walker with zero-loss fallback",
      "Regex sanitation for mismatched Malayalam / Latin transliteration",
      "Pre-commit whitespace trimming and ASCII control code neutralization",
    ],
    sampleOutput: `[PARSE:OK] 523 school packages loaded
[SCHEMA] Validated 3,214 applicant records
[WARNING] 14 missing guardian signatures flagged for manual review`,
  },
  {
    id: "rbi",
    command: "python pipeline.py --stage rbi-sync",
    title: "Multi-Threaded RBI Branch Indexing",
    category: "Data Enrichment",
    icon: faBolt,
    runtime: "750ms",
    recordsProcessed: "142,800 Nodes",
    summary:
      "Asynchronously pulls and indexes the Reserve Bank of India Master Branch dataset into an in-memory hash dictionary, bypassing serial disk I/O bottlenecks.",
    technicalDetails: [
      "ThreadPoolExecutor with 8 worker threads for chunked memory ingestion",
      "Startup latency plummeted from 5,020ms down to 750ms (85% optimization)",
      "Constant-time O(1) in-memory branch resolution per student record",
    ],
    sampleOutput: `[ASYNC:INIT] Spawning 8 workers for RBI Master Dataset...
[THREAD-3] Chunk 0x03 loaded (17,850 rows) in 184ms
[MEMORY] 142,800 IFSC mappings indexed. Total heap: 42.1MB`,
  },
  {
    id: "ifsc",
    command: "python pipeline.py --stage geo-routing",
    title: "Geographic IFSC Routing Engine",
    category: "Classification",
    icon: faUniversity,
    runtime: "410ms",
    recordsProcessed: "3,214 Matched",
    summary:
      "Derives student district, state, and bank branch routing directly from IFSC alphanumeric prefixes, automating complex multi-state geographic grouping.",
    technicalDetails: [
      "Alphanumeric 11-character IFSC verification against RBI branch registers",
      "Automated district clustering for Kerala (14 districts) and pan-India trusts",
      "Clipboard integration hook for ad-hoc manual verification of edge branches",
    ],
    sampleOutput: `[GEO:RESOLVE] SBIN0000853 -> State Bank of India (Alappuzha, Kerala)
[GEO:RESOLVE] CNRB0001042 -> Canara Bank (Ernakulam, Kerala)
[ROUTING] 100% geographic classification complete without manual geo-coding`,
  },
  {
    id: "db",
    command: "python pipeline.py --stage commit-db",
    title: "Relational SQLite Ingestion",
    category: "Persistence",
    icon: faDatabase,
    runtime: "620ms",
    recordsProcessed: "100% Integrity",
    summary:
      "Commits clean datasets into a normalized SQLite relational schema with unique constraint checks, foreign keys for schools, and transactional rollback protection.",
    technicalDetails: [
      "ACID-compliant transactions preventing partial batch corruptions",
      "Unique composite indexes (Student Name + Aadhaar / School ID + Account No)",
      "Duplicate submission detector rejecting repeat funding requests",
    ],
    sampleOutput: `[DB:TX] Transaction started: 3,214 rows
[DB:INDEX] Composite check passed: 0 duplicates detected
[DB:COMMIT] SQLite database updated successfully (scholar_master.db)`,
  },
  {
    id: "neft",
    command: "python pipeline.py --stage neft-export",
    title: "Bank-Compliant NEFT Dispatch",
    category: "Financial Export",
    icon: faCreditCard,
    runtime: "890ms",
    recordsProcessed: "Bank-Ready",
    summary:
      "Synthesizes institutional NEFT transfer spreadsheets compliant with strict bank formatting guidelines, batch headers, and checksum verification.",
    technicalDetails: [
      "Zero-truncation numeric formatting for 16-digit bank account identifiers",
      "Configurable transfer batch sizes per partnering financial institution",
      "Direct integration with spreadsheet reporting engine for trust auditing",
    ],
    sampleOutput: `[EXPORT] Synthesizing NEFT batch: BATCH_2026_Q1.xlsx
[FORMAT:CHECK] Column count: 18 | Account checksum: VALID
[COMPLETED] Pipeline run successful. Time elapsed: 3.91s`,
  },
];

const METRICS_SUMMARY = [
  {
    value: "75%",
    label: "Processing Cycle Drop",
    detail: "8 months compressed down to 2 months",
    context: "Operational Efficiency",
  },
  {
    value: "92.3%",
    label: "Error Elimination",
    detail: "~26 errors per run cut down to ~2",
    context: "Data Fidelity",
  },
  {
    value: "85%",
    label: "Cold-Start Acceleration",
    detail: "5,020ms reduced to 750ms via threading",
    context: "Runtime Optimization",
  },
  {
    value: "3,200+",
    label: "Disbursements Handled",
    detail: "Across 500+ schools nationwide",
    context: "Scale & Scope",
  },
];

const CORE_ARCHITECTURAL_PILLARS = [
  {
    title: "Multi-Threaded In-Memory Lookups",
    code: "ThreadPoolExecutor(max_workers=8)",
    description:
      "Eliminated massive I/O serialization bottlenecks by partitioning the 142k-row RBI IFSC dataset across 8 background workers, streaming parsed records into a memory-mapped Python hash map.",
    tag: "High-Throughput Concurrency",
  },
  {
    title: "Deterministic Geographic Classification",
    code: "IFSC -> Branch -> District -> State",
    description:
      "Replaced error-prone human geo-tagging with an algorithmic routing resolver that programmatically maps bank branches to official administrative districts across Kerala and nationwide.",
    tag: "Zero-Error Geo Routing",
  },
  {
    title: "Institutional NEFT Formatting & Safeguards",
    code: "ISO-20022 / Bank NEFT Generator",
    description:
      "Constructed strict serialization filters preventing numeric truncation on leading-zero account numbers and ensuring 100% acceptance rates during core banking batch uploads.",
    tag: "Financial Transfer Fidelity",
  },
  {
    title: "Relational Schema with Constraint Integrity",
    code: "SQLite3 + Foreign Key Enforcements",
    description:
      "Architected relational schema linking schools, applicants, and disbursement batches with rollback capabilities on malformed entries to prevent trust ledger corruption.",
    tag: "Data Integrity",
  },
];

export default function ScholarCapCaseStudy() {
  const [activeStageId, setActiveStageId] = useState<string>("rbi");

  const activeStage = useMemo(
    () => PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0],
    [activeStageId],
  );

  return (
    <main className="min-h-[100dvh] bg-[#fafaf9] dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* 1. ASYMMETRIC HERO SECTION (DESIGN_VARIANCE = 8, Left Dominant / Right Interactive Simulator) */}
      <section className="border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[92dvh]">
          {/* Left Column: Context & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800/80">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono tracking-tight text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>CASE STUDY : BANKING AUTOMATION</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-none text-zinc-950 dark:text-zinc-50 mb-6">
                Scholarship
                <br />
                Disbursement
                <br />
                <span className="text-zinc-400 dark:text-zinc-600">Pipeline.</span>
              </h1>

              {/* Sub-paragraph */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[62ch] font-normal mb-10">
                Engineered an automated data verification and banking generation suite for the{" "}
                <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">
                  Indian Jeevakarunya Charitable Trust
                </strong>
                . Replaced 8 months of prone manual Excel entries with a multi-threaded Python pipeline processing
                3,200+ students across 500+ institutions.
              </p>
            </div>

            {/* Meta Tags & Snapshot Specs */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Client
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block">IJCT Trust</span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Core Runtime
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block font-mono">
                  Python 3.11
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Concurrency
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block">
                  ThreadPoolExecutor
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Storage
                </span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mt-1 block font-mono">
                  SQLite3 ACID
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Execution Visualizer */}
          <div className="lg:col-span-5 bg-zinc-100/50 dark:bg-zinc-950 flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faTerminal} className="text-xs text-zinc-600 dark:text-zinc-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    Live Pipeline Inspector
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  READY (3.91s total)
                </span>
              </div>

              {/* Stage Quick Selectors */}
              <div className="grid grid-cols-5 gap-2 my-6">
                {PIPELINE_STAGES.map((stg) => {
                  const isActive = stg.id === activeStageId;
                  return (
                    <button
                      key={stg.id}
                      onClick={() => setActiveStageId(stg.id)}
                      className={`relative p-2.5 rounded-lg border text-left transition-all duration-200 ${
                        isActive
                          ? "bg-white dark:bg-zinc-900 border-zinc-400 dark:border-zinc-700 shadow-sm"
                          : "bg-transparent border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <FontAwesomeIcon
                          icon={stg.icon}
                          className={`text-xs ${
                            isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400 dark:text-zinc-600"
                          }`}
                        />
                      </div>
                      <span className="block text-[10px] font-mono truncate uppercase text-zinc-500 dark:text-zinc-400">
                        {stg.id}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-500"
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="space-y-4"
                >
                  <div className="bg-white dark:bg-zinc-900/90 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                      <span>STAGE: {activeStage.category.toUpperCase()}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{activeStage.runtime}</span>
                    </div>

                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-3 mb-1">
                      {activeStage.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {activeStage.summary}
                    </p>

                    <div className="p-3 bg-zinc-950 text-zinc-300 rounded-lg font-mono text-[11px] overflow-x-auto border border-zinc-800">
                      <div className="text-zinc-500 mb-1 select-none">$ {activeStage.command}</div>
                      <pre className="whitespace-pre-wrap leading-tight text-emerald-400/90">
                        {activeStage.sampleOutput}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Multi-thread speed highlight */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 dark:text-zinc-400">BENCHMARK (INITIAL LOAD)</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                5,020ms <span className="text-emerald-500">→ 750ms (-85%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUANTIFIED METRICS MATRIX (Airy, Asymmetric Spacing) */}
      <section className="py-20 lg:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Verified Production Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
              Operational Metamorphosis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS_SUMMARY.map((metric, i) => (
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

      {/* 3. CORE TECHNICAL ARCHITECTURE & DEEP BREAKTHROUGHS (Variance 8, Structural Split) */}
      <section className="py-20 lg:py-28 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Context Stick */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Engineering Breakdown
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                  High-Concurreny Architecture & Safe Transfer
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  Handling charitable scholarship funds requires zero tolerance for duplicate bank transfers or
                  corrupted account numbers. The pipeline decouples extraction, validation, and serialization into
                  distinct fault-isolated layers.
                </p>

                {/* Multithreading Comparison Visual */}
                <div className="mt-8 p-5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 block mb-3">
                    Dataset Ingestion Concurrency
                  </span>

                  <div className="space-y-3 font-mono text-[11px]">
                    <div>
                      <div className="flex justify-between text-zinc-500 mb-1">
                        <span>Serial File I/O (Pre-Optimization)</span>
                        <span>5,020ms</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-400 w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                        <span>8-Threaded Chunk Stream</span>
                        <span>750ms (-85%)</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[15%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Structural Pillars (Divide & Breathability) */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
                {CORE_ARCHITECTURAL_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="py-8 first:pt-0 last:pb-0 group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">0{idx + 1}</span>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{pillar.title}</h3>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 self-start sm:self-auto border border-zinc-200 dark:border-zinc-700">
                        {pillar.tag}
                      </span>
                    </div>

                    <code className="inline-block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3 bg-zinc-100 dark:bg-zinc-900/80 px-2 py-1 rounded">
                      {pillar.code}
                    </code>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[70ch]">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DATA PIPELINE SPECIFICATION & RELATIONAL DESIGN */}
      <section className="py-20 lg:py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                Schema Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
                Relational Database Entity Map
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0">
              CUSTOM UML SPECIFICATION · 500+ INSTITUTIONS LINKED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <FontAwesomeIcon icon={faLayerGroup} className="text-xs text-zinc-600 dark:text-zinc-400" />
                <h3 className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">tb_schools</h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <li className="flex justify-between">
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">school_id</span>
                  <span className="text-zinc-500">PK INTEGER</span>
                </li>
                <li className="flex justify-between">
                  <span>institution_name</span>
                  <span className="text-zinc-500">VARCHAR(255)</span>
                </li>
                <li className="flex justify-between">
                  <span>district_name</span>
                  <span className="text-zinc-500">VARCHAR(100)</span>
                </li>
                <li className="flex justify-between">
                  <span>state_code</span>
                  <span className="text-zinc-500">VARCHAR(10)</span>
                </li>
                <li className="flex justify-between">
                  <span>representative_contact</span>
                  <span className="text-zinc-500">VARCHAR(50)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <FontAwesomeIcon icon={faDatabase} className="text-xs text-zinc-600 dark:text-zinc-400" />
                <h3 className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">tb_applicants</h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <li className="flex justify-between">
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">applicant_id</span>
                  <span className="text-zinc-500">PK INTEGER</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">school_fk</span>
                  <span className="text-zinc-500">FK REFERENCES</span>
                </li>
                <li className="flex justify-between">
                  <span>student_full_name</span>
                  <span className="text-zinc-500">VARCHAR(255)</span>
                </li>
                <li className="flex justify-between">
                  <span>academic_standard</span>
                  <span className="text-zinc-500">VARCHAR(20)</span>
                </li>
                <li className="flex justify-between">
                  <span>annual_grant_inr</span>
                  <span className="text-zinc-500">DECIMAL(10,2)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <FontAwesomeIcon icon={faCreditCard} className="text-xs text-zinc-600 dark:text-zinc-400" />
                <h3 className="text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  tb_banking_disbursements
                </h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <li className="flex justify-between">
                  <span className="text-zinc-900 dark:text-zinc-200 font-semibold">transfer_id</span>
                  <span className="text-zinc-500">PK UUID</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">applicant_fk</span>
                  <span className="text-zinc-500">FK REFERENCES</span>
                </li>
                <li className="flex justify-between">
                  <span>bank_account_num</span>
                  <span className="text-zinc-500">VARCHAR(34)</span>
                </li>
                <li className="flex justify-between">
                  <span>ifsc_code_normalized</span>
                  <span className="text-zinc-500">VARCHAR(11)</span>
                </li>
                <li className="flex justify-between">
                  <span>neft_batch_status</span>
                  <span className="text-zinc-500">VARCHAR(20)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & REPOSITORY HANDOFF */}
      <footer className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Production Verified Suite · 195 Commits · 3,803 LOC
            </span>
          </div>

          <a
            href="https://github.com/MidHunterX/Scholar-CAP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all"
          >
            <span>Inspect GitHub Repository</span>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
          </a>
        </div>
      </footer>
    </main>
  );
}
