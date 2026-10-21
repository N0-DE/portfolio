import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { FullScreenMenu } from './FullScreenMenu';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { personal } = portfolioConfig;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg'
            : 'bg-transparent py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Custom Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-left"
            aria-label="Jose Anoob Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#F04419] transition-colors">
              {personal.name}
            </span>
            <span className="text-[10px] font-mono font-bold text-[#FFFFFF]/70 border border-white/30 rounded-xs px-1 py-0.5">
              DEV
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold'
                      : 'text-[#FFFFFF]/75 hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FFFFFF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Section: Socials & Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-xs text-[#FFFFFF]/80 hover:text-[#FFFFFF] hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-xs text-[#FFFFFF]/80 hover:text-[#FFFFFF] hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Menu Trigger Button with '=' indicator */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#111111] text-[#FFFFFF] border border-white/20 hover:border-[#F04419] transition-all duration-200 cursor-pointer shadow-sm group"
              aria-label="Open full screen navigation menu"
            >
              <span className="hidden sm:inline font-mono text-xs font-medium tracking-wider group-hover:text-[#F04419]">
                MENU
              </span>
              <Menu className="w-4 h-4 text-[#F04419]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Navigation Drawer Overlay */}
      <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
