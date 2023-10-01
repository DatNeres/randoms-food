import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BgBorderFood = ({ children }) => {
  const [randomY, setRandomY] = useState(0);
  const [randomX, setRandomX] = useState(0);
  const [randomDuration, setRandomDuration] = useState(0);

  useEffect(() => {
    setRandomY(Math.floor(Math.random() * (-12 - -8 + 1)) + -8);
    setRandomX(Math.floor(Math.random() * (-12 - -8 + 1)) + -8);
    setRandomDuration((Math.random() * (4 - 2) + 2).toFixed(1));
  }, []);

  const floatingAnimation = {
    initial: {
      x: 0,
      y: 0,
    },
    floating: {
      x: [randomX, 0, randomX],
      y: [randomY, 0, randomY],
      transition: {
        ease: "easeInOut",
        duration: randomDuration,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      whileInView={{
        animate: "floating",
      }}
      variants={floatingAnimation}
      initial="initial"
      animate="floating"
    >
      {children}
    </motion.div>
  );
};

export default BgBorderFood;
