import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';
import { SITE_URL } from '@/lib/config';
import { cn } from '@/lib/utils';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Alexandros Tsardoulias',
    default: 'Alexandros Tsardoulias | AI-Native Software Engineer & Marketing Specialist',
  },
  description:
    'AI-Native Software Engineer & Marketing Specialist. I combine technology and marketing to build products with substance.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Alexandros Tsardoulias',
    description: 'AI-Native Software Engineer & Marketing Specialist',
    url: SITE_URL,
    siteName: 'Alexandros Tsardoulias',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alexandros Tsardoulias',
    description: 'AI-Native Software Engineer & Marketing Specialist',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CustomCursor />
          <Navigation />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
