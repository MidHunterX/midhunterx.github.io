"use client";
// Use { } for Named Exports (without a default)
import useBlobity from "blobity/lib/react/useBlobity";
import LoadingScreen from "@/world/anim/loading/LoadingScreen";
import FastTravel from "@/world/navigation";
import Home from "@/world/home";
import Workshop from "@/world/workshop";
import Skills from "@/world/skills";
import Contact from "@/world/contact";
import ThemeSwitch from "@/world/themeswitch";

export default function Application() {
  const blobity = useBlobity({
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
  return (
    <>
      <LoadingScreen />
      <FastTravel />
      <Home />
      <ThemeSwitch />
      <Workshop />
      <Skills />
      <Contact />
    </>
  );
}
