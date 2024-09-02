"use client";

import { useEffect, useState } from "react";

export const useAutoHideNav = () => {
  const [isAutoHideNavEnabled, setIsAutoHideEnabled] = useState(true);

  // FASTTRAVEL AUTOHIDE GET (LOCALSTORAGE)
  useEffect(() => {
    const savedAutoHideSetting = localStorage.getItem("autoHideNavbar");
    if (savedAutoHideSetting !== null) {
      try {
        setIsAutoHideEnabled(JSON.parse(savedAutoHideSetting)); // str to bool
      } catch (error) {
        console.error("Resetting autohide value in localStorage.", error);
        localStorage.setItem("autoHideNavbar", JSON.stringify(true)); // Reset to default val
        setIsAutoHideEnabled(true);
      }
    }
  }, []);

  // FASTTRAVEL AUTOHIDE SET
  const toggleAutoHideNav = () => {
    setIsAutoHideEnabled((prev) => {
      const newValue = !prev;
      localStorage.setItem("autoHideNavbar", JSON.stringify(newValue)); // bool to str
      return newValue;
    });
  };

  return { isAutoHideNavEnabled, toggleAutoHideNav };
};

// ============================ USER INTERFACE ============================ //

import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { ReactNode, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faGear } from "@fortawesome/free-solid-svg-icons";

type SettingsProps = {
  children: ReactNode; // ReactNode allows any JSX content
};

export default function Settings({ children }: SettingsProps) {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  return (
    <section id="settings">
      <button
        onClick={open}
        className="absolute sm:fixed right-3 top-3 sm:right-5 sm:top-5"
        data-blobity-magnetic="false"
      >
        <h3 className="m-0 p-0 text-gray-400">
          <FontAwesomeIcon className="p-2" icon={faGear} />
        </h3>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          // open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
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
            <div className="fixed inset-0 bg-black/30" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white/70 dark:bg-white/20 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <Button
                  className="float-right"
                  onClick={close}
                  data-blobity-magnetic="false"
                >
                  <h3 className="px-2 m-0">
                    <FontAwesomeIcon icon={faXmark} />
                  </h3>
                </Button>
                <h3 className="mb-8">
                  <FontAwesomeIcon className="me-2" icon={faGear} />
                  Settings
                </h3>
                {children}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
