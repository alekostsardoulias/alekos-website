'use client';

import { useCustomCursor } from '@/hooks/use-custom-cursor';

export function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor();

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}
