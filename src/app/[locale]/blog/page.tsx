import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { ArticleCard } from '@/components/articles/article-card';
import { getAllBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on technology, business, and life as an independent engineer.',
};

export default function BlogPage() {
  const t = useTranslations('blog');
  const posts = getAllBlogPosts();

  return (
    <PageLayout>
      <HeroSection headingKey="heading" headingNamespace="blog" />
      <p className="text-sm text-text-secondary max-w-prose mt-2 mb-8 text-pretty">
        {t('description')}
      </p>

      <h2 className="sr-only">{t('heading')}</h2>

      {posts.length === 0 ? (
        <p className="text-muted text-sm">{t('empty')}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              date={post.date}
              category={post.category}
              excerpt={post.excerpt}
              slug={post.slug}
              basePath="/blog"
              readMoreLabel={t('readMore')}
              readingTimeLabel={t('readingTime')}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
}
