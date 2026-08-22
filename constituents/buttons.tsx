import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonGroupProps = {
  className?: String;
  children: ReactNode; // ReactNode allows any JSX content
};

export const ButtonGroup = ({children, className}:ButtonGroupProps) => (
  <div className={`flex gap-3 md:gap-4 mt-6 ${className}`}>
    {children}
  </div>
);

type ButtonProps = {
  href: string;
  text: string;
  // Allow additional props (attributes), like onClick, target, className etc.
  [key: string]: any;
};

export const Button = ({ href, text, ...rest }:ButtonProps) => (
  <Link
    className="btn text-white bg-blue-700 hover:bg-blue-900
    dark:text-black dark:bg-yellow-200 dark:hover:bg-yellow-500 "
    href={href} {...rest}> {text}
  </Link>
);

export const ButtonSecondary = ({ href, text, ...rest }:ButtonProps) => (
  <Link className="btn font-medium text-center text-black hover:text-white dark:text-white dark:hover:text-black rounded-lg border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100" href={href} {...rest}> {text} </Link>
);

// USED IN VIEW RESUME
export const ButtonNull = ({ text, ...rest }:{text:string;[key:string]:any;}) => (
  <button className="btn text-white bg-blue-700 hover:bg-blue-900 dark:text-black dark:bg-yellow-200 dark:hover:bg-yellow-500 " {...rest}> {text} </button>
);

export const ButtonSecondaryNull = ({ text, ...rest }:{text:string;[key:string]:any;}) => (
  <button className="btn font-medium text-black hover:text-white dark:text-white dark:hover:text-black rounded-lg border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-100" {...rest}> {text} </button>
);

export const ButtonCaseStudy = ({ text, ...rest }:{text:string;[key:string]:any;}) => (
  <button
    className="btn text-blue-700 hover:text-blue-900 dark:text-yellow-200 dark:hover:text-yellow-500"
    {...rest}> {text}
  </button>
);

// USED IN VIEWING PROJECT
export const ButtonDisabled = ({ text }:{ text: string }) => (
  <a
    data-blobity-tooltip="☝️ No clicky"
    data-blobity-magnetic="false"
    className="btn font-medium text-white rounded-lg bg-gray-500 cursor-not-allowed"
  > <span className="animate-pulse">{text}</span> </a>
);
