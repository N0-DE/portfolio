import React from 'react';

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const dimensions = {
    sm: { box: 'w-7 h-7 text-xs', dot: 'w-1 h-1' },
    md: { box: 'w-9 h-9 text-sm', dot: 'w-1.5 h-1.5' },
    lg: { box: 'w-12 h-12 text-base', dot: 'w-2 h-2' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Monogram Icon */}
      <div
        className={`${dimensions.box} relative flex items-center justify-center rounded-sm bg-[#141416] border border-[#C6AD7B]/30 transition-all duration-300 group-hover:border-[#C6AD7B] shadow-[0_0_15px_rgba(198,173,123,0.06)]`}
      >
        <span className="font-serif italic text-[#F2EFE8] font-semibold tracking-tighter leading-none">
          J<span className="text-[#C6AD7B] not-italic">A</span>
        </span>
        <span
          className={`absolute -top-0.5 -right-0.5 ${dimensions.dot} rounded-full bg-[#C6AD7B] shadow-[0_0_6px_#C6AD7B]`}
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-[15px] font-medium tracking-[0.18em] text-[#F2EFE8] uppercase leading-none">
            Jose Anoob
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#C6AD7B] uppercase mt-1 opacity-80">
            Systems & AI
          </span>
        </div>
      )}
    </div>
  );
};
