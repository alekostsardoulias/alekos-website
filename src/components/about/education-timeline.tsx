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

  const items: EducationItem[] = [
    {
      year: t('items.0.year'),
      institution: t('items.0.institution'),
      degree: t('items.0.degree'),
      description: t('items.0.description'),
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground mb-6">
        <GraduationCap size={20} className="inline me-2" aria-hidden="true" />
        {t('heading')}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 border-s-2 border-purple-400/20 animate-fade-up transition-colors duration-200 hover:border-white/[0.12]"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
              {item.year}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-0.5">
              {item.institution}
            </h3>
            <p className="text-sm text-muted mt-0.5">{item.degree}</p>
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
