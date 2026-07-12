import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { RTLProvider } from '@/components/rtl-provider';
import { SITE_URL } from '@/lib/config';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isGreek = locale === 'el';

  return {
    title: {
      template: isGreek ? '%s | Αλέξανδρος Τσαρδούλιας' : '%s | Alexandros Tsardoulias',
      default: isGreek
        ? 'Αλέξανδρος Τσαρδούλιας | AI-Native Software Engineer & Marketing Specialist'
        : 'Alexandros Tsardoulias | AI-Native Software Engineer & Marketing Specialist',
    },
    description: isGreek
      ? 'AI-Native Software Engineer & Marketing Specialist. Συνδυάζω τεχνολογία και marketing για να χτίζω προϊόντα που έχουν ουσία.'
      : 'AI-Native Software Engineer & Marketing Specialist. I combine technology and marketing to build products with substance.',
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: isGreek ? 'Αλέξανδρος Τσαρδούλιας' : 'Alexandros Tsardoulias',
      description: 'AI-Native Software Engineer & Marketing Specialist',
      url: `${SITE_URL}/${locale}`,
      siteName: isGreek ? 'Αλέξανδρος Τσαρδούλιας' : 'Alexandros Tsardoulias',
      locale: isGreek ? 'el_GR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: isGreek ? 'Αλέξανδρος Τσαρδούλιας' : 'Alexandros Tsardoulias',
      description: 'AI-Native Software Engineer & Marketing Specialist',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <RTLProvider locale={locale}>
      <ThemeProvider>
        <CustomCursor />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </NextIntlClientProvider>
      </ThemeProvider>
    </RTLProvider>
  );
}
