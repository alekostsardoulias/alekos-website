import { useTranslations } from 'next-intl';
import { BriefcaseBusiness } from 'lucide-react';

export function WorkTimeline() {
  const t = useTranslations('about.work');

  const items = [
    {
      year: t('items.0.year'),
      company: t('items.0.company'),
      role: t('items.0.role'),
      description: t('items.0.description'),
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        <BriefcaseBusiness size={20} className="inline mr-2" aria-hidden="true" />
        {t('heading')}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 border-l-2 border-purple-400/20 animate-fade-up transition-colors duration-200 hover:border-white/[0.12]"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
              {item.year}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-0.5">
              {item.company}
            </h3>
            <p className="text-sm text-muted mt-0.5">{item.role}</p>
            {item.description && !item.description.startsWith('TODO') && (
              <p className="text-sm text-muted mt-1 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
