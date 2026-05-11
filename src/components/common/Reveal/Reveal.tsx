import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import type { RevealDirection } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className,
}: RevealProps) {
  const reveal = useReveal<HTMLDivElement>({ direction, delay, duration });
  const merged = [reveal.className, className].filter(Boolean).join(' ');
  return (
    <div ref={reveal.ref} className={merged} style={reveal.style}>
      {children}
    </div>
  );
}
