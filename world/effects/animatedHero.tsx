// using absolute on hero for overlaying breaks responsiveness

import { motion } from "framer-motion";

const AnimatedHero = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-25%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariantsReverse = {
    animate: {
      x: ["-25%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="z-0">
      <div className="relative w-screen h-[180px] overflow-x-hidden">
        <motion.div
          className="absolute flex gap-10 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
        </motion.div>
      </div>
      <div className="relative w-screen h-[180px] overflow-x-hidden">
        <motion.div
          className="absolute flex gap-10 whitespace-nowrap"
          variants={marqueeVariantsReverse}
          animate="animate"
        >
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
          <h1 className="text-[200px] text-neutral-100 dark:text-neutral-900 uppercase">mid hunter</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
