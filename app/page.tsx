/*
 * JONOVA Immobilienverwaltung — Landing Page
 *
 * Design decisions (from v0, preserved):
 * 1. Forest green (#2E5946) brand primary on warm white — Swiss local, not SaaS blue.
 * 2. Playfair Display + Instrument Sans — authoritative yet personal.
 * 3. Asymmetric hero split — text left, image right; no overlay badges.
 * 4. Leistungen as accordion — lean discovery without overwhelm.
 * 5. Three intentional motions only — fade-up, nav scroll, icon hover.
 *
 * Engineering additions:
 * - DE | EN language toggle (German = client source of truth)
 * - Static export + GitHub Pages basePath-safe asset paths
 */

import { LanguageProvider } from '@/components/language-context'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Leistungen } from '@/components/leistungen'
import { WarumJonova } from '@/components/warum-jonova'
import { UeberUns } from '@/components/ueber-uns'
import { Ablauf } from '@/components/ablauf'
import { Kontakt } from '@/components/kontakt'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Leistungen />
        <WarumJonova />
        <UeberUns />
        <Ablauf />
        <Kontakt />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
