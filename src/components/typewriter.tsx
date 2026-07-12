'use client';

import { useState, useEffect, useRef } from 'react';
import { usePageLoading } from '@/components/page-transition';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function Typewriter({
  text,
  speed = 70,
  onComplete,
  className,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);
  const { isLoadingComplete } = usePageLoading();

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!isLoadingComplete) return;

    // Check reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      requestAnimationFrame(() => {
        setDisplayedText(text);
        setIsComplete(true);
      });
      onCompleteRef.current?.();
      return;
    }

    if (!text) {
      requestAnimationFrame(() => setIsComplete(true));
      return;
    }

    // Reset state when text changes
    requestAnimationFrame(() => {
      setDisplayedText('');
      setIsComplete(false);
    });
    indexRef.current = 0;

    const interval = setInterval(() => {
      indexRef.current += 1;
      const currentText = text.slice(0, indexRef.current);
      setDisplayedText(currentText);

      if (indexRef.current >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
        onCompleteRef.current?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isLoadingComplete]);

  if (!text) return null;

  // If reduced motion, render full text immediately without cursor
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
}
