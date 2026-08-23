import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faCubes,
  faServer,
  faWandMagicSparkles,
  faCheck,
  faPlug,
  faWindowMaximize,
  faSliders,
  faFileCode,
  faExternalLinkAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectLauncherCaseStudy() {
  const stats = [
    { value: "15+", label: "Supported Technologies" },
    { value: "100%", label: "Auto-Detection" },
    { value: "1", label: "Command to Rule All" },
    { value: "∞", label: "Customizable Hooks" },
  ];

  const features = [
    {
      icon: faCubes,
      title: "Project Type Auto-Detection",
      description:
        "Automatically identifies your project type by scanning files and imports — no configuration needed for most projects.",
      outcome: "Zero-config for standard projects.",
    },
    {
      icon: faTerminal,
      title: "TMUX Session Orchestration",
      description:
        "Creates a full tmux session with dedicated windows for server, editor, and tools — each prepped with the right environment.",
      outcome: "Everything organized in one place.",
    },
    {
      icon: faServer,
      title: "Service Management",
      description:
        "Starts and stops systemd services (like PostgreSQL, Redis) only when needed, reducing background resource usage.",
      outcome: "System stays clean and focused.",
    },
    {
      icon: faWandMagicSparkles,
      title: "Smart Migration & Validation",
      description:
        "Detects pending database migrations and applies them automatically. Warns about un-migrated model changes on exit.",
      outcome: "No more forgotten migrations.",
    },
    {
      icon: faSliders,
      title: "Per-Project Configuration",
      description:
        "A simple `.runrc` file lets you override defaults — service lists, browser commands, environment variables, and even custom logic.",
      outcome: "Flexible enough for any workflow.",
    },
    {
      icon: faPlug,
      title: "Post-Init Hooks",
      description:
        "Run custom scripts after the environment is ready — useful for complex setups, window management, or UI automation.",
      outcome: "Power users can automate anything.",
    },
    {
      icon: faWindowMaximize,
      title: "Browser Launch Automation",
      description:
        "Automatically opens the correct URL in your preferred browser, even with custom profiles or window manager commands.",
      outcome: "One less step to remember.",
    },
    {
      icon: faFileCode,
      title: "Mono-Repo Ready",
      description:
        "Override layouts to handle multi-project workspaces — spawn separate servers and editors for each service in one session.",
      outcome: "Works for complex microservice setups.",
    },
  ];

  const useCases = [
    {
      title: "Django Project",
      desc: "Run creates a venv, installs requirements, runs migrations, starts the server, and opens the browser — all in one command.",
    },
    {
      title: "FastAPI + Next.js Mono-Repo",
      desc: "A custom layout spins up both back-end and front-end servers, with separate windows for each, plus editors.",
    },
    {
      title: "Flutter Development",
      desc: "Post-init hook can auto-resize the app window and arrange it side-by-side with the editor in Hyprland.",
    },
    {
      title: "Library/Framework Development",
      desc: "Override setup to install in editable mode and run tests automatically in a dedicated window.",
    },
  ];

  const techStack = ["Bash", "tmux", "systemd", "curl", "jq", "xdg-open"];

  const supportedTechs = [
    "Angular",
    "Astal",
    "Bun",
    "Django",
    "Elixir",
    "FastAPI",
    "Flask",
    "Flutter",
    "Go",
    "HTML",
    "Next.js",
    "Node.js",
    "Python",
    "uv",
    "Vite",
    "Rust",
  ];

  const benefits = [
    "Eliminates context switching between terminal, browser, and code editor",
    "Reduces cognitive load by remembering project-specific commands",
    "Ensures consistency across teams with shared .runrc configurations",
    "Works offline after initial dependency download",
    "Graceful degradation — works without tmux, just runs the server",
    "Passwordless service management with proper sudoer configuration",
  ];

  const withoutRunSteps: Array<{ type: "command" | "thought"; text: string }> = [
    { type: "command", text: "cd django-project" },
    { type: "thought", text: "Now.. what was that venv command?" },
    { type: "command", text: "python -m venv venv" },
    { type: "command", text: "source venv/bin/activate" },
    { type: "command", text: "python manage.py runserver" },
    { type: "thought", text: "Error.. dependency not installed" },
    { type: "command", text: "pip install -r requirements.txt" },
    { type: "thought", text: "Finally done" },
    { type: "command", text: "python manage.py runserver" },
    { type: "thought", text: "Migration error dammit" },
    { type: "command", text: "python manage.py migrate" },
    { type: "thought", text: "Open a new terminal" },
    { type: "command", text: "nvim" },
    { type: "thought", text: "Now need to see output" },
    { type: "command", text: "python manage.py runserver" },
    { type: "thought", text: "Open browser to localhost:8000" },
    { type: "thought", text: "Start working on the project" },
  ];

  const withRunSteps = [
    { type: "command", text: "cd any-project" },
    { type: "command", text: "run" },
    { type: "output", text: "Detected project type" },
    { type: "output", text: "Virtual environment created" },
    { type: "output", text: "Dependencies installed" },
    { type: "output", text: "Migrations applied" },
    { type: "output", text: "Server started" },
    { type: "output", text: "Browser opened" },
    { type: "output", text: "Code editor launched" },
  ];

  function renderSteps(steps: Array<{ type: string; text: string }>) {
    return steps.map((step, i) => {
      if (step.type === "command") {
        return (
          <div key={i} className="flex items-start gap-2 text-sm text-[#2d2822]">
            <span className="text-[#c4b0a0] font-mono">$</span>
            <span className="font-mono">{step.text}</span>
          </div>
        );
      }
      if (step.type === "thought") {
        return (
          <div key={i} className="flex items-start gap-2 text-sm text-[#8a827a] italic">
            <span className="text-[#c4b0a0] font-mono text-xs">|</span>
            <span>{step.text}</span>
          </div>
        );
      }
      if (step.type === "output") {
        return (
          <div key={i} className="flex items-start gap-2 text-sm text-[#8a827a]">
            <span className="text-[#c4b0a0] font-mono text-xs">›</span>
            <span>{step.text}</span>
          </div>
        );
      }
      return null;
    });
  }

  return (
    <main className="bg-[#f7f4f0] min-h-[100dvh]">
      {/* Hero - Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 bg-[#f7f4f0] order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[#d4cec4] rounded-full bg-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
              <span className="text-xs font-mono tracking-wider text-[#5a524a] uppercase">Dev Tool</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1816] mb-5">
              Project
              <br />
              Launcher
            </h1>

            <p className="text-lg text-[#5a524a] leading-relaxed max-w-md mb-6 font-light">
              One command to rule them all — automatically detect, setup, and launch any development project.
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
          <div className="relative z-10 text-center px-8">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 backdrop-blur-sm">
              <FontAwesomeIcon icon={faRocket} className="text-6xl lg:text-7xl text-white/40" />
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                <span className="block text-white/80 text-sm font-mono font-bold">1</span>
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Command</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/5">
                <span className="block text-white/80 text-sm font-mono font-bold">15+</span>
                <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Tech Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-28">
        {/* The Problem */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Problem</span>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Context Switching Overhead</h2>
            <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
              Every time you switch projects, you waste minutes remembering commands, activating environments, and
              juggling terminals.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e5dfd7] overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-6 border-b md:border-b-0 md:border-r border-[#f0ebe4]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                      Without Run
                    </span>
                    <span className="text-xs text-[#8a827a]">(Manual)</span>
                  </div>
                  <div className="space-y-1">
                    {renderSteps(withoutRunSteps)}
                    <div className="mt-3 p-3 bg-red-50 rounded-xl border border-red-200/50">
                      <p className="text-sm text-red-800">
                        🚨 Imagine juggling between multiple projects with different languages and technologies.
                      </p>
                      <p className="text-xs text-red-700 mt-1">High cognitive overhead.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-green-600 uppercase tracking-wider">
                      With Run
                    </span>
                    <span className="text-xs text-[#8a827a]">(Automated)</span>
                  </div>
                  <div className="space-y-2">
                    {renderSteps(withRunSteps)}
                    <div className="mt-3 p-3 bg-green-50 rounded-xl border border-green-200/50">
                      <p className="text-sm text-green-800">
                        ✨ Everything auto-detected, dependencies installed, services started, server running, browser
                        opened.
                      </p>
                      <p className="text-xs text-green-700 mt-1">Zero mental overhead.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Solution</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">One Command, Infinite Projects</h2>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-[#e5dfd7] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <h4 className="font-semibold text-[#1a1816]">Detect</h4>
                <p className="text-sm text-[#5a524a]">Scans project files and imports to identify the tech stack.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-[#f0ebe4]">
                <h4 className="font-semibold text-[#1a1816]">Setup</h4>
                <p className="text-sm text-[#5a524a]">
                  Installs deps, activates env, applies migrations, starts services.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <h4 className="font-semibold text-[#1a1816]">Launch</h4>
                <p className="text-sm text-[#5a524a]">Opens tmux session, dev server, and browser — ready to code.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Bento Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Features</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Key Capabilities</h2>
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
                    <div className="mt-2 inline-block bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
                      <span className="text-xs font-medium text-amber-700">{feature.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Scenarios</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Real-World Use Cases</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-[#e5dfd7]">
                <h4 className="font-bold text-[#1a1816] text-lg">{useCase.title}</h4>
                <p className="text-sm text-[#5a524a] mt-2 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customization */}
        <section className="mb-24 bg-[#ede8e1] rounded-3xl p-8 md:p-12 border border-[#d4cec4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#6b5e4e] uppercase">Flexibility</span>
              <h3 className="text-2xl font-bold text-[#1a1816] mt-1">Designed for Customization</h3>
              <p className="text-sm text-[#5a524a] leading-relaxed mt-3">
                No two projects are the same. Project Launcher lets you override anything — from environment setup to
                tmux layouts to post-launch hooks.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#2d2822]">
                  <FontAwesomeIcon icon={faCheck} className="text-amber-700 text-xs" />
                  <span>Per-project `.runrc` config file</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#2d2822]">
                  <FontAwesomeIcon icon={faCheck} className="text-amber-700 text-xs" />
                  <span>Global defaults in `~/.config/run/config.conf`</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#2d2822]">
                  <FontAwesomeIcon icon={faCheck} className="text-amber-700 text-xs" />
                  <span>Override environment setup, service list, browser command</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#2d2822]">
                  <FontAwesomeIcon icon={faCheck} className="text-amber-700 text-xs" />
                  <span>Custom tmux layouts for mono-repos</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-[#2d2822]">
                  <FontAwesomeIcon icon={faCheck} className="text-amber-700 text-xs" />
                  <span>Post-init hooks for window management or UI automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-white/50">
              <div className="text-xs font-mono text-[#8a827a]">Example: .runrc for Django</div>
              <pre className="mt-2 text-sm bg-[#f7f4f0] p-4 rounded-lg overflow-x-auto font-mono text-[#2d2822]">
                {`ENABLED_SERVICES=(
  postgresql.service
)

# Override browser to use a specific profile
BROWSER="firefox-developer-edition -P Personal --new-tab"
`}
              </pre>
              <div className="text-xs font-mono text-[#8a827a] mt-4">Global config: ~/.config/run/config.conf</div>
              <pre className="mt-2 text-sm bg-[#f7f4f0] p-4 rounded-lg overflow-x-auto font-mono text-[#2d2822]">
                {`BROWSER="hyprctl dispatch 'hl.dsp.focus({ workspace = 2 })' && firefox --new-tab"
`}
              </pre>
            </div>
          </div>
        </section>

        {/* Supported Technologies */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Ecosystem</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816]">Supported Technologies</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {supportedTechs.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-[#e5dfd7] rounded-full text-sm text-[#2d2822] font-medium hover:border-[#c4b0a0] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#5a524a] mt-4">
            Plus custom project types via `.runrc` overrides — you&apos;re not limited to the built-in list.
          </p>
        </section>

        {/* Benefits — List with icons */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="text-xs font-mono tracking-wider text-[#8a827a] uppercase">Impact</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1a1816] mt-1">Why Adopt It?</h2>
              <p className="text-[#5a524a] text-sm leading-relaxed mt-3 max-w-xs">
                Beyond speed, it&apos;s about reducing friction and maintaining flow state.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e5dfd7] hover:border-[#c4b0a0] transition-colors"
                  >
                    <FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-0.5 flex-shrink-0 text-sm" />
                    <span className="text-sm text-[#2d2822]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="pt-12 border-t border-[#e5dfd7]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs text-[#8a827a] font-mono tracking-wider">Bash · tmux · systemd · MIT License</span>
            <a
              href="https://github.com/MidHunterX/Project-Launcher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5a524a] hover:text-[#1a1816] transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
