import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

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
  title: 'Alexandros Tsardoulias',
  description: 'AI-Native Software Engineer & Marketing Specialist',
};

const RTL_LOCALES = ['il', 'ae'];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
