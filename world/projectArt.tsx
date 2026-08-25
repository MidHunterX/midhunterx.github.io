"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faSync } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";

type SpecialImageProps = {
  src: string;
  alt: string;
  isWide?: boolean;
  className?: string;
};

const specialComponents = new Map<string, React.ComponentType<SpecialImageProps>>();

function AmbigramImage({ src, alt, isWide }: SpecialImageProps) {
  const [rotated, setRotated] = useState(false);
  const toggleRotate = () => setRotated((prev) => !prev);
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg transition-transform duration-300"
        style={{ transform: rotated ? "rotate(180deg)" : "rotate(0deg)" }}
        sizes={
          isWide
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
            : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        }
      />
      <button
        onClick={toggleRotate}
        className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-md text-sm hover:bg-black/90 transition z-10"
      >
        Rotate 180°
      </button>
    </div>
  );
}

export default function ArtworkSection() {
  // █░░ █▀█ ▄▀█ █▀▄ █ █▄░█ █▀▀   ░░█ █▀ █▀█ █▄░█
  // █▄▄ █▄█ █▀█ █▄▀ █ █░▀█ █▄█   █▄█ ▄█ █▄█ █░▀█
  type CategoryData = {
    title: string;
    description: string;
    "11": string[];
    "169": string[];
  };

  type Designs = {
    [category: string]: CategoryData;
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
        <h2 className="text-center mb-14">
          <FontAwesomeIcon height={48} width={48} className="pe-4" icon={faPalette} />
          Artworks
        </h2>
        <FontAwesomeIcon className="text-6xl mb-6 fa-spin" icon={faSync} />
        <p>Loading Designs...</p>
      </div>
    );
  }

  // ▄▀█ █▀ █▀█ █▀▀ █▀▀ ▀█▀   █▀█ ▄▀█ ▀█▀ █ █▀█
  // █▀█ ▄█ █▀▀ ██▄ █▄▄ ░█░   █▀▄ █▀█ ░█░ █ █▄█
  // Build a map: category -> array of image objects
  type ImageItem = {
    src: string;
    alt: string;
    aspect: "11" | "169";
  };

  type CategoryInfo = {
    title: string;
    description: string;
    images: ImageItem[];
  };

  const categoryMap: { [category: string]: CategoryInfo } = {};

  for (const category in designs) {
    if (!designs.hasOwnProperty(category)) continue;
    const categoryData = designs[category];
    const items: ImageItem[] = [];

    // Process 1:1 aspect images
    if (categoryData["11"] && Array.isArray(categoryData["11"])) {
      for (const image of categoryData["11"]) {
        items.push({
          src: `/designs/${category}/11/${image}`,
          alt: image,
          aspect: "11",
        });
      }
    }

    // Process 16:9 aspect images
    if (categoryData["169"] && Array.isArray(categoryData["169"])) {
      for (const image of categoryData["169"]) {
        items.push({
          src: `/designs/${category}/169/${image}`,
          alt: image,
          aspect: "169",
        });
      }
    }

    if (items.length > 0) {
      categoryMap[category] = {
        title: categoryData.title || category,
        description: categoryData.description || "",
        images: items,
      };
    }
  }

  // ▄▀█ █▀█ ▀█▀ █░█░█ █▀█ █▀█ █▄▀   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
  // █▀█ █▀▄ ░█░ ▀▄▀▄▀ █▄█ █▀▄ █░█   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█
  // Render each category with its own masonry grid
  return (
    <section id="artworkSection" className="px-3 md:px-[100px] py-[100px] w-full mx-auto">
      <h2 className="text-center mb-14">
        <FontAwesomeIcon className="pe-4" icon={faPalette} />
        Artworks
      </h2>

      {Object.entries(categoryMap).map(([category, categoryInfo]) => (
        <div key={category} className="mb-12">
          <div className="mb-4">
            <h3 className="text-2xl font-bold capitalize">{categoryInfo.title}</h3>
            {categoryInfo.description && (
              <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base max-w-3xl">
                {categoryInfo.description}
              </p>
            )}
          </div>

          {/* Masonry grid using CSS Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
            {categoryInfo.images.map((img, idx) => {
              const isWide = img.aspect === "169";

              if (img.src === "/designs/logo/11/l_ambigram.jpg") {
                return (
                  <div
                    key={`${category}-${idx}`}
                    className={`relative w-full ${isWide ? "sm:col-span-2 lg:col-span-2 xl:col-span-2" : "col-span-1"}`}
                    style={{ aspectRatio: isWide ? "16/9" : "1/1" }}
                  >
                    <AmbigramImage src={img.src} alt={img.alt} isWide={isWide} />
                  </div>
                );
              }

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
