import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatyEffectProps {
  children: ReactNode;
}

const FloatyEffect = ({ children }: FloatyEffectProps) => {
  const floatyVariants = {
    float: {
      y: [0, -20, 20, 0],
      x: [0, -6, 6, -6, 6, 0],
      rotate: [0, -1, 1, -1, 1, 0],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        x: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <motion.div variants={floatyVariants} animate="float">
      {children}
    </motion.div>
  );
};

export default FloatyEffect;
