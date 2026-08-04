'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from './language-context'

const links = [
  { de: 'Startseite', en: 'Home', href: '#startseite' },
  { de: 'Leistungen', en: 'Services', href: '#leistungen' },
  { de: 'Über uns', en: 'About', href: '#ueber-uns' },
  { de: 'Kontakt', en: 'Contact', href: '#kontakt' },
]

export function Nav() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-rule'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#startseite"
          className="flex items-baseline gap-2 group focus-visible:outline-none"
          aria-label="JONOVA Immobilienverwaltung"
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif font-bold text-base select-none"
            aria-hidden="true"
          >
            J
          </span>
          <span className="font-sans font-semibold text-sm tracking-wide text-foreground">
            JONOVA
          </span>
        </a>

        <nav aria-label={t('Hauptnavigation', 'Main navigation')} className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-ink-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:text-foreground"
            >
              {lang === 'de' ? l.de : l.en}
            </a>
          ))}

          <div
            className="flex items-center gap-0.5 border border-rule p-0.5 rounded-sm"
            role="group"
            aria-label={t('Sprache', 'Language')}
          >
            <button
              type="button"
              onClick={() => setLang('de')}
              aria-pressed={lang === 'de'}
              className={`px-2.5 py-1 text-xs tracking-widest uppercase transition-colors ${
                lang === 'de'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-ink-muted hover:text-foreground'
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 text-xs tracking-widest uppercase transition-colors ${
                lang === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-ink-muted hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#kontakt"
            className="ml-1 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('Unverbindliche Anfrage', 'Free enquiry')}
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <div
            className="flex items-center gap-0.5 border border-rule p-0.5 rounded-sm"
            role="group"
            aria-label={t('Sprache', 'Language')}
          >
            <button
              type="button"
              onClick={() => setLang('de')}
              aria-pressed={lang === 'de'}
              className={`px-2 py-1 text-xs tracking-widest uppercase ${
                lang === 'de' ? 'bg-primary text-primary-foreground' : 'text-ink-muted'
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-1 text-xs tracking-widest uppercase ${
                lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-ink-muted'
              }`}
            >
              EN
            </button>
          </div>
          <button
            className="p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label={open ? t('Menü schliessen', 'Close menu') : t('Menü öffnen', 'Open menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={t('Mobile Navigation', 'Mobile navigation')}
          className="md:hidden bg-background border-t border-rule px-6 py-5 flex flex-col gap-5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary"
            >
              {lang === 'de' ? l.de : l.en}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="w-full text-center px-4 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('Unverbindliche Anfrage', 'Free enquiry')}
          </a>
        </nav>
      )}
    </header>
  )
}
