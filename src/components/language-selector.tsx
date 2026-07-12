'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FLAG_MAP: Record<string, string> = {
  en: '🇬🇧',
  el: '🇬🇷',
  ru: '🇷🇺',
  de: '🇩🇪',
  fr: '🇫🇷',
  it: '🇮🇹',
  es: '🇪🇸',
  tr: '🇹🇷',
  pl: '🇵🇱',
  ua: '🇺🇦',
  nl: '🇳🇱',
};

const LOCALES = ['en', 'el', 'ru', 'de', 'fr', 'it', 'es', 'tr', 'pl', 'ua', 'nl'] as const;

export function LanguageSelector() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center justify-center h-9 w-9 rounded-md text-muted hover:text-foreground transition-colors"
        aria-label={t('label')}
      >
        <Globe size={18} aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleSelect(loc)}
            className={loc === locale ? 'font-medium' : ''}
          >
            <span className="mr-2">{FLAG_MAP[loc]}</span>
            {t(loc)}
            {loc === locale && (
              <span className="ml-auto text-muted" aria-hidden="true">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
