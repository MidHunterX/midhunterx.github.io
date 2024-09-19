import { useState, useRef, Fragment } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Button, ButtonNull, ButtonSecondaryNull, ButtonGroup } from "@/constituents/buttons";
import Image from 'next/image'
// width, height, blurDataUrl is not needed when importing image :D
// import Resume from '@/public/MidhunJinan_Resume.jpg'
// but cant use custom blurDataUrl when imported :(

// HOW TO GEN: Resize Image -> Minify Image Asset for web -> Encode to Base64
// USED TOOLS: iloveimg.com/resize-image -> tinypng.com -> elmah.io/tools/base64-image-encoder
const ResumeBlur = "data:text/plain;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6QVNGOj1OPjIySGJJTlZYXV5dOEVmbWVabFNbXVn/2wBDAQ8QEBYTFioXFypZOzI7WVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wgARCABAAC0DAREAAhEBAxEB/8QAGwABAAMBAAMAAAAAAAAAAAAABAECAwAFBgf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA9YWShgbFD6uaEGicakG5BYgQCEBihuJCiApQQICCgpmbCgQkIcaiTw5YoQILH//EADUQAAIBAwEFBQMNAQAAAAAAAAECEQADBQQSEyFBkzFRVXGBFXPhEBQiIyQyQlJTY4KhwfD/2gAIAQEAAT8A06aQ2pv3bivPKIpl0IiLl9hPHgtXRpAh3LXy89jqsfJbS1A23EnkDV3YBXdHlx40+LxyXX+waOB+wtJi8W7hfZmj6S02K0ADkaDQ9BaOKxYmcdouitey8V4bouktDCYzwzR9Fausu+eUkg/n+FaZElXVWFSLm2isNqadHO8iCDEca3TSCGAgd9WFCWwBAPPjNXfo3jKKRPeasFfwAVfUb1igUiaCMxgKp9Jqb4/VgcgKsbRSTtfy7auQ1/Zh/OBFWxED/Iq5G8b7h/7zoNB7FHr8a2HjjaefeVZUKkRHm01fG1eA76XlV0NvTIk+tbJ5Kf7qwCQFNm4sc+FIFA4Js+lXXUXu1wV7kmkuKxUBuNObT3TDBfNeFG2vK9Zq2C5j5zPDsWrEQfrN5RyeNd3jJaPqirWSxyXQxyWl6lNkNB4jpOuKGQ0PiGk64qxk8YnE5DTT70UM5i/EtJ1xX//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AQ//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AQ//Z" // 1.0 kb

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
          className="relative z-30"
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
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-3xl text-left align-middle shadow-xl transition-all bg-neutral-800">
                  <section className="dark">
                    <Image
                      className="rounded-lg"
                      ref={resumeRef}
                      src="MidhunJinan_Resume.jpg"
                      alt="Mid Hunter's Resume"
                      placeholder="blur"
                      // When no image import used
                      width={1241}
                      height={1754}
                      blurDataURL={ResumeBlur}
                    />
                    <ButtonGroup>
                      <Button
                        target="_blank"
                        href="MidhunJinan_Resume.pdf"
                        text="Download Resume"
                      />
                      <ButtonSecondaryNull
                        onClick={closeModal}
                        text="Go Back"
                      />
                    </ButtonGroup>
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
