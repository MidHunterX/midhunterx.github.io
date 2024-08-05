"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

/* ===================== SMOOTH TRAVEL TO DESTINATION ===================== */

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

type NavItemProps = {
  href: string;
  label: string;
  text: string;
};

const NavItem = ({ href, label, text }: NavItemProps) => (
  <Link href={href} onClick={handleScroll} aria-label={label} data-blobity-magnetic="false">
    <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
      {text}
    </h4>
  </Link>
);

export default function FastTravel() {
  return (
    <nav className="fixed bottom-5 left-0 right-0 mx-auto flex items-center justify-center gap-1 rounded-lg bg-[#07070a] px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <Link
        href="https://drive.google.com/file/d/1Mmwl-FRGPm5QVe3AjtukJr_Jpc366Ear/view"
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

      <NavItem href="#about" label="Scroll to About Section" text="About" />

      <NavItem
        href="#contact"
        label="Fast Travel to Postal Service"
        text="Contact"
      />
    </nav>
  );
}
