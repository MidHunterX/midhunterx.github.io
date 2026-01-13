"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import SvgGithub from "/public/svg/github.svg";
import SvgLinkedIn from "/public/svg/linkedin.svg";
import SvgInstagram from "/public/svg/instagram.svg";
import SvgX from "/public/svg/x.svg";


export default function Contact() {
  const follow_ico_size = 35;
  const follow_ico_class = "fill-gray-800 dark:fill-gray-200";
  return (
    <section
      id="contact"
      className="px-3 md:px-[100px] h-svh flex flex-col justify-center"
    >
      <h2>
        <FontAwesomeIcon height={48} width={48} className="pe-4" icon={faAddressBook} />
        Contact
      </h2>

      <section className="w-fit mx-auto lg:flex gap-20">
        <section className="lg:mx-6 pb-4">
          <article className="mb-8">
            <h3 className="text-center">Follow me on</h3>
            <div className="flex justify-center gap-6 mt-4">
              <a className="dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://github.com/midhunterx"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgGithub className={follow_ico_class} width={follow_ico_size} />
              </a>
              <a className="dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.linkedin.com/in/midhunterx/"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgLinkedIn className={follow_ico_class} width={follow_ico_size} />
              </a>
              <a className="dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.instagram.com/mid_hunter"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgInstagram className={follow_ico_class} width={follow_ico_size} />
              </a>
              <a className="dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://x.com/Mid_Hunter"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgX className={follow_ico_class} width={follow_ico_size} />
              </a>
            </div>
          </article>
        </section>
      </section>

    </section>
  );
}
