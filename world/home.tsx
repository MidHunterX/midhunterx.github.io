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
    "Full Stack Developer",
    "Platform Engineer",
    "Graphic Designer",
  ];

  return (
    <section
      id="home"
      className="dark bg-cover bg-no-repeat bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply max-w-screen min-h-screen pt-8 pb-[50px] lg:flex lg:flex-row items-center"
    >
      {/* Here's what I want the indexing mechanism to see >:D */}
      <h1 className="hidden">MidHunterX</h1>

      <div className="text-white text-center justify-center w-full lg:w-1/3">
        <AnimatedAscii asciiArt={art} interval={300} />
      </div>

      <div className="w-full lg:w-1/2 px-[50px]">
        <AnimatedName />
        <p className="text-lg font-normal text-white lg:text-xl">
          I am a
          <span className="text-yellow-200">
            &nbsp;
            <Designations words={designations} />
          </span>
        </p>

        <p className="my-3 text-sm md:text-lg text-gray-400 text-justify">
          Just a guy passionate about solving problems and building things. Experienced in creating web applications and
          innovative solutions to complex problems. Explore my portfolio to see my projects and feel free to connect
          with me!
        </p>
        <ButtonGroup className="justify-center sm:justify-start">
          <ResumeModal />
          <ButtonSecondary href="#projects" onClick={smoothScroll} text="Show Projects" />
        </ButtonGroup>
      </div>
    </section>
  );
}
