import { motion } from "framer-motion";

const LettersAnimations = ({ className, src, alt }) => {
  return (
    <motion.img
      className={className}
      src={src}
      alt={alt}
      whileHover={{ scale: 1.2, transition: 0 }}
      whileTap={{ rotate: 180, transition: 0 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    />
  );
};

export default LettersAnimations;
