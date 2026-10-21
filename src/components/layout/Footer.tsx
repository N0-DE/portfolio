import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111111] text-[#77736E] pt-16 pb-12 px-6 sm:px-8 md:px-12 lg:px-16 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern-dark pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Action Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F04419]" />
              <span className="font-display text-lg font-bold text-white tracking-tight">
                {personal.name}
              </span>
              <span className="font-mono text-[10px] text-[#77736E] border border-white/15 px-1 py-0.5 rounded-xs">
                PORTFOLIO
              </span>
            </div>
            <p className="font-mono text-xs text-[#77736E] mt-1 text-left">
              Computer Science Engineering Student • {personal.institutionShort}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 font-mono text-xs">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D6D0] hover:text-[#F04419] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D6D0] hover:text-[#F04419] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`mailto:${personal.socials.email}`}
              className="text-[#D8D6D0] hover:text-[#F04419] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-xs text-[#D8D6D0] hover:text-[#F04419] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Giant Editorial Wordmark Across the Footer */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <div className="font-display text-[12vw] sm:text-[14vw] font-black tracking-tighter leading-none text-white/90 hover:text-[#F04419] transition-colors duration-500 whitespace-nowrap">
            JOSE ANOOB®
          </div>
        </div>

        {/* Bottom Colophon and Location Stamp */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#77736E] text-left">
          <div>
            © {currentYear} {personal.name}. All verified software and systems authored independently.
          </div>
          <div className="text-white/60 font-semibold uppercase tracking-wider">
            Engineered in Kerala, India • SJCET Palai
          </div>
        </div>
      </div>
    </footer>
  );
};
