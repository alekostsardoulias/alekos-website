import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/cta-section';
import { getArticleBySlug } from '@/lib/articles';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface CaseStudyPageProps {
  params: Promise<{ slug: string; locale: string }>;
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
  const { slug, locale } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const t = await getTranslations();
  const tCase = await getTranslations('caseStudies');
  const isCompletedWork = (article as { type?: string }).type === 'completed-work';
  const isEnglish = locale === 'en';

  const translatedTitle = isEnglish ? article.title : tCase(`${slug}.title`);
  const translatedExcerpt = isEnglish ? article.excerpt : tCase(`${slug}.excerpt`);
  const translatedBody = isEnglish ? null : tCase(`${slug}.body`);

  let Content: React.ComponentType | null = null;
  if (isEnglish) {
    const mod = await import(`@/content/articles/${slug}.mdx`);
    Content = mod.default;
  }

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === 'el' ? 'el-GR' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <PageLayout>
      <section>
      <article className="max-w-prose">
        <Link href="/work" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
            {t('common.back')}
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            {translatedTitle}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-lg text-muted">{formattedDate}</span>
            <span className="text-lg px-2 py-0.5 rounded-full border border-border text-muted">
              {t(`articles.categories.${article.category}`)}
            </span>
            {isCompletedWork && (
              <span className="text-lg px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {t('about.completedWork.heading')}
              </span>
            )}
          </div>
        </header>

        <div className="prose-custom">
          {Content ? <Content /> : <p>{translatedBody}</p>}
        </div>
      </article>
      </section>

      <CtaSection />
    </PageLayout>
  );
}