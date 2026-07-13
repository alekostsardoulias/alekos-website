import { useTranslations } from 'next-intl';

export default function Loading() {
  const t = useTranslations('common');
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <p className="text-muted text-lg">{t('loading')}</p>
    </div>
  );
}
