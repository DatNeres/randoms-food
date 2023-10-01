import { motion } from "framer-motion";

const duration = Math.floor(Math.random() * 31) / 10 + 4;
const random = Math.floor(Math.random() * (10 - 7 + 1)) + 8;

const BgAnimation = ({ className }) => {
  const floatingAnimation = {
    initial: {
      y: 0,
      x: 0,
    },
    floating: {
      y: [random, 0, random],
      x: [random, 0, random],
      transition: {
        ease: "easeInOut",
        duration: duration,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={floatingAnimation}
      initial="initial"
      animate="floating"
    ></motion.div>
  );
};

export default BgAnimation;
