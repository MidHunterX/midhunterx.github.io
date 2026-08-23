import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCalculator,
  faChartLine,
  faLayerGroup,
  faTag,
  faHistory,
  faPercentage,
  faExternalLinkAlt,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

export default function CartOpsCaseStudy() {
  const features = [
    {
      icon: faCalculator,
      title: "Numpad with Variants",
      description: "Calculator (bottom-to-top) and Telephone (top-to-bottom) layouts with haptic feedback for rapid data entry.",
    },
    {
      icon: faLayerGroup,
      title: "Purchase Groups",
      description: "Organize purchases by store or category with separate item histories and autocomplete per group.",
    },
    {
      icon: faChartLine,
      title: "Price History Analytics",
      description: "Per-item price trends, graphs on autocomplete, and monthly spend tracking with percentage view.",
    },
    {
      icon: faHistory,
      title: "Smart Autocomplete",
      description: "Learns from purchase history, auto-fills item details (name, price, discount, image) as you type.",
    },
    {
      icon: faPercentage,
      title: "Discount & Unit Calculator",
      description: "Dedicated modal for calculating discounts (listing vs. selling) and unit price from total/quantity.",
    },
    {
      icon: faTag,
      title: "Checklist & Pack Modes",
      description: "Toggle list for checking off items, and long-press to enter pack mode for lossless unit/weight entry.",
    },
  ];

  const phases = [
    { name: "ALPHA", label: "General Operations", items: ["Currency symbol", "Theme colors", "Weight unit", "CRUD purchases & groups", "Budget per purchase", "CRUD items"] },
    { name: "BRAVO", label: "Quality of Life", items: ["Autocomplete", "Item suggestions", "Price/quantity toggle", "Numpad UI variants"] },
    { name: "CHARLIE", label: "Advanced Operations", items: ["Purchase history", "Price history graph", "Monthly spend", "Analytics on autocomplete"] },
    { name: "DELTA", label: "Polish", items: ["Discount modal", "Image viewer", "Haptics", "Checklist mode", "Auto-detect defaults"] },
  ];

  const techStack = ["Flutter", "Dart", "SQLite", "Drift", "Material 3"];

  const impactStats = [
    { value: "4", label: "Phases" },
    { value: "20+", label: "Features" },
    { value: "100%", label: "Open Source" },
    { value: "2", label: "Keypad Layouts" },
  ];

  return (
    <main className="bg-[#f7f4f0] min-h-[100dvh]">
      {/* Hero - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f7f4f0] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#d4cec4] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b5e4e]"></span>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Flutter Mobile App</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Cart
              <br />
              Ops
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              Advanced commerce operator toolset for cognitive delegation of financial resource management.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">4</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Phases</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">20+</span>
                <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">Features</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 text-xs bg-[#ede8e1] rounded-full text-[#3a322a] font-medium border border-[#e5dfd7]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Visual Area */}
        <div className="relative bg-[#2d2822] order-1 lg:order-2 min-h-[60dvh] lg:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10 text-center px-8">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faShoppingCart} className="text-6xl lg:text-7xl text-white/40" />
            </div>
            <div className="max-w-xs mx-auto">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-sm font-mono font-bold">2</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Keypads</span>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                  <span className="block text-white/80 text-sm font-mono font-bold">100%</span>
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-[#e5dfd7] text-center">
              <span className="block text-3xl font-bold text-[#1a1816] font-mono tracking-tight">{stat.value}</span>
              <p className="text-sm text-[#5a524a] mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Overview - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Context</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">
              Project Overview
            </h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              A mobile-first shopping calculator that evolves into a full commerce intelligence tool, blending spontaneity with planning.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#ede8e1] rounded-2xl p-6 border border-[#d4cec4]">
              <span className="text-xs font-mono text-[#6b5e4e] uppercase">Philosophy</span>
              <p className="text-[#1a1816] font-medium mt-1">Do one thing and do it well — with progressive disclosure for zero cognitive friction.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7]">
                <span className="text-xs font-mono text-[#8a827a] uppercase">Platform</span>
                <p className="text-lg font-bold text-[#1a1816] mt-1">Android</p>
                <span className="text-xs text-[#8a827a] block">Flutter</span>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7]">
                <span className="text-xs font-mono text-[#8a827a] uppercase">Release</span>
                <p className="text-lg font-bold text-[#1a1816] mt-1">Open Source</p>
                <span className="text-xs text-[#8a827a] block">MIT License</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Problem / Solution - dual column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div>
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Problem</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a1816] mt-1 mb-3">The Challenge</h2>
            <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7] space-y-3">
              <p className="text-sm text-[#5a524a] leading-relaxed">
                Shopping with a budget is stressful — constant mental arithmetic distracts from enjoying the experience.
              </p>
              <p className="text-sm text-[#5a524a] leading-relaxed">
                Existing apps are either too simple (just price tracking) or too bloated (full budgeting suites), rarely offering the right balance.
              </p>
              <p className="text-sm text-[#5a524a] leading-relaxed">
                Most lack proper discount handling, unit price calculation, or historical analytics.
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Solution</span>
            <h2 className="text-2xl font-bold tracking-tight text-[#1a1816] mt-1 mb-3">The Approach</h2>
            <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7] space-y-3">
              <p className="text-sm text-[#5a524a] leading-relaxed">
                A modular, progressive toolset that adapts to user behavior — from simple price entry to advanced analytics.
              </p>
              <p className="text-sm text-[#5a524a] leading-relaxed">
                Every feature is optional, with sane defaults and clear visual feedback (haptics, color coding, placeholders).
              </p>
              <p className="text-sm text-[#5a524a] leading-relaxed">
                Data is stored locally with full history, enabling price trends, discount analysis, and spend insights.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid - Bento style */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Features</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Core Capabilities</h2>
            </div>
            <div className="hidden sm:block text-sm text-[#8a827a]">
              {features.length} tools
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={feature.icon} className="text-[#3a322a] text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1816]">{feature.title}</h3>
                    <p className="text-sm text-[#5a524a] leading-relaxed mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phases - Timeline style */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Development</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Phased Rollout</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-[#e5dfd7]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-[#6b5e4e]">{phase.name}</span>
                  <span className="text-xs text-[#8a827a]">—</span>
                  <span className="text-xs font-medium text-[#1a1816]">{phase.label}</span>
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-[#5a524a] flex items-start gap-2">
                      <span className="text-[#c4b0a0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* UX Philosophy - Quote + Principles */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Design</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">UX Philosophy</h2>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <blockquote className="bg-white rounded-2xl p-6 border-l-4 border-[#6b5e4e] italic text-[#1a1816]">
              &quot;Do one thing and do it well — but let the user discover depth at their own pace.&quot;
            </blockquote>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-sm font-semibold text-[#1a1816]">Progressive Disclosure</span>
                <p className="text-xs text-[#5a524a] mt-1">Start simple, unlock autocomplete, then analytics — no onboarding forced.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-sm font-semibold text-[#1a1816]">Cognitive Offloading</span>
                <p className="text-xs text-[#5a524a] mt-1">Haptics, color coding, and smart defaults reduce mental load.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-sm font-semibold text-[#1a1816]">Modal vs. Inline</span>
                <p className="text-xs text-[#5a524a] mt-1">Discount and unit calculators available both as modal and inline for power users.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#e5dfd7]">
                <span className="block text-sm font-semibold text-[#1a1816]">Empty States Matter</span>
                <p className="text-xs text-[#5a524a] mt-1">Positive, encouraging messages avoid judgment and guide action.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Clean */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Stack</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Technology</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Flutter", "Dart", "SQLite", "Drift"].map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#e5dfd7] text-center">
                <span className="text-sm font-semibold text-[#1a1816]">{tech}</span>
                <p className="text-xs text-[#8a827a] mt-1">{
                  i === 0 ? "UI Framework" :
                  i === 1 ? "Language" :
                  i === 2 ? "Local Database" :
                  "ORM"
                }</p>
              </div>
            ))}
          </div>
        </div>

        {/* Known Issues - Honest */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Transparency</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Known Limitations</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7] flex items-start gap-3">
              <FontAwesomeIcon icon={faBug} className="text-[#6b5e4e] mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-[#1a1816]">Snackbar Z-index</span>
                <p className="text-xs text-[#5a524a] mt-0.5">Errors hidden behind BottomSheet due to Flutter issue #63254.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e5dfd7] flex items-start gap-3">
              <FontAwesomeIcon icon={faBug} className="text-[#6b5e4e] mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-[#1a1816]">Autocomplete Quirk</span>
                <p className="text-xs text-[#5a524a] mt-0.5">Uses last created not last purchased — manual date override can cause stale data.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#e5dfd7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-xs text-[#8a827a] font-mono tracking-wider">
                Flutter · Dart · SQLite · Drift · Material 3
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/MidHunterX/Cart-Ops"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2d2822] hover:text-[#1a1816] transition-colors flex items-center gap-2"
              >
                GitHub
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] text-[#8a827a]" />
              </a>
              <span className="text-xs text-[#c4b0a0]">Open Source · MIT</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
