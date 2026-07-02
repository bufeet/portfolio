import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { PageTransition } from './PageTransition';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState('');

  // Dynamic UTC-aligned clock in the exact format: "JULY 01, 2026 18:28 P.M."
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const months = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
      ];
      const month = months[date.getMonth()];
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const ampm = date.getHours() >= 12 ? 'P.M.' : 'A.M.';
      
      setCurrentTime(`${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Framer motion variants for a subtle, premium staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // smooth editorial ease-out curve
      }
    }
  };

  return (
    <PageTransition id="home-view-container">
      {/* 
        Full-viewport flex container with generous padding and strict alignment.
        Matches the Swiss Modernist grid layout from Introduction.png.
      */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col justify-between z-10 select-none relative min-h-screen">
        
        {/* TOP SECTION: Clock / Timestamp on the left */}
        <motion.div
          id="hero-timestamp-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-sans font-medium tracking-widest text-[#EEEDE9]/30 uppercase mt-[0px]"
        >
          <span className="tabular-nums font-mono">
            {currentTime || "JULY 01, 2026 18:28 P.M."}
          </span>
        </motion.div>

        {/* MIDDLE SECTION: Large Editorial Headline */}
        <motion.div
          id="hero-headline-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="my-12 md:my-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-display font-bold tracking-tight leading-[1.12] text-[#EEEDE9]">
            <motion.span variants={itemVariants} className="block">
              Building experiences with technology and AI that{' '}
              <span className="text-[#D97757] relative inline-block border-b-2 md:border-b-3 border-[#D97757] pb-0.5 md:pb-1 hover:opacity-90 transition-opacity cursor-pointer">
                help people
              </span>{' '}
              and their brands and company
            </motion.span>
          </h1>
        </motion.div>

        {/* BOTTOM SECTION: Navigation Links and Serif Manifesto Statement */}
        <motion.div
          id="hero-bottom-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 items-stretch border-b border-[#EEEDE9]/15 pb-0"
        >
          {/* Navigation links (left column) */}
          <div className="md:col-span-5 flex flex-col gap-4 py-8 justify-center" id="hero-nav-links">
            <button
              onClick={() => onNavigate(Page.Blog)}
              className="group text-left text-lg md:text-xl font-sans font-semibold text-[#D97757] hover:text-[#EEEDE9] transition-colors duration-300 flex items-center gap-2 w-fit"
              id="nav-link-blog"
            >
              Blog{' '}
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </button>
            
            <button
              onClick={() => onNavigate(Page.Portfolio)}
              className="group text-left text-lg md:text-xl font-sans font-semibold text-[#D97757] hover:text-[#EEEDE9] transition-colors duration-300 flex items-center gap-2 w-fit"
              id="nav-link-portfolio"
            >
              Portfolio{' '}
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Ethical Frameworks Manifesto (right column with borders) */}
          <div 
            className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#EEEDE9]/15 pt-8 pb-8 md:py-10 md:pl-10 flex items-center"
            id="hero-manifesto-container"
          >
            {/* Left border for desktop is simulated by md:border-l, top border for stacked mobile is border-t */}
            <div className="relative">
              {/* Optional top-border lines can align with left border */}
              <div className="hidden md:block absolute -top-10 left-0 right-0 h-[1px] bg-[#EEEDE9]/15" />
              
              <p className="font-serif text-[#EEEDE9]/80 text-base md:text-lg lg:text-[19px] leading-relaxed font-light">
                while championing the ethical frameworks that govern this technology, to ultimately advance human intellect, knowledge, and potential
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
};
