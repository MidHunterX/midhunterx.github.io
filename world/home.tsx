"use client";
import { ButtonGroup, ButtonSecondary } from "@/constituents/buttons";
import { smoothScroll } from "@/world/smoothScroll";
import ResumeModal from "@/constituents/modals";
import AnimatedName from "@/world/effects/animatedName";
import Designations from "@/world/effects/designations";
import AnimatedAscii from "@/world/effects/animatedAscii";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin } from "@fortawesome/free-solid-svg-icons";

// █░█ █▀▀ █▀█ █▀█   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
// █▀█ ██▄ █▀▄ █▄█   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█

type Props = {
  blob?: any;
};

export default function Home({ blob }: Props) {
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

  const [isCursorInSection, setIsCursorInSection] = useState(false);
  const blobHomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blob?.current) return;
    if (isCursorInSection && blobHomeRef.current) blob.current.focusElement(blobHomeRef.current);
    else blob.current.reset();
  }, [isCursorInSection, blob]);

  return (
    <section
      id="home"
      onMouseEnter={() => setIsCursorInSection(true)}
      onMouseLeave={() => setIsCursorInSection(false)}
      className="dark bg-cover bg-no-repeat bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply max-w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center"
    >
      <aside
        ref={blobHomeRef}
        className={`fixed right-5 bottom-5 z-50 p-2 border-2 bg-black
          rounded-full border-dashed border-white/40 flex flex-col items-center
          ${isCursorInSection ? "block" : "hidden pointer-events-none"}
        `}
        data-blobity-radius="25"
      >
        <FontAwesomeIcon icon={faFaceGrin} className="text-white text-2xl" />
      </aside>

      <div className="text-white text-center justify-center w-full lg:w-1/3">
        <AnimatedAscii asciiArt={art} interval={300} />
      </div>

      <hgroup className="w-full lg:w-1/2 px-[50px]">
        {/* Here's what I want the indexing mechanism to see >:D */}
        <h1 className="hidden">MidHunterX</h1>
        {/* This is what I want the viewer to see */}
        <AnimatedName
          className="w-full flex mb-3 text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-none"
          data-no-blobity
        />

        <p className="mb-0 text-lg font-normal text-white lg:text-xl">
          I am a
          <span className="text-yellow-200">
            &nbsp;
            <Designations words={designations} />
          </span>
        </p>

        <p className="mb-3 text-gray-400 text-justify">
          Specializing in <span className="text-gray-200 font-medium">high-performance architecture</span>, developer
          experience (DevEx), and ergonomic computing. I build the underlying systems that make software efficient,
          scalable, and resilient.
        </p>
        <ButtonGroup className="justify-center sm:justify-start">
          <ResumeModal data-no-blobity/>
          <ButtonSecondary href="#projects" onClick={smoothScroll} text="Show Projects" data-no-blobity />
        </ButtonGroup>
      </hgroup>
    </section>
  );
}
