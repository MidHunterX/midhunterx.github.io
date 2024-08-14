"use client";
import Link from "next/link";
import { smoothScroll } from '@/world/smoothScroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitchNav } from "@/world/themeswitch"

/* ===================== SMOOTH TRAVEL TO DESTINATION ===================== */

type NavItemProps = {
  href: string;
  label: string;
  text: string;
};

const NavItem = ({ href, label, text }: NavItemProps) => (
  <Link href={href} onClick={smoothScroll} aria-label={label}>
    <p className="text-white m-0 rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
      {text}
    </p>
  </Link>
);

export default function FastTravel() {
  return (
    <nav className="fixed bottom-0 sm:bottom-8 left-0 right-0 mx-auto flex items-center justify-center gap-1 sm:rounded-lg border border-0 sm:border-2 border-gray-500 bg-neutral-950 px-1 py-1 text-[#e4ded7] backdrop-blur-md w-fit">
      <Link
        href="MidhunJinan_Resume.pdf"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
          icon={faFilePdf}
        />
      </Link>

      <NavItem href="#home" label="Fast Travel to Home" text="Home" />

      <NavItem
        href="#workshop"
        label="Fast Travel to Work Shop"
        text="Projects"
      />

      <NavItem href="#skills" label="Scroll to Skills Section" text="Skills" />

      <NavItem
        href="#contact"
        label="Fast Travel to Postal Service"
        text="Contact"
      />

      <ThemeSwitchNav />
    </nav>
  );
}
