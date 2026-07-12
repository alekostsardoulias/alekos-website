'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from '@/components/typewriter';
import { HERO_IMAGE } from '@/lib/config';

interface HeroProps {
  onTypewriterComplete?: () => void;
}

export function Hero({ onTypewriterComplete }: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center md:py-0">
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 w-full max-w-6xl px-6">
        {/* Text */}
        <div className="flex-1 text-center md:text-start space-y-5">
          {/* Greeting pill */}
          <span dir="ltr" className="inline-block px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm text-base text-text-secondary">
            {t('greeting')}
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              <Typewriter
                text={t('name')}
                onComplete={onTypewriterComplete}
              />
            </span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            {t('title')}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-text-tertiary max-w-xl">
            {t('description')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all font-medium text-sm"
            >
              {t('cta')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-text-secondary hover:border-white/[0.15] hover:bg-white/[0.04] transition-all font-medium text-sm"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-purple-400/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] overflow-hidden">
            <Image
              src={HERO_IMAGE}
              alt={t('name')}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-tertiary"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
