import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';

interface UseRevealOptions {
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  /**
   * When true, the returned className uses `stagger` (children animate via
   * nth-child delays) instead of `reveal` (the element itself animates).
   */
  stagger?: boolean;
}

interface UseRevealResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  className: string;
  style: CSSProperties;
  inView: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
): UseRevealResult<T> {
  const {
    direction = 'up',
    delay = 0,
    duration = 700,
    // Default to 0: any pixel of the target intersecting the viewport triggers
    // the reveal. A non-zero threshold is unsafe for tall containers — when the
    // target is taller than viewport / threshold, the intersectionRatio can
    // never reach it and the callback never fires (e.g. the 36-tile single-col
    // Gallery grid on iPhone).
    threshold = 0,
    rootMargin = '0px 0px -40px 0px',
    once = true,
    stagger = false,
  } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    // Fallback: if the element is already in the viewport at mount, mark it
    // visible synchronously instead of waiting for the observer's initial
    // callback. The observer can fail to fire in time when the element is
    // wrapped in a parent that's mid-animation (e.g. .page-enter), leaving
    // above-the-fold content stuck at opacity: 0 in production.
    const rafId = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const inViewNow =
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < window.innerHeight &&
        rect.left < window.innerWidth;
      if (inViewNow) {
        setInView(true);
        if (once) observer.disconnect();
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const root = stagger ? 'stagger' : 'reveal';
  const className = [root, direction, inView ? 'in' : ''].filter(Boolean).join(' ');
  const style: CSSProperties = stagger
    ? {}
    : {
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      };

  return { ref, className, style, inView };
}
