"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faSync } from "@fortawesome/free-solid-svg-icons";
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
        // SLOW DEVICE TEST
        // Simulate slow connection if needed
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const response = await fetch("/designs.json");
        const data: Designs = await response.json();
        setDesigns(data);
      } catch (error) {
        console.error("Error fetching designs:", error);
      }
    };
    fetchDesigns();
  }, []);

  // SHOW WHILE LOADING JSON DATA
  if (!designs) {
    return (
      <div className="w-fit mx-auto py-[100px] h-screen text-center">
        <h2>
          <FontAwesomeIcon height={48} width={48} className="pe-4" icon={faPalette} />
          Artworks
        </h2>
        <FontAwesomeIcon className="text-6xl mb-6 fa-spin" icon={faSync} />
        <p>Loading Designs...</p>
      </div>
    );
  }

  // ▄▀█ █▀ █▀█ █▀▀ █▀▀ ▀█▀   █▀█ ▄▀█ ▀█▀ █ █▀█   █▀ ▀█▀ ▄▀█ █▀▀ █▄▀
  // █▀█ ▄█ █▀▀ ██▄ █▄▄ ░█░   █▀▄ █▀█ ░█░ █ █▄█   ▄█ ░█░ █▀█ █▄▄ █░█
  // RETURNS ALL RENDERED IMAGE ELEMENTS INTO AN ARRAY
  // Usage Example: {images169}
  // Build a map: category -> array of image objects
  type ImageItem = {
    src: string;
    alt: string;
    aspect: "11" | "169";
  };

  const categoryMap: { [category: string]: ImageItem[] } = {};

  for (const category in designs) {
    if (!designs.hasOwnProperty(category)) continue;
    const aspects = designs[category];
    const items: ImageItem[] = [];

    for (const aspect in aspects) {
      if (!aspects.hasOwnProperty(aspect)) continue;
      const images = aspects[aspect];
      for (const image of images) {
        items.push({
          src: `/designs/${category}/${aspect}/${image}`,
          alt: image,
          aspect: aspect as "11" | "169",
        });
      }
    }

    if (items.length > 0) categoryMap[category] = items;
  }

  // ▄▀█ █▀█ ▀█▀ █░█░█ █▀█ █▀█ █▄▀   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
  // █▀█ █▀▄ ░█░ ▀▄▀▄▀ █▄█ █▀▄ █░█   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█
  // Render each category with its own masonry grid
  return (
    <section id="artworkSection" className="px-3 md:px-[100px] py-[100px] w-full mx-auto">
      <h2 className="mb-8">
        <FontAwesomeIcon className="pe-4" icon={faPalette} />
        Artworks
      </h2>

      {Object.entries(categoryMap).map(([category, images]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold mb-4 capitalize">{category}</h3>
          {/* Masonry grid using CSS Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
            {images.map((img, idx) => {
              const isWide = img.aspect === "169";

              return (
                <div
                  key={`${category}-${idx}`}
                  className={`relative w-full ${isWide ? "sm:col-span-2 lg:col-span-2 xl:col-span-2" : "col-span-1"}`}
                  style={{ aspectRatio: isWide ? "16/9" : "1/1" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes={
                      isWide
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
