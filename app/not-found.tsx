import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/asset-path'
import { SITE_NAME_SHORT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      <div className="flex items-center gap-2.5 mb-10">
        <img
          src={assetPath('/images/logo.jpeg')}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 object-contain rounded-sm bg-white shadow-sm ring-1 ring-black/5"
          aria-hidden="true"
        />
        <span className="font-sans font-semibold text-sm tracking-[0.14em] uppercase text-foreground">
          {SITE_NAME_SHORT}
        </span>
      </div>
      <p className="section-eyebrow mb-4 justify-items-center">404</p>
      <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-ink-muted mb-8 max-w-md text-sm leading-relaxed">
        Die angeforderte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite
        zurück.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-quiet">
          Zur Startseite
        </Link>
        <Link
          href="/#kontakt"
          className="inline-flex items-center justify-center px-7 py-3.5 border border-rule text-foreground text-sm font-medium rounded-sm hover:border-gold transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </main>
  )
}
