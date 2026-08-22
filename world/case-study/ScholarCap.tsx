import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFileAlt,
  faDatabase,
  faUniversity,
  faTable,
  faCreditCard,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ScholarCAPCaseStudy() {
  const metrics = [
    { value: "75%", description: "Processing Time Reduction", detail: "8 months → 2 months" },
    { value: "85%", description: "Load Time Optimization", detail: "5s → 750ms" },
    { value: "300%", description: "Error Reduction", detail: "26 → 2 errors" },
    { value: "3,200+", description: "Students Processed", detail: "500+ Schools" },
  ];

  const painPoints = [
    {
      title: "Manual Data Entry Bottleneck",
      desc: "Days to months of manual work entering student and school information into Excel spreadsheets",
      severity: "Critical",
    },
    {
      title: "High Error Rate",
      desc: "Approximately 26 errors per processing cycle due to manual data handling and typos",
      severity: "High",
    },
    {
      title: "Complex Geographic Categorization",
      desc: "Manual organization of students by district and state across India",
      severity: "High",
    },
    {
      title: "Banking Format Compliance",
      desc: "Time-consuming conversion of student data into bank-specific NEFT formats",
      severity: "Medium",
    },
    {
      title: "Scalability Constraints",
      desc: "Unable to efficiently process growing numbers of scholarship applications",
      severity: "Critical",
    },
    {
      title: "Resource Misallocation",
      desc: "Staff time consumed by data processing instead of core charitable activities",
      severity: "High",
    },
  ];

  const workflowCards = [
    {
      icon: faFileAlt,
      title: "Form Processing",
      command: "process.py form",
      description:
        "Automated parsing and validation of student data from Word document forms with intelligent data cleaning",
      status: "completed",
    },
    {
      icon: faDatabase,
      title: "Database Integration",
      command: "process.py db",
      description: "Verified data commits to SQLite database with district categorization and duplicate detection",
      status: "completed",
    },
    {
      icon: faUniversity,
      title: "IFSC Converter",
      command: "process.py ifsc",
      description: "Bulk conversion of IFSC codes to branch names with clipboard integration for rapid processing",
      status: "completed",
    },
    {
      icon: faTable,
      title: "Spreadsheet Generator",
      command: "process.py xlsx",
      description: "Generates formatted Excel reports summarizing school and student information by district",
      status: "completed",
    },
    {
      icon: faCreditCard,
      title: "NEFT Export",
      command: "process.py neft",
      description: "Automated generation of bank-compliant NEFT transfer spreadsheets with all required banking fields",
      status: "completed",
    },
  ];

  const innovations = [
    "Intelligent District Prediction — algorithm leveraging the Reserve Bank of India's branch dataset to automatically categorize students by district and state based on IFSC codes",
    "Multi-threaded Data Loading — asynchronous loading of RBI's branch dataset using multi-threading, reducing initial load time by 85% (5s → 750ms)",
    "Comprehensive Data Validation — custom validation logic to catch formatting errors, duplicate entries, and banking detail inconsistencies before database commit",
    "Smart Error Handling — verification workflows that flag incorrect formatting for manual review while auto-processing valid data",
    "Memory-Efficient Processing — Python dictionaries to load large datasets into memory for rapid lookup and processing",
    "Automated NEFT Compliance — template-based generation ensuring all bank transfer spreadsheets meet NEFT format requirements",
  ];

  const impactPoints = [
    {
      label: "Processing Efficiency",
      desc: "Reduced operational time by 75% from 8 months to 2 months per processing cycle",
      metric: "75%",
    },
    {
      label: "Error Reduction",
      desc: "Decreased errors by 300% from ~26 to ~2, minimizing financial loss and rework",
      metric: "300%",
    },
    {
      label: "Performance Optimization",
      desc: "Achieved 85% faster load times through intelligent multi-threading",
      metric: "85%",
    },
    {
      label: "Scale Achievement",
      desc: "Successfully manages 3,200+ students across 500+ schools nationwide",
      metric: "3,200+",
    },
  ];

  const keyFeatures = [
    "Automated parsing of student data from Word document forms with intelligent field extraction",
    "SQLite database with custom-designed schema managing 500+ schools and 3,200+ students",
    "Geographic categorization engine using RBI branch dataset for automatic district/state assignment",
    "Multi-threaded asynchronous loading for 85% faster application startup",
    "Comprehensive data validation system catching errors before database commit",
    "IFSC to branch name converter with clipboard integration for rapid processing",
    "Automated Excel report generation with custom styling and district-based organization",
    "NEFT-compliant spreadsheet generation for seamless bank transfer processing",
    "Manual override capabilities for edge cases while maintaining automated workflow",
    "Error detection and flagging system for manual review of problematic entries",
  ];

  const severityColors = {
    Critical: "bg-[#1a1816] text-white",
    High: "bg-[#6b5e4e] text-white",
    Medium: "bg-[#a68b7a] text-white",
  };

  return (
    <main className="bg-[#f7f4f0] min-h-[100dvh]">
      {/* Hero - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f7f4f0] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#d4cec4] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b5e4e]"></span>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Charitable Tech</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Scholar
              <br />
              CAP
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              Computer Aided Processing — automating scholarship workflows for Indian Jeevakarunya Charitable Trust.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">3,200+</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Students</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">500+</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Schools</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Python 3", "SQLite", "Multi-threading", "UML Design"].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs bg-[#ede8e1] rounded-full text-[#3a322a] font-medium border border-[#e5dfd7]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Visual Area */}
        <div className="relative bg-[#2d2822] order-1 lg:order-2 min-h-[60dvh] lg:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10 text-center px-8">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faGraduationCap} className="text-6xl lg:text-7xl text-white/40" />
            </div>
            <div className="max-w-xs mx-auto">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-sm font-mono font-bold">75%</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Time Saved</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-sm font-mono font-bold">8m→2m</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">
        {/* Stats - Row of metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-[#e5dfd7] text-center">
              <span className="block text-3xl font-bold text-[#1a1816] font-mono tracking-tight">{metric.value}</span>
              <p className="text-sm text-[#5a524a] mt-1 font-medium">{metric.description}</p>
              <span className="text-xs text-[#8a827a] font-mono mt-0.5 block">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* Overview - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Context</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Project Overview</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              A comprehensive Python-based toolset automating the entire scholarship processing workflow for a
              charitable trust distributing scholarships across India.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#ede8e1] rounded-2xl p-6 border border-[#d4cec4]">
              <span className="text-xs font-mono text-[#6b5e4e] uppercase">Client</span>
              <p className="text-[#1a1816] font-medium mt-1">Indian Jeevakarunya Charitable Trust</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7]">
                <span className="text-xs font-mono text-[#8a827a] uppercase">Commits</span>
                <p className="text-2xl font-bold text-[#1a1816] font-mono mt-1">195</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7]">
                <span className="text-xs font-mono text-[#8a827a] uppercase">Code</span>
                <p className="text-2xl font-bold text-[#1a1816] font-mono mt-1">3,803</p>
                <span className="text-xs text-[#8a827a] block">lines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge - Pain points with severity */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Problem</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">The Challenge</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Manual data entry processes consuming months of staff time and introducing critical errors.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-2.5">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5dfd7] hover:border-[#c4b0a0] transition-colors"
                >
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${severityColors[point.severity as keyof typeof severityColors]}`}
                  >
                    {point.severity}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-[#1a1816]">{point.title}</span>
                    <p className="text-xs text-[#5a524a] mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Pipeline */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Solution</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Processing Pipeline</h2>
            </div>
            <div className="hidden sm:block text-sm text-[#8a827a]">{workflowCards.length} stages</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workflowCards.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-5 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] ${index === 2 ? "md:col-span-1" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ede8e1] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={card.icon} className="text-[#3a322a] text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#1a1816]">{card.title}</h3>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200/50">
                        {card.status}
                      </span>
                    </div>
                    <code className="block text-[10px] font-mono text-[#8a827a] bg-[#f0ebe4] px-2 py-0.5 rounded mt-1.5">
                      {card.command}
                    </code>
                    <p className="text-xs text-[#5a524a] leading-relaxed mt-1.5">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovations - List style */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Innovation</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Technical Innovations</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Key technical breakthroughs that enabled the transformation.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              {innovations.map((innovation, index) => {
                const [title, description] = innovation.split(" — ");
                return (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5dfd7]">
                    <span className="text-xs font-mono font-bold text-[#c4b0a0] w-6 flex-shrink-0">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-[#1a1816]">{title}</span>
                      <p className="text-xs text-[#5a524a] mt-0.5">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Impact - Metrics grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Results</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Impact & Results</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#e5dfd7] flex items-start gap-4">
                <span className="text-2xl font-bold text-[#1a1816] font-mono tracking-tight flex-shrink-0">
                  {point.metric}
                </span>
                <div>
                  <span className="text-sm font-semibold text-[#1a1816]">{point.label}</span>
                  <p className="text-xs text-[#5a524a] mt-0.5">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features - Clean list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Delivery</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Key Features</h2>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e5dfd7] overflow-hidden">
              <div className="divide-y divide-[#f0ebe4]">
                {keyFeatures.slice(0, 8).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 hover:bg-[#faf8f5] transition-colors">
                    <span className="text-xs font-mono font-bold text-[#c4b0a0] w-8 flex-shrink-0">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#2d2822]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with repo link */}
        <div className="pt-12 border-t border-[#e5dfd7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-xs text-[#8a827a] font-mono tracking-wider">
                Python 3 · SQLite · Multi-threading · UML
              </span>
            </div>
            <a
              href="https://github.com/MidHunterX/Scholar-CAP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2d2822] hover:text-[#1a1816] transition-colors flex items-center gap-2"
            >
              View Repository
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] text-[#8a827a]" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
