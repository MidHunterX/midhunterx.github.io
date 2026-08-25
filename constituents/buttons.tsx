import Link from "next/link";
import { ReactNode } from "react";

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

const base =
  "btn inline-flex items-center justify-center gap-2 font-medium " +
  "transition-all duration-200 ease-out active:scale-[0.97] " +
  "disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#161D1F]";

const variants = {
  primary:
    "text-white bg-blue-700 hover:bg-blue-800 shadow-sm hover:shadow-md " +
    "focus-visible:ring-blue-600 " +
    "dark:text-black dark:bg-yellow-200 dark:hover:bg-yellow-400 dark:focus-visible:ring-yellow-300",
  secondary:
    "rounded-lg text-black dark:text-white border border-black/20 dark:border-white/25 " +
    "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black " +
    "focus-visible:ring-black/40 dark:focus-visible:ring-white/40",
  caseStudy:
    "text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 " +
    "dark:text-yellow-200 dark:bg-gray-800 dark:hover:bg-yellow-950/70 dark:hover:text-yellow-300 " +
    "focus-visible:ring-blue-400",
  disabled: "text-white bg-gray-400/90 dark:bg-gray-600 cursor-not-allowed select-none opacity-90",
} as const;

type ButtonGroupProps = {
  className?: string;
  children: ReactNode;
};

export const ButtonGroup = ({ children, className = "" }: ButtonGroupProps) => (
  <div className={cx("flex flex-wrap gap-3 md:gap-4 mt-6", className)}>{children}</div>
);

type ButtonProps = {
  href: string;
  text: string;
  className?: string;
  [key: string]: any;
};

export const Button = ({ href, text, className, ...rest }: ButtonProps) => (
  <Link className={cx(base, variants.primary, className)} href={href} {...rest}>
    {text}
  </Link>
);

export const ButtonSecondary = ({ href, text, className, ...rest }: ButtonProps) => (
  <Link className={cx(base, variants.secondary, className)} href={href} {...rest}>
    {text}
  </Link>
);

type ButtonNullProps = {
  text: string;
  className?: string;
  [key: string]: any;
};

export const ButtonNull = ({ text, className, ...rest }: ButtonNullProps) => (
  <button type="button" className={cx(base, variants.primary, className)} {...rest}>
    {text}
  </button>
);

export const ButtonSecondaryNull = ({ text, className, ...rest }: ButtonNullProps) => (
  <button type="button" className={cx(base, variants.secondary, className)} {...rest}>
    {text}
  </button>
);

export const ButtonCaseStudy = ({ text, className, ...rest }: ButtonNullProps) => (
  <button type="button" className={cx(base, variants.caseStudy, className)} {...rest}>
    {text}
  </button>
);

export const ButtonDisabled = ({ text }: { text: string }) => (
  <button
    type="button"
    disabled
    aria-disabled="true"
    data-blobity-tooltip="☝️ No clicky"
    data-blobity-magnetic="false"
    className={cx(base, variants.disabled)}
  >
    <span className="animate-pulse">{text}</span>
  </button>
);
