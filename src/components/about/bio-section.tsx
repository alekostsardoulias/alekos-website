import { useTranslations } from 'next-intl';

export function BioSection() {
  const t = useTranslations('about.bio');

  return (
    <section className="max-w-prose space-y-4 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5">
      <p className="text-base lg:text-lg leading-relaxed text-muted">
        {t('paragraph1')}
      </p>
      <p className="text-base lg:text-lg leading-relaxed text-muted">
        {t('paragraph2')}
      </p>
      <p className="text-base lg:text-lg leading-relaxed text-muted">
        {t('paragraph3')}
      </p>
    </section>
  );
}
