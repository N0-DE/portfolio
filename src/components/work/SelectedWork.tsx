import React, { useState } from 'react';
import { portfolioConfig } from '../../config/portfolio.config';
import type { CaseStudy } from '../../types/portfolio.types';
import { ProjectCard } from './ProjectCard';

interface SelectedWorkProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const { projects } = portfolioConfig;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Computer Vision',
    'Enterprise Systems',
    'Embedded & IoT',
    'Automation & RPA',
    'Applied AI',
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.domain === selectedFilter ||
            p.category.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <section
      id="work"
      className="relative bg-[#111111] text-[#F7F5F0] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-white/10"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Crosshair Corner Markers */}
      <span className="crosshair-corner text-white/30 top-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-white/30 top-12 right-6 sm:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <div className="text-left max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736E] mb-3">
              <span className="text-[#F04419] font-bold text-sm">✱</span>
              <span>02 // SELECTED WORK</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-[#F7F5F0] uppercase">
              Engineered <span className="text-[#F04419]">Case Studies.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#D8D6D0] font-normal leading-relaxed">
              Verified production systems spanning real-time computer vision tracking, enterprise general ledgers, bare-metal embedded telemetry, and operational robotic automation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-xs transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#F04419] text-white font-bold shadow-md'
                    : 'bg-[#1A1A1A] text-[#77736E] border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Verification Footer Banner */}
        <div className="mt-14 p-6 rounded-xs bg-[#171717] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#77736E] text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F04419]" />
            <span className="text-[#F7F5F0]">
              Zero simulated metrics. All code architectures verified against local workspace repositories.
            </span>
          </div>
          <a
            href={portfolioConfig.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F04419] hover:underline font-semibold"
          >
            Explore all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};
