import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onOpenFeaturedProject?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onContactClick,
  onOpenFeaturedProject,
}) => {
  const { personal, projects } = portfolioConfig;
  const featuredProject = projects[0]; // Traffic Vision CV

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#F04419] text-[#FFFFFF] overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-12"
    >
      {/* Hairline Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-40" />

      {/* Crosshair Decorative Markers in corners and intersections */}
      <span className="crosshair-corner text-white/50 top-24 left-6 sm:left-12" />
      <span className="crosshair-corner text-white/50 top-24 right-6 sm:right-12" />
      <span className="crosshair-corner text-white/50 bottom-16 left-6 sm:left-12" />
      <span className="crosshair-corner text-white/50 bottom-16 right-6 sm:right-12" />

      {/* Oversized Background Giant Watermark Typography */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] font-black tracking-tighter text-white/[0.07] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        JOSE
      </div>

      {/* Top Metadata Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="font-mono text-xs tracking-wider uppercase font-semibold">
            {personal.availability.status}
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="font-mono text-xs text-white/90 hidden sm:inline">
            {personal.institutionShort}
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs tracking-wider">
          <span className="text-white/90">KERALA, INDIA</span>
          <span className="text-white/40">•</span>
          <span className="text-white/90">B.TECH CSE</span>
        </div>
      </div>

      {/* Main Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Narrative & Headline Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Asterisk Eyebrow */}
            <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-white/90">
              <span className="text-white font-bold">✱</span>
              <span>PORTFOLIO & RESEARCH 2026</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-[#FFFFFF] mb-6">
              I BUILD THINGS THAT THINK.
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8 max-w-lg">
              Exploring artificial intelligence, computer vision, software engineering, and the space between digital ideas and real-world systems.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xs bg-[#111111] hover:bg-[#000000] text-[#FFFFFF] font-mono text-xs tracking-wider font-semibold shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 text-[#F04419] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xs bg-white/10 hover:bg-white/20 border border-white/30 text-[#FFFFFF] font-mono text-xs tracking-wider font-medium transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Discreet Social Icons */}
              <div className="flex items-center gap-2.5 ml-auto sm:ml-2 pl-2 border-l border-white/20">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xs bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xs bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Portrait Column (Jose Anoob) */}
          <div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-sm overflow-hidden bg-[#111111] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-2 border-white/20 group">
              <img
                src="/images/jose_hero.jpg"
                alt="Jose Anoob — Computer Science Engineer & AI Developer"
                className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hairline subtle frame overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 pointer-events-none" />

              {/* Bottom label on portrait */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#111111]/85 backdrop-blur-md px-3.5 py-2 rounded-xs border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F04419]" />
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#FFFFFF] uppercase">
                    Jose Anoob
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/70">
                  CS & AI / SJCET
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Polaroid Badge & Quick Specs */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-3">
            {/* Floating Polaroid-Style Project Badge */}
            <div
              onClick={() => onOpenFeaturedProject ? onOpenFeaturedProject() : onExploreClick()}
              className="group/card cursor-pointer bg-[#FFFFFF] text-[#111111] p-3 rounded-xs shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:-translate-y-1 hover:rotate-1 rotate-[-1deg] border border-white/40"
            >
              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#111111] mb-3">
                <img
                  src={featuredProject.featuredImage}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <span className="absolute top-2 left-2 font-mono text-[9px] font-bold px-2 py-0.5 bg-[#F04419] text-white rounded-xs">
                  ✱ SELECTED PROJECT
                </span>
              </div>

              <div className="text-left px-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-display text-sm font-bold tracking-tight text-[#111111] group-hover/card:text-[#F04419] transition-colors">
                    Traffic Vision CV
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F04419]" />
                </div>
                <p className="font-mono text-[11px] text-[#77736E]">
                  YOLOv8 & Real-Time Tracking
                </p>
              </div>
            </div>

            {/* Quick Engineering Focus Pills */}
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xs border border-white/15 text-left text-xs font-mono space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-[10px]">
                <Sparkles className="w-3 h-3 text-white" />
                <span>CORE COMPETENCIES</span>
              </div>
              <p className="text-white/80 leading-relaxed text-[11px]">
                Real-time Computer Vision • Enterprise ERP Architecture • Bare-Metal ARM Firmware • OCR Robotic Automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom-Right Dark CTA Badge (Inspired by reference video) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/20">
        {/* Giant Bottom Foreground Typographic Signature */}
        <div className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white select-none">
          JOSE ANOOB®
        </div>

        {/* Floating "Let's Talk" Card */}
        <div
          onClick={onContactClick}
          className="group cursor-pointer flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-[#111111] border border-white/20 hover:border-[#FFFFFF] text-white shadow-xl transition-all duration-300 hover:scale-105 ml-auto sm:ml-0"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30 shrink-0">
            <img
              src="/images/jose_hero.jpg"
              alt="Jose Anoob mini avatar"
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-[#111111]" />
          </div>

          <div className="text-left font-mono">
            <div className="text-[11px] font-bold text-white flex items-center gap-1">
              <span>Let's Talk</span>
              <span className="text-[#F04419]">✱</span>
            </div>
            <div className="text-[9px] text-white/70">
              Open for High-Impact Roles
            </div>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#F04419] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
