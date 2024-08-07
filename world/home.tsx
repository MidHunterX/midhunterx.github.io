"use client";
import * as UI from "@/constituents/userinterfaces";

export default function Home() {
  return (
    <section id="home">
      <UI.Jumbotron
        head="Greetings, this is Mid Hunter"
        body="Creating software and automation with ease just for fun."
        button1="See More"
        href1="#workshop"
        button2="Contact"
        href2="#contact"
      />
    </section>
  );
}
