import { ReactNode } from 'react';

type Color =
  | 'violet'
  | 'rose'
  | 'amber'
  | 'teal'
  | 'emerald'
  | 'indigo'
  | 'slate'
  | 'blue'
  | 'orange'
  | 'pink'
  | 'cyan';

const colorMap: Record<Color, string> = {
  violet:  'bg-violet-100 text-violet-700',
  rose:    'bg-rose-100 text-rose-700',
  amber:   'bg-amber-100 text-amber-700',
  teal:    'bg-teal-100 text-teal-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  indigo:  'bg-indigo-100 text-indigo-700',
  slate:   'bg-slate-100 text-slate-600',
  blue:    'bg-blue-100 text-blue-700',
  orange:  'bg-orange-100 text-orange-700',
  pink:    'bg-pink-100 text-pink-700',
  cyan:    'bg-cyan-100 text-cyan-700',
};

interface BadgeProps {
  children: ReactNode;
  color?: Color;
  className?: string;
}

export function Badge({ children, color = 'violet', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
