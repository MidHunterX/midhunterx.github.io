import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCalendarAlt,
  faHashtag,
  faGlobe,
  faBook,
  faImage,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function NewspaperCaseStudy() {
  const timelineData = [
    {
      phase: "Discovery",
      duration: "Week 1-2",
      activities: ["Workflow audit", "Pain point mapping", "Stakeholder interviews"],
      color: "bg-[#2d2822]",
    },
    {
      phase: "Typography",
      duration: "Week 3-4",
      activities: ["Font evaluation", "Unicode migration", "Composer configuration"],
      color: "bg-[#6b5e4e]",
    },
    {
      phase: "Automation",
      duration: "Week 5-8",
      activities: ["Script development", "Page numbering", "Export pipeline"],
      color: "bg-[#a68b7a]",
    },
    {
      phase: "Deployment",
      duration: "Week 9",
      activities: ["Testing", "Training", "Go-live"],
      color: "bg-[#c4b0a0]",
    },
  ];

  const features = [
    {
      icon: faCalendarAlt,
      title: "Smart Date Management",
      description:
        "Automatic date calculation based on file modification time with manual override capability for special editions",
      impact: "Zero manual date entry",
    },
    {
      icon: faHashtag,
      title: "Dynamic Page Numbers",
      description:
        "Automated numbering system that updates dynamically when pages are reordered, excluding page 1 by design",
      impact: "Flexible reordering",
    },
    {
      icon: faGlobe,
      title: "Unicode Integration",
      description:
        "Native Unicode support replacing FML encoding, permanently solving the 'nda character' rendering issue",
      impact: "Cross-platform compatible",
    },
    {
      icon: faBook,
      title: "Typography Engine",
      description: "World Ready Paragraph Composer with Malayalam hyphenation dictionary for proper text breaking",
      impact: "Perfect justification",
    },
    {
      icon: faImage,
      title: "Auto Image Fitting",
      description: "Intelligent proportional cropping with automatic frame fitting options",
      impact: "Consistent visuals",
    },
    {
      icon: faBolt,
      title: "Export Automation",
      description: "JavaScript-based PDF and thumbnail generation with ISO date formatting",
      impact: "One-click publishing",
    },
  ];

  const problems = [
    "Manual date and page number management — every edition required manual entry and adjustment",
    "Performance degradation — artifact buildup caused InDesign to slow down significantly",
    "Encoding complexity — Unicode to FML conversion was required for Malayalam text, introducing the 'nda character' rendering issue",
    "Typography failures — improper word breaking when justifying Malayalam text",
    "Layout inflexibility — static page numbers prevented page reordering",
    "External dependencies — third-party applications needed for Inscript (ISM) input and encoding conversion",
    "Export inefficiencies — manual filename creation and thumbnail generation",
  ];

  const keyFeatures = [
    "Automatic date and day assignment based on last modified timestamp",
    "Smart content selection with Ctrl + A that excludes header elements",
    "Dynamic page numbering that persists through page reordering",
    "Preset object styles for consistent heading, cover pictures, and tags",
    "Intelligent image cropping with proportional frame fitting",
    "Self-resizing text elements with automatic padding",
    "Complete Unicode support for cross-platform compatibility",
    "World Ready Paragraph Composer preventing unwanted text breaks",
    "One-click ISO filename PDF export with automatic thumbnail generation",
  ];

  return (
    <main className="bg-[#f7f4f0] min-h-[100dvh]">
      {/* Hero - Split Layout with Editorial Feel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f7f4f0] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#d4cec4] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b5e4e]"></span>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Workflow Automation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Newspaper
              <br />
              Automation
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              Transforming a 5-hour manual publishing process into a 25-minute automated workflow.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div>
                <span className="block text-4xl font-bold text-[#1a1816] font-mono tracking-tight">92%</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Time Reduction</span>
              </div>
              <div className="w-px h-12 bg-[#e5dfd7]"></div>
              <div>
                <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">5h → 25m</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Per Edition</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["InDesign", "ExtendScript", "Unicode", "Malayalam"].map((tag, i) => (
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
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10 text-center px-8">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faNewspaper} className="text-6xl lg:text-7xl text-white/40" />
            </div>
            <div className="max-w-xs mx-auto">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-lg font-mono font-bold">7</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Bottlenecks</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-lg font-mono font-bold">5</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">
        {/* Process Timeline - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Process</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">From Audit to Automation</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Systematic approach to identifying bottlenecks and implementing solutions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`h-1 w-full rounded-full mb-3 ${item.color}`}></div>
                  <span className="text-xs font-mono text-[#8a827a]">{item.duration}</span>
                  <p className="text-sm text-[#1a1816] font-semibold mt-1">{item.phase}</p>
                  <ul className="mt-2 space-y-1">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="text-xs text-[#5a524a]">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Challenge - With numbered list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Problem</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">The Challenge</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              The existing newspaper production workflow was plagued with manual, repetitive tasks that consumed hours
              of valuable production time.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-2.5">
              {problems.map((problem, index) => {
                const [title, description] = problem.split(" — ");
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5dfd7] hover:border-[#c4b0a0] transition-colors"
                  >
                    <span className="text-xs font-mono font-bold text-[#8a827a] w-6 flex-shrink-0">
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

        {/* Solution Architecture - Feature Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Solution</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Technical Architecture</h2>
            </div>
            <div className="hidden sm:block text-sm text-[#8a827a]">{features.length} implementations</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={feature.icon} className="text-[#3a322a]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-[#1a1816]">{feature.title}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#f0ebe4] rounded-full text-[#6b5e4e]">
                        {feature.impact}
                      </span>
                    </div>
                    <p className="text-sm text-[#5a524a] leading-relaxed mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features - Clean list with monospace numbering */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Delivery</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Key Features</h2>
              <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
                Every feature designed to eliminate manual intervention and ensure consistency.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[#e5dfd7] overflow-hidden">
                <div className="divide-y divide-[#f0ebe4]">
                  {keyFeatures.map((feature, index) => (
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
        </div>

        {/* Impact - Clean metrics section */}
        <div className="mb-24 bg-[#ede8e1] rounded-3xl p-8 md:p-12 border border-[#d4cec4]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Impact</span>
              <h2 className="text-2xl font-bold tracking-tight text-[#1a1816] mt-1">Results Delivered</h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50">
                <span className="block text-3xl font-bold text-[#1a1816] font-mono">92%</span>
                <span className="text-sm text-[#5a524a]">Time reduction per edition</span>
                <span className="block text-xs text-[#8a827a] mt-1 font-mono">5 hours → 25 minutes</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50">
                <span className="block text-3xl font-bold text-[#1a1816] font-mono">7</span>
                <span className="text-sm text-[#5a524a]">Bottlenecks eliminated</span>
                <span className="block text-xs text-[#8a827a] mt-1 font-mono">Manual tasks automated</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50">
                <span className="block text-3xl font-bold text-[#1a1816] font-mono">5+</span>
                <span className="text-sm text-[#5a524a]">Third-party dependencies removed</span>
                <span className="block text-xs text-[#8a827a] mt-1 font-mono">Inscript, encoding tools</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50">
                <span className="block text-3xl font-bold text-[#1a1816] font-mono">100%</span>
                <span className="text-sm text-[#5a524a]">Unicode compatibility</span>
                <span className="block text-xs text-[#8a827a] mt-1 font-mono">Cross-platform text</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stack - Minimal table */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Stack</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Technical Stack</h2>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5dfd7] overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-2 gap-0 divide-x divide-[#f0ebe4]">
              <div>
                <div className="border-b border-[#f0ebe4] px-6 py-4">
                  <span className="text-xs font-mono tracking-wider text-[#8a827a]">Technology</span>
                </div>
                <div className="divide-y divide-[#f0ebe4]">
                  {["Adobe InDesign", "ExtendScript", "Unicode Standard", "Windows Inscript"].map((tech, i) => (
                    <div key={i} className="px-6 py-4">
                      <span className="text-sm font-medium text-[#1a1816]">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="border-b border-[#f0ebe4] px-6 py-4">
                  <span className="text-xs font-mono tracking-wider text-[#8a827a]">Purpose</span>
                </div>
                <div className="divide-y divide-[#f0ebe4]">
                  {["Layout & Design Platform", "Automation Scripting", "Text Encoding", "Malayalam Input"].map(
                    (purpose, i) => (
                      <div key={i} className="px-6 py-4">
                        <span className="text-sm text-[#5a524a]">{purpose}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#e5dfd7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs text-[#8a827a] font-mono tracking-wider">
              Adobe InDesign · ExtendScript · Unicode · Malayalam Typography
            </span>
            <span className="text-xs text-[#c4b0a0]">Workflow automation for daily newspaper production</span>
          </div>
        </div>
      </div>
    </main>
  );
}
