"use client";
import DeveloperSection from "@/world/projectDev";
import ArtworkSection from "@/world/projectArt";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export function TabItem({ text }: { text: string }) {
  return (
    <Tab
      data-blobity-magnetic="false"
      className="inline-block text-xs md:text-sm px-4 py-3 mx-1 md:mx-2 rounded-b-xl text-black dark:text-white bg-gray-300 dark:bg-gray-800
      hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-black focus:outline-none
      data-[selected]:bg-black dark:data-[selected]:bg-white data-[selected]:text-white dark:data-[selected]:text-black"
    >
      {text}
    </Tab>
  );
}

// █▀█ █▀█ █▀█ ░░█ █▀▀ █▀▀ ▀█▀   █▀ █▀▀ █▀▀ ▀█▀ █ █▀█ █▄░█
// █▀▀ █▀▄ █▄█ █▄█ ██▄ █▄▄ ░█░   ▄█ ██▄ █▄▄ ░█░ █ █▄█ █░▀█

export default function Projects() {
  return (
    <section id="projects">
      <TabGroup>
        {/* TAB SELECTION */}
        <TabList className="w-fit mx-auto flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <TabItem text="Software Projects" />
          <TabItem text="Digital Artworks" />
        </TabList>

        {/* TAB BODY */}
        <TabPanels>
          <TabPanel>
            <DeveloperSection />
          </TabPanel>
          <TabPanel>
            <ArtworkSection />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  );
}
