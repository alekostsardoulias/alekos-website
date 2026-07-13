import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { EducationTimeline } from '@/components/about/education-timeline';
import { WorkTimeline } from '@/components/about/work-timeline';
import { ToolsFilter } from '@/components/about/tools-filter';
import {
  Sparkles,
  Heart,
  BookOpen,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Alexandros Tsardoulias — AI-Native Software Engineer & Marketing Specialist.',
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
          {(t.raw('bio.paragraphs') as string[]).map((paragraph, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </HeroSection>

      {/* Philosophy section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          {t('philosophy.heading')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {philosophyItems.map((item, i) => {
            const Icon = philosophyIcons[i] ?? Sparkles;
            const c = philosophyColors[i] ?? philosophyColors[0];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 transition-colors duration-200 hover:border-white/[0.12]"
              >
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${c.bg} ${c.text} border ${c.border} mb-3`}
                >
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-lg text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education timeline */}
        <div className="mt-20 pt-8 border-t border-border">
          <EducationTimeline />
        </div>

        {/* Work timeline */}
        <div className="mt-20 pt-8 border-t border-border">
        <WorkTimeline />
      </div>

      <ToolsFilter
        tools={t.raw('tools.items')}
        categories={t.raw('tools.categories')}
        heading={t('tools.heading')}
        allLabel={t('tools.allLabel')}
        emptyMessage={t('tools.empty')}
      />
    </PageLayout>
  );
}
