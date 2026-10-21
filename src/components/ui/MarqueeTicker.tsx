import React from 'react';

interface MarqueeTickerProps {
  className?: string;
  speed?: 'normal' | 'fast';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  className = '',
}) => {
  const items = [
    'COMPUTER VISION',
    'EDGE AI & YOLOV8',
    'ENTERPRISE ERP & FASTAPI',
    'EMBEDDED STM32 & FREERTOS',
    'ROBOTIC PROCESS AUTOMATION',
    'SJCET PALAI',
    'KERALA, INDIA',
    'HUMAN-COMPUTER INTERACTION',
  ];

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#111111] border-y border-white/10 py-4.5 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Repeating blocks to ensure seamless infinite looping */}
        {[0, 1, 2, 3].map((loopIndex) => (
          <div key={loopIndex} className="flex items-center gap-8 shrink-0 pr-8">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#F7F5F0]">
                  {item}
                </span>
                <span className="text-[#F04419] font-bold text-base sm:text-xl">
                  ✱
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
