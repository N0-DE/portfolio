import React from 'react';
import { Cpu, Database, Eye, Layout, Server, Terminal } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Server,
  Layout,
  Cpu,
  Terminal,
  Database,
};

export const CapabilitiesSection: React.FC = () => {
  const { skillCategories } = portfolioConfig;

  return (
    <section
      id="skills"
      className="relative bg-[#F7F5F0] text-[#111111] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#111111]/15 overflow-hidden"
    >
      {/* Light Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern-light pointer-events-none opacity-50" />

      {/* Crosshair Markers */}
      <span className="crosshair-corner text-[#111111]/30 top-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-[#111111]/30 top-12 right-6 sm:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736E]">
            <span className="text-[#F04419] font-bold text-sm">✱</span>
            <span>03 // TECHNICAL ARSENAL</span>
          </div>

          <div className="font-mono text-xs text-[#77736E] uppercase tracking-wider">
            VERIFIED REPOSITORIES
          </div>
        </div>

        {/* Master Heading */}
        <div className="max-w-4xl mb-14 sm:mb-20 text-left">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-[#111111] uppercase">
            Tools of <span className="text-[#F04419]">the trade.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736E] max-w-2xl leading-relaxed">
            Organized strictly by verified application across production codebases, real-time computer vision inference, and bare-metal ARM firmware.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Terminal;

            return (
              <div
                key={cat.title}
                className="group p-6 sm:p-8 rounded-xs bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#F04419] transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xs bg-[#111111] text-white">
                        <Icon className="w-4 h-4 text-[#F04419]" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#77736E]">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-[#77736E] uppercase">
                      {cat.skills.length} TOOLS
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#111111] mb-2 group-hover:text-[#F04419] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#77736E] leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`font-mono text-[11px] px-2.5 py-1 rounded-xs border transition-colors ${
                          skill.highlight
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-[#F7F5F0] text-[#111111] border-[#111111]/15 hover:border-[#F04419]'
                        }`}
                        title={skill.verificationNote}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#111111]/10 flex items-center justify-between text-[10px] font-mono text-[#77736E]">
                  <span>REPOSITORIES VERIFIED</span>
                  <span className="text-[#F04419] font-bold">100% PROVABLE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
