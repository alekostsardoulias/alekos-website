import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/cta-section';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface ArticlePageProps {
  params: Promise<{ slug: string; locale: string }>;
}

interface ArticleTranslation {
  title: string;
  excerpt: string;
  sections: string[];
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
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const t = await getTranslations('articles');
  const isCompletedWork = (article as { type?: string }).type === 'completed-work';

  let translation: ArticleTranslation | null = null;
  try {
    translation = t.raw(`content.${slug}`) as unknown as ArticleTranslation;
  } catch {
    // fall back to MDX
  }

  const displayTitle = translation?.title ?? article.title;
  const displayExcerpt = translation?.excerpt ?? article.excerpt;

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'el' ? 'el-GR' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <PageLayout>
      <section>
      <article className="max-w-prose">
        <Link href="/articles" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
            {t('backToList')}
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            {displayTitle}
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

        {translation ? (
          <TranslatedContent sections={translation.sections} />
        ) : (
          <DynamicMdx slug={slug} />
        )}
      </article>
      </section>

      <CtaSection />
    </PageLayout>
  );
}

// ── MDX content (English fallback) ──────────────────────────────────────────

async function DynamicMdx({ slug }: { slug: string }) {
  const { default: Content } = await import(`@/content/articles/${slug}.mdx`);
  return (
    <div className="prose-custom">
      <Content />
    </div>
  );
}

// ── Translated content renderer ─────────────────────────────────────────────

function TranslatedContent({ sections }: { sections: string[] }) {
  return (
    <div className="prose-custom">
      {sections.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-semibold text-text-primary mt-10 mb-4">
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith('# ')) {
          return (
            <h2 key={i} className="text-2xl font-semibold text-text-primary mt-10 mb-4">
              {block.slice(2)}
            </h2>
          );
        }
        return (
          <p key={i} className="text-lg text-text-secondary leading-relaxed mb-4">
            {block}
          </p>
        );
      })}
    </div>
  );
}