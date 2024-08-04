import { ComponentProps } from 'react';

interface BadgeProps {
  text: string;
  className?: ComponentProps<'span'>['className'];
  color?: string;
}

export default function Badge({ text, className, color }: BadgeProps) {
  return (
    <span
      className={`bg-rasengan-light-primary text-white rounded-xl px-4 py-1 font-urbanist-regular flex items-center justify-center text-sm ${className}`}
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}
