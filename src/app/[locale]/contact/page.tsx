import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/page-layout';
import { BrandIcon } from '@/components/ui/brand-icon';
import { Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Alexandros Tsardoulias — social media, email, articles, and Discord.',
};

const EMAIL = 'alexandrostsardoulias@protonmail.com';

interface PlatformLink {
  platform: string;
  url: string;
}

const SOCIAL_LINKS: PlatformLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/alekostsardoulias/' },
  { platform: 'X (Twitter)', url: 'https://x.com/alextsardoulias' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandros-tsardoulias-02639841b/' },
  { platform: 'Reddit', url: 'https://www.reddit.com/user/thenodearchitect_gr/' },
  { platform: 'Threads', url: 'https://www.threads.com/@alekostsardoulias' },
  { platform: 'Facebook', url: 'https://www.facebook.com/alekostsardoulias/' },
];

const ARTICLE_LINKS: PlatformLink[] = [
  { platform: 'Medium', url: 'https://medium.com/@alexandrostsardoulias' },
  { platform: 'Substack', url: 'https://substack.com/@alexandrostsardoulias' },
];

const DISCORD_URL = 'https://discord.gg/Zx6CpZQnq2';

const pillHover: Record<string, string> = {
  Instagram:
    'hover:border-pink-400/40 hover:bg-pink-500/15 hover:text-pink-400',
  'X (Twitter)':
    'hover:border-gray-300/40 hover:bg-gray-400/15 hover:text-gray-300',
  LinkedIn:
    'hover:border-blue-400/40 hover:bg-blue-500/15 hover:text-blue-400',
  Facebook:
    'hover:border-blue-500/40 hover:bg-blue-500/15 hover:text-blue-500',
  Reddit:
    'hover:border-orange-400/40 hover:bg-orange-500/15 hover:text-orange-400',
  Threads:
    'hover:border-white/40 hover:bg-white/15 hover:text-white',
  Medium:
    'hover:border-green-400/40 hover:bg-green-500/15 hover:text-green-400',
  Substack:
    'hover:border-orange-500/40 hover:bg-orange-500/15 hover:text-orange-500',
};

const defaultPillHover =
  'hover:border-white/20 hover:bg-white/10 hover:text-white';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <PageLayout>
      <section className="flex flex-col gap-4">

        {/* Social Media Box (pink) — first */}
        <div className="rounded-2xl border border-pink-400/10 bg-gradient-to-r from-pink-500/5 to-rose-500/5 backdrop-blur-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pink-500/10 text-pink-400 mb-4">
            <Share2 size={28} />
          </div>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">
            {t('social.heading')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            {SOCIAL_LINKS.map((link) => {
              const hover = pillHover[link.platform] ?? defaultPillHover;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border border-pink-400/10 bg-pink-500/5 px-4 py-2 text-base font-medium text-pink-300
                              transition-all duration-200 ${hover} motion-safe:hover:scale-[1.02]`}
                >
                  <BrandIcon platform={link.platform} size={16} />
                  {link.platform === 'X (Twitter)' ? 'X.com' : link.platform}
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-lg text-text-tertiary">
            I reply faster there. Follow me for updates and insights. Let&apos;s connect!
          </p>
        </div>

        {/* Email Box (blue) */}
        <div className="rounded-2xl border border-blue-400/10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 backdrop-blur-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
            <BrandIcon platform="Email" size={28} />
          </div>
          <h2 className="text-3xl font-semibold text-text-primary mb-2">
            {t('email.heading')}
          </h2>
          <p className="text-lg text-text-secondary mb-4">{EMAIL}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 text-lg font-medium text-blue-400
                       transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400/30 motion-safe:hover:scale-[1.02]"
          >
            <BrandIcon platform="Email" size={16} />
            {t('email.button')}
          </a>
          <p className="mt-4 text-lg text-text-tertiary">
            {t('email.description')}
          </p>
        </div>

        {/* Articles Box (green) */}
        <div className="rounded-2xl border border-green-400/10 bg-gradient-to-r from-green-500/5 to-emerald-500/5 backdrop-blur-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 text-green-400 mb-4">
            <BrandIcon platform="Medium" size={28} />
          </div>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">
            {t('articles.heading')}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            {ARTICLE_LINKS.map((link) => {
              const hover = pillHover[link.platform] ?? defaultPillHover;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg border border-green-400/10 bg-green-500/5 px-4 py-2 text-base font-medium text-green-300
                              transition-all duration-200 ${hover} motion-safe:hover:scale-[1.02]`}
                >
                  <BrandIcon platform={link.platform} size={16} />
                  {link.platform}
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-lg text-text-tertiary">
            I also post my articles there. I&apos;ll appreciate your support.
          </p>
        </div>

        {/* Discord Box (purple) */}
        <div className="rounded-2xl border border-purple-400/10 bg-gradient-to-r from-purple-500/5 to-violet-500/5 backdrop-blur-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
            <BrandIcon platform="Discord" size={28} />
          </div>
          <h2 className="text-3xl font-semibold text-text-primary mb-2">
            TechBizHub.EU Discord Community
          </h2>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-purple-400/20 bg-purple-500/10 px-5 py-2.5 text-lg font-medium text-purple-400
                       transition-all duration-200 hover:bg-purple-500/20 hover:border-purple-400/30 motion-safe:hover:scale-[1.02]"
          >
            <BrandIcon platform="Discord" size={16} />
            {t('discord.button')}
          </a>
          <p className="mt-4 text-lg text-text-tertiary">
            Tech &amp; Business Community in Europe. We welcome tech enthusiasts, developers, engineers, marketers, investors, business owners and digital nomads in Europe.
          </p>
        </div>

      </section>
    </PageLayout>
  );
}
