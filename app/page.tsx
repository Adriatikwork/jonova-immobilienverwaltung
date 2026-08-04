/*
 * JONOVA Immobilienverwaltung, Landing Page
 *
 * Redesign direction (2026):
 * - Specific owner promise over adjectives (reachability, clear accounts)
 * - Full-bleed place-first hero; JONOVA as hero-level brand signal
 * - Owner-path CTAs → prefilled enquiry (ClearLead / Resonus pattern)
 * - FAQ addressing forum pain points (Erreichbarkeit, Kosten, Wechsel)
 * - Quiet motion only (hero rise, scroll reveal, soft ken-burns, grain)
 */

import { LanguageProvider } from '@/components/language-context'
import { InquiryProvider } from '@/components/inquiry-context'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Eigentuemer } from '@/components/eigentuemer'
import { Leistungen } from '@/components/leistungen'
import { WarumJonova } from '@/components/warum-jonova'
import { UeberUns } from '@/components/ueber-uns'
import { Ablauf } from '@/components/ablauf'
import { Faq } from '@/components/faq'
import { Kontakt } from '@/components/kontakt'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <LanguageProvider>
      <InquiryProvider>
        <Nav />
        <main>
          <Hero />
          <Eigentuemer />
          <WarumJonova />
          <Leistungen />
          <Ablauf />
          <UeberUns />
          <Faq />
          <Kontakt />
        </main>
        <Footer />
      </InquiryProvider>
    </LanguageProvider>
  )
}
