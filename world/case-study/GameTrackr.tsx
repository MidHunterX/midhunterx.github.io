import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faPalette,
  faPlug,
  faKeyboard,
  faMobileAlt,
  faRocket,
  faShare,
  faMapMarkerAlt,
  faLink,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function GameTrackrCaseStudy() {
  const stats = [
    { value: "162", description: "Commits" },
    { value: "1,418", description: "LOC" },
    { value: "7", description: "Technologies" },
    { value: "100%", description: "Growth Achieved" },
  ];

  const originalFeatures = [
    "Vanilla HTML/CSS/JavaScript",
    "Manual DOM manipulation",
    "Basic flexbox layouts",
    "Simple sorting functionality",
    "No build tools or frameworks",
  ];

  const modernFeatures = [
    "Angular 18 framework",
    "TypeScript type safety",
    "Component-based architecture",
    "IGDB API integration",
    "Figma-designed UI/UX",
    "Performance optimizations",
    "Responsive & accessible",
  ];

  const features = [
    {
      icon: faPalette,
      title: "Design-First Approach",
      description:
        "Complete UI/UX designs in Figma before writing code, ensuring cohesive visual language and intuitive user flows",
    },
    {
      icon: faPlug,
      title: "IGDB API Integration",
      description:
        "Internet Game Database API integration to fetch real game data, cover art, and metadata automatically",
    },
    {
      icon: faKeyboard,
      title: "Keyboard Navigation",
      description:
        "Full Vimium/Tridactyl support for keyboard-first navigation, making the app accessible to power users",
    },
    {
      icon: faMobileAlt,
      title: "Responsive Design",
      description: "Mobile-first approach with tablet and desktop optimizations, ensuring great UX across all devices",
    },
    {
      icon: faRocket,
      title: "Performance Optimization",
      description: "Lazy loading images, route data passing to prevent reloads, pre-rendered gaussian blur backgrounds",
    },
    {
      icon: faShare,
      title: "Social Media Ready",
      description: "OpenGraph and Twitter Card metadata for rich link previews when sharing game pages",
    },
    {
      icon: faMapMarkerAlt,
      title: "Custom Scroll Memory",
      description: "Maintains user scroll position across sidebar navigation for seamless browsing experience",
    },
    {
      icon: faLink,
      title: "Clean URL Architecture",
      description: "Navigation without ID parameters in URLs to prevent history spam while passing data between routes",
    },
  ];

  const techStack = [
    { name: "Angular 18", purpose: "Modern web application framework with TypeScript" },
    { name: "TypeScript", purpose: "Type-safe development with compile-time error checking" },
    { name: "SASS", purpose: "Advanced CSS with variables, nesting, and mixins" },
    { name: "TailwindCSS", purpose: "Utility-first CSS framework for rapid UI development" },
    { name: "DaisyUI", purpose: "Component library built on Tailwind" },
    { name: "Font Awesome", purpose: "Icon library with Angular integration" },
    { name: "Python", purpose: "Build scripts and data processing utilities" },
    { name: "Figma", purpose: "UI/UX design and prototyping" },
  ];

  const challenges = [
    {
      problem: "CSS blur filters on background images caused severe performance issues on mobile devices",
      solution: "Pre-process images to generate raster gaussian blur and serve as static assets",
      result: "60fps scrolling",
    },
    {
      problem: "Traditional routing with game IDs created excessive browser history entries",
      solution: "withComponentInputBinding() to pass data directly without URL parameters",
      result: "Clean navigation state",
    },
    {
      problem: "Users lost scroll position when navigating between different games",
      solution: "Custom scroll position tracking that remembers exact offset",
      result: "Seamless browsing",
    },
  ];

  const impactPoints = [
    {
      label: "Architecture",
      desc: "From procedural scripts to component-based design with clear separation of concerns",
    },
    {
      label: "Type Safety",
      desc: "Migrated from JavaScript to TypeScript, catching errors at compile time instead of runtime",
    },
    {
      label: "Performance",
      desc: "Implemented lazy loading, route optimization, and pre-rendered assets for 60fps experiences",
    },
    { label: "UX Design", desc: "Evolved from browser-designed UI to Figma-prototyped interfaces with user testing" },
    { label: "Accessibility", desc: "Added keyboard navigation, responsive design, and semantic HTML" },
    { label: "Integration", desc: "Connected external APIs for dynamic data instead of static JSON files" },
    { label: "Social Features", desc: "Implemented OpenGraph metadata for rich social sharing" },
  ];

  return (
    <main className="bg-[#f0ece6] min-h-[100dvh]">
      {/* Hero - Split Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f0ece6] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#c4b8a8] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b5e4e]"></span>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Personal Project</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Game
              <br />
              Trackr
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              Rebuilding my first web project with Angular 18, modern architecture, and design-first development.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://github.com/MidHunterX/Game-Trackr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1a1816] text-white rounded-full text-sm font-medium transition-all hover:bg-[#2d2822] active:scale-[0.97]"
              >
                View Repository
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://www.figma.com/design/8O0MrwPahKFqxLz0STEKD6/Game-Trackr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#c4b8a8] rounded-full text-sm font-medium text-[#2d2822] transition-all hover:bg-[#e5ddd4] active:scale-[0.97]"
              >
                Figma Design
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs opacity-60" />
              </a>
            </div>

            <div className="flex gap-8 pt-8 border-t border-[#d4c8ba]">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index}>
                  <span className="block text-2xl font-bold text-[#1a1816] font-mono tracking-tight">{stat.value}</span>
                  <span className="text-xs text-[#8a7a6a] font-medium uppercase tracking-wider">
                    {stat.description}
                  </span>
                </div>
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
            <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faGamepad} className="text-6xl lg:text-7xl text-white/30" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
              {["Angular", "TypeScript", "Figma", "SASS", "Tailwind", "Python"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white/60 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">
        {/* Journey - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1">
            <span className="text-xs font-mono tracking-wider text-[#8a7a6a] uppercase">Evolution</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">From First Code to Modern Stack</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Revisiting my first project with everything I&apos;ve learned since 2020.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#8a7a6a]">2020</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4b8a8]"></span>
                  <span className="text-xs font-medium text-[#5a524a]">Original</span>
                </div>
                <ul className="space-y-1.5">
                  {originalFeatures.slice(0, 5).map((feature, i) => (
                    <li key={i} className="text-sm text-[#5a524a] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#d4c8ba]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#2d2822] rounded-2xl p-6 border border-[#3a322a]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#8a7a6a]">2024</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6b5e4e]"></span>
                  <span className="text-xs font-medium text-[#c4b8a8]">Modern</span>
                </div>
                <ul className="space-y-1.5">
                  {modernFeatures.slice(0, 5).map((feature, i) => (
                    <li key={i} className="text-sm text-[#c4b8a8] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#6b5e4e]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid - Bento Style */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a7a6a] uppercase">Features</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Key Improvements</h2>
            </div>
            <div className="hidden sm:block text-sm text-[#8a7a6a]">{features.length} implementations</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white rounded-3xl p-7 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a1816]/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPalette} className="text-[#1a1816]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1816]">Design-First Approach</h3>
              </div>
              <p className="text-[#5a524a] text-sm leading-relaxed max-w-lg">
                Complete UI/UX designs in Figma before writing code, ensuring cohesive visual language and intuitive
                user flows
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlug} className="text-[#1a1816]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1816]">IGDB API</h3>
              </div>
              <p className="text-[#5a524a] text-sm leading-relaxed">
                Fetch real game data, cover art, and metadata automatically
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center">
                  <FontAwesomeIcon icon={faKeyboard} className="text-[#1a1816]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1816]">Keyboard Nav</h3>
              </div>
              <p className="text-[#5a524a] text-sm leading-relaxed">
                Full Vimium/Tridactyl support for keyboard-first navigation
              </p>
            </div>

            <div className="md:col-span-2 bg-white rounded-3xl p-7 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center">
                  <FontAwesomeIcon icon={faRocket} className="text-[#1a1816]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1816]">Performance Optimization</h3>
              </div>
              <p className="text-[#5a524a] text-sm leading-relaxed max-w-xl">
                Lazy loading images, route data passing to prevent reloads, pre-rendered gaussian blur backgrounds
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#d4c8ba] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#ede8e1] flex items-center justify-center">
                  <FontAwesomeIcon icon={faShare} className="text-[#1a1816]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1816]">Social Ready</h3>
              </div>
              <p className="text-[#5a524a] text-sm leading-relaxed">
                OpenGraph and Twitter Card metadata for rich link previews
              </p>
            </div>
          </div>
        </div>

        {/* Challenges - Problem/Solution pairs */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a7a6a] uppercase">Engineering</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Challenges & Solutions</h2>
            </div>
          </div>

          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-2xl p-6 border border-[#d4c8ba]"
              >
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-[#8a7a6a]">Problem</span>
                  <p className="text-sm text-[#1a1816] font-medium mt-1">{item.problem}</p>
                </div>
                <div className="md:col-span-1">
                  <span className="text-xs font-mono text-[#8a7a6a]">Solution</span>
                  <p className="text-sm text-[#1a1816] font-medium mt-1">{item.solution}</p>
                </div>
                <div className="md:col-span-1 flex items-center">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-[#ede8e1] rounded-full text-[#3a322a]">
                    {item.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Table */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a7a6a] uppercase">Stack</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Technology Architecture</h2>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#d4c8ba] overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#ede8e1]">
                    <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8a7a6a]">
                      Technology
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8a7a6a]">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((tech, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#ede8e1] last:border-0 hover:bg-[#f8f5f0] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium text-[#1a1816]">{tech.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#5a524a]">{tech.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <span className="text-xs font-mono tracking-wider text-[#8a7a6a] uppercase">Results</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Impact & Growth</h2>
              <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
                Measurable improvement across every dimension of development
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {impactPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#d4c8ba]">
                    <div className="w-8 h-8 rounded-lg bg-[#ede8e1] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-mono font-bold text-[#1a1816]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#1a1816]">{point.label}</span>
                      <p className="text-xs text-[#5a524a] leading-relaxed mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-[#d4c8ba]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/MidHunterX/Game-Trackr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2d2822] hover:text-[#1a1816] transition-colors flex items-center gap-2"
              >
                GitHub
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] text-[#8a7a6a]" />
              </a>
              <a
                href="https://www.figma.com/design/8O0MrwPahKFqxLz0STEKD6/Game-Trackr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2d2822] hover:text-[#1a1816] transition-colors flex items-center gap-2"
              >
                Figma
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] text-[#8a7a6a]" />
              </a>
              <a
                href="https://midhunterx.github.io/Played-Games-List/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2d2822] hover:text-[#1a1816] transition-colors flex items-center gap-2"
              >
                Original
                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px] text-[#8a7a6a]" />
              </a>
            </div>
            <span className="text-xs text-[#8a7a6a] font-mono tracking-wider">
              Angular 18 · TypeScript · TailwindCSS · IGDB API
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
