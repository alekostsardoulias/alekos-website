import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/cta-section';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article not found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const isCompletedWork = (article as { type?: string }).type === 'completed-work';

  const formattedDate = new Date(article.date).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <PageLayout>
      <section>
      <article className="max-w-prose">
        <Link href="/articles" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
            ← Back to articles
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-lg text-muted">{formattedDate}</span>
            <span className="text-lg px-2 py-0.5 rounded-full border border-border text-muted">
              {article.category}
            </span>
            {isCompletedWork && (
              <span className="text-lg px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                Completed Work
              </span>
            )}
          </div>
        </header>

        <DynamicMdx slug={slug} />
      </article>
      </section>

      <CtaSection />
    </PageLayout>
  );
}

// ── MDX content ────────────────────────────────────────────────────────────

async function DynamicMdx({ slug }: { slug: string }) {
  const { default: Content } = await import(`@/content/articles/${slug}.mdx`);
  return (
    <div className="prose-custom">
      <Content />
    </div>
  );
}
