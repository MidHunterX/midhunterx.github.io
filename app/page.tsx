"use client";
// Use { } for Named Exports (without a default)
import { useState, useEffect } from "react";
import useBlobity from "blobity/lib/react/useBlobity";
import { useTheme } from "next-themes";
import LoadingScreen from "@/world/anim/loading/LoadingScreen";
import FastTravel from "@/world/navigation";
import Home from "@/world/home";
import Projects from "@/world/projects";
import Skills from "@/world/skills";
import Contact from "@/world/contact";

type ToggleNavProps = {
  toggleAutoHide: () => void;
  isAutoHideEnabled: boolean;
};

const ToggleNav = ({ toggleAutoHide, isAutoHideEnabled }: ToggleNavProps) => {
  return (
    <button
      onClick={toggleAutoHide}
      className="p-2 bg-gray-700 text-white rounded"
    >
      {isAutoHideEnabled ? "Disable Auto-Hide" : "Enable Auto-Hide"}
    </button>
  );
};

export default function Application() {
  useBlobity({
    licenseKey: "opensource",
    mode: "normal", // normal, slow, bouncy
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    color: "#e4ded7",
    // dotColor: "#0e1016", // replaces mouse cursor
    invert: true,
    font: "'Montserrat',Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 16,
    fontWeight: 500,
    opacity: 1,
    fontColor: "#0e1016",
    zIndex: 100,
    size: 40,
    radius: 4,
    magnetic: true,
  });
  const { resolvedTheme } = useTheme();

  // FASTTRAVEL AUTOHIDE GET (LOCALSTORAGE)
  useEffect(() => {
    const savedAutoHideSetting = localStorage.getItem("autoHideNavbar");
    if (savedAutoHideSetting !== null) {
      setIsAutoHideEnabled(JSON.parse(savedAutoHideSetting)); // str to bool
    }
  }, []);
  // FASTTRAVEL AUTOHIDE SET
  const [isAutoHideEnabled, setIsAutoHideEnabled] = useState(true);
  const toggleAutoHide = () => {
    setIsAutoHideEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("autoHideNavbar", JSON.stringify(newValue)); // bool to str
      return newValue;
    });
  };

  return (
    <section style={{ color: resolvedTheme === "dark" ? "white" : "black" }}>
      <LoadingScreen />
      <FastTravel isAutoHideEnabled={isAutoHideEnabled} />
      <Home />
      <ToggleNav
        toggleAutoHide={toggleAutoHide}
        isAutoHideEnabled={isAutoHideEnabled}
      />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}
