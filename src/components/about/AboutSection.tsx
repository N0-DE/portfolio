import React from 'react';
import { Sparkles, Terminal, Cpu, Eye, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio.config';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioConfig;

  const coreInterests = [
    {
      number: '01',
      title: 'ARTIFICIAL INTELLIGENCE',
      icon: Sparkles,
      desc: 'Applied machine learning, multimodal Gemini workflows, and autonomous decision pipelines that solve tangible frictions.',
      tag: 'LLMs & Multimodal AI',
    },
    {
      number: '02',
      title: 'COMPUTER VISION',
      icon: Eye,
      desc: 'Real-time multi-class object detection with YOLOv8, spatial ByteTrack tracklet association, and 3D hand landmark kinematics.',
      tag: 'YOLOv8 • OpenCV • MediaPipe',
    },
    {
      number: '03',
      title: 'FULL-STACK & ENTERPRISE',
      icon: Layers,
      desc: 'Offline-first ERP architectures, FastAPI async services, Tauri v2 native desktop runtimes, and immutable transaction ledgers.',
      tag: 'FastAPI • React • Tauri',
    },
    {
      number: '04',
      title: 'EMBEDDED SYSTEMS & IOT',
      icon: Cpu,
      desc: 'Bare-metal STM32 ARM Cortex-M3 firmware, DMA-driven I2C displays, sensor conditioning, and FreeRTOS multitasking.',
      tag: 'STM32 • FreeRTOS • C/C++',
    },
    {
      number: '05',
      title: 'ALGORITHMS & AUTOMATION',
      icon: Terminal,
      desc: 'Deterministic vector geometry, keyboard-level OS hooks, robotic process automation, and automated biometric wage calculations.',
      tag: 'Spatial Math • RPA • Python',
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F7F5F0] text-[#111111] py-20 sm:py-28 md:py-36 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#111111]/15 overflow-hidden"
    >
      {/* Editorial Light Grid Background */}
      <div className="absolute inset-0 hero-grid-pattern-light pointer-events-none opacity-60" />

      {/* Decorative Crosshair Plus Marks */}
      <span className="crosshair-corner text-[#111111]/30 top-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-[#111111]/30 top-12 right-6 sm:right-12" />
      <span className="crosshair-corner text-[#111111]/30 bottom-12 left-6 sm:left-12" />
      <span className="crosshair-corner text-[#111111]/30 bottom-12 right-6 sm:right-12" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Number Header */}
        <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#77736E]">
            <span className="text-[#F04419] font-bold text-sm">✱</span>
            <span>01 // PROFILE & STORY</span>
          </div>

          <div className="font-mono text-xs text-[#77736E] uppercase tracking-wider">
            SJCET PALAI • KERALA
          </div>
        </div>

        {/* Master Typographic Headline */}
        <div className="max-w-5xl mb-14 sm:mb-20">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] text-[#111111] uppercase">
            Curious by nature.{' '}
            <span className="text-[#F04419]">Technical by design.</span>
          </h2>
        </div>

        {/* Narrative & Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <div className="space-y-6 text-base sm:text-lg text-[#111111]/90 leading-relaxed font-normal">
              <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-[#111111]">
                I am a Computer Science Engineering student at{' '}
                <span className="underline decoration-[#F04419] decoration-2 underline-offset-4">
                  St. Joseph's College of Engineering and Technology, Palai
                </span>
                , who believes the most effective way to understand complex systems is to build them from the ground up.
              </p>

              <p>
                From writing real-time computer vision tracking algorithms and offline-first enterprise ERPs, to programming bare-metal firmware on STM32 microcontrollers and automating industrial retail operations, my work bridges raw engineering rigor with refined visual simplicity.
              </p>

              <p className="text-sm text-[#77736E]">
                Rather than relying on abstract concepts or superficial wrappers, I engineer solutions that operate deterministically under real-world constraints: noisy cameras, slow hardware, intermittent networks, and high-frequency edge events.
              </p>
            </div>

            {/* Quick Spec Card */}
            <div className="p-6 rounded-xs bg-[#FFFFFF] border border-[#111111]/15 shadow-sm text-left">
              <div className="font-mono text-xs text-[#F04419] font-bold uppercase tracking-wider mb-2">
                ACADEMIC ROOTS & AFFILIATION
              </div>
              <h3 className="font-display text-lg font-bold text-[#111111]">
                {personal.institution}
              </h3>
              <p className="font-mono text-xs text-[#77736E] mt-1">
                Bachelor of Technology (B.Tech) in Computer Science & Engineering • Palai, Kerala
              </p>
            </div>
          </div>

          {/* Right Column: Technical Focus Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#77736E] mb-2 flex items-center justify-between">
              <span>AREAS OF SPECIALIZATION</span>
              <span className="text-[#F04419]">5 PILLARS</span>
            </div>

            {coreInterests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="group p-5 rounded-xs bg-[#FFFFFF] border border-[#111111]/10 hover:border-[#F04419] shadow-xs transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#F04419]">
                        {interest.number}
                      </span>
                      <h4 className="font-display text-sm font-bold tracking-tight text-[#111111] group-hover:text-[#F04419] transition-colors">
                        {interest.title}
                      </h4>
                    </div>
                    <Icon className="w-4 h-4 text-[#77736E] group-hover:text-[#F04419] transition-colors" />
                  </div>

                  <p className="text-xs text-[#77736E] leading-relaxed mb-3">
                    {interest.desc}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-[#111111]/5">
                    <span className="font-mono text-[10px] text-[#111111] font-semibold">
                      {interest.tag}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#F04419] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
