import React, { useState, useEffect } from 'react';

interface AnimatedAsciiProps {
  asciiArt: string;
  interval?: number;
}

const characters = ['@', '#', '$', '%', '&', '*'];

const AnimatedAscii = ({ asciiArt, interval = 100 }: AnimatedAsciiProps) => {
  const [displayArt, setDisplayArt] = useState(asciiArt.split(''));

  useEffect(() => {
    const originalArt = asciiArt.split('');

    const animateRandomChar = (index:number) => {
      const originalChar = originalArt[index];
      if (originalChar === "\n") return; // Skip newline
      if (originalChar === " ") return; // Skip spaces

      const animationDuration = 500;
      const animationInterval = 100;
      let loopCount = 0;

      const intervalId = setInterval(() => {
        loopCount++;
        if (loopCount * animationInterval >= animationDuration) {
          setDisplayArt((prev) => {
            const updated = [...prev];
            updated[index] = originalChar;
            return updated;
          });
          clearInterval(intervalId);
        } else {
          setDisplayArt((prev) => {
            const updated = [...prev];
            updated[index] =
              characters[Math.floor(Math.random() * characters.length)];
            return updated;
          });
        }
      }, animationInterval);
    };

    const startRandomAnimations = () => {
      const randomIndex = Math.floor(Math.random() * originalArt.length);
      animateRandomChar(randomIndex);
      setTimeout(startRandomAnimations, Math.random() * interval);
    };

    startRandomAnimations();
  }, [asciiArt, characters, interval]);

  return (
    <pre style={{ fontFamily: 'monospace' }}>
      {displayArt.join('')}
    </pre>
  );
};

export default AnimatedAscii;
