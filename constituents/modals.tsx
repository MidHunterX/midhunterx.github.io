import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, ButtonNull, ButtonSecondaryNull } from "@/constituents/buttons";

// █▀█ █▀▀ █▀ █░█ █▀▄▀█ █▀▀
// █▀▄ ██▄ ▄█ █▄█ █░▀░█ ██▄

export default function ResumeModal() {
  let resumeRef = useRef(null);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id="ResumeModal">
      <ButtonNull
        onClick={openModal}
        text="View Resume"
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={resumeRef}
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center backdrop-blur bg-black/30">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all bg-neutral-800">
                  <section className="dark">
                    <img
                      ref={resumeRef}
                      src="MidhunJinan_Resume.jpg"
                      alt="Mid Hunter's Resume"
                      className="rounded-lg"
                    />
                    <div className="flex m-3">
                      <Button
                        target="_blank"
                        href="MidhunJinan_Resume.pdf"
                        text="Download Resume"
                      />
                      <ButtonSecondaryNull
                        onClick={closeModal}
                        text="Go Back"
                      />
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
