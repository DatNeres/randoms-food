import { motion } from "framer-motion";

const InterrogationAnimation = ({ className, src, alt }) => {
  const floatingAnimation = {
    floating: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.img
      className={className}
      src={src}
      alt={alt}
      initial="floating"
      animate="floating"
      variants={floatingAnimation}
    />
  );
};

export default InterrogationAnimation;
