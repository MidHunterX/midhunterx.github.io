import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Designations = ({ interval = 4000 }) => {
  const words = [
    "Digital Artist",
    "Software Developer",
    "Web Developer",
    "Graphic Designer",
    "Backend Developer",
    "Python Developer",
    "Software Engineer",
    "Full Stack Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <AnimatePresence>
      <motion.span
        key={index}
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "50%" }}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute" }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

export default Designations;
