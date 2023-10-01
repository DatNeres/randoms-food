import { motion } from "framer-motion";

const InterrogationBgAnimation = ({ className, src, alt }) => {
  const floatingAnimation = {
    floating: {
      y: [-5, 0, -5],
      transition: {
        duration: 5,
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

export default InterrogationBgAnimation;
