"use client";
// Use { } for Named Exports (without a default)
import useBlobity from "blobity/lib/react/useBlobity";
import { useTheme } from "next-themes";
import LoadingScreen from "@/world/anim/loading/LoadingScreen";
import FastTravel from "@/world/navigation";
import Home from "@/world/home";
import Projects from "@/world/projects";
import Skills from "@/world/skills";
import Contact from "@/world/contact";
import { useAutoHideNav } from "@/world/settings";
import { ToggleAutoHideNav } from "@/world/settings/toggleAutoHideNav";
import Settings from "@/world/settings";
import { ThemeSwitchRadio } from "@/world/settings/toggleThemes";
import { useEffect } from "react";

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
    radius: 8,
    magnetic: true,
  });

  // REFRESH TO TOP
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const { resolvedTheme } = useTheme();
  const { isAutoHideNavEnabled, toggleAutoHideNav } = useAutoHideNav();

  return (
    <section style={{ color: resolvedTheme === "dark" ? "white" : "black" }}>
      <LoadingScreen />
      <FastTravel isAutoHideEnabled={isAutoHideNavEnabled} />
      <Settings>
        <ToggleAutoHideNav
          toggleAutoHideNav={toggleAutoHideNav}
          isAutoHideNavEnabled={isAutoHideNavEnabled}
        />
        <ThemeSwitchRadio />
      </Settings>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}
