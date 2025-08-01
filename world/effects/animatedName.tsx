import { motion } from "framer-motion";

const AnimatedName = () => {
  // const baseDelay = 2.5;
  const baseDelay = 4;
  return (
    <motion.h1
      aria-label="MidHunterX"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay: baseDelay + 0, duration: 0.5 }}
      className="flex mb-3 text-5xl lg:text-8xl text-white font-extrabold tracking-tight leading-none"
    >
      {/*
        Visually hidden but available for SEO and screen readers.
        Tailwind CSS 'sr-only' class is perfect for this.
        It hides the element without using display: none.
      */}
      <span className="sr-only">MidHunterX</span>

      <motion.span aria-hidden="true" transition={{ delay: baseDelay + 1, duration: 0.5 }}>
        Mid
      </motion.span>

      <motion.span
        aria-hidden="true"
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: "7%", opacity: 1 }}
        transition={{ delay: baseDelay + 3, duration: 0.5 }}
        style={{ display: "inline-block" }} // allows movement for text
      >
        Hun
      </motion.span>
      <motion.span
        aria-hidden="true"
        initial={{ x: "-105%", opacity: 1 }}
        animate={{ x: "-85%", opacity: 0 }}
        transition={{ delay: baseDelay + 3, duration: 0.5 }}
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
        transition={{ delay: baseDelay + 3.5, duration: 0.5 }}
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
        transition={{ delay: baseDelay + 3.5, duration: 0.5 }}
        style={{ display: "inline-block" }} // allows movement for text
      >
        Jinan
      </motion.span>
    </motion.h1>
  );
};

export default AnimatedName;
