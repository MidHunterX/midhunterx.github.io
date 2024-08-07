"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Skills() {
  interface SkillCategory {
    languages: Skill[];
    databases: Skill[];
    frameworks: Skill[];
    libraries: Skill[];
    tools: Skill[];
  }

  interface Skill {
    name: string;
    icon: string;
  }

  const [skills, setSkills] = useState<SkillCategory | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/skills.json");
        const data: SkillCategory = await response.json();
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

  const renderSkills = (title: string, skillList: Skill[]) => (
    <>
      <div className="w-full grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center py-2 sm:px-0">
        {skillList.map((skill, index) => (
          <div id={`skill-${index}`} className="block p-4">
            <Image
              src={`/ico/${title}/${skill.icon}.svg`}
              alt={`${skill.name} icon`}
              width={100}
              height={100}
              data-blobity-tooltip={`${skill.name}`}
            />
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section
      id="skills"
      className="bg-[#161D1F] py-[140px] px-10 flex flex-col gap-20 items-center"
    >
      <h2>Skills</h2>

      <div>
        <h3>Languages</h3>
        {renderSkills("languages", skills.languages)}
        <h3>Databases</h3>
        {renderSkills("databases", skills.databases)}
        <h3>Frameworks</h3>
        {renderSkills("frameworks", skills.frameworks)}
        <h3>Tools</h3>
        {renderSkills("tools", skills.tools)}
      </div>

    </section>
  );
}
