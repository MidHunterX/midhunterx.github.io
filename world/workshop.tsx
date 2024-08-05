"use client";
import { BentoBox, ProjectItem } from "@/constituents/userinterfaces";

export default function Workshop() {
  return (
    <section id="workshop">
      <BentoBox>
        <h1>Projects</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <ProjectItem
            img=""
            head="Breaking the Caesar Cipher"
            body="A Computer Science Engineering Mini Project of a Webservice implementing Symmetric Encryption/Decryption using the good ol' Caesar Cipher algorithm"
            live="https://midhunterx.github.io/Caesar-Cipher-Cryptography"
            code="https://github.com/MidHunterX/Caesar-Cipher-Cryptography"
          />

          <ProjectItem
            img="https://raw.githubusercontent.com/MidHunterX/GNOSIS/master/static/sc_queslist.jpg"
            head="GNOSIS"
            body="An ambitious project designed to transform the way individuals engage with and acquire knowledge, fostering a community-driven approach to learning and information exchange."
            code="https://github.com/MidHunterX/GNOSIS"
          />
        </div>

        <h1>Personal Projects</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <ProjectItem
            img="https://raw.githubusercontent.com/MidHunterX/Played-Games-List/89945f39ae5b996d8a289271567fb8f72670b107/assets/head.png"
            head="Played Games List"
            body="A web development project which help keep create and keep an organized list of all the PC games I have finished playing, while also familiarizing and applying basic web development concepts and best practices."
            live="https://midhunterx.github.io/Played-Games-List/"
            code="https://github.com/MidHunterX/Played-Games-List"
          />

          <ProjectItem
            img="https://raw.githubusercontent.com/MidHunterX/Hunter-OS/master/.config/feh/.assets/feh.jpg"
            head="Hunter OS"
            body="A custom-tailored Linux distribution designed specifically for personal use, offering a unique and optimized experience with all the essential operating system features and configurations meticulously curated to meet individual needs."
            code="https://github.com/MidHunterX/Hunter-OS"
          />

          <ProjectItem
            img="https://raw.githubusercontent.com/MidHunterX/NvME/master/img/nvim_record.jpg"
            head="NvME"
            body="This project involves building a personalized NeoVim setup from scratch, incorporating all the desired features and customizations to ensure a perfectly comfortable and efficient development environment tailored to individual preferences."
            code="https://github.com/MidHunterX/NvME"
          />
        </div>
      </BentoBox>
    </section>
  );
}
