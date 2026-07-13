import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CircleUser, BriefcaseBusiness, FileText, MailOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SUMMARIES = [
  { href: '/about', key: 'about' },
  { href: '/work', key: 'work' },
  { href: '/articles', key: 'articles' },
  { href: '/contact', key: 'contact' },
] as const;

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>> = {
  about: CircleUser,
  work: BriefcaseBusiness,
  articles: FileText,
  contact: MailOpen,
};

export function PageSummaries() {
  const t = useTranslations('home.summaries');

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SUMMARIES.map(({ href, key }, index) => {
        const Icon = ICON_MAP[key];
        return (
        <Link
          key={key}
          href={href}
          className="group animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="transition-colors duration-200 h-full">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-accent transition-colors">
                {Icon && <Icon size={16} className="inline-block me-1.5" aria-hidden="true" />}
                {t(`${key}.heading`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted leading-relaxed">
                {t(`${key}.description`)}
              </p>
            </CardContent>
          </Card>
        </Link>
      )})}
    </section>
  );
}
