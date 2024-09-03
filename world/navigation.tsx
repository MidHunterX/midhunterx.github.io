"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import { smoothScroll } from "@/world/smoothScroll";

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

type FastTravelProps = {
  isAutoHideEnabled: boolean;
};

export default function FastTravel({ isAutoHideEnabled }: FastTravelProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isAutoHideEnabled) {
        // Show nav if at top or if scroll up
        if (currentScrollY <= 100 || currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setLastScrollY(currentScrollY);
      } else {
        setIsVisible(true); // Always show if auto-hide disabled
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isAutoHideEnabled]);

  return (
    <nav
      className={`fixed bottom-0 sm:bottom-6 left-0 right-0 mx-auto flex items-center justify-center gap-1 sm:rounded-xl border-0 sm:border-2 border-gray-500 bg-neutral-950 px-1 py-1 sm:w-[383.3px] md:p-2 lg:w-fit z-20 transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}
    >
      <NavItem href="#home" label="Fast Travel to Home">
        Home
      </NavItem>

      <NavItem href="#projects" label="Fast Travel to Work Shop">
        Projects
      </NavItem>

      <NavItem href="#skills" label="Scroll to Skills Section">
        Skills
      </NavItem>

      <NavItem href="#contact" label="Fast Travel to Postal Service">
        Contact
      </NavItem>
    </nav>
  );
}
