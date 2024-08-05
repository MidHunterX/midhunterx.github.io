import {
  Button,
  ButtonSecondary,
  ButtonArrow,
  LinkArrow,
  ButtonProjectLive,
  ButtonProjectCode,
} from "@/constituents/buttons";

// ░░█ █░█ █▀▄▀█ █▄▄ █▀█ ▀█▀ █▀█ █▀█ █▄░█
// █▄█ █▄█ █░▀░█ █▄█ █▄█ ░█░ █▀▄ █▄█ █░▀█

type JumboProps = {
  head: string;
  body: string;
  button1: string;
  button2: string;
};

export function Jumbotron({ head, body, button1, button2 }: JumboProps) {
  return (
    <section className="bg-center bg-no-repeat bg-[url('../public/hero.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto text-center flex flex-col justify-center max-w-screen-xl h-screen py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {head}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {body}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button href="/" text={button1} />
          <ButtonSecondary href="/" text={button2} />
        </div>
      </div>
    </section>
  );
}

// █▄▄ █▀▀ █▄░█ ▀█▀ █▀█ █▄▄ █▀█ ▀▄▀
// █▄█ ██▄ █░▀█ ░█░ █▄█ █▄█ █▄█ █░█

type BentoProps = {
  head: string;
  body: string;
  href: string;
  button: string;
};

export const Bento1 = ({ head, body, href, button }: BentoProps) => (
  <div className="bg-gray-50 dark:bg-[#161D1F] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
      {head}
    </h1>
    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
      {body}
    </p>
    <ButtonArrow href={href} text={button} />
  </div>
);

export const Bento2 = ({ head, body, href, button }: BentoProps) => (
  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
    <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
      {head}
    </h2>
    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
      {body}
    </p>
    <LinkArrow href={href} text={button} />
  </div>
);

export function BentoBox({ children }: { children: any }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      {children}
    </div>
  );
}

// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █ ▀█▀ █▀▀ █▀▄▀█
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   █ ░█░ ██▄ █░▀░█

type ProjectItemProps = {
  img: string;
  head: string;
  body: string;
  live?: string;
  code?: string;
};

export const ProjectItem = ({
  img,
  head,
  body,
  live,
  code,
}: ProjectItemProps) => {
  let href: string;

  if (live) {
    href = live;
  } else if (code) {
    href = code;
  } else {
    href = "/";
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700">
      <img className="rounded-t-lg" src={img} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {head}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        {live && <ButtonProjectLive href={live} text="View Project" />}
        {code && <ButtonProjectCode href={code} text="Code" />}
      </div>
    </div>
  );
};
