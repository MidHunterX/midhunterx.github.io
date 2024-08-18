"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ArtworkSection() {
  // █░░ █▀█ ▄▀█ █▀▄ █ █▄░█ █▀▀   ░░█ █▀ █▀█ █▄░█
  // █▄▄ █▄█ █▀█ █▄▀ █ █░▀█ █▄█   █▄█ ▄█ █▄█ █░▀█
  // DATASTRUCTURE
  type Designs = {
    [category: string]: {
      [aspect: string]: string[];
    };
  };

  // LOADING JSON DATA
  const [designs, setDesigns] = useState<Designs | null>(null);
  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await fetch("/designs.json");
        const data: Designs = await response.json();
        setDesigns(data);
      } catch (error) {
        console.error("Error fetching designs:", error);
      }
    };
    fetchDesigns();
  }, []);
  if (!designs) {
    return <p>Loading Designs...</p>;
  }

  // ▄▀█ █▀ █▀█ █▀▀ █▀▀ ▀█▀   █▀█ ▄▀█ ▀█▀ █ █▀█   █▀ ▀█▀ ▄▀█ █▀▀ █▄▀
  // █▀█ ▄█ █▀▀ ██▄ █▄▄ ░█░   █▀▄ █▀█ ░█░ █ █▄█   ▄█ ░█░ █▀█ █▄▄ █░█
  // RETURNS ALL RENDERED IMAGE ELEMENTS INTO AN ARRAY
  // Usage Example: {images169}
  const images11: JSX.Element[] = [];
  const images169: JSX.Element[] = [];

  for (const category in designs) {
    if (designs.hasOwnProperty(category)) {
      const aspects = designs[category];

      for (const aspect in aspects) {
        if (aspects.hasOwnProperty(aspect)) {
          const images = aspects[aspect];

          if (aspect === "11") {
            for (const image of images) {
              images11.push(
                <Image
                  className="rounded-lg object-cover h-[100%]"
                  key={`${category}-${aspect}-${image}`}
                  src={`/designs/${category}/${aspect}/${image}`}
                  alt={image}
                  width={500}
                  height={500}
                />,
              );
            }
          } else if (aspect === "169") {
            for (const image of images) {
              images169.push(
                <Image
                  // Fit and Cover Image
                  className="rounded-lg object-cover h-[100%] col-span-2"
                  key={`${category}-${aspect}-${image}`}
                  src={`/designs/${category}/${aspect}/${image}`}
                  alt={image}
                  width={1280}
                  height={720}
                />,
              );
            }
          }
        }
      }
    }
  }

  // █▀ ▀█▀ ▄▀█ █▀▀ █▄▀   █▀█ █▀█ █▀█ █▀█ █▀▀ █▀█
  // ▄█ ░█░ █▀█ █▄▄ █░█   █▀▀ █▄█ █▀▀ █▀▀ ██▄ █▀▄
  // FUNCTIONS TO POP SINGLE IMAGES FROM ASPECT STACK
  function img11() {
    return images11.length > 0 ? images11.shift() || null : null;
  }
  function img169() {
    return images169.length > 0 ? images169.shift() || null : null;
  }

  // GRID R=RECTANGLE S=SQUARE
  function grid_ssr() {
    return (
      <>
        {img11()}
        {img11()}
        {img169()}
      </>
    );
  }

  function grid_rss() {
    return (
      <>
        {img169()}
        {img11()}
        {img11()}
      </>
    );
  }

  function grid_rr() {
    return (
      <>
        {img169()}
        {img169()}
      </>
    );
  }

  function grid_bento() {
    return (
      <>
        {grid_rss()}
        {grid_ssr()}
        {grid_rr()}

        {grid_rss()}
        {grid_rss()}
        {grid_rr()}

        {grid_ssr()}
        {grid_rss()}
        {grid_rr()}
      </>
    );
  }

  // ▄▀█ █▀█ ▀█▀ █░█░█ █▀█ █▀█ █▄▀   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
  // █▀█ █▀▄ ░█░ ▀▄▀▄▀ █▄█ █▀▄ █░█   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█
  return (
    <section
      id="artworkSection"
      className="px-3 md:px-[100px] py-[100px] w-fit mx-auto"
    >
      <h2>
        <FontAwesomeIcon className="pe-4" icon={faPalette} />
        Artworks
      </h2>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 pb-5">
        {grid_bento()}
        {grid_bento()}
        {grid_bento()}

        {/* RENDER ALL IMAGES AT ONCE
        {images11}
        {images169}
        */}
      </div>
    </section>
  );
}
