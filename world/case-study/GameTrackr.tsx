import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faArrowRight,
  faCheck,
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
    { value: "1,418", description: "Lines of Code" },
    { value: "7", description: "Technologies" },
    { value: "100%", description: "Growth Achieved" },
  ];

  const originalFeatures = [
    "Vanilla HTML/CSS/JavaScript",
    'JSON as "database"',
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

  const originalGoals = [
    "Learn proper directory structure and code organization",
    "Use JavaScript to dynamically render HTML from data",
    "Connect a JSON file as a simple database",
    "Style elements with vanilla CSS (no frameworks)",
    "Implement responsive design with flexbox and media queries",
    "Add basic sorting functionality",
  ];

  const features = [
    {
      icon: faPalette,
      title: "Design-First Approach",
      description:
        "Created complete UI/UX designs in Figma before writing code, ensuring cohesive visual language and intuitive user flows",
    },
    {
      icon: faPlug,
      title: "IGDB API Integration",
      description:
        "Integrated Internet Game Database API to fetch real game data, cover art, and metadata automatically",
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
    { name: "TypeScript (38.8%)", purpose: "Type-safe development with compile-time error checking" },
    { name: "SASS (4.1%)", purpose: "Advanced CSS with variables, nesting, and mixins" },
    { name: "TailwindCSS", purpose: "Utility-first CSS framework for rapid UI development" },
    { name: "DaisyUI", purpose: "Component library built on Tailwind" },
    { name: "Font Awesome", purpose: "Icon library with Angular integration" },
    { name: "Python (25.1%)", purpose: "Build scripts and data processing utilities" },
    { name: "Figma", purpose: "UI/UX design and prototyping" },
  ];

  const optimizations = [
    "Pre-rendered Gaussian Blur: Generate raster backgrounds instead of CSS filters to reduce GPU load and improve scrolling performance",
    "Lazy Loading Strategy: Images in cards and workspace icons load on-demand, reducing initial page weight",
    "Smart Data Passing: Route data is passed between components rather than refetched, eliminating redundant API calls",
    "Single Data Load: Application loads game data once and shares across components via service architecture",
    "Scroll Position Memory: Maintains exact scroll position when navigating through game details sidebar",
  ];

  const designBenefits = [
    "Experiment with layouts and visual hierarchies without code constraints",
    "Create a consistent design system with reusable components",
    "Get early feedback on UX flows before implementation",
    "Establish a clear visual direction for development",
  ];

  const angularFeatures = [
    "withInMemoryScrolling() for natural scroll behavior and anchor scrolling",
    "withRouterConfig() to enable same-URL navigation reloading",
    "resolveJsonModule in TypeScript config for clean JSON imports",
    "CommonModule integration for structural directives like *ngFor",
    "GitHub Pages deployment automation with angular-cli-ghpages",
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
    { label: "Integration", desc: "Connected external APIs (IGDB) for dynamic data instead of static JSON files" },
    { label: "Social Features", desc: "Implemented OpenGraph metadata for rich social sharing" },
  ];

  const badges = [
    { text: "162 commits of iterative improvement", color: "blue" },
    { text: "Complete API integration", color: "green" },
    { text: "Figma design system", color: "purple" },
    { text: "Performance optimizations", color: "orange" },
    { text: "Keyboard navigation", color: "blue" },
    { text: "Mobile responsive", color: "green" },
    { text: "Social media ready", color: "purple" },
    { text: "TypeScript type safety", color: "orange" },
  ];

  const techIcons = ["🅰️", "📘", "🎨", "💅", "🌊", "🐍"];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-600 px-8 py-16 text-white overflow-hidden">
        <div className="absolute text-9xl opacity-10 -right-12 -top-12 transform rotate-[-15deg]">🎮</div>
        <div className="relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-4">
            🎯 Personal Project Revamp
          </div>
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faGamepad} className="text-6xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Game Trackr</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-6 text-center max-w-4xl mx-auto">
            A Complete Angular Transformation: Rebuilding My First Web Project with Modern Architecture and Design
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-6">
            {techIcons.map((icon, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-lg flex items-center justify-center text-2xl border border-white/20"
                title={["Angular", "TypeScript", "Figma", "SASS", "TailwindCSS", "Python"][index]}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-900 text-white rounded-xl p-8 text-center transition-transform duration-300 hover:-translate-y-1 shadow-lg"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3">{stat.value}</h3>
              <p className="text-base opacity-95">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Journey Section */}
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-10 mb-12 border-l-8 border-amber-500">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">The Journey: From Beginner to Modern Web Developer</h2>
          <p className="text-amber-900 mb-8 text-lg">
            This project represents a full-circle moment in my development journey—taking my very first web development
            project and rebuilding it with everything I&apos;ve learned since then.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Original */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">📚 Original Project (2020)</h3>
              <p className="text-gray-600 italic mb-4">Learning the Fundamentals</p>
              <ul className="space-y-2">
                {originalFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700 border-b border-gray-200 py-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center text-6xl text-amber-500">
              <FontAwesomeIcon icon={faArrowRight} className="hidden lg:block" />
              <FontAwesomeIcon icon={faArrowRight} className="lg:hidden transform rotate-90" />
            </div>

            {/* Modern */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">🚀 Game Trackr (2024)</h3>
              <p className="text-gray-600 italic mb-4">Modern Architecture</p>
              <ul className="space-y-2">
                {modernFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700 border-b border-gray-200 py-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Game Trackr is a comprehensive rebuild of my first-ever web development project—a simple game library
            tracker. What started as a learning exercise in basic HTML, CSS, and JavaScript has evolved into a modern,
            feature-rich Angular application showcasing professional development practices, API integration, and
            thoughtful UX design.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This project demonstrates not just technical growth, but also a deeper understanding of user experience,
            performance optimization, accessibility, and modern web architecture patterns.
          </p>
        </section>

        {/* The Original Vision */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            The Original Vision
          </h2>
          <div className="bg-red-50 rounded-xl p-8 border-l-8 border-red-500">
            <h3 className="text-2xl font-bold text-red-900 mb-4">What I Built First</h3>
            <p className="text-red-900 mb-4">
              My original project was intentionally simple—a way to track completed games using basic web technologies.
              The goals were foundational:
            </p>
            <ul className="space-y-2 text-red-900">
              {originalGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            It was raw, unpolished, and exactly what a beginner project should be—a foundation to build upon. Years
            later, I decided to revisit this project and demonstrate how far I&apos;d come.
          </p>
        </section>

        {/* The Modern Transformation */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            The Modern Transformation
          </h2>
          <div className="bg-green-50 rounded-xl p-8 border-l-8 border-green-500 mb-8">
            <h3 className="text-2xl font-bold text-green-900 mb-3">A Complete Architectural Redesign</h3>
            <p className="text-green-900">
              Rather than simply adding features to the original codebase, I started from scratch with modern best
              practices, professional tooling, and a user-centered design process.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-6">Key Improvements & Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-600 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-900">{feature.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Technical Architecture
          </h2>

          <h3 className="text-2xl font-bold text-blue-600 mb-4">Framework & Component Design</h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Built on Angular 18, the application follows component-based architecture with smart data flow patterns.
            Instead of the original&apos;s monolithic approach, each feature is encapsulated in reusable components with
            clear responsibilities.
          </p>

          <div className="bg-gradient-to-br from-slate-50 to-indigo-100 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Technology Stack</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left font-semibold">Technology</th>
                    <th className="p-4 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((tech, index) => (
                    <tr key={index} className="border-b border-gray-300 hover:bg-blue-50/50 transition-colors">
                      <td className="p-4">
                        <strong>{tech.name}</strong>
                      </td>
                      <td className="p-4 text-gray-700">{tech.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-4">Performance Optimizations</h3>
          <div className="bg-yellow-100 rounded-xl p-6">
            <ul className="space-y-3">
              {optimizations.map((opt, index) => (
                <li key={index} className="text-amber-900 leading-relaxed">
                  <strong>{opt.split(": ")[0]}:</strong> {opt.split(": ")[1]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Design Process
          </h2>
          <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-xl p-8 border-2 border-purple-500">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Figma-First Development</h3>
            <p className="text-purple-900 mb-4 leading-relaxed">
              Unlike my original project where I designed in the browser, Game Trackr started with comprehensive Figma
              mockups. This design-first approach allowed me to:
            </p>
            <ul className="space-y-2 text-purple-900 mb-6">
              {designBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <p className="text-purple-900">
              📄{" "}
              <a
                href="https://www.figma.com/design/8O0MrwPahKFqxLz0STEKD6/Game-Trackr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                View Complete Figma Design File →
              </a>
            </p>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Technical Challenges & Solutions
          </h2>

          <div className="space-y-6">
            {/* Challenge 1 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Challenge 1: Performance vs Visual Quality</h3>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 mb-3">
                <p className="text-red-900">
                  <strong>Problem:</strong> CSS blur filters on background images caused severe performance issues,
                  especially on mobile devices with lower-end GPUs. Scrolling was janky and battery consumption was
                  high.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-green-900">
                  <strong>Solution:</strong> Pre-process images to generate raster gaussian blur (19:6 aspect ratio,
                  height 180px, 15px blur) and serve them as static assets. This moved computation from runtime to build
                  time, resulting in smooth 60fps scrolling.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Challenge 2: Navigation Without History Spam</h3>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 mb-3">
                <p className="text-red-900">
                  <strong>Problem:</strong> Traditional routing with game IDs in URLs created excessive browser history
                  entries, making the back button frustrating to use.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-green-900">
                  <strong>Solution:</strong> Implemented Angular&apos;s{" "}
                  <code className="bg-slate-200 px-2 py-1 rounded text-blue-600">withComponentInputBinding()</code> to
                  pass data directly between components without URL parameters, while maintaining clean navigation
                  state.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Challenge 3: Scroll Position Persistence</h3>
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 mb-3">
                <p className="text-red-900">
                  <strong>Problem:</strong> Users browsing through game details lost their scroll position when
                  navigating between different games, forcing them to scroll back down repeatedly.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-green-900">
                  <strong>Solution:</strong> Built custom scroll position tracking that remembers exact scroll offset
                  when navigating through the sidebar, restoring it on return for seamless browsing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Development Highlights
          </h2>

          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <h4 className="text-xl font-bold text-blue-900 mb-3">🎯 Easter Egg Feature</h4>
            <p className="text-gray-600">
              Added a hidden easter egg that activates when refreshing any game details page—a fun detail that rewards
              exploration and adds personality to the application.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-4">Angular 18 Technical Implementation</h3>
          <p className="text-lg text-gray-700 mb-4">Leveraged Angular&apos;s latest features including:</p>
          <ul className="space-y-2 text-gray-600">
            {angularFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mt-1 flex-shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: feature.replace(
                      /`([^`]+)`/g,
                      '<code class="bg-slate-200 px-2 py-1 rounded text-blue-600 text-sm">$1</code>',
                    ),
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Impact & Results */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Impact & Results
          </h2>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 border-2 border-blue-600 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              From Learning Project to Professional Portfolio Piece
            </h3>
            <p className="text-blue-900 mb-6 leading-relaxed">
              This rebuild demonstrates measurable growth across every dimension of web development:
            </p>
            <ul className="space-y-3 text-blue-900">
              {impactPoints.map((point, index) => (
                <li key={index}>
                  <strong>{point.label}:</strong>{" "}
                  {point.desc.includes("procedural scripts to component-based design") ||
                  point.desc.includes("JavaScript to TypeScript") ||
                  point.desc.includes("lazy loading") ||
                  point.desc.includes("browser-designed UI to Figma") ||
                  point.desc.includes("keyboard navigation") ||
                  point.desc.includes("external APIs") ||
                  point.desc.includes("OpenGraph") ? (
                    <>
                      {
                        point.desc.split(
                          /(\bprocedural scripts to component-based design\b|\bJavaScript to TypeScript\b|\blazy loading, route optimization, and pre-rendered assets\b|\bbrowser-designed UI to Figma-prototyped interfaces\b|\bkeyboard navigation, responsive design, and semantic HTML\b|\bexternal APIs \(IGDB\) for dynamic data\b|\bOpenGraph metadata for rich social sharing\b)/,
                        )[0]
                      }
                      <span className="bg-yellow-200 px-2 py-1 rounded font-semibold text-amber-900">
                        {
                          point.desc.match(
                            /\b(procedural scripts to component-based design|JavaScript to TypeScript|lazy loading, route optimization, and pre-rendered assets|browser-designed UI to Figma-prototyped interfaces|keyboard navigation, responsive design, and semantic HTML|external APIs \(IGDB\) for dynamic data|OpenGraph metadata for rich social sharing)\b/,
                          )?.[0]
                        }
                      </span>
                      {
                        point.desc.split(
                          /\b(procedural scripts to component-based design|JavaScript to TypeScript|lazy loading, route optimization, and pre-rendered assets|browser-designed UI to Figma-prototyped interfaces|keyboard navigation, responsive design, and semantic HTML|external APIs \(IGDB\) for dynamic data|OpenGraph metadata for rich social sharing)\b/,
                        )[2]
                      }
                    </>
                  ) : (
                    point.desc
                  )}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-4">Key Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge, index) => {
              const colorMap: { [key: string]: string } = {
                blue: "bg-blue-600",
                green: "bg-green-600",
                purple: "bg-purple-600",
                orange: "bg-orange-500",
              };
              return (
                <span
                  key={index}
                  className={`px-4 py-2 ${colorMap[badge.color]} text-white rounded-full text-sm font-semibold`}
                >
                  {badge.text}
                </span>
              );
            })}
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 pb-3 border-b-4 border-blue-600 inline-block">
            Lessons Learned
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            This project taught me that true growth comes from revisiting old work with fresh perspectives. Building
            Game Trackr reinforced several critical lessons including the value of design-first development where
            prototyping in Figma prevented countless implementation dead-ends, the importance of performance
            considerations from day one rather than as an afterthought, and how component-based architecture scales far
            better than monolithic approaches.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I learned that modern frameworks like Angular provide more than just structure—they enforce best practices
            that lead to maintainable codebases. The experience of integrating external APIs taught me about error
            handling, rate limiting, and graceful degradation. Most importantly, I discovered that the best portfolio
            pieces often come from reimagining your earliest work, demonstrating clear growth trajectories to potential
            employers and collaborators.
          </p>
        </section>

        {/* Project Links */}
        <section className="bg-slate-50 rounded-xl p-8 text-center border-2 border-gray-300">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">🔗 Project Links</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://github.com/MidHunterX/Game-Trackr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg"
            >
              GitHub Repository <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </a>
            <a
              href="https://www.figma.com/design/8O0MrwPahKFqxLz0STEKD6/Game-Trackr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg"
            >
              Figma Design <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </a>
            <a
              href="https://midhunterx.github.io/Played-Games-List/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg"
            >
              Original Project <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">Angular 18 | TypeScript | SASS | TailwindCSS | IGDB API</p>
        </section>
      </div>
    </main>
  );
}
