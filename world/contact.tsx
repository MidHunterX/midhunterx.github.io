"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#161D1F] pb-[140px]"
    >
      <h2 className="text-center">Contact</h2>

      <form
        action=""
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 px-2"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6  text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#253134] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="First name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6  text-white"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#253134] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6  text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#253134] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 mb-2.5"
            >
              Message
            </label>
            <div className="w-full mb-4 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 ">
              <div className="px-4 py-2 rounded-t-lg bg-[#253134]">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-[#253134] border-0 focus:ring-0 text-white placeholder-gray-400"
                  placeholder="Write a message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

    </section>
  );
}
