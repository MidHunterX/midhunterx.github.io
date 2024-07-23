"use client";
// Use { } for Named Exports (without a default)
import * as UI from "@/constituents/userinterfaces";
import LoadingScreen from "@/constituents/anim-loading/LoadingScreen";
import FastTravel from "@/world/navigation";

import Home from "@/world/home";
import Workshop from "@/world/workshop";

export default function Application() {
  return (
    <>
      <LoadingScreen />
      <FastTravel />

      <Home />
      <Workshop />
    </>
  );
}
