"use client";
import {
  Button,
  ButtonSecondary,
  ButtonDisabled,
} from "@/constituents/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import React, { ReactNode } from 'react';


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
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700">
      <img className="rounded-t-lg" src={img} alt="" />
      <div className="p-5">
        <h3> {head} </h3>
        <p> {body} </p>
        {/* TECHNOLOGIES */}
        {techs && (
          <ul className="gap-3 flex flex-wrap max-w-md text-gray-500 dark:text-gray-400">
            {techs.map((tech, index) => (
              <li key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-lg border border-gray-500 px-2.5 py-1">
                {tech}
              </li>
            ))}
          </ul>
        )}
        {/* BUTTONS */}
        { children }
      </div>
    </div>
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
      <div className="mt-8">
        {live && <Button target="_blank" href={live} text="Website" />}
        {code && <ButtonSecondary target="_blank" href={code} text="GitHub" />}
      </div>
    </ProjectCard>
  );
};

const ProjectItemDisabled = ({ img, head, body, live, code, techs }: ProjectItemProps) => {
  return (
    <ProjectCard img={img} head={head} body={body} techs={techs} >
      <div className="mt-8">
        {live && <ButtonDisabled text="Currently Viewing" />}
        {code && <ButtonSecondary target="_blank" href={code} text="GitHub" />}
      </div>
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
        <ProjectItemDisabled
          img="project/portfolio.jpg"
          head="Portfolio Website"
          body="This is the webpage you are looking at right now. Developed using Next.js to deepen my understanding of React's core concepts and modern web development practices."
          live="https://midhunterx.github.io"
          code="https://github.com/MidHunterX/midhunterx.github.io"
          techs={['Next.js', 'TypeScript', 'TailwindCSS', 'GSAP', 'HeadlessUI', 'Webpack', 'React', 'Framer Motion']}
        />

        <ProjectItem
          img="project/gnosis.jpg"
          head="GNOSIS"
          body="An ambitious project designed to transform the way individuals engage with and acquire knowledge, fostering a community-driven approach to learning."
          code="https://github.com/MidHunterX/GNOSIS"
          techs={['Python', 'Django', 'Bootstrap', 'GeminiAI', 'FuzzyMatching', 'Markdown Editor', 'Authentication']}
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
          techs={['HTML', 'CSS', 'Javascript']}
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
          techs={['Bash', 'Python', 'Conf']}
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
