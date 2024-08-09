import { Button, ButtonSecondary, } from "@/constituents/buttons";

// ░░█ █░█ █▀▄▀█ █▄▄ █▀█ ▀█▀ █▀█ █▀█ █▄░█
// █▄█ █▄█ █░▀░█ █▄█ █▄█ ░█░ █▀▄ █▄█ █░▀█

type JumboProps = {
  head: string;
  body: string;
  button1: string;
  href1: string;
  button2: string;
  href2: string;
};

export function Jumbotron({ head, body, button1, href1, button2, href2 }: JumboProps) {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto text-center flex flex-col justify-center max-w-screen-xl h-screen py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {head}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {body}
        </p>
        <div className="flex flex-row justify-center">
          <Button href={href1} text={button1} />
          <ButtonSecondary href={href2} text={button2} />
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const art = `
      ////^\\\\\\\\
      | ^   ^ |
     @ (o) (o) @
      |   <   |
      |  ___  |
       \\_____/
     ____|  |____
    /    \\__/    \\
   /              \\
  /\\_/|        |\\_/\\
 / /  |        |  \\ \\
( <   |        |   > )
 \\ \\  |        |  / /
  \\ \\ |________| / /
`;

  const art2 = `
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
    <section className="bg-center bg-no-repeat bg-[url('/hero.jpg')] bg-gray-700 bg-blend-multiply max-w-screen h-screen py-[100px] lg:px-[80px] sm:px-[50px] lg:flex lg:flex-row items-center">

      <div className="collapse xl:visible lg:visible text-white flex flex-col items-center justify-center w-full lg:w-1/3">
        <pre className="mb-4 font-mono text-sm whitespace-pre-wrap">{art2}</pre>
      </div>

      <div className="w-full lg:w-2/3 px-[50px]">
        <div className="max-w-fit bg-gray-100 text-gray-800 text-xs font-medium mb-2 px-4 py-1 rounded dark:bg-gray-800 dark:text-gray-200 border border-gray-500">
          Greetings, I am known as
        </div>
        <h1 className="mb-4 lg:text-8xl sm:text-7xl text-white font-extrabold tracking-tight leading-none">
          Mid Hunter
        </h1>
        <p className="text-lg font-normal text-white lg:text-xl">
          I am a
          <span className="text-yellow-200"> Software Developer</span>
        </p>
        <p className="my-3 text-gray-400 text-justify">A Computer Science Engineering graduate passionate about software development. Experienced in creating web applications and innovative solutions to complex problems. Explore my portfolio to see my projects and feel free to connect with me!</p>
        <div className="mt-8 flex flex-row">
          <Button href="#workshop" text="Get Started" />
          <ButtonSecondary href="#" text="Download CV" />
        </div>
      </div>

    </section>
  );
}
