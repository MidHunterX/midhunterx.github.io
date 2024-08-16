"use client";
import { Button, ButtonSecondary } from "@/constituents/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SvgGithub from "/public/svg/github.svg";
import SvgLinkedIn from "/public/svg/linkedin.svg";
import SvgInstagram from "/public/svg/instagram.svg";


export default function Contact() {
  const follow_ico_size = 35;
  const follow_ico_class = "fill-gray-800 dark:fill-gray-200";
  return (
    <section
      id="contact"
      className="px-3 md:px-[100px] py-[100px] pb-[150px]"
    >
      <h2>
        <FontAwesomeIcon className="pe-4" icon={faAddressBook} />
        Contact
      </h2>

      <section className="w-fit mx-auto lg:flex gap-20">

        {/* █░░ █▀▀ █▀▀ ▀█▀   █▀ █ █▀▄ █▀▀
            █▄▄ ██▄ █▀░ ░█░   ▄█ █ █▄▀ ██▄ */}
        <section className="lg:w-1/2 lg:mx-6 pb-4">
          <article className="mb-8">
            <h3>Contact details</h3>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-gray-800 dark:text-gray-100">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 8089-5293-74</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-gray-800 dark:text-gray-100">
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">midhunterx@gmail.com</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-gray-800 dark:text-gray-100">
                <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Pallithura, Kazhakkoottam, Trivandrum, Kerala</span>
            </div>
          </article>

          <article className="mb-8">
            <h3>Follow me</h3>
            <div className="flex gap-2 mt-4 -mx-1.5 ">
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://github.com/midhunterx"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgGithub className={follow_ico_class} width={follow_ico_size} />
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.linkedin.com/in/midhunterx/"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgLinkedIn className={follow_ico_class} width={follow_ico_size} />
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.instagram.com/mid_hunter"
                target="_blank"
                data-blobity-magnetic="false"
              >
                <SvgInstagram className={follow_ico_class} width={follow_ico_size} />
              </a>
            </div>
          </article>
        </section>


        {/* █▀█ █ █▀▀ █░█ ▀█▀   █▀ █ █▀▄ █▀▀
            █▀▄ █ █▄█ █▀█ ░█░   ▄█ █ █▄▀ ██▄ */}
        <section className="lg:w-1/2 lg:mx-6">
          <iframe className="rounded-xl focus:outline-none" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31563.759167396533!2d76.84119880712232!3d8.55073150552278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be456a010a99%3A0x749c31577640f200!2sPallithura%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723556639494!5m2!1sen!2sin"} width="360" height="280" loading="lazy"></iframe>
        </section>
      </section>

    </section>
  );
}
