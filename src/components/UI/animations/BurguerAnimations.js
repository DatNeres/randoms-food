import { motion } from "framer-motion";

const BurguerAnimations = ({ className, src, rotateValue }) => {
  const randomY = Math.floor(Math.random() * (-12 - -8 + 1)) + -8;
  const randomDuration = (Math.random() * (4 - 2) + 2).toFixed(1);
  const floatingAnimation = {
    initial: {
      y: 0,
      scale: 0,
      rotate: rotateValue,
    },
    floating: {
      y: [randomY, 0, randomY],
      transition: {
        ease: "easeInOut",
        duration: randomDuration,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.img
      className={className}
      src={src}
      whileInView={{
        animate: "floating",
        scale: 1,
      }}
      whileHover={{ scale: 1.1, transition: 0 }}
      variants={floatingAnimation}
      initial="initial"
      animate="floating"
      transition={{ duration: 0.4, delay: 0.6 }}
    ></motion.img>
  );
};

export default BurguerAnimations;
