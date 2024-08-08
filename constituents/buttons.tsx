import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
}

export const Button = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center items-center py-3 px-5 me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" href={href}> {text} </Link>
);

export const ButtonSecondary = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 me-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" href={href}> {text} </Link>
);

export const ButtonProjectLive = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center items-center py-3 px-5 me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" href={href}>
    {text}
  </Link>
);

export const ButtonProjectCode = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 me-4 text-base font-medium text-center text-black hover:text-white dark:text-white dark:hover:text-black rounded-lg border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100 focus:ring-4 focus:ring-gray-600 dark:focus:ring-gray-400" href={href}>
    {text}
  </Link>
);
