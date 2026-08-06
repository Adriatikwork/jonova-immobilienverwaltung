/*
 * JONOVA Immobilienverwaltung — Landing Page
 *
 * Direction: modern, personal Verwaltung (Livit/Wincasa-light).
 * Navy / white / restrained gold. Focus Zürich & Umgebung.
 * No investment/development claims, no inflated stats or seniority claims.
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
