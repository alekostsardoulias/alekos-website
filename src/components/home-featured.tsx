'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';

const badgeStyles = [
  'bg-purple-500/10 text-purple-400 border border-purple-400/20',
  'bg-blue-500/10 text-blue-400 border border-blue-400/20',
  'bg-pink-500/10 text-pink-400 border border-pink-400/20',
] as const;

export function HomeFeatured() {
  const t = useTranslations('home');
  const heading = t('featured.heading');
  const viewProject = t('featured.viewProject');
  const ctaHeading = t('featured.cta.heading');
  const ctaSubtitle = t('featured.cta.subtitle');
  const ctaButton = t('featured.cta.button');

  const items = [0, 1, 2].map((i) => ({
    title: t(`featured.items.${i}.title`),
    category: t(`featured.items.${i}.category`),
    description: t(`featured.items.${i}.description`),
    badge: badgeStyles[i],
  }));

  return (
    <section>
      <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col gap-3 hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all"
          >
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-lg font-medium w-fit ${item.badge}`}
            >
              {item.category}
            </span>
            <h3 className="text-xl font-semibold text-text-primary">
              {item.title}
            </h3>
            <p className="text-lg text-text-secondary">{item.description}</p>
            <Link
              href="/work"
              className="text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors inline-flex items-center gap-1 mt-auto"
            >
              {viewProject}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-purple-400/10 bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-sm p-8 md:p-12 text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          {ctaHeading}
        </h2>
        <p className="text-lg text-text-secondary mb-6">{ctaSubtitle}</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all font-medium"
        >
          {ctaButton}
        </Link>
      </div>
    </section>
  );
}
