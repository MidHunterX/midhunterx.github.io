"use client";
import { Button, ButtonSecondary } from "@/constituents/buttons";
import { smoothScroll } from "@/world/smoothScroll";
import ResumeModal from "@/constituents/modals";


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

  return (
    <section
      id="home"
      className="dark bg-cover bg-no-repeat bg-[url('/hero.jpg')] lg:flex bg-gray-700 bg-blend-multiply max-w-screen min-h-screen pt-8 pb-[50px] lg:flex lg:flex-row items-center"
    >
      <div className="text-white text-center justify-center w-full lg:w-1/3">
        <pre className="mb-4 font-mono text-sm whitespace-pre-wrap">{art}</pre>
      </div>

      <div className="w-full lg:w-1/2 px-[50px]">
        <div className="max-w-fit bg-gray-100 text-gray-800 text-xs font-medium my-2 px-4 py-1 rounded dark:bg-gray-800 dark:text-gray-200 border border-gray-500">
          Greetings, I am known as
        </div>
        <h1 className="mb-4 text-5xl lg:text-8xl text-white font-extrabold tracking-tight leading-none">
          Mid Hunter
        </h1>
        <p className="text-lg font-normal text-white lg:text-xl">
          I am a<span className="text-yellow-200"> Software Developer</span>
        </p>
        <p className="my-3 text-sm md:text-lg text-gray-400 text-justify">
          Just a guy passionate about solving problems and building things.
          Experienced in creating web applications and innovative solutions to
          complex problems. Explore my portfolio to see my projects and feel
          free to connect with me!
        </p>
        <div className="mt-8 flex flex-row">
          <ResumeModal />
          <ButtonSecondary href="#workshop" onClick={smoothScroll} text="Get Started" />
        </div>
      </div>
    </section>
  );
}
