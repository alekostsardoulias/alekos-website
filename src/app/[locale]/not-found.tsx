import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('404');

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-xl font-semibold text-foreground">{t('title')}</h1>
      <p className="text-muted text-sm">{t('message')}</p>
      <Link href="/">
        <Button variant="outline" className="mt-2">{t('backHome')}</Button>
      </Link>
    </div>
  );
}
