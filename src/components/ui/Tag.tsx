import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-1',
    md: 'text-xs px-3 py-1.5',
  }[size];

  const variantStyles = {
    default:
      'bg-[#18181B] text-[#A6A29A] border border-white/5 hover:border-[#C6AD7B]/30 hover:text-[#F2EFE8]',
    accent:
      'bg-[#C6AD7B]/10 text-[#C6AD7B] border border-[#C6AD7B]/25 font-medium',
    outline:
      'bg-transparent text-[#A6A29A] border border-white/10 hover:border-white/20',
    subtle:
      'bg-[#141416]/80 text-[#7D7971] border border-white/[0.04]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono tracking-wider rounded-sm transition-colors duration-200 ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
