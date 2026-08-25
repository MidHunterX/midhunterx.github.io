"use client";
import {
  Button,
  ButtonNull,
  ButtonSecondary,
  ButtonDisabled,
  ButtonGroup,
  ButtonSecondaryNull,
  ButtonCaseStudy,
} from "@/constituents/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { ReactNode } from "react";
import AnimatedTitle from "@/world/effects/animatedTitle";
import AnimatedBody from "@/world/effects/animatedBody";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import {
  faArrowsSpin,
  faSitemap,
  faMicrochip,
  faDatabase,
  faGaugeHigh,
  faShieldHalved,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █▀▀ ▄▀█ █▀█ █▀▄
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   █▄▄ █▀█ █▀▄ █▄▀

// Shared by both card types so the tag styling only has to be tuned once.
const TechList = ({ techs }: { techs: string[] }) => (
  <ul className="gap-2 flex flex-wrap max-w-md text-gray-500 dark:text-gray-400">
    {techs.map((tech) => (
      <li key={tech} className="technologies rounded-md">
        {tech}
      </li>
    ))}
  </ul>
);

type ProjectCardProps = {
  img: string;
  head: string;
  body: string;
  techs?: string[];
  year?: string | number;
  children: ReactNode; // ReactNode allows any JSX content
};

const ProjectCard = ({ img, head, body, techs, year, children }: ProjectCardProps) => {
  const [tiltEnable, setTiltEnable] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      setTiltEnable(window.innerWidth >= 1024 && !reduceMotion.matches);
    };
    handleChange();
    window.addEventListener("resize", handleChange);
    reduceMotion.addEventListener("change", handleChange);
    return () => {
      window.removeEventListener("resize", handleChange);
      reduceMotion.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Tilt
      tiltEnable={tiltEnable}
      perspective={1000}
      transitionSpeed={2000}
      style={{ transformStyle: "preserve-3d" }}
      className="group max-w-lg bg-white border border-gray-200 rounded-xl shadow dark:bg-[#161D1F] dark:border-gray-700 hover:shadow-lg dark:hover:border-gray-600 transition-shadow duration-300"
    >
      <div className="rounded-t-xl overflow-hidden relative">
        <Image className="group-hover:scale-110 transition duration-500" src={img} alt="" width={1920} height={1080} />

        {/* YEAR PILL */}
        {year && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-gray-950/30 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20 shadow-lg">
            {year}
          </div>
        )}
      </div>

      <div className="p-5" style={{ transformStyle: "preserve-3d" }}>
        <div className="px-2" style={{ transform: "translateZ(3rem)" }}>
          <AnimatedTitle text={`${head}`} />
        </div>
        <AnimatedBody text={`${body}`} />

        {/* TECHNOLOGIES */}
        {techs && (
          <div style={{ transform: "translateZ(2rem)" }}>
            <TechList techs={techs} />
          </div>
        )}
        {/* BUTTONS */}
        <div className="px-3 pb-3" style={{ transform: "translateZ(4rem)" }}>
          {children}
        </div>
      </div>
    </Tilt>
  );
};

type ProjectCategory =
  | "Automation" // For: Scholar CAP, Newspaper Scripting
  | "Workflow Design" // For: Newspaper Layout optimization, Game Trackr UX
  | "System Design" // For: Hunter OS, NvME, Expression (Rust)
  | "Data Engineering" // For: Gnosis (AI/Knowledge), Scholar CAP (DB focus)
  | "Optimization" // For: Performance tuning, cost reduction
  | "Cryptography"; // For: Caesar Cipher project

interface ProfessionalCardProps {
  img?: string;
  category: ProjectCategory;
  title: string;
  metric?: string; // "40% faster" or "Saved 20hrs/week"
  description: string;
  techs?: string[];
  children: ReactNode;
}

const CATEGORY_ICON: Record<ProjectCategory, { icon: typeof faBriefcase; className: string }> = {
  Automation: { icon: faArrowsSpin, className: "text-blue-500" },
  "Workflow Design": { icon: faSitemap, className: "text-purple-500" },
  "System Design": { icon: faMicrochip, className: "text-orange-500" },
  "Data Engineering": { icon: faDatabase, className: "text-cyan-500" },
  Optimization: { icon: faGaugeHigh, className: "text-emerald-500" },
  Cryptography: { icon: faShieldHalved, className: "text-amber-500" },
};

const CategoryIcon = ({ category }: { category: ProjectCategory }) => {
  const { icon, className } = CATEGORY_ICON[category] ?? { icon: faBriefcase, className: "text-gray-500" };
  return <FontAwesomeIcon icon={icon} className={className} aria-hidden="true" />;
};

const ProfessionalCard = ({ img, category, title, metric, description, techs, children }: ProfessionalCardProps) => {
  return (
    <article className="group flex flex-col h-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-[#1A2326] dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300">
      {/* IMAGE OR PLACEHOLDER */}
      {img ? (
        <div className="h-48 overflow-hidden rounded-t-xl border-b dark:border-gray-800">
          <Image
            className="group-hover:scale-105 transition duration-700 object-cover h-full w-full"
            src={img}
            alt={title}
            width={800}
            height={400}
          />
        </div>
      ) : (
        <div className="h-32 flex items-end px-6 pb-2 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1E292B] dark:to-[#161D1F] rounded-t-xl">
          <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
            <CategoryIcon category={category} />
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* TOP ROW: CATEGORY & METRIC */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
            {category}
          </span>
          {metric && <span className="text-xs font-medium text-green-600 dark:text-green-400">{metric}</span>}
        </div>

        <div className="mb-2">
          <AnimatedTitle text={title} />
        </div>

        <div className="flex-grow">
          <AnimatedBody text={description} />
        </div>

        {/* TECH STACK */}
        {techs && <TechList techs={techs} />}

        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">{children}</div>
      </div>
    </article>
  );
};

// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █ ▀█▀ █▀▀ █▀▄▀█
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   █ ░█░ ██▄ █░▀░█

type ProjectItemProps = {
  img: string;
  head: string;
  body: string;
  live?: string;
  code?: string;
  techs?: string[];
  year?: string | number;
  onOpen?: () => void; // Callback function for case study modal
  disabled?: boolean; // true for the project that is the page currently being viewed
};

const ProjectItem = ({ img, head, body, live, code, techs, year, onOpen, disabled }: ProjectItemProps) => {
  return (
    <ProjectCard img={img} head={head} body={body} techs={techs} year={year}>
      <ButtonGroup>
        {live && (disabled ? <ButtonDisabled text="Viewing" /> : <Button target="_blank" href={live} text="Website" />)}
        {code && <ButtonSecondary target="_blank" href={code} text="GitHub" />}
        {onOpen &&
          (disabled ? (
            <ButtonSecondaryNull onClick={onOpen} text="Read More" />
          ) : (
            <ButtonCaseStudy onClick={onOpen} text="Read More" />
          ))}
      </ButtonGroup>
    </ProjectCard>
  );
};

// dynamic import only when button is clicked
const loading_case_study = () => <div className="p-20 text-center">Loading Case Study...</div>;
const CaseStudyComponents: Record<string, any> = {
  scholarcap: dynamic(() => import("./case-study/ScholarCap"), {
    loading: () => loading_case_study(),
  }),
  gametrackr: dynamic(() => import("./case-study/GameTrackr"), {
    loading: () => loading_case_study(),
  }),
  newsautomation: dynamic(() => import("./case-study/NewsAutomation"), {
    loading: () => loading_case_study(),
  }),
  cartops: dynamic(() => import("./case-study/CartOps"), {
    loading: () => loading_case_study(),
  }),
  projectlauncher: dynamic(() => import("./case-study/ProjectLauncher"), {
    loading: () => loading_case_study(),
  }),
};

// █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█ █▀▀ █▀█   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
// █▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀ ██▄ █▀▄   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█

export default function DeveloperSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const openCaseStudy = (slug: string) => {
    setActiveSlug(slug);
    setIsOpen(true);
  };

  const closeCaseStudy = () => {
    setIsOpen(false);
    setTimeout(() => setActiveSlug(null), 300);
  };

  const ContentComponent = activeSlug ? CaseStudyComponents[activeSlug] : null;

  return (
    <section id="developerSection" className="px-3 md:px-[100px] py-[100px] grid gap-8">
      <h2 className="text-center mb-8">
        <FontAwesomeIcon height={48} width={48} className="pe-4" icon={faBox} aria-hidden="true" />
        Projects
      </h2>

      <section className="grid w-fit mx-auto sm:px-0 grid-cols-1 lg:grid-cols-2 gap-8">
        <ProfessionalCard
          // img="project/scholarcap.jpg"
          category="Automation"
          title="Scholarship Disbursement Pipeline"
          metric="Optimal Operational Efficiency"
          description="Engineered an end-to-end automation suite for an NGO to manage scholarship processing for 3,200+ students across 500+ schools. Replaced months of manual data entry with a Python-based pipeline that parses digital forms, validates banking details against RBI datasets using multi-threaded asynchronous loading, and generates bank-ready NEFT spreadsheets. Reduced manual error rates by 300%, ensuring high-fidelity financial transfers."
          techs={[
            "Python",
            "SQLite3",
            "Multi-threading",
            "Data Validation",
            "RBI Dataset Integration",
            "Financial Workflow",
          ]}
        >
          <ButtonGroup>
            <ButtonNull text="Case Study" onClick={() => openCaseStudy("scholarcap")} />
            <ButtonSecondary target="_blank" href="https://github.com/MidHunterX/Scholar-CAP" text="GitHub" />
          </ButtonGroup>
        </ProfessionalCard>

        <ProfessionalCard
          category="Workflow Design"
          title="Newspaper Editorial Pipeline"
          metric="90% Reduction in Production Time"
          description="Re-engineered a legacy daily newspaper production workflow. Developed custom ExtendScript (JS) solutions to automate ISO-standardized exports, dynamic page numbering, and automated image fitting. Resolved deep-level technical hurdles including 'nda' character rendering and Malayalam Unicode hyphenation logic, reducing daily layout time from 5 hours to 25 minutes."
          techs={[
            "ExtendScript (JS)",
            "InDesign Automation",
            "Indic Typography",
            "Workflow Optimization",
            "ISO Standardization",
          ]}
        >
          <ButtonGroup>
            <ButtonNull text="Case Study" onClick={() => openCaseStudy("newsautomation")} />
          </ButtonGroup>
        </ProfessionalCard>
      </section>

      <div className="grid w-fit mx-auto sm:px-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectItem
          year="Jul 2026"
          img="project/cart-ops.jpg"
          head="Cart Ops"
          onOpen={() => openCaseStudy("cartops")}
          body="A smart, offline-first Android toolset to calculate live cart totals, organize shopping lists, track item pricing history and analytics; focusing on UX."
          code="https://github.com/MidHunterX/Cart-Ops"
          techs={["Flutter", "Drift", "Provider", "Product Design"]}
        />

        <ProjectItem
          year="Jun 2026"
          img="project/anisodactyl.jpg"
          head="Anisodactyl"
          body="Clean async-first Python library for automating CRUD operations and generating dynamic, filterable REST API endpoints."
          live="https://pypi.org/project/anisodactyl/"
          code="https://github.com/MidHunterX/Anisodactyl"
          techs={["Python", "FastAPI", "SQLAlchemy", "Pydantic", "RESTful API", "PyPI"]}
        />

        <ProjectItem
          year="Mar 2025"
          img="project/project-launcher.jpg"
          head="Project Launcher"
          onOpen={() => openCaseStudy("projectlauncher")}
          body="Development environment orchestrator that automatically detects
          project type and set up a complete tmux development environment along
          with system services and many more."
          code="https://github.com/MidHunterX/Project-Launcher"
          techs={["Bash", "System Services"]}
        />

        <ProjectItem
          year="Mar 2025"
          img="project/expression.jpg"
          head="Expression"
          body="Fast, lightweight, rule-based wallpaper daemon for Linux, written in Rust; optimized for minimal system resource usage and source code is built with design patterns for maintainability."
          code="https://github.com/MidHunterX/Expression"
          techs={["Rust", "TOML Parsing", "Process Control"]}
        />

        <ProjectItem
          year="Aug 2024"
          img="project/game-trackr.jpg"
          head="Game Trackr"
          onOpen={() => openCaseStudy("gametrackr")}
          body="Personal game library 2.0 built using Angular for tracking and showcasing every game I played throughout my life, complete with details from IGDB API and tracked playtime."
          live="https://midhunterx.github.io/Game-Trackr"
          code="https://github.com/MidHunterX/Game-Trackr"
          techs={["Angular", "Figma", "TypeScript", "TailwindCSS", "SASS", "DaisyUI", "Python", "IGDB API"]}
        />

        <ProjectItem
          year="Apr 2024"
          img="project/portfolio.jpg"
          head="Portfolio Website"
          body="This is the webpage you are looking at right now. Developed using Next.js to deepen my understanding of React's core concepts and modern web development practices."
          live="https://midhunterx.github.io"
          code="https://github.com/MidHunterX/midhunterx.github.io"
          techs={["Next.js", "React", "TypeScript", "TailwindCSS", "GSAP", "HeadlessUI", "Webpack", "Framer Motion"]}
          disabled
        />

        <ProjectItem
          year="Mar 2024"
          img="project/gnosis.jpg"
          head="γνῶσις (GNŌSIS)"
          body="Gnosis is the Greek word for “knowledge”. Community-driven knowledge base with AI Integration for exploring answers to all of your questions in different media formats."
          code="https://github.com/MidHunterX/GNOSIS"
          techs={["Django", "Python", "Bootstrap", "GeminiAI", "FuzzyMatching", "Markdown Editor", "Authentication"]}
        />

        <ProjectItem
          year="Feb 2024"
          img="project/hunteros.jpg"
          head="Hunter OS"
          body="A custom-tailored Linux distribution designed specifically for personal use, offering a unique and optimized experience with all the essential operating system features and configs curated to meet individual needs."
          code="https://github.com/MidHunterX/Hunter-OS"
          techs={["Wayland", "SystemD", "GRUB2", "dhcpcd", "Kitty Terminal", "VIFM", "Battery Optimized"]}
        />

        <ProjectItem
          year="Oct 2023"
          img="project/scholarcap.jpg"
          head="Scholar CAP"
          onOpen={() => openCaseStudy("scholarcap")}
          body="Scholar CAP (Computer Aided Processing) is a python toolset for data parsing, sanitization, validation and storage of data from docx student scholarship forms to generation of custom formatted Excel sheet for Bank NEFT."
          code="https://github.com/MidHunterX/Scholar-CAP"
          techs={["Python", "openpyxl", "Multi-Threading", "SQLite3", "pandas", "pdfplumber", "docx"]}
        />

        <ProjectItem
          year="Aug 2023"
          img="project/nvme.jpg"
          head="Hunter Nvim"
          body="This project involves building a personalized NeoVim setup from scratch, incorporating all the desired features and customizations to ensure a perfectly comfortable and efficient development environment tailored to individual preferences."
          code="https://github.com/MidHunterX/NvME"
          techs={[
            "Lua",
            "TreeSitter Parsing",
            "Luasnip Snippet Engine",
            "Language Server Protocol",
            "CMP Autocompletion",
          ]}
        />

        <ProjectItem
          year="May 2022"
          img="project/breakingcipher.jpg"
          head="Breaking the Caesar Cipher"
          body="A Computer Science Engineering Mini Project of a Webservice implementing Symmetric Encryption/Decryption using the good ol' Caesar Cipher algorithm"
          live="https://midhunterx.github.io/Caesar-Cipher-Cryptography"
          code="https://github.com/MidHunterX/Caesar-Cipher-Cryptography"
          techs={["HTML", "CSS", "Javascript", "Frequency Analysis", "Cipher Cracking"]}
        />

        <ProjectItem
          year="Oct 2021"
          img="project/playedgames.jpg"
          head="Played Games List"
          body="A web development project which help keep create and keep an organized list of all the PC games I have finished playing, while also familiarizing and applying basic web development concepts and best practices."
          live="https://midhunterx.github.io/Played-Games-List/"
          code="https://github.com/MidHunterX/Played-Games-List"
          techs={["HTML", "CSS", "Javascript"]}
        />

        {/*
        <ProjectItem
          year="May 2021"
          img="project/rainmeter-timetable.png"
          head="Desktop Timetable Widget"
          body="A desktop widget for Rainmeter which displays a customized timetable for a school or university."
          code="https://github.com/MidHunterX/rainmeter-TimeTable"
          techs={["Rainmeter Script"]}
        />
        */}
      </div>

      {/* CASE STUDY MODAL */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
          </TransitionChild>

          {/* Case Study Modal Section */}
          <section className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="relative w-full max-w-7xl max-h-[95vh] transform overscroll-contain overflow-y-auto overflow-hidden rounded-3xl bg-white dark:bg-[#161D1F] text-left shadow-xl transition-all">
                <div className="sticky top-0 z-50 flex justify-end">
                  <button
                    onClick={() => closeCaseStudy()}
                    aria-label="Close case study"
                    className="absolute top-4 right-6 z-50 text-2xl px-2 py-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
                    data-blobity-magnetic="false"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <div key={activeSlug}>{ContentComponent ? <ContentComponent /> : <p>Loading...</p>}</div>
              </DialogPanel>
            </div>
          </section>
        </Dialog>
      </Transition>
    </section>
  );
}
