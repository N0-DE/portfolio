import React, { useState } from 'react';
import { GraduationCap, Award, MapPin, ExternalLink, BookOpen, X } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';

export const EducationSection: React.FC = () => {
  const { education } = portfolioConfig;
  const edu = education[0];
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section
      id="education"
      className="relative bg-[#111111] text-[#F7F5F0] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-white/10 overflow-hidden"
    >
      {/* Dark Grid Background */}
      <div className="absolute inset-0 hero-grid-pattern-dark pointer-events-none opacity-40" />

      {/* Crosshair Corner Markers */}
      <span className="crosshair-corner text-white/30 top-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-white/30 top-12 right-6 sm:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736E]">
            <span className="text-[#F04419] font-bold text-sm">✱</span>
            <span>04 // ACADEMICS & RECOGNITION</span>
          </div>

          <div className="font-mono text-xs text-[#77736E] uppercase tracking-wider">
            CREDENTIALS & CITATIONS
          </div>
        </div>

        {/* Master Heading */}
        <div className="max-w-4xl mb-14 sm:mb-20 text-left">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] text-[#F7F5F0] uppercase">
            Rigorous roots. <span className="text-[#F04419]">Proven ideas.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D6D0] max-w-2xl leading-relaxed">
            Academic study at St. Joseph's College of Engineering and Technology combined with state-level innovation recognitions.
          </p>
        </div>

        {/* Two-Column Grid: Education on left, Verified Achievement on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-xs bg-[#171717] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xs bg-[#111111] text-[#F04419] border border-white/10">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#F04419] uppercase font-bold tracking-wider">
                      FORMAL DEGREE
                    </span>
                    <div className="font-mono text-[11px] text-[#77736E]">
                      {edu.period} • {edu.status}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#77736E]">
                  <MapPin className="w-3.5 h-3.5 text-[#F04419]" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F5F0] leading-snug mb-2">
                {edu.institution}
              </h3>

              <div className="font-mono text-sm text-[#F04419] font-semibold mb-6">
                {edu.degree}
              </div>

              <p className="text-sm text-[#D8D6D0] leading-relaxed mb-8">
                {edu.description}
              </p>

              {/* Curricular Highlights */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-wider text-[#F7F5F0] flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#F04419]" />
                  <span>Curricular Engineering Focus</span>
                </div>
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#77736E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F04419] mt-1.5 shrink-0" />
                    <span className="text-[#D8D6D0]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#77736E]">
              <span>AFFILIATION VERIFIED</span>
              <span className="text-[#F04419]">KTU UNIVERSITY</span>
            </div>
          </div>

          {/* Right Column: Verified Achievement (Young Innovators Programme) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-xs bg-[#171717] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xs bg-[#111111] text-[#F04419] border border-white/10">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#F04419] uppercase font-bold tracking-wider">
                      STATE INNOVATION RECOGNITION
                    </span>
                    <div className="font-mono text-[11px] text-[#77736E]">
                      K-DISC • Government of Kerala
                    </div>
                  </div>
                </div>

                <span className="font-mono text-xs px-2 py-0.5 rounded-xs bg-[#111111] text-emerald-400 border border-emerald-400/30">
                  VERIFIED
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#F7F5F0] mb-3">
                Young Innovators Programme (YIP)
              </h3>

              <p className="text-sm text-[#D8D6D0] leading-relaxed mb-6">
                Selected for real-world innovation in technology-driven problem solving under the Young Innovators Programme conducted by the Kerala Development and Innovation Strategic Council (K-DISC).
              </p>

              {/* Interactive Certificate Preview Thumbnail */}
              <div
                onClick={() => setCertModalOpen(true)}
                className="group/cert relative aspect-[16/11] w-full rounded-xs overflow-hidden bg-[#111111] border border-white/15 hover:border-[#F04419] cursor-pointer transition-all duration-300 shadow-md"
              >
                <img
                  src="/images/yip_certificate.png"
                  alt="Young Innovators Programme Certificate for Jose Anoob"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/cert:scale-105 opacity-90 group-hover/cert:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent flex items-end justify-between p-4">
                  <span className="font-mono text-xs text-white flex items-center gap-1.5 font-semibold">
                    <ExternalLink className="w-3.5 h-3.5 text-[#F04419]" />
                    Click to Inspect Certificate
                  </span>
                  <span className="font-mono text-[10px] text-[#F04419] font-bold uppercase">
                    YIP CREDENTIAL
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#77736E]">
              <span>AUTHENTIC RECORD</span>
              <span className="text-[#F04419]">K-DISC ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {certModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setCertModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171717] border border-white/20 rounded-xs p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="text-left font-mono text-xs text-[#F04419] font-bold">
                VERIFIED CREDENTIAL // YOUNG INNOVATORS PROGRAMME
              </div>
              <button
                onClick={() => setCertModalOpen(false)}
                className="p-1 rounded-xs bg-[#222222] hover:bg-[#333333] text-white transition-colors cursor-pointer"
                aria-label="Close Certificate View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full max-h-[75vh] overflow-auto rounded-xs bg-[#000000]">
              <img
                src="/images/yip_certificate.png"
                alt="Young Innovators Programme Full Certificate"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
