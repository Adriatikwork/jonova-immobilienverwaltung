'use client'

import Link from 'next/link'
import { useLang } from './language-context'

export function Footer() {
  const { lang, t } = useLang()
  const year = new Date().getFullYear()

  const navLinks = [
    { de: 'Start', en: 'Home', href: '#startseite' },
    { de: 'Eigentümer', en: 'Owners', href: '#eigentuemer' },
    { de: 'Leistungen', en: 'Services', href: '#leistungen' },
    { de: 'FAQ', en: 'FAQ', href: '#faq' },
    { de: 'Kontakt', en: 'Contact', href: '#kontakt' },
  ]

  const legalLinks = [
    { de: 'Impressum', en: 'Imprint', href: '/impressum/' },
    { de: 'Datenschutz', en: 'Privacy', href: '/datenschutz/' },
  ]

  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-baseline gap-2">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif font-bold text-base select-none"
                aria-hidden="true"
              >
                J
              </span>
              <span className="font-sans font-semibold text-sm tracking-wide">JONOVA</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60 text-pretty">
              {t(
                'Persönliche Verwaltung von Mietliegenschaften in der Schweiz. Erreichbar, klar, sorgfältig.',
                'Personal management of rental properties in Switzerland. Reachable, clear, careful.'
              )}
            </p>
          </div>

          <nav
            aria-label={t('Footer-Navigation', 'Footer navigation')}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12"
          >
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium uppercase tracking-widest text-primary-foreground/40 mb-1">
                Navigation
              </p>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:text-primary-foreground"
                >
                  {lang === 'de' ? l.de : l.en}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium uppercase tracking-widest text-primary-foreground/40 mb-1">
                {t('Rechtliches', 'Legal')}
              </p>
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-primary-foreground underline underline-offset-4 decoration-primary-foreground/35 hover:decoration-primary-foreground hover:text-primary-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40 rounded-sm"
                >
                  {lang === 'de' ? l.de : l.en}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; {year} JONOVA Immobilienverwaltung.{' '}
            {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            {legalLinks.map((l) => (
              <Link
                key={`bottom-${l.href}`}
                href={l.href}
                className="font-medium text-primary-foreground/80 underline underline-offset-4 decoration-primary-foreground/40 hover:text-primary-foreground hover:decoration-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40 rounded-sm"
              >
                {lang === 'de' ? l.de : l.en}
              </Link>
            ))}
            <span className="text-primary-foreground/35" aria-hidden="true">
              ·
            </span>
            <span className="text-primary-foreground/40">
              {t('Schweiz', 'Switzerland')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
