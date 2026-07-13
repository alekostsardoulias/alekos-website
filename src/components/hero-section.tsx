'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Typewriter } from '@/components/typewriter';
import { HERO_IMAGE } from '@/lib/config';

interface HeroSectionProps {
  headingKey: string;
  headingNamespace: string;
  subtitleKey?: string;
  icon?: ReactNode;
  children?: ReactNode;
  largeImage?: boolean;
}

export function HeroSection({
  headingKey,
  headingNamespace,
  subtitleKey,
  icon,
  children,
  largeImage = false,
}: HeroSectionProps) {
  const t = useTranslations(headingNamespace);
  const heading = t(headingKey);

  const imageContainerClasses = largeImage
    ? 'relative w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-purple-400/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] overflow-hidden bg-muted/20 hover:shadow-[0_0_30px_-5px_var(--color-accent-warm-muted)] hover:border-accent-warm/30 transition-shadow duration-300'
    : 'relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-purple-400/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] overflow-hidden bg-muted/20 hover:shadow-[0_0_30px_-5px_var(--color-accent-warm-muted)] hover:border-accent-warm/30 transition-shadow duration-300';

  const imageSizes = largeImage
    ? '(max-width: 768px) 320px, 384px'
    : '(max-width: 768px) 256px, 288px';

  return (
    <section className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12 mb-12">
      <div className="text-start">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="inline-flex items-center gap-2">
            {icon && <span aria-hidden="true">{icon}</span>}
            <span className="text-accent-warm">
              <Typewriter text={heading} />
            </span>
          </span>
        </h1>
        {subtitleKey && (
          <p className="text-base text-muted mt-3">{t(subtitleKey)}</p>
        )}
        {children}
      </div>
      <div className="shrink-0 ms-auto">
        <div className={imageContainerClasses}>
          <Image
            src={HERO_IMAGE}
            alt={heading}
            fill
            className="object-cover"
            priority
            sizes={imageSizes}
          />
        </div>
      </div>
    </section>
  );
}
