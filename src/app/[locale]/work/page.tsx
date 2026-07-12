import { getTranslations } from 'next-intl/server';
import { WorkContent } from './work-content';
import { getCompletedWork } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Services and completed projects by Alexandros Tsardoulias.',
};

interface ServiceItem {
  name: string;
  description: string;
}

export default async function WorkPage() {
  const t = await getTranslations('work');

  const services: ServiceItem[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
    name: t(`services.items.${i}.name`),
    description: t(`services.items.${i}.description`),
  }));

  const completedItems = getCompletedWork().map((article) => ({
    title: article.title,
    date: article.date,
    category: article.category,
    excerpt: article.excerpt,
    slug: article.slug,
  }));

  return (
    <WorkContent
      heading={t('heading')}
      servicesHeading={t('services.heading')}
      services={services}
      processHeading={t('process.heading')}
      completedHeading={t('completed.heading')}
      completedItems={completedItems}
    />
  );
}
