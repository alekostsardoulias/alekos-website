import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { getAllArticles, getAllCategories } from '@/lib/articles';
import { ArticleFilter } from './article-filter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles on AI, marketing, and technology by Alexandros Tsardoulias.',
};

export default function ArticlesPage() {
  const t = useTranslations('articles');
  const allArticles = getAllArticles();
  const categories = getAllCategories();

  return (
    <PageLayout>
      <HeroSection headingKey="heading" headingNamespace="articles" />
      <p className="text-sm text-text-secondary max-w-prose mt-2 mb-6 text-pretty">{t('description')}</p>

      {/* Category filter + article list */}
      <h2 className="sr-only">{t('heading')}</h2>
      <ArticleFilter
        articles={allArticles}
        categories={categories}
        allLabel={t('filter.all')}
        emptyMessage={t('empty')}
        readMoreLabel={t('readMore')}
        readingTimeLabel={t('readingTime')}
      />

      <div className="mt-8">
        <Link href="/contact">
          <Button variant="warm" size="lg">
            {t('cta')}
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}
