import { useTranslations } from 'next-intl';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  description: string;
}

export function EducationTimeline() {
  const t = useTranslations('about.education');

  const items: EducationItem[] = t.raw('items') as EducationItem[];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        <GraduationCap size={20} className="inline me-2" aria-hidden="true" />
        {t('heading')}
      </h2>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 py-2 ps-3 border-s-2 border-purple-400/20 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0 h-fit mt-0.5">
              {item.year}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground leading-snug">
                {item.degree}
              </h3>
              <p className="text-sm text-muted leading-snug">{item.institution}</p>
              {item.description && !item.description.startsWith('TODO') && (
                <p className="text-sm text-muted mt-0.5 leading-relaxed">
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
