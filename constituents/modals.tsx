import { useState, useRef, Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Button, ButtonNull, ButtonSecondaryNull } from "@/constituents/buttons";
import Image from 'next/image'
// width, height, blurDataUrl is not needed when importing image :D
import Resume from '@/public/MidhunJinan_Resume.jpg'

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
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center backdrop-blur bg-black/30">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all bg-neutral-800">
                  <section className="dark">
                    <Image
                      className="rounded-lg"
                      ref={resumeRef}
                      src={Resume}
                      alt="Mid Hunter's Resume"
                      placeholder="blur"
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
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
