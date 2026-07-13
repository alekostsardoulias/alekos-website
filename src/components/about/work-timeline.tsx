import { useTranslations } from 'next-intl';
import { BriefcaseBusiness } from 'lucide-react';

export function WorkTimeline() {
  const t = useTranslations('about.work');

  const items = t.raw('items') as Array<{
    year: string;
    company: string;
    role: string;
    description: string;
  }>;

  return (
    <section>
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        <BriefcaseBusiness size={20} className="inline me-2" aria-hidden="true" />
        {t('heading')}
      </h2>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 py-2 ps-3 border-s-2 border-purple-400/20 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="inline-block px-2 py-0.5 rounded-full text-lg font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0 h-fit mt-0.5 min-w-[160px] text-center">
              {item.year}
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-foreground leading-snug">
                {item.role}
              </h3>
              <p className="text-lg text-muted leading-snug">{item.company}</p>
              {item.description && !item.description.startsWith('TODO') && (
                <p className="text-lg text-muted mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
