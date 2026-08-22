"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import IconCloud from "@/world/effects/iconCloud";

export default function Skills() {
  // █▀▀ █▀▀ ▀█▀ █▀▀ █░█   █▀ █▄▀ █ █░░ █░░ █▀
  // █▀░ ██▄ ░█░ █▄▄ █▀█   ▄█ █░█ █ █▄▄ █▄▄ ▄█
  // Reads skills.json and set @var:skills
  type Skill = {
    name: string;
    icon: string;
    desc: string;
  };

  type Skills = {
    languages: Skill[];
    databases: Skill[];
    frameworks: Skill[];
    libraries: Skill[];
    runtime_env: Skill[];
    tools: Skill[];
    misc: Skill[];
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

  // █▀ █░█ █▀▀ █▀█   █ █▀▄▀█ █▀█ █▀█ █▀█ ▀█▀
  // ▄█ ▀▄▀ █▄█ █▀▄   █ █░▀░█ █▀▀ █▄█ █▀▄ ░█░
  // Function to dynamically import SVGs as React Component using SVGR
  const importSvgIcon = (title: String, icon: String) => {
    try {
      const IconComponent = require(`/public/ico/${title}/${icon}.svg`).default;
      return IconComponent;
    } catch (error) {
      console.error("Error importing SVG:", error);
      return null;
    }
  };

  // █▀█ █▀▀ █▄░█ █▀▄ █▀▀ █▀█   ▄▀█ █░░ █░░   █▀ █▄▀ █ █░░ █░░ █▀
  // █▀▄ ██▄ █░▀█ █▄▀ ██▄ █▀▄   █▀█ █▄▄ █▄▄   ▄█ █░█ █ █▄▄ █▄▄ ▄█
  // Renders skills from every skills one after the next
  // syntax: renderAllSkills()
  const renderAllSkills = () => {
    const skillElements = [];
    if (skills) {
      for (const [title, skillList] of Object.entries(skills)) {
        // Using loops over .map() as Heap/GC allocation in JS is expensive.
        for (let index = 0; index < skillList.length; index++) {
          const skill = skillList[index];
          const IconComponent = importSvgIcon(title, skill.icon);

          // EASTER_EGG: JavaScript
          if (skill.name == "JavaScript") {
            skillElements.push(
              <div
                key={`${title}-${index}`}
                className="flex flex-grow items-center gap-3 place-content-center p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700"
                data-blobity-tooltip="🤮"
                data-blobity-magnetic="false"
              >
                <IconComponent
                  className="object-contain text-gray-800 dark:text-gray-200"
                  src={`/ico/${title}/${skill.icon}.svg`}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-bold mb-0">{skill.name}</p>
                  <p className="text-xs mb-0">{skill.desc}</p>
                </div>
              </div>,
            );
            continue; // to the next loop
          }

          if (IconComponent) {
            skillElements.push(
              <div
                key={`${title}-${index}`}
                className="flex flex-grow items-center gap-3 place-content-center p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#161D1F] dark:border-gray-700"
              >
                <IconComponent
                  className="object-contain text-gray-800 dark:text-gray-200"
                  src={`/ico/${title}/${skill.icon}.svg`}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-bold mb-0">{skill.name}</p>
                  <p className="text-xs mb-0">{skill.desc}</p>
                </div>
              </div>,
            );
          }
        }
      }
    }
    return skillElements;
  };

  // █ █▀▀ █▀█ █▄░█   █▀▀ █░░ █▀█ █░█ █▀▄
  // █ █▄▄ █▄█ █░▀█   █▄▄ █▄▄ █▄█ █▄█ █▄▀
  // Get icon names for generating icon cloud
  const getSkillIcons = () => {
    const skillIcons = [];
    if (skills) {
      for (const skillList of Object.values(skills)) {
        skillIcons.push(...skillList.map((skill) => skill.icon));
      }
    }
    return skillIcons;
  };
  const getSkillNames = () => {
    const skillNames = [];
    if (skills) {
      for (const skillList of Object.values(skills)) {
        skillNames.push(...skillList.map((skill) => skill.name));
      }
    }
    return skillNames;
  };

  return (
    <section id="skills" className="max-w-[1800px] mx-auto px-3 md:px-[100px] py-[100px]">
      <h2 className="text-center mb-14">
        <FontAwesomeIcon height={48} width={48} className="pe-4" icon={faToolbox} />
        Skills
      </h2>

      <div className="flex gap-10">
        {/*
          Mobile users might take a performance hit and canvas interferes with
          swipe gestures so: CLOUD ONLY FOR PC-MASTER-RACE ;D
        */}
        <div className="w-fit mx-auto hidden lg:block">
          <IconCloud iconSlugs={getSkillIcons()} names={getSkillNames()} />
        </div>
        <div className="w-fit mx-auto flex flex-wrap gap-2">
          {renderAllSkills()}
        </div>
      </div>
    </section>
  );
}
