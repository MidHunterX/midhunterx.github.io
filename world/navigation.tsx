"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { smoothScroll } from "@/world/smoothScroll";
import { ThemeSwitchNav } from "@/world/themeswitch";

/* ===================== SMOOTH TRAVEL TO DESTINATION ===================== */

type NavItemProps = {
  href: string;
  label: string;
  children: ReactNode; // ReactNode allows any JSX content
};

const NavItem = ({ href, label, children }: NavItemProps) => (
  <Link href={href} onClick={smoothScroll} aria-label={label}>
    <p className="text-white m-0 rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
      {children}
    </p>
  </Link>
);

export default function FastTravel() {
  return (
    <nav className="fixed bottom-0 sm:bottom-8 left-0 right-0 mx-auto flex items-center justify-center gap-1 sm:rounded-lg border border-0 sm:border-2 border-gray-500 bg-neutral-950 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-fit z-10">
      <NavItem href="#home" label="Fast Travel to Home">
        Home
      </NavItem>

      <NavItem href="#workshop" label="Fast Travel to Work Shop">
        Projects
      </NavItem>

      <NavItem href="#skills" label="Scroll to Skills Section">
        Skills
      </NavItem>

      <NavItem href="#contact" label="Fast Travel to Postal Service">
        Contact
      </NavItem>

      <ThemeSwitchNav />
    </nav>
  );
}
