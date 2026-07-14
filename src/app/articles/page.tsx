import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { CtaSection } from '@/components/cta-section';
import { getAllArticles } from '@/lib/articles';
import { ArticleFilter } from './article-filter';
import type { Metadata } from 'next';

const CATEGORIES = [
  'Arts & Culture',
  'Business',
  'Finance',
  'Philosophy',
  'Politics',
  'Technology',
] as const;

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles on AI, marketing, and technology by Alexandros Tsardoulias.',
};

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <PageLayout>
      <HeroSection heading="My Articles" subtitle="Thoughts on AI, software engineering, and modern marketing. I write about what I build, what I learn, and where technology is heading." hideImage />

      {/* Category filter + article list */}
      <h2 className="sr-only">My Articles</h2>
      <ArticleFilter
        articles={allArticles}
        categories={[...CATEGORIES]}
        allLabel="All"
        emptyMessage="No articles in this category."
        readMoreLabel="Read more"
        readingTimeLabel="{minutes} min read"
      />

      <CtaSection />

    </PageLayout>
  );
}
