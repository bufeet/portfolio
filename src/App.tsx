import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Page } from './types';
import { BackgroundElements } from './components/BackgroundElements';
import { HomeView } from './components/HomeView';
import { PortfolioView } from './components/PortfolioView';
import { BlogView } from './components/BlogView';

export default function App() {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    // Standard utility to reset scroll states instantly on swap
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className="relative min-h-screen bg-[#141413] text-[#EEEDE9] flex flex-col font-sans overflow-x-hidden"
      id="app-root-container"
    >
      {/* 
        Global Background Details (SVG tileable grain/noise and gear illustration placeholder)
        Ensures consistent visual layering across all views.
      */}
      <BackgroundElements />

      {/* Main Viewport */}
      <main className="flex-1 flex flex-col relative z-10 w-full" id="main-viewport">
        <AnimatePresence mode="wait">
          {activePage === Page.Home && (
            <HomeView key="home" onNavigate={handleNavigate} />
          )}
          {activePage === Page.Portfolio && (
            <PortfolioView key="portfolio" onNavigate={handleNavigate} />
          )}
          {activePage === Page.Blog && (
            <BlogView key="blog" onNavigate={handleNavigate} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

