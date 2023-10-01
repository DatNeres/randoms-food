import React from "react";
import { motion } from "framer-motion";

const ContentsAnimation = ({ children, classNames }) => {
  return (
    <motion.div
      className={classNames}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ContentsAnimation;
