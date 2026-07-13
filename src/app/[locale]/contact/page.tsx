import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/page-layout';
import { BrandIcon } from '@/components/ui/brand-icon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Alexandros Tsardoulias — social media links.',
};

const brandHover: Record<string, string> = {
  Instagram:
    'hover:border-pink-400/30 group-hover:border-pink-400/30 hover:text-pink-400 group-hover:text-pink-400',
  'X (Twitter)':
    'hover:border-blue-400/30 group-hover:border-blue-400/30 hover:text-blue-400 group-hover:text-blue-400',
  LinkedIn:
    'hover:border-blue-500/30 group-hover:border-blue-500/30 hover:text-blue-500 group-hover:text-blue-500',
  GitHub:
    'hover:border-purple-400/30 group-hover:border-purple-400/30 hover:text-purple-400 group-hover:text-purple-400',
  Medium:
    'hover:border-green-400/30 group-hover:border-green-400/30 hover:text-green-400 group-hover:text-green-400',
  Email:
    'hover:border-red-400/30 group-hover:border-red-400/30 hover:text-red-400 group-hover:text-red-400',
};

const defaultHover =
  'hover:border-purple-400/20 group-hover:border-purple-400/20 hover:text-purple-400 group-hover:text-purple-400';

export default function ContactPage() {
  const t = useTranslations('contact');

  const links = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
    platform: t(`links.${i}.platform`),
    url: t(`links.${i}.url`),
    label: t(`links.${i}.label`),
  }));

  return (
    <PageLayout>

      {/* Medium CTA Card */}
      <section>
      <div className="rounded-2xl border border-green-400/10 bg-gradient-to-r from-green-500/5 to-emerald-500/5 backdrop-blur-sm p-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 text-green-400 mb-4">
          <BrandIcon platform="Medium" size={28} />
        </div>
        <h2 className="text-3xl font-semibold text-text-primary mb-2">
          {t('mediumCTA.heading')}
        </h2>
        <p className="text-lg text-text-secondary mb-4">medium.com/@alexandrostsardoulias</p>
        <a
          href="https://medium.com/@alexandrostsardoulias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-green-400/20 bg-green-500/10 px-5 py-2.5 text-lg font-medium text-green-400
                     transition-all duration-200 hover:bg-green-500/20 hover:border-green-400/30 motion-safe:hover:scale-[1.02]"
        >
          <BrandIcon platform="Medium" size={16} />
          {t('mediumCTA.button')}
        </a>
        <p className="mt-4 text-lg text-text-tertiary">
          {t('mediumCTA.description')}
        </p>
      </div>
      </section>

      {/* Social Links Grid */}
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        {links.map((link, i) => {
          const hoverClass = brandHover[link.platform] ?? defaultHover;

          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]
                          transition-all duration-200 motion-safe:hover:scale-[1.005] ${hoverClass}`}
            >
              <span className="shrink-0 w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center
                               text-text-secondary transition-colors duration-200">
                <BrandIcon platform={link.platform} size={20} />
              </span>
              <span className="font-medium text-lg text-text-primary transition-colors duration-200">
                {link.platform}
              </span>
            </a>
          );
        })}
      </div>
      </section>
    </PageLayout>
  );
}