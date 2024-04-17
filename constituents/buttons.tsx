import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
}

export const Button = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" href={href}> {text} </Link>
);

export const ButtonSecondary = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" href={href}> {text} </Link>
);
