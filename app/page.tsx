"use client";
// Use { } for Named Exports (without a default)
import useBlobity from 'blobity/lib/react/useBlobity';
import LoadingScreen from "@/world/anim/loading/LoadingScreen";
import FastTravel from "@/world/navigation";
import Home from "@/world/home";
import Workshop from "@/world/workshop";

export default function Application() {
  const blobity = useBlobity({
    licenseKey: "opensource"
  });
  return (
    <>
      <LoadingScreen />
      <FastTravel />

      <Home />
      <Workshop />
    </>
  );
}
