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
  hideImage?: boolean;
  hideTitle?: boolean;
}

const baseImageContainer =
  'relative rounded-full border-2 border-purple-400/20 shadow-[0_0_40px_rgba(168,85,247,0.2)] overflow-hidden bg-muted/20 hover:shadow-[0_0_30px_-5px_var(--color-accent-warm-muted)] hover:border-accent-warm/30 transition-shadow duration-300';

const normalImageContainer = 'w-64 h-64 md:w-72 md:h-72';

export function HeroSection({
  headingKey,
  headingNamespace,
  subtitleKey,
  icon,
  children,
  largeImage = false,
  hideImage = false,
  hideTitle = false,
}: HeroSectionProps) {
  const t = useTranslations(headingNamespace);
  const heading = t(headingKey);

  const sectionClasses = largeImage
    ? 'flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12 mb-12'
    : 'flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12 mb-12';

  const imageWrapperClasses = largeImage
    ? 'shrink-0 w-4/5 mx-auto md:w-[380px] lg:w-[440px] flex items-center'
    : 'shrink-0 ms-auto';

  const imageContainerClasses = largeImage
    ? `w-full aspect-square max-h-full ${baseImageContainer}`
    : `${normalImageContainer} ${baseImageContainer}`;

  const imageSizes = largeImage
    ? '(max-width: 768px) 80vw, (max-width: 1024px) 380px, 440px'
    : '(max-width: 768px) 256px, 288px';

  return (
    <section className={sectionClasses}>
      <div className="text-start flex-1">
        {!hideTitle && (
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="inline-flex items-center gap-2">
              {icon && <span aria-hidden="true">{icon}</span>}
              <span className="text-accent-warm">
                <Typewriter text={heading} />
              </span>
            </span>
          </h1>
        )}
        {subtitleKey && (
          <p className="text-base text-muted mt-3">{t(subtitleKey)}</p>
        )}
        {children}
      </div>
      {!hideImage && (
        <div className={imageWrapperClasses}>
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
      )}
    </section>
  );
}
