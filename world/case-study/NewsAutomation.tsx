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
  faCheck,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function NewspaperCaseStudy() {
  const features = [
    {
      icon: faCalendarAlt,
      title: "Smart Date Management",
      description:
        "Automatic date calculation based on file modification time with manual override capability for special editions",
    },
    {
      icon: faHashtag,
      title: "Dynamic Page Numbers",
      description:
        "Automated numbering system that updates dynamically when pages are reordered, excluding page 1 by design",
    },
    {
      icon: faGlobe,
      title: "Unicode Integration",
      description: 'Native Unicode support replacing FML encoding, solving the "nda character" issue permanently',
    },
    {
      icon: faBook,
      title: "Typography Engine",
      description: "World Ready Paragraph Composer with Malayalam hyphenation dictionary for proper text breaking",
    },
    {
      icon: faImage,
      title: "Auto Image Fitting",
      description: "Intelligent proportional cropping with automatic frame fitting options",
    },
    {
      icon: faBolt,
      title: "Export Automation",
      description: "JavaScript-based PDF and thumbnail generation with ISO date formatting",
    },
  ];

  const techStack = [
    { name: "Adobe InDesign", description: "Layout & Design Platform" },
    { name: "ExtendScript", description: "Automation Scripting" },
    { name: "Unicode Standard", description: "Text Encoding" },
    { name: "Windows Inscript", description: "Malayalam Input" },
  ];

  const problems = [
    "Manual date and page number management - Every edition required manual entry and adjustment",
    "Performance degradation - Artifact buildup caused InDesign to slow down significantly",
    'Encoding complexity - Unicode to FML conversion was required for Malayalam text, introducing the "nda character" rendering issue',
    "Typography failures - Improper word breaking when justifying Malayalam text",
    "Layout inflexibility - Static page numbers prevented page reordering",
    "External dependencies - Third-party applications needed for Inscript (ISM) input and encoding conversion",
    "Export inefficiencies - Manual filename creation and thumbnail generation",
  ];

  const solutions = [
    "Font Evaluation - Tested and validated Google's Unicode font library for Malayalam compatibility",
    "Optimal Fonts Identified - Gayathri (perfect rendering), Anek, Chilanka, and Manjari (all compatible)",
    "World Ready Composer - Enabled InDesign's worldwide language engine for proper Indic text rendering",
    "Hyphenation Dictionary - Configured Malayalam-specific word breaking rules",
    "Native Input Support - Integrated Windows Inscript (ISM) directly into the workflow",
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

  const benefits = [
    "Eliminated third-party dependencies for text input and encoding",
    "Removed performance bottlenecks through workspace optimization",
    "Enabled flexible page reordering without manual renumbering",
    "Standardized typography across all Malayalam content",
    "Automated file naming consistency for web publishing pipeline",
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-16 text-center text-white">
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faNewspaper} className="text-6xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Daily Newspaper Workflow Optimization</h1>
        <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto">
          Transforming a 5-hour manual publishing process into a 25-minute automated workflow
        </p>
      </div>

      <div className="px-8 py-12">
        {/* Metric Box */}
        <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white rounded-xl p-8 text-center mb-12 shadow-lg">
          <h2 className="text-5xl md:text-6xl font-bold mb-3">92% Time Reduction</h2>
          <p className="text-xl opacity-95">From 5 hours to ~25 minutes per daily edition</p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I redesigned the complete workflow for a daily newspaper editing process, addressing critical
            inefficiencies in layout design, text formatting, and export automation. This project involved deep
            technical implementation across InDesign scripting, typography systems, and multilingual text rendering
            for Malayalam language content.
          </p>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The existing newspaper production workflow was plagued with manual, repetitive tasks that consumed hours
            of valuable production time each day. The team faced multiple critical bottlenecks:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-500">
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="text-gray-700 pl-2">
                  <strong>{problem.split(" - ")[0]}</strong> - {problem.split(" - ")[1]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Solution Architecture</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I implemented a comprehensive automation system that addressed each pain point through technical
            innovation and workflow redesign.
          </p>

          <h3 className="text-2xl font-bold text-purple-600 mb-6">Core Technical Implementations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-purple-600 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Export Automation */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Export Automation Script</h3>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Developed a custom JavaScript automation that handles the entire export pipeline. The script automatically
            generates ISO-formatted filenames, exports optimized PDFs, and creates web-ready thumbnails in a single
            operation.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">ExtendScript</span>
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
              PDF Automation
            </span>
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">
              Image Processing
            </span>
          </div>
        </section>

        {/* Multilingual Typography */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Multilingual Typography Solution</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Malayalam language presented unique challenges in digital typography. I resolved these through a
            multi-layered approach:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="text-gray-700 pl-2">
                  <strong>{solution.split(" - ")[0]}</strong> - {solution.split(" - ")[1]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Technical Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 text-center hover:border-indigo-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-lg font-bold text-indigo-600 mb-2">{tech.name}</h4>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Key Features Delivered</h2>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
            <ul className="space-y-3">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Impact & Results</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The implementation delivered transformative improvements to the daily production workflow:
          </p>

          <div className="bg-gradient-to-br from-green-300 to-emerald-400 rounded-xl p-8 mb-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-900 mb-3">Production Time</h3>
            <p className="text-lg text-green-900">
              Reduced from{" "}
              <span className="bg-yellow-200 px-2 py-1 rounded font-semibold">5 hours to ~25 minutes</span> per daily
              edition
            </p>
          </div>

          <p className="text-lg font-bold text-gray-800 mb-4">Additional Benefits:</p>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <FontAwesomeIcon icon={faRocket} className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Learnings */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Technical Learnings</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This project deepened my expertise in several critical areas including ExtendScript automation within
            Adobe environments, complex typography systems for non-Latin scripts, multilingual text rendering engines,
            workflow optimization through systematic problem identification, and balancing automation with manual
            override requirements for edge cases. The experience demonstrated how technical solutions must account for
            both system capabilities and human workflow patterns to achieve meaningful productivity gains.
          </p>
        </section>
      </div>
    </main>

  );
}
