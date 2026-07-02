import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { PageTransition } from './PageTransition';

interface PortfolioViewProps {
  onNavigate: (page: Page) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'agencia-doca',
    title: 'Agência Doca',
    description: 'Advertising company in Paulínia, SP, Brazil. With over 15 years in the market, it creates visual identities and manages digital marketing.',
    date: 'June, 2026',
    category: 'Redesign',
    link: 'http://agenciadoca.vercel.app/'
  },
  {
    id: 'gato-magro',
    title: 'Gato Magro Transportes',
    description: 'Logistics company based in Sumaré, SP. Located in Veccon Zeta, they offer efficient cargo transport and tailored solutions.',
    date: 'June, 2026',
    category: 'Redesign',
    link: 'http://gatomagrotransportes.vercel.app/'
  },
  {
    id: 'steelsign',
    title: 'SteelSign',
    description: 'Leader in the metalworking, boilermaking, and industrial assembly segment, with a prominent presence in the steel sector.',
    date: 'June, 2026',
    category: 'Redesign',
    link: 'https://steelsign.vercel.app/'
  },
  {
    id: 'itamar-chaveiro',
    title: 'Itamar Chaveiro',
    description: 'Offers key duplication services, residential and automotive lockouts, as well as a 24-hour emergency service.',
    date: 'June, 2026',
    category: 'Redesign',
    link: 'https://itamarochaveiro.netlify.app/'
  },
  {
    id: 'center-tech',
    title: 'Center Tech Soluções',
    description: 'Located in Paulínia, São Paulo, provides computer maintenance, specialized IT support, and comprehensive IT management.',
    date: 'June, 2026',
    category: 'Redesign',
    link: 'https://centertechsolucoes.netlify.app/'
  }
];

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onNavigate }) => {
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

  return (
    <PageTransition id="portfolio-view-container">
      {/* Main container with precise layout from Portfolio.png */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-12 py-10 flex flex-col justify-between z-10 relative select-none min-h-screen">
        
        <div>
          {/* TOP SECTION: Back navigation link */}
          <div className="mb-12" id="portfolio-top-bar">
            <button
              onClick={() => onNavigate(Page.Home)}
              className="text-sm md:text-base font-sans font-medium text-[#D97757] hover:opacity-85 transition-opacity flex items-center gap-2 cursor-pointer"
              id="portfolio-back-btn"
            >
              ← Go back
            </button>
          </div>

          {/* DATE TIMESTAMP */}
          <div 
            className="text-xs md:text-sm font-sans font-medium tracking-widest text-[#EEEDE9]/30 uppercase mb-3"
            id="portfolio-timestamp-row"
          >
            <span className="tabular-nums font-mono">
              {currentTime || "JULY 01, 2026 18:28 P.M."}
            </span>
          </div>

          {/* PAGE TITLE */}
          <div className="mb-10" id="portfolio-title-row">
            <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#EEEDE9]">
              Latest Services
            </h1>
          </div>

          {/* SERVICES GRID (3-column layout mimicking Portfolio.png) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" id="portfolio-services-grid">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#E0D4C1] text-[#141413] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight mb-4 text-[#141413]">
                    {service.title}
                  </h3>
                  
                  {/* Description in high-end serif font */}
                  <p className="font-serif text-[#141413]/90 text-sm md:text-[15px] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Metadata table rows with precise spacing */}
                  <div className="border-t border-[#141413]/15 py-3 flex justify-between items-center text-xs md:text-sm font-sans">
                    <span className="font-bold tracking-wider text-[#141413]/60">DATE</span>
                    <span className="font-medium text-[#141413]">{service.date}</span>
                  </div>
                  
                  <div className="border-t border-[#141413]/15 py-3 mb-6 flex justify-between items-center text-xs md:text-sm font-sans">
                    <span className="font-bold tracking-wider text-[#141413]/60">CATEGORY</span>
                    <span className="font-medium text-[#141413]">{service.category}</span>
                  </div>

                  {/* Visit Website Button */}
                  <button
                    className="w-full bg-[#141413] hover:bg-[#2b2b29] text-[#EEEDE9] py-3.5 px-4 rounded-xl font-sans font-semibold text-sm transition-colors duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    id={`visit-btn-${service.id}`}
                  >
                    <a href={service.link} target="_blank">Visit the website <span className="text-base">→</span></a>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM METRIC RAIL LINE */}
        <div 
          className="border-t border-[#EEEDE9]/15 pt-6 w-full"
          id="portfolio-footer-line"
        >
          {/* Left blank or minimalist to stay close to visual composition of Portfolio.png */}
        </div>

      </div>
    </PageTransition>
  );
};
