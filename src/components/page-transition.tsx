'use client';

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Phase = 'loading' | 'fading' | 'complete' | 'entering';

interface PageLoadingState {
  isLoadingComplete: boolean;
}

const PageLoadingContext = createContext<PageLoadingState>({ isLoadingComplete: true });

export function usePageLoading() {
  return useContext(PageLoadingContext);
}

interface PageTransitionProps {
  children: ReactNode;
  onLoadingComplete?: () => void;
}

export function PageTransition({ children, onLoadingComplete }: PageTransitionProps) {
  const [phase, setPhase] = useState<Phase>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'complete';
    }
    return 'loading';
  });
  const completedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check reduced motion preference
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) {
      requestAnimationFrame(() => setPhase('complete'));
      if (!completedRef.current) {
        completedRef.current = true;
        onLoadingComplete?.();
      }
      return;
    }

    // 1200ms loading phase
    const loadingTimer = setTimeout(() => {
      setPhase('fading');
    }, 1200);

    return () => clearTimeout(loadingTimer);
  }, [onLoadingComplete]);

  useEffect(() => {
    if (phase !== 'fading') return;

    // 300ms fade transition
    const fadeTimer = setTimeout(() => {
      setPhase('complete');
      if (!completedRef.current) {
        completedRef.current = true;
        onLoadingComplete?.();
      }
    }, 300);

    return () => clearTimeout(fadeTimer);
  }, [phase, onLoadingComplete]);

  // After fade completes, trigger enter animation
  useEffect(() => {
    if (phase !== 'complete') return;

    const enterTimer = setTimeout(() => {
      setPhase('entering');
    }, 50);

    return () => clearTimeout(enterTimer);
  }, [phase]);

  // On route change (after initial load), show loader for 1200ms
  useEffect(() => {
    if (!completedRef.current) return;
    setPhase('loading');
    const navLoadTimer = setTimeout(() => {
      setPhase('fading');
    }, 1200);
    return () => clearTimeout(navLoadTimer);
  }, [pathname]);

  const isLoadingComplete = phase === 'complete' || phase === 'entering';

  return (
    <PageLoadingContext.Provider value={{ isLoadingComplete }}>
    <div className="relative">
      {/* Loading overlay - covers content area (below nav) */}
      {(phase === 'loading' || phase === 'fading') && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${
            phase === 'fading' ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden={phase === 'fading'}
        >
          <div className="flex flex-col items-center gap-4 animate-[zoom-in_500ms_ease-out]">
            <div className="relative w-48 h-48">
              {/* Geometric morphing shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-muted animate-[morph-circle_2s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-px bg-accent animate-[morph-line_1.5s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-sm bg-muted animate-[morph-square_2.5s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent animate-[morph-orb_1.8s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content with fade-up animation on enter */}
      <div
        className={phase === 'entering' ? 'animate-fade-up' : phase === 'complete' ? '' : 'invisible'}
        aria-hidden={phase !== 'complete' && phase !== 'entering'}
        key={pathname}
      >
        {children}
      </div>
    </div>
    </PageLoadingContext.Provider>
  );
}
