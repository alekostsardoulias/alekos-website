import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'el', 'ru', 'de', 'fr', 'it', 'es', 'tr', 'pl', 'ua', 'nl', 'il', 'ae'],
  defaultLocale: 'en',
});
