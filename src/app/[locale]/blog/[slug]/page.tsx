import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { Button } from '@/components/ui/button';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Blog post not found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const { default: Content } = await import(
    `@/content/blog/${slug}.mdx`
  );

  const t = await getTranslations('blog');

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'el' ? 'el-GR' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <PageLayout>
      <article className="max-w-prose">
        <Link href="/blog" className="mb-8 inline-block">
          <Button variant="ghost" size="sm" className="text-muted hover:text-foreground">
            {t('backToList')}
          </Button>
        </Link>

        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">{formattedDate}</span>
            <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted">
              {post.category}
            </span>
          </div>
        </header>

        <div className="prose-custom">
          <Content />
        </div>
      </article>
    </PageLayout>
  );
}
