import type { Metadata } from 'next';
import Script from 'next/script';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans")}>
      <head>
        <Script
          id="rtl-dir"
          strategy="beforeInteractive"
        >{`(function(){try{var c=document.cookie.match('(^|;)\\\\s*NEXT_LOCALE\\\\s*=\\\\s*([^;]+)');var l=c?c.pop():'en';document.documentElement.dir=['il','ae'].includes(l)?'rtl':'ltr';document.documentElement.lang=l}catch(e){}})()`}</Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
