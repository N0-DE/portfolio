import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const { personal } = portfolioConfig;

  const menuItems = [
    { number: '01', label: 'HOME', href: '#hero', id: 'hero' },
    { number: '02', label: 'ABOUT', href: '#about', id: 'about' },
    { number: '03', label: 'PROJECTS', href: '#work', id: 'work' },
    { number: '04', label: 'SKILLS', href: '#skills', id: 'skills' },
    { number: '05', label: 'EDUCATION', href: '#education', id: 'education' },
    { number: '06', label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full Screen Navigation Menu"
      className="fixed inset-0 z-50 bg-[#111111] text-[#F7F5F0] flex flex-col justify-between p-6 sm:p-10 md:p-16 animate-fadeIn transition-opacity duration-300"
    >
      {/* Background Subtle Hairline Grid */}
      <div className="absolute inset-0 hero-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#F04419] rounded-full" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F7F5F0]/80">
            {personal.name} // NAVIGATION
          </span>
        </div>

        <button
          onClick={onClose}
          className="group flex items-center gap-2 px-4 py-2 rounded-xs bg-[#1A1A1A] border border-white/10 hover:border-[#F04419] text-[#F7F5F0] transition-colors"
          aria-label="Close menu"
        >
          <span className="font-mono text-xs tracking-wider">CLOSE</span>
          <X className="w-4 h-4 text-[#F04419] transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Middle Menu Links: Giant Staggered Typography */}
      <div className="relative z-10 my-auto py-4 sm:py-6 overflow-y-auto max-h-[75vh]">
        <nav className="flex flex-col gap-1 sm:gap-2 max-w-4xl">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline gap-4 sm:gap-6 py-1.5 sm:py-2 border-b border-white/5 hover:border-[#F04419]/40 transition-colors"
              >
                <span className="font-mono text-xs sm:text-sm text-[#77736E] group-hover:text-[#F04419] transition-colors">
                  {item.number}
                </span>

                <div className="flex items-center gap-3">
                  <span
                    className={`font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase transition-all duration-300 ${
                      isActive
                        ? 'text-[#F04419] translate-x-2'
                        : 'text-[#F7F5F0] group-hover:text-[#F04419] group-hover:translate-x-3'
                    }`}
                  >
                    {item.label}
                  </span>

                  {isActive && (
                    <span className="text-[#F04419] text-xl sm:text-2xl font-bold">✱</span>
                  )}
                </div>

                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#77736E] group-hover:text-[#F04419] opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto" />
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Row: Personal Info & Socials */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs font-mono text-[#77736E]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[#F7F5F0]">{personal.institutionShort}</span>
          <span>•</span>
          <span>{personal.location}</span>
          <span>•</span>
          <a
            href={`mailto:${personal.socials.email}`}
            className="text-[#F04419] hover:underline"
          >
            {personal.socials.email}
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F04419] transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <span>/</span>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F04419] transition-colors flex items-center gap-2"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </div>
  );
};
