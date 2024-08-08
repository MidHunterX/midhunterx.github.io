import {
  Button,
  ButtonSecondary,
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
