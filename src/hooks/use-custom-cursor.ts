'use client';

import { useEffect, useRef, useCallback } from 'react';

const DOT_LERP = 0.45;
const RING_LERP = 0.18;
const DOT_OFFSET = 4; // half of 8px width/height
const RING_OFFSET = 11; // half of 22px width/height

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary';

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const dotPosRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });

  const animate = useCallback(() => {
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    dotPosRef.current.x = lerp(dotPosRef.current.x, mx, DOT_LERP);
    dotPosRef.current.y = lerp(dotPosRef.current.y, my, DOT_LERP);
    ringPosRef.current.x = lerp(ringPosRef.current.x, mx, RING_LERP);
    ringPosRef.current.y = lerp(ringPosRef.current.y, my, RING_LERP);

    const dx = dotPosRef.current.x - DOT_OFFSET;
    const dy = dotPosRef.current.y - DOT_OFFSET;
    const rx = ringPosRef.current.x - RING_OFFSET;
    const ry = ringPosRef.current.y - RING_OFFSET;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mqlHover = window.matchMedia('(hover: hover) and (any-pointer: fine)');
    const mqlMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');

    if (!mqlHover.matches || !mqlMotion.matches) return;

    const html = document.documentElement;
    html.classList.add('has-custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(INTERACTIVE_SELECTOR);
      if (ringRef.current) {
        ringRef.current.classList.toggle('is-interactive', Boolean(isInteractive));
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    const loop = () => {
      animate();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      html.classList.remove('has-custom-cursor');
    };
  }, [animate]);

  return { dotRef, ringRef };
}
