"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faUser,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


type FormItemProps = {
  label: string;
  placeholder: string;
  className?: string;
};

const ProjectItem = ({ label, placeholder, className }: FormItemProps) => {
  return (
    <article className={className}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
    </article>
  );
};


export default function Contact() {
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
        <section className="lg:w-1/2 lg:mx-6">
          <article className="mb-8">
            <h2>Contact details</h2>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-yellow-200">
                <FontAwesomeIcon className="pe-4" icon={faPhone} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 8089-5293-74</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-yellow-200">
                <FontAwesomeIcon className="pe-4" icon={faEnvelope} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">midhunterx@gmail.com</span>
            </div>
            <div className="flex items-start -mx-2">
              <p className="w-6 h-6 mx-2 text-blue-500 dark:text-yellow-200">
                <FontAwesomeIcon className="pe-4" icon={faLocationDot} />
              </p>
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Menamkulam, Kazhakkuttom, Trivandrum, Kerala, India</span>
            </div>
          </article>

          <article className="mb-8">
            <h2>Follow me</h2>
            <div className="flex mt-4 -mx-1.5 ">
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://github.com/midhunterx">
                GitHub
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.linkedin.com/in/midhunterx/">
                LinkedIn
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.instagram.com/mid_hunter">
                Instagram
              </a>
            </div>
          </article>
        </section>


        {/* █▀█ █ █▀▀ █░█ ▀█▀   █▀ █ █▀▄ █▀▀
            █▀▄ █ █▄█ █▀█ ░█░   ▄█ █ █▄▀ ██▄ */}
        <form className="lg:w-1/2 lg:mx-6">
          <h2>Hire me</h2>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"> <FontAwesomeIcon className="px-1" icon={faUser} /> </span>
              <input required type="text" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" />
            </div>
          </article>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </article>

          <article className="grid gap-6 mb-6 md:grid-cols-2">
            <ProjectItem label="Company" placeholder="Company Pvt Ltd." />
            <ProjectItem label="Website" placeholder="website.com" />
          </article>

          <article className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea required rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </article>

          <button type="submit" className="inline-flex justify-center items-center py-3 px-5 me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">Hire</button>
        </form>
      </section>

    </section>
  );
}
