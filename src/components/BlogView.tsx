import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { PageTransition } from './PageTransition';

interface BlogViewProps {
  onNavigate: (page: Page) => void;
}

interface BlogPost {
  id: string;
  title: string; // e.g., "June 03, 2026"
  bullets: string[];
}

interface MonthGroup {
  id: string; // e.g., "june-2026"
  label: string; // e.g., "June, 2026"
  posts: BlogPost[];
}

const BLOG_DATA: MonthGroup[] = [
  {
    id: 'june-2026',
    label: 'June, 2026',
    posts: [
      {
        id: 'june-03-2026',
        title: 'June 03, 2026',
        bullets: [
          "The focus here is to share my views on working with technology and artificial intelligence. There are many topics I want to cover, and I feel this is the right place to have a space to express this collection of ideas and self-reflections.",
          "By the way, this design was entirely inspired by the Claude documentation page (docs.claude.com); I find their aesthetic extremely pleasing, and I wanted to create a sense of familiarity for those already acquainted with Anthropic’s products—such as Claude itself."
        ]
      },
    ]
  }
];

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [activeMonth, setActiveMonth] = useState('june-2026');
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

  const activeGroup = BLOG_DATA.find(item => item.id === activeMonth) || BLOG_DATA[0];

  return (
    <PageTransition id="blog-view-container">
      {/* Main container mimicking PortfolioView.tsx structure and matching the provided image layout */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-12 py-10 flex flex-col justify-between z-10 relative select-none min-h-screen">
        
        <div>
          {/* TOP SECTION: Back navigation link */}
          <div className="mb-12" id="blog-top-bar">
            <button
              onClick={() => onNavigate(Page.Home)}
              className="text-sm md:text-base font-sans font-medium text-[#D97757] hover:opacity-85 transition-opacity flex items-center gap-2 cursor-pointer"
              id="blog-back-btn"
            >
              ← Go back
            </button>
          </div>

          {/* TWO-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="blog-content-layout">
            
            {/* LEFT COLUMN: Post Contents */}
            <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16" id="blog-posts-column">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMonth}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-12 md:gap-16"
                >
                  {activeGroup.posts.map((post) => (
                    <div 
                      key={post.id} 
                      className="flex flex-col gap-6"
                      id={`post-container-${post.id}`}
                    >
                      {/* Labeled with the month, day, and year */}
                      <h2 className="text-3xl md:text-[40px] font-sans font-bold tracking-tight text-[#EEEDE9] leading-none">
                        {post.title}
                      </h2>
                      
                      {/* All content must be presented exclusively in bullet points */}
                      <ul className="space-y-6 md:space-y-8 pl-1 text-[#EEEDE9]/80 font-serif text-sm md:text-[17px] leading-relaxed">
                        {post.bullets.map((bullet, idx) => (
                          <li 
                            key={idx} 
                            className="relative pl-6 flex items-start"
                            id={`bullet-${post.id}-${idx}`}
                          >
                            <span className="absolute left-0 top-[0.625em] w-1.5 h-1.5 bg-[#EEEDE9]/60 rounded-full flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: Sidebar Navigation */}
            <div className="lg:col-span-4 relative flex justify-end mt-8 lg:mt-0" id="blog-sidebar-column">

              {/* Sidebar Card */}
              <div 
                className="w-full max-w-[320px] bg-[#111110] border border-[#EEEDE9]/5 rounded-2xl relative shadow-2xl"
                id="blog-sidebar-card"
              >
                {/* Subtle decorative scrollbar track overlay on the right edge mimicking the image scrollbar */}
                <div className="absolute right-1 top-2 bottom-2 w-1.5 bg-white/5 rounded-full pointer-events-none">
                  <div className="w-full h-1/4 bg-[#D97757]/30 rounded-full" />
                </div>

                <div className="flex flex-col" id="blog-sidebar-menu">
                  {BLOG_DATA.map((item, index) => {
                    const isActive = activeMonth === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveMonth(item.id)}
                        className={`w-full text-left py-5 px-6 font-sans text-sm md:text-base border-b border-[#EEEDE9]/5 last:border-b-0 relative transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'text-[#EEEDE9] font-bold' 
                            : 'text-[#EEEDE9]/35 hover:text-[#EEEDE9]/70'
                        }`}
                        style={{
                          borderTopLeftRadius: index === 0 ? '1rem' : '0',
                          borderTopRightRadius: index === 0 ? '1rem' : '0',
                          borderBottomLeftRadius: index === BLOG_DATA.length - 1 ? '1rem' : '0',
                          borderBottomRightRadius: index === BLOG_DATA.length - 1 ? '1rem' : '0',
                        }}
                        id={`month-selector-${item.id}`}
                      >
                        {/* Dynamic Active Caret outside the card pointing left towards the contents */}
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active-caret"
                            className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#111110] rotate-45 border-l border-b border-[#EEEDE9]/5 z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-20">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM SPACER LINE */}
        <div 
          className="border-t border-[#EEEDE9]/15 pt-6 w-full mt-20"
          id="blog-footer-line"
        >
          {/* Elegant negative spacing to anchor the page */}
        </div>

      </div>
    </PageTransition>
  );
};
