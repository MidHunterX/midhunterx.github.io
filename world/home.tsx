"use client";
import { ButtonGroup, ButtonSecondary } from "@/constituents/buttons";
import { smoothScroll } from "@/world/smoothScroll";
import ResumeModal from "@/constituents/modals";
import AnimatedName from "@/world/effects/animatedName";
import Designations from "@/world/effects/designations";
import AnimatedAscii from "@/world/effects/animatedAscii";

// █░█ █▀▀ █▀█ █▀█   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
// █▀█ ██▄ █▀▄ █▄█   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█

export default function Home() {
  const art = `
.    o.        .o    .
-\`   yyo      oyy   \`-
oNo\` yyy      yyy \`oNo
oMMNsyyy      yyysNMMo
oMMMMyyy      yyyMMMMo
oMMhdyyyy.  .yyyyyyMMo
oMMo yyyMMyyMMyyy oMMo
oMMo yyysNMMNoyyy oMMo
oMMo yyy \`++\` yyy oMMo
oMMo yyy      yyy oMMo
oMMo oyy      yyo oMMo
oMMo  .o      o.  oMMo
oMMo              oMMo
:NMo              oMN:
 \`o+              +o\`
`;

  const designations = [
    "Software Engineer",
    "Backend Developer",
    "Systems Architect",
    "Full Stack Developer",
    "Platform Engineer",
    "HCI Researcher",
  ];

  return (
    <section
      id="home"
      className="dark bg-cover bg-no-repeat bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply max-w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="text-white text-center justify-center w-full lg:w-1/3">
        <AnimatedAscii asciiArt={art} interval={300} />
      </div>

      <hgroup className="w-full lg:w-1/2 px-[50px]">
        {/* Here's what I want the indexing mechanism to see >:D */}
        <h1 className="hidden">MidHunterX</h1>
        {/* This is what I want the viewer to see */}
        <AnimatedName className="w-full flex mb-3 text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-none" />

        <p className="mb-0 text-lg font-normal text-white lg:text-xl">
          I am a
          <span className="text-yellow-200">
            &nbsp;
            <Designations words={designations} />
          </span>
        </p>

        <p className="mb-3 text-gray-400 text-justify">
          who likes to solve problems and architect things. Experienced in creating web applications and innovative
          solutions to complex problems. Feel free to explore this portfolio! Scroll down to learn more.
        </p>
        <ButtonGroup className="justify-center sm:justify-start">
          <ResumeModal />
          <ButtonSecondary href="#projects" onClick={smoothScroll} text="Show Projects" />
        </ButtonGroup>
      </hgroup>
    </section>
  );
}
