import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-4">404</p>
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-ink-muted mb-8 max-w-md">
        Die angeforderte Seite existiert nicht. Kehren Sie zur Startseite zurück.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
      >
        Zur Startseite
      </Link>
    </main>
  )
}
