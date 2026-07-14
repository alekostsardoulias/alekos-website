import { PageLayout } from '@/components/page-layout';
import { Hero } from '@/components/hero';
import { HomeStats } from '@/components/home-stats';
import { HomeServices } from '@/components/home-services';
import { HomeFeatured } from '@/components/home-featured';
import { FaqSection } from '@/components/about/faq-section';
import { CtaSection } from '@/components/cta-section';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('about');

  return (
    <PageLayout>
      <Hero />
      <HomeStats />
      <HomeServices />
      <HomeFeatured />
      <section className="pt-8">
        <FaqSection
          heading={t('faq.heading')}
          items={t.raw('faq.items') as Array<{ question: string; answer: string }>}
        />
      </section>
      <CtaSection />
    </PageLayout>
  );
}
