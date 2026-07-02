import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  id?: string;
}

/**
 * Standard page-to-page fade transition as described in the brief:
 * "Fade out current page (1->0, ~250-350ms, ease-in), swap content, fade in new page (0->1, ~250-350ms, ease-out)"
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.3, // ~300ms, matching the brief's range
        ease: [0.25, 0.1, 0.25, 1.0] // smooth ease curve
      }}
      className="w-full min-h-screen flex flex-col"
    >
      {children}
    </motion.div>
  );
};
