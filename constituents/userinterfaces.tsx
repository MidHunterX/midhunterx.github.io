import {
  Button,
  ButtonSecondary,
  ButtonArrow,
  LinkArrow,
} from "@/constituents/buttons";

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
    <section className="bg-center bg-no-repeat bg-[url('../public/hero.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto text-center flex flex-col justify-center max-w-screen-xl h-screen py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {head}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {body}
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button href={href1} text={button1} />
          <ButtonSecondary href={href2} text={button2} />
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
