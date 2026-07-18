import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.21, 0.47, 0.32, 0.98];

// Scroll-reveal standar: fade-up sekali jalan. Lihat DESIGN-SPEC.md §5.
const Reveal = ({ children, delay = 0, ...rest }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
