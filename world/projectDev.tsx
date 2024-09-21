"use client";
import {
  Button,
  ButtonSecondary,
  ButtonDisabled,
  ButtonGroup
} from "@/constituents/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import React, { ReactNode } from 'react';
import AnimatedTitle from "@/world/effects/animatedTitle";
import AnimatedBody from "@/world/effects/animatedBody";
import Tilt from 'react-parallax-tilt';
import { useEffect, useState } from "react";


// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █▀▀ ▄▀█ █▀█ █▀▄
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   █▄▄ █▀█ █▀▄ █▄▀

type ProjectCardProps = {
  img: string;
  head: string;
  body: string;
  techs?: string[];
  children: ReactNode; // ReactNode allows any JSX content
};

const ProjectCard = ({ img, head, body, techs, children }: ProjectCardProps) => {
  const [tiltEnable, setTiltEnable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setTiltEnable(true);
      } else {
        setTiltEnable(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Tilt
      tiltEnable={tiltEnable}
      perspective={1000}
      // scale={1.05}
      transitionSpeed={2000}
      style={{ transformStyle: 'preserve-3d' }}
      className="group max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700"
    >
      <div className="rounded-t-lg overflow-hidden">
        <img className="group-hover:scale-110 transition duration-500" src={img} alt="" />
      </div>

      <div className="p-5" style={{ transformStyle: 'preserve-3d' }}>
        <div className="px-2" style={{transform: "translateZ(3rem)"}}>
          <AnimatedTitle text={`${head}`} />
        </div>
        <AnimatedBody text={`${body}`} />

        {/* TECHNOLOGIES */}
        {techs && (
          <ul style={{transform: "translateZ(2rem)"}} className="gap-3 flex flex-wrap max-w-md text-gray-500 dark:text-gray-400">
            {techs.map((tech, index) => (
              <li key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-lg border border-gray-500 px-2.5 py-1">
                {tech}
              </li>
            ))}
          </ul>
        )}
        {/* BUTTONS */}
        <div className="px-3 pb-3" style={{transform: "translateZ(4rem)"}}>
          { children }
        </div>
      </div>
    </Tilt>
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
};

const ProjectItem = ({ img, head, body, live, code, techs }: ProjectItemProps) => {
  return (
    <ProjectCard img={img} head={head} body={body} techs={techs} >
      <ButtonGroup>
        {live && <Button target="_blank" href={live} text="Website" />}
        {code && <ButtonSecondary target="_blank" href={code} text="GitHub" />}
      </ButtonGroup>
    </ProjectCard>
  );
};

const ProjectItemDisabled = ({ img, head, body, live, code, techs }: ProjectItemProps) => {
  return (
    <ProjectCard img={img} head={head} body={body} techs={techs} >
      <ButtonGroup>
        {live && <ButtonDisabled text="Currently Viewing" />}
        {code && <ButtonSecondary target="_blank" href={code} text="GitHub" />}
      </ButtonGroup>
    </ProjectCard>
  );
};


// █▀▄ █▀▀ █░█ █▀▀ █░░ █▀█ █▀█ █▀▀ █▀█   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
// █▄▀ ██▄ ▀▄▀ ██▄ █▄▄ █▄█ █▀▀ ██▄ █▀▄   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█

export default function DeveloperSection() {
  return (
    <section
      id="developerSection"
      className="px-3 md:px-[100px] py-[100px]"
    >
      <h2>
        <FontAwesomeIcon className="pe-4" icon={faBox} />
        Projects
      </h2>

      <div className="grid w-fit mx-auto sm:px-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectItem
          img="project/game-trackr.jpg"
          head="Game Trackr"
          body="Personal game library 2.0 built using Angular for tracking and showcasing every game I played throughout my life, complete with details from IGDB API and tracked playtime."
          live="https://midhunterx.github.io/Game-Trackr"
          code="https://github.com/MidHunterX/Game-Trackr"
          techs={['Angular', 'Figma', 'TypeScript', 'TailwindCSS', 'SASS', 'DaisyUI', 'Python', 'IGDB API']}
        />

        <ProjectItemDisabled
          img="project/portfolio.jpg"
          head="Portfolio Website"
          body="This is the webpage you are looking at right now. Developed using Next.js to deepen my understanding of React's core concepts and modern web development practices."
          live="https://midhunterx.github.io"
          code="https://github.com/MidHunterX/midhunterx.github.io"
          techs={['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'GSAP', 'HeadlessUI', 'Webpack', 'Framer Motion']}
        />

        <ProjectItem
          img="project/gnosis.jpg"
          head="γνῶσις (GNŌSIS)"
          body="Gnosis is a Greek word that means “knowledge”. This project is a community-driven knowledge base with AI Integration for exploring answers to all of your questions in different media formats."
          code="https://github.com/MidHunterX/GNOSIS"
          techs={['Django', 'Python', 'Bootstrap', 'GeminiAI', 'FuzzyMatching', 'Markdown Editor', 'Authentication']}
        />

        <ProjectItem
          img="project/scholarcap.jpg"
          head="Scholar CAP"
          body="Scholar CAP (Computer Aided Processing) is a python toolset for data parsing, sanitization, validation and storage of data from docx student scholarship forms to generation of custom formatted Excel sheet for Bank NEFT."
          code="https://github.com/MidHunterX/Scholar-CAP"
          techs={['Python', 'openpyxl', 'Multi-Threading', 'SQLite3', 'pandas', 'pdfplumber', 'docx']}
        />

        <ProjectItem
          img="project/breakingcipher.jpg"
          head="Breaking the Caesar Cipher"
          body="A Computer Science Engineering Mini Project of a Webservice implementing Symmetric Encryption/Decryption using the good ol' Caesar Cipher algorithm"
          live="https://midhunterx.github.io/Caesar-Cipher-Cryptography"
          code="https://github.com/MidHunterX/Caesar-Cipher-Cryptography"
          techs={['HTML', 'CSS', 'Javascript', 'Frequency Analysis', 'Cipher Cracking']}
        />

        <ProjectItem
          img="project/playedgames.jpg"
          head="Played Games List"
          body="A web development project which help keep create and keep an organized list of all the PC games I have finished playing, while also familiarizing and applying basic web development concepts and best practices."
          live="https://midhunterx.github.io/Played-Games-List/"
          code="https://github.com/MidHunterX/Played-Games-List"
          techs={['HTML', 'CSS', 'Javascript']}
        />

        <ProjectItem
          img="project/hunteros.jpg"
          head="Hunter OS"
          body="A custom-tailored Linux distribution designed specifically for personal use, offering a unique and optimized experience with all the essential operating system features and configs curated to meet individual needs."
          code="https://github.com/MidHunterX/Hunter-OS"
          techs={['Wayland', 'SystemD', 'GRUB2', 'dhcpcd', 'Kitty Terminal', 'VIFM', 'Battery Optimized']}
        />

        <ProjectItem
          img="project/nvme.jpg"
          head="NvME"
          body="This project involves building a personalized NeoVim setup from scratch, incorporating all the desired features and customizations to ensure a perfectly comfortable and efficient development environment tailored to individual preferences."
          code="https://github.com/MidHunterX/NvME"
          techs={['Lua', 'TreeSitter Parsing', 'Luasnip Snippet Engine', 'Language Server Protocol', 'CMP Autocompletion']}
        />
      </div>
    </section>
  );
}
