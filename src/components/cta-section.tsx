'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface CtaSectionProps {
  className?: string;
}

export function CtaSection({ className = '' }: CtaSectionProps) {
  const t = useTranslations('home');
  const heading = t('featured.cta.heading');
  const subtitle = t('featured.cta.subtitle');
  const button = t('featured.cta.button');

  return (
    <section className={`rounded-2xl border border-purple-400/10 bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-sm p-8 md:p-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        {heading}
      </h2>
      <p className="text-lg text-text-secondary mb-6">{subtitle}</p>
      <Link
        href="/contact"
        className="inline-block px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all font-medium"
      >
        {button}
      </Link>
    </section>
  );
}