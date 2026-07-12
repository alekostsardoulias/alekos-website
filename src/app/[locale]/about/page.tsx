import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/page-layout';
import { HeroSection } from '@/components/hero-section';
import { BioSection } from '@/components/about/bio-section';
import { EducationTimeline } from '@/components/about/education-timeline';
import { WorkTimeline } from '@/components/about/work-timeline';
import { Button } from '@/components/ui/button';
import {
  User,
  Code2,
  Terminal,
  Database,
  Container,
  Brain,
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

const skillIcons = [Code2, Terminal, Database, Container, Brain] as const;

const skillColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  1: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  2: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
  3: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  4: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
};

const philosophyIcons = [Sparkles, Heart, BookOpen] as const;

const philosophyColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  1: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  2: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20' },
};

export default async function AboutPage() {
  const t = await getTranslations('about');

  const skillItems: Array<{ name: string }> = t.raw('skills.items') as Array<{ name: string }>;
  const philosophyItems: Array<{ title: string; description: string }> = t.raw(
    'philosophy.items',
  ) as Array<{ title: string; description: string }>;

  return (
    <PageLayout>
      <HeroSection headingKey="heading" headingNamespace="about" icon={<User size={24} />} />

      {/* Bio section */}
      <BioSection />

      <div className="mb-8">
        <Link href="/work">
          <Button variant="warm" size="lg">
            {t('cta')}
          </Button>
        </Link>
      </div>

      {/* Skills section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          {t('skills.heading')}
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {skillItems.map((skill, i) => {
            const Icon = skillIcons[i] ?? Code2;
            const c = skillColors[i] ?? skillColors[0];
            return (
              <span
                key={skill.name}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] text-base text-text-secondary transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]`}
              >
                <Icon size={16} className={c.text} aria-hidden="true" />
                {skill.name}
              </span>
            );
          })}
        </div>
      </section>

      {/* Philosophy section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">
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
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education timeline */}
      <div className="mt-12 pt-8 border-t border-border">
        <EducationTimeline />
      </div>

      {/* Work timeline */}
      <div className="mt-12 pt-8 border-t border-border">
        <WorkTimeline />
      </div>
    </PageLayout>
  );
}
