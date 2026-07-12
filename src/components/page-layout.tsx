import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-4 md:py-8">
      {children}
    </div>
  );
}
