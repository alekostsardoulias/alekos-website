'use client';

import { useTranslations } from 'next-intl';
import { Code2, Megaphone, Bot, Lightbulb } from 'lucide-react';

const services = [
  { icon: Code2, color: 'text-purple-400' },
  { icon: Megaphone, color: 'text-blue-400' },
  { icon: Bot, color: 'text-pink-400' },
  { icon: Lightbulb, color: 'text-amber-400' },
] as const;

export function HomeServices() {
  const t = useTranslations('home');

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
          {t('servicesOverview.heading')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-purple-400/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-4">
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {t(`servicesOverview.items.${i}.title`)}
              </h3>
              <p className="text-lg text-text-secondary">
                {t(`servicesOverview.items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
