import { useEffect, useRef, useState } from 'react';

/**
 * Animate a number from 0 to `end` with an easeOutQuart curve. Triggered when
 * `shouldStart` flips to true (typically from a scroll reveal). Steps the
 * increment so large numbers don't flicker.
 */
export function useCounterAnimation(end: number, duration = 1400, shouldStart = false): number {
  const [count, setCount] = useState(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (!shouldStart || end <= 0) {
      setCount(end <= 0 ? 0 : count);
      return;
    }

    let startTime: number | null = null;
    let frame = 0;
    const step = Math.max(1, Math.floor(end / 200));

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const next = Math.floor((eased * end) / step) * step;
      if (next !== lastRef.current) {
        lastRef.current = next;
        setCount(next);
      }
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, shouldStart]);

  return count;
}
