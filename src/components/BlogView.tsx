import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { PageTransition } from './PageTransition';
import { ArrowLeft, Compass } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: Page) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  return (
    <PageTransition id="blog-view-container">
      {/* 
        This is a light-themed page utilizing color-bg-light (#EEEDE9) as background 
        and color-bg-primary (#141413) as text for that distinctive, high-end 
        Swiss editorial publication appearance.
      */}
      <div className="flex-1 bg-[#EEEDE9] text-[#141413] transition-colors duration-500">
        <div className="max-w-4xl w-full mx-auto px-6 md:px-12 py-10 flex flex-col min-h-screen justify-between z-10 relative">
          
          {/* TOP BAR */}
          <div className="flex items-center justify-between border-b border-[#141413]/10 pb-6 mb-12" id="blog-header">
            <button
              onClick={() => onNavigate(Page.Home)}
              className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141413]/80 hover:text-[#D97757] transition-colors"
              id="blog-back-btn"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Go Home</span>
            </button>
            
            <div className="flex items-center gap-2 text-xs font-mono text-[#434343] uppercase tracking-wider" id="blog-edition">
              <Compass size={12} className="text-[#D97757]" />
              <span>Journal • Editorial</span>
            </div>
          </div>

          {/* MAIN CONTAINER */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-20" id="blog-main-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md flex flex-col items-center"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D97757] mb-6 block font-bold">
                STATUS • IN PROGRESS
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif italic text-[#141413] mb-4">
                This section is still under construction.
              </h2>
              
              <p className="font-sans text-xs uppercase tracking-widest text-[#434343]/60 max-w-xs leading-relaxed mt-4">
                We are crafting thoughtful long-form essays and documentation. Please check back later.
              </p>
              
              <button
                onClick={() => onNavigate(Page.Home)}
                className="mt-10 px-6 py-3 bg-[#141413] text-[#EEEDE9] hover:bg-[#D97757] hover:text-[#141413] text-xs font-mono uppercase tracking-widest transition-all duration-300 rounded-lg cursor-pointer"
                id="blog-return-home-btn"
              >
                Return to main page
              </button>
            </motion.div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-[#141413]/10 pt-8 mt-12 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#434343]" id="blog-footer">
            <span>EDITORIAL PLATFORM</span>
            <span>© 2026 RECTILINEAR PUBLISHING</span>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
