"use client";
// Use { } for Named Exports (without a default)
import * as UI from "@/constituents/userinterfaces";
import LoadingScreen from "@/constituents/anim-loading/LoadingScreen";
import FastTravel from "@/world/navigation";

import HeroSection from "./section-hero.tsx";
import ProjectsSection from "./section-projects.tsx";

export default function Application() {
  return (
    <>
      <LoadingScreen />
      <FastTravel />

      <HeroSection />
      <ProjectsSection />
    </>
  );
}
