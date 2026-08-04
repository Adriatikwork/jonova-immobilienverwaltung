import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME_SHORT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <div className="flex items-baseline gap-2 mb-10">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-sm bg-primary text-primary-foreground font-serif font-bold text-base select-none"
          aria-hidden="true"
        >
          J
        </span>
        <span className="font-sans font-semibold text-sm tracking-wide text-foreground">
          {SITE_NAME_SHORT}
        </span>
      </div>
      <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-4">404</p>
      <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-ink-muted mb-8 max-w-md text-sm leading-relaxed">
        Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite
        zurück.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          Zur Startseite
        </Link>
        <Link
          href="/#kontakt"
          className="inline-flex items-center justify-center px-7 py-3.5 border border-rule text-foreground text-sm font-medium rounded-sm hover:border-primary hover:text-primary transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </main>
  )
}
