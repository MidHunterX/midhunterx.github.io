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
      className="px-3 md:px-[100px] py-[100px] pb-[150px] flex flex-col gap-20 items-center"
    >
      <h1 className="text-center">
        <FontAwesomeIcon className="pe-4" icon={faAddressBook} />
        Contact
      </h1>

      <section className="lg:flex gap-20">

        {/* █░░ █▀▀ █▀▀ ▀█▀   █▀ █ █▀▄ █▀▀
            █▄▄ ██▄ █▀░ ░█░   ▄█ █ █▄▀ ██▄ */}
        <section className="lg:w-1/2 lg:mx-6 pb-8">
          <article className="mb-8">
            <h2>Contact details</h2>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-gray-100">
                <FontAwesomeIcon icon={faPhone} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 8089-5293-74</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-gray-100">
                <FontAwesomeIcon icon={faEnvelope} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">midhunterx@gmail.com</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-gray-100">
                <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Pallithura, Kazhakkoottam, Trivandrum, Kerala</span>
            </div>
            <iframe className="rounded-xl focus:outline-none" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31563.759167396533!2d76.84119880712232!3d8.55073150552278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be456a010a99%3A0x749c31577640f200!2sPallithura%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723556639494!5m2!1sen!2sin"} width="360" height="230" allowfullscreen="" loading="lazy"></iframe>
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
        <form className="lg:w-1/2 lg:mx-6">
          <h2>Get in touch</h2>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> <FontAwesomeIcon className="px-1" icon={faUser} /> </span>
              <input required type="text" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" />
            </div>
          </article>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
          </article>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea required rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </article>

          <Button type="submit" href="#" text="Send Message"/>
        </form>
      </section>

    </section>
  );
}
