"use client";
import * as UI from "@/constituents/userinterfaces";

export default function Workshop() {
  return (
    <section id="workshop">
      <UI.BentoBox>
        <UI.Bento1
          head="Familiar with tools and technologies such as"
          body="<Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.> <Put a lot of or just some tools and technologies here.>"
          href="/"
          button="More Details"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <UI.CardImg
            img="https://raw.githubusercontent.com/MidHunterX/Played-Games-List/89945f39ae5b996d8a289271567fb8f72670b107/assets/head.png"
            head="Played Games List"
            body="A web development project which help keep create and keep an organized list of all the PC games I have finished playing, while also familiarizing and applying basic web development concepts and best practices."
            href="https://midhunterx.github.io/Played-Games-List/"
            button="View Project"
          />

          <UI.CardImg
            img="https://raw.githubusercontent.com/MidHunterX/GNOSIS/master/static/sc_queslist.jpg"
            head="GNOSIS"
            body="An ambitious project designed to transform the way individuals engage with and acquire knowledge, fostering a community-driven approach to learning and information exchange."
            href="https://github.com/MidHunterX/GNOSIS"
            button="View Code"
          />

          <UI.CardImg
            img="https://raw.githubusercontent.com/MidHunterX/Hunter-OS/master/.config/feh/.assets/feh.jpg"
            head="Hunter OS"
            body="A custom-tailored Linux distribution designed specifically for personal use, offering a unique and optimized experience with all the essential operating system features and configurations meticulously curated to meet individual needs."
            href="https://github.com/MidHunterX/Hunter-OS"
            button="View Docs"
          />

          <UI.CardImg
            img="https://raw.githubusercontent.com/MidHunterX/NvME/master/img/nvim_record.jpg"
            head="NvME"
            body="This project involves building a personalized NeoVim setup from scratch, incorporating all the desired features and customizations to ensure a perfectly comfortable and efficient development environment tailored to individual preferences."
            href="https://github.com/MidHunterX/NvME"
            button="View Docs"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <UI.Bento2
            head="Project 1"
            body="This is an innovative web application designed to streamline the process of collaborative project management."
            href="/"
            button="Read More"
          />

          <UI.Bento2
            head="Project 2"
            body="This platform offers a comprehensive suite of tools that empower teams to effectively plan, organize, and execute projects of any scale."
            href="/"
            button="Read More"
          />

          <UI.Bento2
            head="Project 3"
            body='Key features of "Project 1" include intuitive task management, interactive Gantt charts, real-time collaboration, and customizable reporting.'
            href="/"
            button="Read More"
          />

          <UI.Bento2
            head="Project 4"
            body="The platform is designed to enhance team productivity by providing a centralized hub for project communication and documentation."
            href="/"
            button="Read More"
          />
        </div>
      </UI.BentoBox>
    </section>
  );
}
