import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto max-w-[88rem] px-4 py-16 md:py-28">
      {children}
    </div>
  );
}