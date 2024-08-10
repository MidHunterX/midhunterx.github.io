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
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Menamkulam, Trivandrum, Kerala</span>
            </div>
            <iframe className="rounded-xl" scrolling="no" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7890.773724909952!2d76.85454414085073!3d8.558747425334175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be4fbdf8f063%3A0xd2af4cebaff0d8e2!2sMenamkulam%2C%20Thiruvananthapuram%2C%20Menamkulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1723312902820!5m2!1sen!2sin"} ></iframe>
          </article>

          <article className="mb-8">
            <h3>Follow me</h3>
            <div className="flex gap-2 mt-4 -mx-1.5 ">
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://github.com/midhunterx"
                target="_blank"
                data-blobity-tooltip="View Github page"
                data-blobity-magnetic="false"
              >
                <svg className={follow_ico_class} width={follow_ico_size} viewBox="0 0 256 249"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></svg>
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.linkedin.com/in/midhunterx/"
                target="_blank"
                data-blobity-tooltip="Connect me on LinkedIn"
                data-blobity-magnetic="false"
              >
                <svg className={follow_ico_class} width={follow_ico_size} viewBox="0 0 128 128"><path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"/></svg>
              </a>
              <a className="me-3 mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                href="https://www.instagram.com/mid_hunter"
                target="_blank"
                data-blobity-tooltip="Follow me on Instagram"
                data-blobity-magnetic="false"
              >
                <svg className={follow_ico_class} width={follow_ico_size} viewBox="0 0 110 110"> <path d="M100.136 47.884h-9.854c.718 2.787 1.142 5.699 1.142 8.71 0 19.238-15.592 34.83-34.827 34.83-19.234 0-34.827-15.592-34.827-34.83 0-3.011.426-5.923 1.144-8.71h-9.855v47.893c0 2.401 1.95 4.35 4.358 4.35h78.361a4.354 4.354 0 0 0 4.358-4.35V47.884zm0-30.473a4.355 4.355 0 0 0-4.358-4.353H82.72a4.354 4.354 0 0 0-4.354 4.353v13.063a4.353 4.353 0 0 0 4.354 4.353h13.058a4.355 4.355 0 0 0 4.358-4.353V17.411zm-43.54 17.416c-12.023 0-21.768 9.744-21.768 21.767 0 12.021 9.745 21.77 21.768 21.77s21.77-9.749 21.77-21.77c0-12.023-9.747-21.767-21.77-21.767m43.54 78.365H13.058C5.847 113.192 0 107.343 0 100.126V13.058C0 5.846 5.847 0 13.058 0h87.078c7.212 0 13.058 5.846 13.058 13.058v87.068c-.001 7.217-5.846 13.066-13.058 13.066"/> </svg>
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

          <button type="submit" className="inline-flex justify-center items-center py-3 px-5 me-4 text-base font-medium text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">Send Message</button>
        </form>
      </section>

    </section>
  );
}
