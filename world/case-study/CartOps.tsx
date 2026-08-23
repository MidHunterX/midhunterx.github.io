import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faListCheck,
  faCalculator,
  faPercent,
  faClock,
  faChartLine,
  faMobileScreenButton,
  faLayerGroup,
  faCheck,
  faHand,
} from "@fortawesome/free-solid-svg-icons";

export default function CartOpsCaseStudy() {
  const stats = [
    { value: "10+", label: "Core Features" },
    { value: "2", label: "Keypad Layouts" },
    { value: "100%", label: "Data Entry Flexibility" },
  ];

  const phases = [
    {
      name: "Alpha",
      title: "General Operations",
      items: ["CRUD purchases & groups", "Set budgets", "Reusable items", "Currency & theme"],
      color: "bg-[#2d2822]",
    },
    {
      name: "Bravo",
      title: "Operator QoL",
      items: ["Autocompletion", "Item suggestions", "Price/quantity toggle", "Keypad variants"],
      color: "bg-[#5a4e3e]",
    },
    {
      name: "Charlie",
      title: "Intelligence & Analytics",
      items: ["Purchase history", "Price history graphs", "Monthly spend tracking", "Analytics on autocomplete"],
      color: "bg-[#8a7a66]",
    },
    {
      name: "Delta",
      title: "Polish",
      items: ["Discount calculator", "Image viewer", "Haptics", "Checklist mode"],
      color: "bg-[#b8a898]",
    },
    {
      name: "Echo",
      title: "Future Operations",
      items: ["Budget percentage view", "Pack mode (long press)", "De-prioritized tax rates"],
      color: "bg-[#d4c8bc]",
    },
  ];

  const features = [
    {
      icon: faListCheck,
      title: "Dynamic & Structured Lists",
      description:
        "Choose between a cognitively familiar dynamic list that adapts to your inputs, or a structured list for predictable, organized data entry.",
      outcome: "Reduces visual noise, speeds up entry.",
    },
    {
      icon: faPercent,
      title: "Percentage Mode",
      description:
        "Temporarily view all prices as percentages of your budget, helping you instantly gauge the impact of each item on your overall spending.",
      outcome: "Better budget awareness at a glance.",
    },
    {
      icon: faCalculator,
      title: "Discount & Unit Price Calculators",
      description:
        "Real-time discount calculators allow you to input listing price, discount, and see selling price instantly. Unit price calculator helps you find the best deal per weight.",
      outcome: "Eliminates mental math, ensures accurate data.",
    },
    {
      icon: faMobileScreenButton,
      title: "Two Keypad Layouts",
      description:
        "Choose between Calculator (bottom-up) and Telephone (top-down) layouts to match your muscle memory and reduce input errors.",
      outcome: "Faster, more comfortable data entry.",
    },
    {
      icon: faHand,
      title: "Haptic Feedback",
      description:
        "Every keypress on the numpad provides tactile feedback, reducing the need for visual confirmation and speeding up the input loop.",
      outcome: "Faster, more confident data entry.",
    },
    {
      icon: faChartLine,
      title: "Price History Analytics",
      description:
        "When you autocomplete an item, its price history graph appears, giving you a bird's eye view of price fluctuations and trends.",
      outcome: "Informed purchasing decisions.",
    },
    {
      icon: faClock,
      title: "Progressive Disclosure Onboarding",
      description:
        "Features are introduced gradually: first just a simple add button, then autocomplete, then analytics, keeping the learning curve gentle.",
      outcome: "Users adopt advanced features naturally.",
    },
    {
      icon: faLayerGroup,
      title: "Groups for Organized Shopping",
      description:
        "Create purchase groups (e.g., by store) to keep items separate, each with its own autocomplete and analytics, perfect for multi-store trips.",
      outcome: "Organized tracking across contexts.",
    },
  ];

  const userOutcomes = [
    "Reduced cognitive load during shopping — focus on products, not running totals",
    "Accurate price comparisons with unit price calculator (e.g., finding the best pack size)",
    "Historical data reveals pricing trends, allowing you to spot patterns and save money",
    "Flexible data entry accommodates spontaneous or planned shopping styles",
    "Clear visual feedback (haptics, animations) makes the app feel responsive and reliable",
    "Progressive disclosure ensures users grow into advanced features without overwhelm",
  ];

  const techStack = ["Flutter", "Dart", "SQLite", "Drift (ORM)", "Provider (State)"];

  return (
    <main className="bg-[#f7f4f0] min-h-[100dvh]">
      {/* Hero - Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f7f4f0] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#d4cec4] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              <span className="text-xs font-mono tracking-wider text-[#5a524a] uppercase">Mobile App</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Cart
              <br />
              Ops
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              Your personal commerce operator toolset — cognitive delegation of financial resource management via
              technological assistance.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">{stat.value}</span>
                  <span className="text-xs text-[#8a827a] font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs bg-[#ede8e1] rounded-full text-[#3a322a] font-medium border border-[#e5dfd7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="relative bg-[#2d2822] order-1 lg:order-2 min-h-[60dvh] lg:min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="relative z-10 text-center px-8">
            <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faShoppingCart} className="text-6xl lg:text-7xl text-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                <span className="block text-white/80 text-sm font-mono font-bold">2</span>
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Keypad layouts</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                <span className="block text-white/80 text-sm font-mono font-bold">3</span>
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">List modes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">
        {/* The Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Problem</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">
              Cognitive Overload at the Checkout
            </h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Shopping with a budget means constantly calculating running totals — distracting you from the actual
              experience and leading to overspending or anxiety.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e5dfd7]">
                <span className="text-xs font-mono font-bold text-[#c4b0a0] w-6 flex-shrink-0">01</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">Mental Arithmetic</span>
                  <p className="text-xs text-[#5a524a] mt-0.5">
                    Constantly adding prices in your head while shopping distracts from product selection and enjoyment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e5dfd7]">
                <span className="text-xs font-mono font-bold text-[#c4b0a0] w-6 flex-shrink-0">02</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">Missing the Best Deal</span>
                  <p className="text-xs text-[#5a524a] mt-0.5">
                    Comparing unit prices across different pack sizes requires manual calculation, often skipped in the
                    moment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e5dfd7]">
                <span className="text-xs font-mono font-bold text-[#c4b0a0] w-6 flex-shrink-0">03</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">No Historical Insight</span>
                  <p className="text-xs text-[#5a524a] mt-0.5">
                    Without tracking, you cannot spot price trends or know if a discount is genuinely good compared to
                    past purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution - Phases Timeline */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Solution</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Progressive Feature Rollout</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]"
              >
                <div className={`h-1 w-12 rounded-full mb-3 ${phase.color}`}></div>
                <span className="text-xs font-mono text-[#8a827a]">{phase.name}</span>
                <h4 className="text-sm font-bold text-[#1a1816] mt-1">{phase.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-[#5a524a] flex items-start gap-1.5">
                      <span className="text-[#c4b0a0]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5a524a] mt-6 max-w-3xl">
            Features are introduced gradually — first simple purchases, then autocomplete, then analytics — so users
            naturally adopt advanced tools without overwhelm.
          </p>
        </div>

        {/* Key Features - Bento Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Features</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">User-Facing Capabilities</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={feature.icon} className="text-[#3a322a]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a1816]">{feature.title}</h3>
                    <p className="text-sm text-[#5a524a] leading-relaxed mt-1">{feature.description}</p>
                    <div className="mt-2 inline-block bg-teal-50 px-3 py-1 rounded-full border border-teal-200/50">
                      <span className="text-xs font-medium text-teal-700">{feature.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Impact</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Real-World Outcomes</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              How Cart Ops changes the shopping experience for the better.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-3">
              {userOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#e5dfd7]">
                  <FontAwesomeIcon icon={faCheck} className="text-teal-600 mt-0.5 text-sm" />
                  <span className="text-sm text-[#2d2822]">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-24 bg-[#ede8e1] rounded-3xl p-8 md:p-12 border border-[#d4cec4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Philosophy</span>
              <h3 className="text-2xl font-bold text-[#1a1816] mt-1">Cognitive Delegation</h3>
              <p className="text-sm text-[#5a524a] leading-relaxed mt-3">
                The app is designed to offload mental arithmetic, price comparison, and trend analysis to technology,
                freeing your mind to focus on the shopping experience itself.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#8a827a] w-6">1</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">Progressive Disclosure</span>
                  <p className="text-xs text-[#5a524a]">
                    Features appear only when relevant, reducing initial complexity.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#8a827a] w-6">2</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">Muscle Memory Respect</span>
                  <p className="text-xs text-[#5a524a]">Two keypad layouts and haptic feedback match user habits.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#8a827a] w-6">3</span>
                <div>
                  <span className="text-sm font-medium text-[#1a1816]">Flexibility Over Rigidity</span>
                  <p className="text-xs text-[#5a524a]">
                    Every input is optional — spontaneous or planned, all workflows supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#e5dfd7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs text-[#8a827a] font-mono tracking-wider">
              Flutter · Dart · SQLite · Drift · Provider
            </span>
            <span className="text-xs text-[#c4b0a0]">Personal commerce operator toolset</span>
          </div>
        </div>
      </div>
    </main>
  );
}
