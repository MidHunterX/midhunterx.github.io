"use client";
import { ButtonProjectLive, ButtonProjectCode } from "@/constituents/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █ ▀█▀ █▀▀ █▀▄▀█
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   █ ░█░ ██▄ █░▀░█

type ProjectItemProps = {
  img: string;
  head: string;
  body: string;
  live?: string;
  code?: string;
};

const ProjectItem = ({ img, head, body, live, code }: ProjectItemProps) => {
  let href: string;

  if (live) {
    href = live;
  } else if (code) {
    href = code;
  } else {
    href = "/";
  }

  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700">
      <img className="rounded-t-lg" src={img} alt="" />
      <div className="p-5">
        <h3> {head} </h3>
        <p className="mb-3"> {body} </p>
        {live && <ButtonProjectLive href={live} text="View Project" />}
        {code && <ButtonProjectCode href={code} text="Code" />}
      </div>
    </div>
  );
};

// █░█░█ █▀█ █▀█ █▄▀ █▀ █░█ █▀█ █▀█
// ▀▄▀▄▀ █▄█ █▀▄ █░█ ▄█ █▀█ █▄█ █▀▀

export default function Workshop() {
  return (
    <section
      id="workshop"
      className="py-[100px] lg:px-[80px] sm:px-[50px] flex flex-col gap-20 items-center"
    >
      <h2>
        <FontAwesomeIcon className="pe-4" icon={faBox} />
        Projects
      </h2>

      <div className="grid place-content-center sm:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectItem
          img="https://raw.githubusercontent.com/mithundnair/Portfolio/main/images/Screenshot%20(7).png"
          head="Breaking the Caesar Cipher"
          body="A Computer Science Engineering Mini Project of a Webservice implementing Symmetric Encryption/Decryption using the good ol' Caesar Cipher algorithm"
          live="https://midhunterx.github.io/Caesar-Cipher-Cryptography"
          code="https://github.com/MidHunterX/Caesar-Cipher-Cryptography"
        />

        <ProjectItem
          img="https://raw.githubusercontent.com/MidHunterX/GNOSIS/master/static/sc_queslist.jpg"
          head="GNOSIS"
          body="An ambitious project designed to transform the way individuals engage with and acquire knowledge, fostering a community-driven approach to learning and information exchange."
          code="https://github.com/MidHunterX/GNOSIS"
        />

        <ProjectItem
          img="https://raw.githubusercontent.com/MidHunterX/Scholar-CAP/main/img/header.png"
          head="Scholar CAP"
          body="Scholar CAP (Computer Aided Processing) is a comprehensive toolset designed to simplify the processing of student scholarship forms, specifically focusing on banking details. From initial data extraction and cleaning to verification, correction of typos, and the generation of NEFT formats."
          code="https://github.com/MidHunterX/Scholar-CAP"
        />
      </div>

      <h3> Personal Projects </h3>

      <div className="grid sm:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectItem
          img="https://raw.githubusercontent.com/MidHunterX/Played-Games-List/89945f39ae5b996d8a289271567fb8f72670b107/assets/head.png"
          head="Played Games List"
          body="A web development project which help keep create and keep an organized list of all the PC games I have finished playing, while also familiarizing and applying basic web development concepts and best practices."
          live="https://midhunterx.github.io/Played-Games-List/"
          code="https://github.com/MidHunterX/Played-Games-List"
        />

        <ProjectItem
          img="https://repository-images.githubusercontent.com/765967283/ccd23ee4-afbf-4a78-a67f-62a870c308e0"
          head="Hunter OS"
          body="A custom-tailored Linux distribution designed specifically for personal use, offering a unique and optimized experience with all the essential operating system features and configurations meticulously curated to meet individual needs."
          code="https://github.com/MidHunterX/Hunter-OS"
        />

        <ProjectItem
          img="https://repository-images.githubusercontent.com/678069975/10655fc3-f874-4d12-905b-3ed3daf63053"
          head="NvME"
          body="This project involves building a personalized NeoVim setup from scratch, incorporating all the desired features and customizations to ensure a perfectly comfortable and efficient development environment tailored to individual preferences."
          code="https://github.com/MidHunterX/NvME"
        />
      </div>
    </section>
  );
}
