import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react';
import type { CaseStudy } from '../../types/portfolio.types';
import { portfolioConfig } from '../../config/portfolio.config';
import { GithubIcon } from '../ui/SocialIcons';

interface CaseStudyModalProps {
  project: CaseStudy;
  onClose: () => void;
  onNavigate: (project: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  const { projects } = portfolioConfig;
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    const scrollContainer = document.getElementById('case-study-scroll-container');
    if (scrollContainer) scrollContainer.scrollTop = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && nextProject) onNavigate(nextProject);
      if (e.key === 'ArrowLeft' && prevProject) onNavigate(prevProject);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, nextProject, prevProject, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 flex flex-col bg-[#111111] text-[#F7F5F0] overflow-hidden"
    >
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-4 bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#77736E] hover:text-[#F04419] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO SELECTED WORK</span>
        </button>

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#F04419] font-bold hidden sm:inline">
            {project.number} // {project.category}
          </span>

          <div className="flex items-center gap-1 border-l border-white/10 pl-3">
            <button
              onClick={() => prevProject && onNavigate(prevProject)}
              disabled={!prevProject}
              className="p-1.5 rounded-xs text-[#77736E] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              title="Previous Case Study (Left Arrow)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => nextProject && onNavigate(nextProject)}
              disabled={!nextProject}
              className="p-1.5 rounded-xs text-[#77736E] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
              title="Next Case Study (Right Arrow)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs bg-[#1A1A1A] border border-white/10 hover:border-[#F04419] text-[#77736E] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Case Study Body */}
      <div
        id="case-study-scroll-container"
        className="flex-1 overflow-y-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 max-w-6xl mx-auto w-full"
      >
        {/* Header Eyebrow & Title */}
        <div className="mb-10 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#F04419] tracking-widest uppercase font-bold">
              {project.number} // {project.domain}
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#F7F5F0] bg-[#1A1A1A] px-2.5 py-0.5 rounded-xs border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F04419]" />
              {project.verificationStatus}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-black text-[#F7F5F0] leading-tight uppercase">
            {project.title}
          </h1>

          <p className="mt-3 font-mono text-xs sm:text-sm text-[#F04419] tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Featured Campaign Image */}
        <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-[#1A1A1A] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] mb-14">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Layout Grid: Narrative on left, Metadata card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Overview & Problem Statement */}
            <section>
              <h2 className="font-display text-2xl font-bold text-[#F7F5F0] flex items-center gap-3 mb-4 uppercase">
                <span className="w-3 h-3 bg-[#F04419] rounded-xs" />
                Problem Statement & Context
              </h2>
              <p className="text-base text-[#D8D6D0] leading-relaxed font-normal">
                {project.problemStatement}
              </p>
            </section>

            {/* Key Objectives */}
            <section className="p-6 rounded-xs bg-[#171717] border border-white/10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#F04419] font-bold mb-4">
                Engineering Objectives
              </h3>
              <ul className="space-y-3">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#F7F5F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#F04419] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Architecture */}
            <section>
              <h2 className="font-display text-2xl font-bold text-[#F7F5F0] flex items-center gap-3 mb-4 uppercase">
                <Layers className="w-5 h-5 text-[#F04419]" />
                Technical Architecture & Pipeline
              </h2>
              <p className="text-sm text-[#D8D6D0] mb-6">
                {project.engineeringApproach}
              </p>

              {/* Architectural Layers Breakdown */}
              <div className="space-y-4">
                {project.technicalArchitecture.layers.map((layer, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xs bg-[#171717] border border-white/10 hover:border-[#F04419]/50 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-[#F04419] font-bold">
                        Layer {i + 1}: {layer.name}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.components.map((c) => (
                          <span
                            key={c}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-xs bg-[#222222] text-[#D8D6D0]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[#77736E] leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Implementation Details & Verified Code */}
            <section>
              <h2 className="font-display text-2xl font-bold text-[#F7F5F0] flex items-center gap-3 mb-4 uppercase">
                <Code2 className="w-5 h-5 text-[#F04419]" />
                Key Implementation Details
              </h2>

              <div className="space-y-6">
                {project.keyImplementationDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xs bg-[#171717] border border-white/10"
                  >
                    <h4 className="font-mono text-sm text-[#F7F5F0] font-bold mb-2">
                      {detail.headline}
                    </h4>
                    <p className="text-sm text-[#D8D6D0] leading-relaxed mb-4">
                      {detail.detail}
                    </p>

                    {detail.codeSnippet && (
                      <div className="relative mt-3 rounded-xs bg-[#0D0D0D] border border-white/10 p-4 overflow-x-auto">
                        <div className="font-mono text-[10px] text-[#F04419] uppercase tracking-widest mb-2 pb-1 border-b border-white/10 font-bold">
                          {detail.language || 'code'} // Source Implementation
                        </div>
                        <pre className="font-mono text-xs text-[#F7F5F0] leading-relaxed">
                          <code>{detail.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering Challenges & Solutions */}
            <section>
              <h2 className="font-display text-2xl font-bold text-[#F7F5F0] flex items-center gap-3 mb-4 uppercase">
                <Wrench className="w-5 h-5 text-[#F04419]" />
                Engineering Challenges & Trade-Offs
              </h2>

              <div className="space-y-4">
                {project.engineeringChallenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xs bg-[#171717] border border-white/10"
                  >
                    <div className="font-mono text-xs text-[#F04419] font-bold uppercase mb-1">
                      Challenge: {item.challenge}
                    </div>
                    <p className="text-xs text-[#F7F5F0] mb-2">
                      <strong>Solution:</strong> {item.solution}
                    </p>
                    <p className="text-[11px] text-[#77736E] italic">
                      <strong>Architectural Trade-off:</strong> {item.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Verified Results */}
            <section className="p-6 rounded-xs bg-[#171717] border border-[#F04419]/40">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#F04419] font-bold mb-3">
                Verified Verification & Results
              </h3>
              <ul className="space-y-2.5">
                {project.verifiedResults.map((res, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#F7F5F0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F04419] mt-1.5 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar: Quick Facts & Links */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-xs bg-[#171717] border border-white/10 sticky top-24">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#F04419] font-bold mb-6 pb-2 border-b border-white/10">
                Project Specification
              </h3>

              <div className="space-y-5 text-xs">
                <div>
                  <span className="font-mono text-[#77736E] block mb-1">My Role</span>
                  <span className="text-[#F7F5F0] font-medium">{project.myRole}</span>
                </div>

                <div>
                  <span className="font-mono text-[#77736E] block mb-1">Domain</span>
                  <span className="text-[#F7F5F0]">{project.domain}</span>
                </div>

                <div>
                  <span className="font-mono text-[#77736E] block mb-1">Verification Status</span>
                  <span className="inline-flex items-center gap-1.5 text-[#F04419] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {project.verificationStatus}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[#77736E] block mb-2">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-xs bg-[#222222] text-[#F7F5F0] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xs bg-[#F04419] hover:bg-[#FF4B2B] text-white font-mono text-xs tracking-wider font-semibold transition-colors shadow-md"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>EXPLORE REPOSITORY</span>
                    </a>
                  )}

                  {project.liveUrl && project.liveUrl !== project.repoUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xs bg-[#222222] hover:bg-[#2A2A2A] border border-white/15 text-[#F7F5F0] font-mono text-xs tracking-wider transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Next / Previous Case Study Navigation */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {prevProject ? (
            <button
              onClick={() => onNavigate(prevProject)}
              className="group p-6 text-left rounded-xs bg-[#171717] border border-white/10 hover:border-[#F04419] transition-all cursor-pointer"
            >
              <div className="font-mono text-[10px] text-[#77736E] uppercase tracking-widest mb-1">
                ← Previous Project
              </div>
              <div className="font-display text-xl font-bold text-[#F7F5F0] group-hover:text-[#F04419] transition-colors">
                {prevProject.title}
              </div>
            </button>
          ) : <div />}

          {nextProject && (
            <button
              onClick={() => onNavigate(nextProject)}
              className="group p-6 text-right rounded-xs bg-[#171717] border border-white/10 hover:border-[#F04419] transition-all cursor-pointer"
            >
              <div className="font-mono text-[10px] text-[#77736E] uppercase tracking-widest mb-1">
                Next Project →
              </div>
              <div className="font-display text-xl font-bold text-[#F7F5F0] group-hover:text-[#F04419] transition-colors">
                {nextProject.title}
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
