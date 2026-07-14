import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/cta-section';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Case study not found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const isCompletedWork = (article as { type?: string }).type === 'completed-work';

  const { default: Content } = await import(`@/content/articles/${slug}.mdx`);

  const formattedDate = new Date(article.date).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <PageLayout>
      <section>
      <article className="max-w-prose">
        <Link href="/work" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
            ← Back
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-lg text-muted">{formattedDate}</span>
            {isCompletedWork && (
              <span className="text-lg px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                Completed Work
              </span>
            )}
          </div>
        </header>

        <div className="prose-custom">
          <Content />
        </div>
      </article>
      </section>

      <CtaSection />
    </PageLayout>
  );
}
