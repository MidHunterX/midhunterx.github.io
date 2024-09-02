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

import { Switch } from "@headlessui/react";

type ToggleNavProps = {
  toggleAutoHide: () => void;
  isAutoHideEnabled: boolean;
};

const ToggleNav = ({ toggleAutoHide, isAutoHideEnabled }: ToggleNavProps) => {
  return (
    <article className="flex place-items-center gap-3">
      <Switch
        checked={isAutoHideEnabled}
        onChange={toggleAutoHide}
        className="group inline-flex h-6 w-11 items-center rounded-full
        bg-gray-300 dark:bg-gray-600 transition data-[checked]:bg-blue-600 dark:data-[checked]:bg-yellow-200"
        data-blobity-magnetic="false"
        data-blobity-radius="15"
      >
        <span
          className="size-4 translate-x-1 rounded-full transition
          group-data-[checked]:translate-x-6 bg-white dark:bg-black"
        />
      </Switch>
      <p className="p-2 m-0 text-white">
        {isAutoHideEnabled
          ? "Auto-Hide Navbar Enabled"
          : "Auto-Hide Navbar Disabled"}
      </p>
    </article>
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
      try {
        setIsAutoHideEnabled(JSON.parse(savedAutoHideSetting)); // str to bool
      } catch (error) {
        console.error("Resetting autohide value in localStorage.", error);
        localStorage.setItem("autoHideNavbar", JSON.stringify(true)); // Reset to default val
        setIsAutoHideEnabled(true);
      }
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
