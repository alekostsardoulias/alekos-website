'use client';

import { useTranslations, useLocale } from 'next-intl';
import { BrandIcon } from '@/components/ui/brand-icon';

const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://instagram.com/alexistdev', label: 'Instagram' },
  { platform: 'X (Twitter)', url: 'https://x.com/alexistdev', label: 'X (Twitter)' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/atsardoulias', label: 'LinkedIn' },
  { platform: 'GitHub', url: 'https://github.com/alexistdev', label: 'GitHub' },
  { platform: 'Substack', url: 'https://alexistdev.substack.com', label: 'Substack' },
  { platform: 'Facebook', url: 'https://facebook.com/alexistdev', label: 'Facebook' },
  { platform: 'Threads', url: 'https://threads.net/@alexistdev', label: 'Threads' },
  { platform: 'Reddit', url: 'https://reddit.com/user/alexistdev', label: 'Reddit' },
  { platform: 'Email', url: 'mailto:hello@alexist.dev', label: 'Email' },
  { platform: 'Discord', url: 'https://discord.gg/alexistdev', label: 'Discord' },
];

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  const name = locale === 'el' ? 'Αλέξανδρος Τσαρδούλιας' : 'Alexandros Tsardoulias';
  const title =
    locale === 'el'
      ? 'Μηχανικός Λογισμικού ΤΝ & Ειδικός Marketing'
      : 'AI-Native Software Engineer & Marketing Specialist';

  return (
    <footer className="border-t border-white/[0.04] bg-black/30 backdrop-blur-xl mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
          {/* Left: name, title, copyright */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {name}
            </span>
            <span className="text-lg text-text-secondary">{title}</span>
            <span className="text-lg text-text-tertiary mt-0.5">
              {t('copyright', { year })}
            </span>
          </div>

          {/* Right: social icon buttons — 2 rows of 5 */}
          <div className="grid grid-cols-5 gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm
                           flex items-center justify-center text-text-secondary
                           hover:border-purple-400/30 hover:text-purple-400 hover:bg-purple-400/5
                           hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
                           transition-all duration-200"
                aria-label={social.label}
              >
                <BrandIcon platform={social.platform} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
