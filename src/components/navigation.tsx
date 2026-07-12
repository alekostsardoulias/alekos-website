'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LanguageSelector } from '@/components/language-selector';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/work', key: 'work' },
  { href: '/articles', key: 'articles' },
  { href: '/contact', key: 'contact' },
] as const;

export function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on navigation
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/[0.04]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Site name — locale-aware */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          onClick={handleNavClick}
        >
          {locale === 'el' ? 'Αλέξανδρος Τσαρδούλιας' : locale === 'ru' ? 'Александр Цардулиас' : locale === 'ua' ? 'Александрс Цардуліас' : 'Alexandros Tsardoulias'}
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, key }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={key}
                href={href}
                className={`text-base transition-all duration-200 relative ${
                  isActive
                    ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] font-medium after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-purple-400 after:to-blue-400 after:rounded-full after:content-[""]'
                    : 'text-muted hover:text-purple-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.3)]'
                }`}
                onClick={handleNavClick}
              >
                {t(key)}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/[0.08]">
            {/* Language selector */}
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted hover:text-purple-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/[0.04]">
          <div className="flex flex-col px-4 py-3 gap-2">
            {NAV_LINKS.map(({ href, key }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={key}
                  href={href}
                  className={`text-base py-2 transition-colors ${
                    isActive
                      ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] font-medium'
                      : 'text-muted hover:text-purple-300'
                  }`}
                  onClick={handleNavClick}
                >
                  {t(key)}
                </Link>
              );
            })}

            <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/[0.08]">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
