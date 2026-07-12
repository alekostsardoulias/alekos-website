'use client';

type Theme = 'dark';

export function useThemeSource() {
  const theme: Theme = 'dark';
  return { theme } as const;
}
