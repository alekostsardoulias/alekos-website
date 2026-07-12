'use client';

import { useEffect } from 'react';

const RTL_LOCALES = ['il', 'ae'];

export function RTLProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
