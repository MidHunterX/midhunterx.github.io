import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFileAlt,
  faDatabase,
  faUniversity,
  faTable,
  faCreditCard,
  faChartLine,
  faCheck,
  faRocket,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ScholarCAPCaseStudy() {
  const metrics = [
    { value: "75%", description: "Processing Time Reduction", detail: "(8 months → 2 months)" },
    { value: "85%", description: "Load Time Optimization", detail: "(5s → 750ms)" },
    { value: "300%", description: "Error Reduction", detail: "(~26 → ~2 errors)" },
    { value: "3,200+", description: "Students Processed", detail: "Across 500+ Schools" },
  ];

  const stats = [
    { number: "195", label: "Commits" },
    { number: "3,803", label: "Lines of Code" },
    { number: "98.6%", label: "Python" },
    { number: "500+", label: "Schools" },
  ];

  const painPoints = [
    {
      title: "Manual Data Entry Bottleneck",
      desc: "Days to months of manual work entering student and school information into Excel spreadsheets",
    },
    {
      title: "High Error Rate",
      desc: "Approximately 26 errors per processing cycle due to manual data handling and typos",
    },
    {
      title: "Complex Geographic Categorization",
      desc: "Manual organization of students by district and state across India",
    },
    {
      title: "Banking Format Compliance",
      desc: "Time-consuming conversion of student data into bank-specific NEFT formats",
    },
    {
      title: "Scalability Constraints",
      desc: "Unable to efficiently process growing numbers of scholarship applications",
    },
    {
      title: "Resource Misallocation",
      desc: "Staff time consumed by data processing instead of core charitable activities",
    },
  ];

  const workflowCards = [
    {
      icon: faFileAlt,
      title: "Form Processing",
      command: "python process.py form",
      description:
        "Automated parsing and validation of student data from Word document forms with intelligent data cleaning and normalization",
    },
    {
      icon: faDatabase,
      title: "Database Integration",
      command: "python process.py database",
      description: "Verified data commits to SQLite database with district categorization and duplicate detection",
    },
    {
      icon: faUniversity,
      title: "IFSC Converter",
      command: "python process.py ifsc",
      description: "Bulk conversion of IFSC codes to branch names with clipboard integration for rapid processing",
    },
    {
      icon: faTable,
      title: "Spreadsheet Generator",
      command: "python process.py spreadsheet",
      description: "Generates formatted Excel reports summarizing school and student information by district",
    },
    {
      icon: faCreditCard,
      title: "NEFT Export",
      command: "python process.py neft",
      description: "Automated generation of bank-compliant NEFT transfer spreadsheets with all required banking fields",
    },
  ];

  const innovations = [
    "Intelligent District Prediction - Developed an algorithm leveraging the Reserve Bank of India's branch dataset to automatically categorize students by district and state based on IFSC codes",
    "Multi-threaded Data Loading - Implemented asynchronous loading of RBI's branch dataset using multi-threading, reducing initial load time by 85% (5s → 750ms)",
    "Comprehensive Data Validation - Built custom validation logic to catch formatting errors, duplicate entries, and banking detail inconsistencies before database commit",
    "Smart Error Handling - Designed verification workflows that flag incorrect formatting for manual review while auto-processing valid data",
    "Memory-Efficient Processing - Used Python dictionaries to load large datasets into memory for rapid lookup and processing",
    "Automated NEFT Compliance - Created template-based generation ensuring all bank transfer spreadsheets meet NEFT format requirements",
  ];

  const techStack = [
    "Python 3",
    "SQLite",
    "Multi-threading",
    "File I/O",
    "Excel Integration",
    "Data Validation",
    "UML Design",
    "RBI Dataset",
    "Word Document Parsing",
  ];

  const impactPoints = [
    {
      label: "Processing Efficiency",
      desc: "Reduced operational time by 75% from 8 months to 2 months per processing cycle",
    },
    { label: "Error Reduction", desc: "Decreased errors by 300% from ~26 to ~2, minimizing financial loss and rework" },
    { label: "Performance Optimization", desc: "Achieved 85% faster load times through intelligent multi-threading" },
    { label: "Scale Achievement", desc: "Successfully manages 3,200+ students across 500+ schools nationwide" },
  ];

  const orgBenefits = [
    "Resource Reallocation - Freed staff from data processing tasks to focus on core charitable mission and student outreach",
    "Scalability Unlocked - System architecture supports significant growth in scholarship recipients without proportional resource increase",
    "Data Integrity - Centralized database with validation ensures consistent, accurate records for auditing and reporting",
    "Banking Efficiency - Automated NEFT format generation eliminates back-and-forth with banking institutions",
    "Geographic Intelligence - RBI dataset integration provides automatic, accurate district/state categorization",
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

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 px-8 py-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faGraduationCap} className="text-6xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Scholar CAP</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-3 text-center">Automated Scholarship Processing System</p>
          <p className="text-base md:text-lg opacity-85 italic text-center">
            Client: Indian Jeevakarunya Charitable Trust
          </p>
        </div>
      </div>

      <div className="px-8 py-12">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center transition-transform duration-300 hover:-translate-y-1 shadow-lg"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3">{metric.value}</h3>
              <p className="text-base opacity-95 mb-1">{metric.description}</p>
              <p className="text-sm opacity-85">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Scholar CAP (Computer Aided Processing) is a comprehensive Python-based toolset I developed to automate the
            entire scholarship processing workflow for Indian Jeevakarunya Charitable Trust, a charitable organization
            distributing scholarships to students across India with a focus on Kerala.
          </p>

          {/* Stats Box */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faChartLine} className="text-indigo-600" />
              Project Statistics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            The Challenge
          </h2>

          {/* Story Section */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-8 border-l-8 border-amber-500 mb-8">
            <p className="text-amber-900 mb-4">
              <strong>The Situation:</strong> Indian Jeevakarunya Charitable Trust manages scholarship distribution for
              thousands of students across India, requiring meticulous data management and banking coordination.
            </p>
            <p className="text-amber-900 mb-4">
              <strong>The Problem:</strong> The organization relied on manual Excel spreadsheet data entry to handle
              school and student details, requiring days and months of laborious work to prepare information for bank
              NEFT transfers.
            </p>
            <p className="text-amber-900 mb-0">
              <strong>The Impact:</strong> This inefficient process consumed valuable organizational resources,
              introduced numerous data entry errors, and prevented the trust from scaling their charitable mission
              effectively.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-purple-600 mb-4">Key Pain Points</h3>
          <div className="bg-gray-50 rounded-xl p-6 border-l-8 border-red-500">
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="text-gray-700">
                  <strong className="text-gray-900">{point.title}</strong> - {point.desc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Solution Architecture
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I designed and developed an end-to-end automated processing system that transforms the entire scholarship
            workflow from data collection through bank transfer preparation.
          </p>

          <h3 className="text-2xl font-bold text-purple-600 mb-4">System Design & Database Architecture</h3>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Designed the complete database structure from scratch using UML modeling, creating a robust schema to
              manage relationships between schools, students, banking details, and geographic data. The SQLite database
              handles information for over 500 schools and 3,200+ students with full referential integrity.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                SQLite Database
              </span>
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">UML Design</span>
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                Data Normalization
              </span>
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                Relational Schema
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-purple-600 mb-6">Core Processing Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {workflowCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <FontAwesomeIcon icon={card.icon} className="text-2xl text-indigo-600" />
                </div>
                <h4 className="text-lg font-bold text-indigo-600 mb-3">{card.title}</h4>
                <code className="block bg-gray-900 text-green-400 px-3 py-2 rounded-md text-sm mb-3 overflow-x-auto">
                  {card.command}
                </code>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Innovations */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Technical Innovations</h3>
          <div className="bg-gray-50 rounded-xl p-6 border-l-8 border-green-500">
            <ul className="space-y-4">
              {innovations.map((innovation, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{innovation.split(" - ")[0]}</strong> - {innovation.split(" - ")[1]}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Technical Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  index % 3 === 0
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                    : "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Impact & Results */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Impact & Results
          </h2>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Operational Transformation</h3>
            <p className="text-blue-900 mb-6 leading-relaxed">
              The implementation delivered measurable improvements across every aspect of the scholarship processing
              workflow:
            </p>
            <ul className="space-y-3">
              {impactPoints.map((point, index) => (
                <li key={index} className="text-blue-900">
                  <strong>{point.label}:</strong>{" "}
                  {point.desc.includes("75%") ||
                  point.desc.includes("300%") ||
                  point.desc.includes("85%") ||
                  point.desc.includes("3,200+") ? (
                    <>
                      {point.desc.split(/(\d+%|3,200\+)/)[0]}
                      <span className="bg-yellow-200 px-2 py-1 rounded font-semibold text-amber-900">
                        {point.desc.match(/(\d+%|3,200\+)[^,]*/)?.[0]}
                      </span>
                      {point.desc.split(/(\d+%|3,200\+[^,]*)/)[2]}
                    </>
                  ) : (
                    point.desc
                  )}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-purple-600 mb-4">Organizational Benefits</h3>
          <div className="bg-gray-50 rounded-xl p-6 border-l-8 border-green-500">
            <ul className="space-y-4">
              {orgBenefits.map((benefit, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <FontAwesomeIcon icon={faRocket} className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">{benefit.split(" - ")[0]}</strong> - {benefit.split(" - ")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Key Features Delivered
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 border-l-8 border-green-500">
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

        {/* Technical Learnings */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 pb-3 border-b-4 border-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            Technical Learnings
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            This project significantly expanded my expertise in several critical areas including database design and
            normalization for real-world data relationships, performance optimization through multi-threading and
            efficient data structures, building robust validation systems that balance automation with human oversight,
            designing intuitive command-line interfaces for non-technical users, integrating external datasets for
            intelligent feature enhancement, and maintaining long-term database systems with ongoing updates and
            corrections.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The experience demonstrated how thoughtful system architecture and automation can transform organizational
            efficiency, allowing charitable organizations to maximize their impact by redirecting resources from
            administrative tasks to their core mission. The solution&apos;s scalability ensures it continues to provide
            value as the organization grows its scholarship programs.
          </p>
        </section>

        {/* Project Repository */}
        <section className="bg-gray-50 rounded-xl p-8 border-l-8 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-600 mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            Project Repository
          </h3>
          <p className="text-gray-700 mb-4">View the complete source code and implementation details:</p>
          <a
            href="https://github.com/MidHunterX/Scholar-CAP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-purple-600 transition-colors text-lg"
          >
            github.com/MidHunterX/Scholar-CAP
            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
          </a>
        </section>
      </div>
    </div>
  );
}
