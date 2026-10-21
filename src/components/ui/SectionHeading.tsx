import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 mb-4 ${
            align === 'center' ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="w-6 h-[1px] bg-[#C6AD7B]/50" />
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#C6AD7B] uppercase font-medium">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-[#C6AD7B]/50" />
        </div>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F2EFE8] leading-[1.15]">
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal text-[#C6AD7B] font-serif">
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-[#A6A29A] text-sm md:text-base leading-relaxed font-sans font-light">
          {description}
        </p>
      )}
    </div>
  );
};
