'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { assetPath } from '@/lib/asset-path'
import { useInquiry } from './inquiry-context'
import { useLang } from './language-context'

const links = [
  { de: 'Start', en: 'Home', href: '#startseite' },
  { de: 'Eigentümer', en: 'Owners', href: '#eigentuemer' },
  { de: 'Leistungen', en: 'Services', href: '#leistungen' },
  { de: 'Über uns', en: 'About', href: '#ueber-uns' },
  { de: 'FAQ', en: 'FAQ', href: '#faq' },
  { de: 'Kontakt', en: 'Contact', href: '#kontakt' },
]

export function Nav() {
  const { lang, setLang, t } = useLang()
  const { startInquiry } = useInquiry()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const onDark = !scrolled && !open
  const linkTone = onDark
    ? 'text-hero-foreground/70 hover:text-hero-foreground'
    : 'text-ink-muted hover:text-foreground'
  const langIdle = onDark
    ? 'text-hero-foreground/65 hover:text-hero-foreground'
    : 'text-ink-muted hover:text-foreground'
  const langBorder = onDark ? 'border-hero-foreground/25' : 'border-rule'
  const menuBtn = onDark ? 'text-hero-foreground' : 'text-foreground'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-background/95 backdrop-blur-sm border-b border-rule'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#startseite"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="JONOVA Immobilienverwaltung"
        >
          {/* Both marks stay mounted and cross-fade, so the swap on scroll
              never leaves an empty gap while the second file loads. */}
          <span className="relative block h-9 w-9 shrink-0" aria-hidden="true">
            <img
              src={assetPath('/logo-mark-light.png')}
              alt=""
              width={36}
              height={36}
              className={`absolute inset-0 h-9 w-9 object-contain transition-opacity duration-300 ${
                onDark ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src={assetPath('/logo-mark.png')}
              alt=""
              width={36}
              height={36}
              className={`absolute inset-0 h-9 w-9 object-contain transition-opacity duration-300 ${
                onDark ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </span>
          <span
            className={`font-sans font-semibold text-sm tracking-[0.14em] uppercase ${
              onDark ? 'text-hero-foreground' : 'text-foreground'
            }`}
          >
            JONOVA
          </span>
        </a>

        <nav aria-label={t('Hauptnavigation', 'Main navigation')} className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-sm font-medium transition-colors duration-200 focus-visible:outline-none ${linkTone}`}
            >
              {lang === 'de' ? l.de : l.en}
            </a>
          ))}

          <div
            className={`flex items-center gap-0.5 border p-0.5 rounded-sm ${langBorder}`}
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
                  : langIdle
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
                  : langIdle
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => startInquiry()}
            className={`ml-1 px-4 py-2 rounded-sm text-sm font-medium border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              onDark
                ? 'border-hero-foreground/40 text-hero-foreground hover:border-gold hover:bg-hero-foreground/8'
                : 'border-primary/30 text-primary hover:border-gold hover:bg-surface'
            }`}
          >
            {t('Anfrage', 'Enquire')}
          </button>
        </nav>

        <div className="flex lg:hidden items-center gap-2">
          <div
            className={`flex items-center gap-0.5 border p-0.5 rounded-sm ${langBorder}`}
            role="group"
            aria-label={t('Sprache', 'Language')}
          >
            <button
              type="button"
              onClick={() => setLang('de')}
              aria-pressed={lang === 'de'}
              className={`px-2 py-1 text-xs tracking-widest uppercase ${
                lang === 'de' ? 'bg-primary text-primary-foreground' : langIdle
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-1 text-xs tracking-widest uppercase ${
                lang === 'en' ? 'bg-primary text-primary-foreground' : langIdle
              }`}
            >
              EN
            </button>
          </div>
          <button
            className={`p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${menuBtn}`}
            aria-label={open ? t('Menü schliessen', 'Close menu') : t('Menü öffnen', 'Open menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Kept mounted and collapsed via grid rows so opening and closing the
          drawer eases instead of snapping. `inert` keeps the links out of the
          tab order while it is shut. */}
      <div
        inert={!open}
        className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label={t('Mobile Navigation', 'Mobile navigation')}
            className="bg-background border-t border-rule px-6 py-5 flex flex-col gap-5"
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
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                startInquiry()
              }}
              className="w-full text-center px-4 py-3 border border-primary/30 text-primary text-sm font-medium rounded-sm hover:border-gold hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t('Unverbindliche Anfrage', 'Free enquiry')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
