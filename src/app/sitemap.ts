import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { getAllArticles } from '@/lib/articles';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const staticPaths = ['', '/about', '/work', '/articles', '/contact'] as const;

  const staticPages = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '/articles' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path === '/articles' ? 0.9 : path === '/about' || path === '/work' ? 0.8 : 0.7,
    })),
  );

  const articlePages = routing.locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${SITE_URL}/${locale}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticPages, ...articlePages];
}
