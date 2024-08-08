"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  // █▀▀ █▀▀ ▀█▀ █▀▀ █░█   █▀ █▄▀ █ █░░ █░░ █▀
  // █▀░ ██▄ ░█░ █▄▄ █▀█   ▄█ █░█ █ █▄▄ █▄▄ ▄█
  // Reads skills.json and set @var:skills
  type Skill = {
    name: string;
    icon: string;
  };

  type Skills = {
    languages: Skill[];
    databases: Skill[];
    frameworks: Skill[];
    libraries: Skill[];
    tools: Skill[];
  };

  const [skills, setSkills] = useState<Skills | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/skills.json");
        const data: Skills = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  if (!skills) {
    return <p>Loading...</p>;
  }

  // █▀█ █▀▀ █▄░█ █▀▄ █▀▀ █▀█   █▀ █▄▀ █ █░░ █░░ █▀
  // █▀▄ ██▄ █░▀█ █▄▀ ██▄ █▀▄   ▄█ █░█ █ █▄▄ █▄▄ ▄█
  // Prints skills from given category
  // Syntax: renderSkills("category", data.category)
  // Example: renderSkills("languages", skills.languages)
  const renderSkills = (title: string, skillList: Skill[]) => (
    <div className="w-full grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center py-2 sm:px-0">
      {skillList.map((skill, index) => (
        <div key={`skill-${index}`} className="block p-4">
          <Image
            src={`/ico/${title}/${skill.icon}.svg`}
            alt={`${skill.name} icon`}
            width={150}
            height={150}
            data-blobity-tooltip={`${skill.name}`}
          />
        </div>
      ))}
    </div>
  );

  // █▀█ █▀▀ █▄░█ █▀▄ █▀▀ █▀█   ▄▀█ █░░ █░░   █▀ █▄▀ █ █░░ █░░ █▀
  // █▀▄ ██▄ █░▀█ █▄▀ ██▄ █▀▄   █▀█ █▄▄ █▄▄   ▄█ █░█ █ █▄▄ █▄▄ ▄█
  // Renders skills from every skills one after the next
  // syntax: renderAllSkills()
  const renderAllSkills = () => {
    const skillElements = [];
    if (skills) {
      for (const [title, skillList] of Object.entries(skills)) {
        skillElements.push(
          ...skillList.map((skill, index) => (
            <div
              key={`${title}-${index}`}
              className="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#161D1F] dark:border-gray-700 dark:hover:bg-gray-700"
              data-blobity-tooltip={`${skill.name}`}
              data-blobity-magnetic="false"
            >
              <Image
                src={`/ico/${title}/${skill.icon}.svg`}
                alt={`${skill.name} icon`}
                data-blobity-tooltip={`${skill.name}`}
                data-blobity-magnetic="true"
                width={150}
                height={150}
              />
            </div>
          )),
        );
      }
    }
    return skillElements;
  };

  return (
    <section
      id="skills"
      className="py-[100px] lg:px-[80px] sm:px-[50px] flex flex-col gap-20 items-center"
    >
      <h2>
        <FontAwesomeIcon className="pe-4" icon={faToolbox} />
        Skills
      </h2>

      <div className="w-full place-content-center grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 text-center">
        {renderAllSkills()}
      </div>
    </section>
  );
}
