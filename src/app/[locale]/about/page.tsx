import { PageLayout } from '@/components/page-layout';
import { Link } from '@/i18n/navigation';
import { HeroSection } from '@/components/hero-section';
import { EducationTimeline } from '@/components/about/education-timeline';
import { WorkTimeline } from '@/components/about/work-timeline';
import { ToolsFilter } from '@/components/about/tools-filter';
import { CtaSection } from '@/components/cta-section';
import { FaqSection } from '@/components/about/faq-section';
import {
  Sparkles,
  Heart,
  BookOpen,
  User,
  ExternalLink,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Alexandros Tsardoulias.',
};

const philosophyIcons = [Sparkles, Heart, BookOpen] as const;

const philosophyColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  1: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  2: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
};

export default async function AboutPage() {
  const t = await getTranslations('about');

  const philosophyItems: Array<{ title: string; description: string }> = t.raw(
    'philosophy.items',
  ) as Array<{ title: string; description: string }>;

  return (
    <PageLayout>
      <HeroSection headingKey="heading" headingNamespace="about" largeImage hideTitle>
          <div className="mt-4 space-y-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 max-h-full overflow-y-auto">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <User size={24} aria-hidden="true" />
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{t('heading')}</h3>
          </div>
          {(t.raw('bio.paragraphs') as string[]).map((paragraph, i) => (
            <p key={i} className="text-xl md:text-2xl leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </HeroSection>

      <section>
        <h2 className="text-3xl font-semibold text-foreground mb-6">{t('philosophy.heading')}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {philosophyItems.map((item, i) => {
            const Icon = philosophyIcons[i] ?? Sparkles;
            const c = philosophyColors[i] ?? philosophyColors[0];
            return (<div key={item.title} className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 transition-colors duration-200 hover:border-white/[0.12]"><span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${c.bg} ${c.text} border ${c.border} mb-3`}><Icon size={18} aria-hidden="true" /></span><h3 className="text-xl font-semibold text-foreground mb-1.5">{item.title}</h3><p className="text-lg text-muted leading-relaxed">{item.description}</p></div>);
          })}
        </div>
      </section>

      <section className="pt-8"><EducationTimeline /></section>
      <section className="pt-8"><WorkTimeline /></section>

      <section className="pt-8">
        <h2 className="text-3xl font-semibold text-foreground mb-6">{t('completedWork.heading')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(t.raw('completedWork.items') as Array<{ title: string; date: string; category: string; excerpt: string; slug: string }>).map((item, i) => (
            <Link key={i} href={`/case-studies/${item.slug}`} className="block group">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 hover:border-purple-400/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3"><span className="text-lg text-text-secondary font-mono">{item.date}</span><span className="text-lg px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 font-medium">{item.category}</span></div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed line-clamp-2">{item.excerpt}</p>
                <div className="flex items-center gap-1 mt-3 text-lg text-purple-400/60 group-hover:text-purple-400 transition-colors"><span>Read more</span><ExternalLink size={12} /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-8">
        <FaqSection heading={t('faq.heading')} items={t.raw('faq.items') as Array<{ question: string; answer: string }>} />
      </section>

      <CtaSection />

      <ToolsFilter tools={t.raw('tools.items')} categories={t.raw('tools.categories')} heading={t('tools.heading')} allLabel={t('tools.allLabel')} emptyMessage={t('tools.empty')} />
    </PageLayout>
  );
}
