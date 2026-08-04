'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LanguageProvider, useLang } from './language-context'
import { CONTACT, SITE_NAME, SITE_NAME_SHORT } from '@/lib/site'

function LegalChromeInner({
  children,
  current,
}: {
  children: React.ReactNode
  current: 'impressum' | 'datenschutz'
}) {
  const { lang, setLang, t } = useLang()
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-rule">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-baseline gap-2 focus-visible:outline-none"
            aria-label={SITE_NAME}
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif font-bold text-base select-none"
              aria-hidden="true"
            >
              J
            </span>
            <span className="font-sans font-semibold text-sm tracking-wide text-foreground">
              {SITE_NAME_SHORT}
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6" aria-label={t('Rechtliche Navigation', 'Legal navigation')}>
            <Link
              href="/"
              className="text-sm text-ink-muted hover:text-foreground transition-colors"
            >
              {t('Startseite', 'Home')}
            </Link>
            <Link
              href="/impressum/"
              className={`text-sm transition-colors ${
                current === 'impressum'
                  ? 'text-foreground font-medium'
                  : 'text-ink-muted hover:text-foreground'
              }`}
              aria-current={current === 'impressum' ? 'page' : undefined}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz/"
              className={`text-sm transition-colors ${
                current === 'datenschutz'
                  ? 'text-foreground font-medium'
                  : 'text-ink-muted hover:text-foreground'
              }`}
              aria-current={current === 'datenschutz' ? 'page' : undefined}
            >
              {t('Datenschutz', 'Privacy')}
            </Link>
            <Link
              href="/#kontakt"
              className="text-sm px-3 py-1.5 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('Kontakt', 'Contact')}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-0.5 border border-rule p-0.5 rounded-sm"
              role="group"
              aria-label={t('Sprache', 'Language')}
            >
              <button
                type="button"
                onClick={() => setLang('de')}
                aria-pressed={lang === 'de'}
                className={`px-2 py-1 text-xs tracking-widest uppercase transition-colors ${
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
                className={`px-2 py-1 text-xs tracking-widest uppercase transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-ink-muted hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Link
              href="/"
              className="sm:hidden p-2 text-foreground"
              aria-label={t('Zur Startseite', 'Back to home')}
            >
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {t('Zurück zur Startseite', 'Back to homepage')}
        </Link>
        {children}
      </main>

      <footer className="bg-foreground text-primary-foreground mt-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            &copy; {year} {SITE_NAME}. {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
          </p>
          <div className="flex gap-5 text-xs">
            <Link href="/impressum/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t('Datenschutz', 'Privacy')}
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function LegalChrome({
  children,
  current,
}: {
  children: React.ReactNode
  current: 'impressum' | 'datenschutz'
}) {
  return (
    <LanguageProvider>
      <LegalChromeInner current={current}>{children}</LegalChromeInner>
    </LanguageProvider>
  )
}
