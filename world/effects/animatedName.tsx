import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedName = ({ className, ...rest }: { className?: string }) => {
  const baseDelay = 0.3;
  const [showUsername, setShowUsername] = useState(true);
  const animDuration = 0.6;

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={() => setShowUsername(!showUsername)}
        className="max-w-fit bg-gray-100 hover:bg-gray-300 text-gray-800 text-xs font-medium my-2 px-4 py-1 rounded-full dark:bg-gray-800 hover:dark:bg-gray-600 dark:text-gray-200 border border-gray-500"
        {...rest}
      >
        Show {showUsername ? "Legal Name" : "User Name"}
      </button>
      <motion.p
        key={showUsername ? "username" : "legalname"} // Re-trigger animation on toggle
        aria-label={showUsername ? "Mid Hunter" : "Midhun Jinan"}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 0, duration: animDuration }}
        className={className}
      >
        {/*
        Visually hidden but available for SEO and screen readers.
        Tailwind CSS 'sr-only' class is perfect for this.
        It hides the element without using display: none.
        */}
        <span className="sr-only">{showUsername ? "Mid Hunter" : "Midhun Jinan"}</span>

        <motion.span aria-hidden="true" transition={{ delay: baseDelay, duration: animDuration }}>
          Mid
        </motion.span>

        {showUsername ? (
          <>
            <motion.span
              aria-hidden="true"
              initial={{ x: "0%", opacity: 0 }}
              animate={{ x: "7%", opacity: 1 }}
              transition={{ delay: baseDelay, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              Hun
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={{ x: "-107%", opacity: 1 }}
              animate={{ x: "-85%", opacity: 0 }}
              transition={{ delay: baseDelay, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              hun
            </motion.span>

            <motion.span
              // Morph Effect
              // initial={{ x: "-100%", opacity: 0, rotateX: -90 }}
              // animate={{ x: "-130%", opacity: 1, rotateX: 0 }}
              // Flip Effect
              aria-hidden="true"
              initial={{ x: "-130%", y: "-40%", opacity: 0, rotateX: -90 }}
              animate={{ x: "-130%", y: "0%", opacity: 1, rotateX: 0 }}
              transition={{ delay: baseDelay + 0.5, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              ter
            </motion.span>
            <motion.span
              // Morph Effect
              // initial={{ x: "-120%", opacity: 1, rotateX: 0 }}
              // animate={{ x: "-140%", opacity: 0, rotateX: -90 }}
              // Flip Effect
              aria-hidden="true"
              initial={{ x: "-120%", y: "0%", opacity: 1, rotateX: 0 }}
              animate={{ x: "-120%", y: "40%", opacity: 0, rotateX: -90 }}
              transition={{ delay: baseDelay + 0.5, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              Jinan
            </motion.span>
          </>
        ) : (
          <>
            <motion.span
              aria-hidden="true"
              initial={{ x: "7%", opacity: 1 }}
              animate={{ x: "0%", opacity: 0 }}
              transition={{ delay: baseDelay, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              Hun
            </motion.span>
            <motion.span
              aria-hidden="true"
              initial={{ x: "-85%", opacity: 0 }}
              animate={{ x: "-107%", opacity: 1 }}
              transition={{ delay: baseDelay, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              hun
            </motion.span>

            <motion.span
              // Flip Effect
              aria-hidden="true"
              initial={{ x: "-130%", y: "0%", opacity: 1, rotateX: 0 }}
              animate={{ x: "-130%", y: "-40%", opacity: 0, rotateX: -90 }}
              transition={{ delay: baseDelay + 0.5, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              ter
            </motion.span>
            <motion.span
              // Morph Effect
              // initial={{ x: "-120%", opacity: 1, rotateX: 0 }}
              // animate={{ x: "-140%", opacity: 0, rotateX: -90 }}
              // Flip Effect
              aria-hidden="true"
              initial={{ x: "-120%", y: "40%", opacity: 0, rotateX: -90 }}
              animate={{ x: "-120%", y: "0%", opacity: 1, rotateX: 0 }}
              transition={{ delay: baseDelay + 0.5, duration: animDuration }}
              style={{ display: "inline-block" }} // allows movement for text
            >
              Jinan
            </motion.span>
          </>
        )}
      </motion.p>
    </div>
  );
};

export default AnimatedName;
