import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
}

export const Button = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center items-center py-3 px-5 sm:me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" href={href}> {text} </Link>
);

export const ButtonSecondary = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:me-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" href={href}> {text} </Link>
);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

export const ButtonProjectLive = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center items-center py-3 px-5 sm:me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" href={href}>
    <FontAwesomeIcon
      className="pe-2"
      icon={faGlobe}
    />
    {text}
  </Link>
);

export const ButtonProjectCode = ({ href, text }:ButtonProps) => (
  <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:me-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" href={href}>
    <FontAwesomeIcon
      className="pe-2"
      icon={faCode}
    />
    {text}
  </Link>
);

export const ButtonArrow = ({ href, text }:ButtonProps) => (
  <a
    className="inline-flex justify-center items-center py-3 px-5 text-base
    font-medium text-center text-black rounded-lg bg-blue-500 dark:bg-yellow-200
    hover:bg-yellow-500 dark:hover:bg-blue-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
    href={href}>
    {text}
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
);

export const LinkArrow = ({ href, text }:ButtonProps) => (
  <a
    className="text-blue-600 dark:text-yellow-200 hover:underline font-medium
    text-lg inline-flex items-center"
    href={href}>
    {text}
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
);
