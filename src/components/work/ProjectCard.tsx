import React from 'react';
import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { CaseStudy } from '../../types/portfolio.types';
import { GithubIcon } from '../ui/SocialIcons';

interface ProjectCardProps {
  project: CaseStudy;
  index: number;
  onSelect: (project: CaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const isReversed = index % 2 !== 0;

  return (
    <article className="group relative py-12 sm:py-16 md:py-20 border-b border-white/10 last:border-b-0 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Large Visual Preview Column */}
        <div
          className={`lg:col-span-7 ${
            isReversed ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            onClick={() => onSelect(project)}
            className="group/image relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-[#1A1A1A] border border-white/15 hover:border-[#F04419] transition-all duration-500 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Project Image */}
            <img
              src={project.featuredImage}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
            />

            {/* Gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
              <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-[#111111]/90 backdrop-blur-md border border-white/15 text-white font-semibold">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-xs bg-[#111111]/90 backdrop-blur-md border border-[#F04419]/50 text-white">
                <ShieldCheck className="w-3 h-3 text-[#F04419]" />
                {project.verificationStatus}
              </span>
            </div>

            {/* Bottom Floating Action on Hover */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-3.5 py-2 rounded-xs bg-[#F04419] text-white font-mono text-xs font-semibold shadow-lg">
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Narrative & Specifications Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center text-left ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Number + Domain Header */}
          <div className="flex items-baseline justify-between gap-4 mb-3 border-b border-white/10 pb-2">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#F04419] tracking-tighter">
              {project.number}
            </span>
            <span className="font-mono text-xs tracking-widest text-[#77736E] uppercase">
              {project.domain}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5F0] leading-tight cursor-pointer hover:text-[#F04419] transition-colors"
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-xs font-mono text-[#F04419] tracking-wide">
            {project.subtitle}
          </p>

          {/* Summary */}
          <p className="mt-4 text-sm text-[#D8D6D0] leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Engineering Approach / Focus Note */}
          <div className="mt-5 p-4 rounded-xs bg-[#171717] border border-white/10 text-xs">
            <div className="text-[#F04419] font-mono font-semibold uppercase tracking-wider mb-1">
              Engineering Focus
            </div>
            <p className="text-[#A6A29A] leading-relaxed">
              {project.engineeringApproach}
            </p>
          </div>

          {/* Verified Technologies Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded-xs bg-[#1C1C1C] text-[#F7F5F0] border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="font-mono text-[11px] px-2 py-1 rounded-xs bg-transparent text-[#77736E]">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#F04419] hover:bg-[#FF4B2B] text-white font-mono text-xs tracking-wider font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs bg-[#171717] hover:bg-[#222222] border border-white/15 text-[#F7F5F0] font-mono text-xs tracking-wider transition-colors"
                title="View Source Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== project.repoUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs bg-[#171717] hover:bg-[#222222] border border-white/15 text-[#F7F5F0] font-mono text-xs tracking-wider transition-colors"
                title="View Live Deployment"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>DEMO</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
