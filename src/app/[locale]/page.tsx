import { PageLayout } from '@/components/page-layout';
import { Hero } from '@/components/hero';
import { HomeStats } from '@/components/home-stats';
import { HomeServices } from '@/components/home-services';
import { HomeFeatured } from '@/components/home-featured';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <HomeStats />
      <HomeServices />
      <HomeFeatured />
    </PageLayout>
  );
}
