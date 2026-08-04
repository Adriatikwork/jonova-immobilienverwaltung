'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const faqs = [
  {
    qDe: 'Was kostet die Verwaltung?',
    qEn: 'What does management cost?',
    aDe:
      'Das Honorar hängt von Art, Grösse und Zustand der Liegenschaft ab. Nach dem Erstgespräch erhalten Sie eine individuelle, transparente Offerte — ohne versteckte Zuschläge im Kleingedruckten.',
    aEn:
      'Fees depend on the type, size and condition of the property. After the initial conversation you receive a tailored, transparent proposal — without hidden surcharges in the fine print.',
  },
  {
    qDe: 'Wie schnell melden Sie sich?',
    qEn: 'How quickly do you reply?',
    aDe:
      'Auf Anfragen reagieren wir zügig und persönlich. Unser Anspruch: Sie müssen nicht hinterhertelefonieren, um zu wissen, wo Ihre Sache steht.',
    aEn:
      'We reply promptly and personally. Our standard: you should not have to chase us to know where your matter stands.',
  },
  {
    qDe: 'Wie läuft der Wechsel zur JONOVA?',
    qEn: 'How does switching to JONOVA work?',
    aDe:
      'Erstgespräch, Offerte, Beauftragung, Übernahme der Unterlagen und laufende Betreuung. Wir koordinieren die Übergabe so, dass der Alltag der Liegenschaft ruhig weiterläuft.',
    aEn:
      'Initial conversation, proposal, mandate, handover of documents and ongoing management. We coordinate the transition so day-to-day operations continue calmly.',
  },
  {
    qDe: 'Für wen ist JONOVA geeignet?',
    qEn: 'Who is JONOVA for?',
    aDe:
      'Für Eigentümer von Mietliegenschaften in der Schweiz — vom Mehrfamilienhaus über einzelne Wohnungen bis zu einem kleineren Portfolio. Wenn Sie persönliche Betreuung statt anonymer Hotline suchen, sind Sie richtig.',
    aEn:
      'For owners of rental properties in Switzerland — from apartment buildings and single flats to a smaller portfolio. If you want personal support instead of an anonymous hotline, you are in the right place.',
  },
  {
    qDe: 'Was ist in der Verwaltung enthalten?',
    qEn: 'What does management include?',
    aDe:
      'Kaufmännische und organisatorische Verwaltung, Mieterkommunikation, Koordination von Unterhalt und Instandhaltung sowie Vermietung — jeweils im vereinbarten Umfang. Details klären wir in der Offerte.',
    aEn:
      'Commercial and organisational management, tenant communication, coordination of maintenance and upkeep, plus letting — within the agreed scope. Details are set out in the proposal.',
  },
]

export function Faq() {
  const { lang, t } = useLang()
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-surface py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          <Reveal>
            <p className="section-eyebrow mb-4">FAQ</p>
            <h2
              id="faq-heading"
              className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground leading-[1.15] text-balance mb-4"
            >
              {t(
                'Fragen, die Eigentümer wirklich stellen.',
                'Questions owners actually ask.'
              )}
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted max-w-sm">
              {t(
                'Kosten, Wechsel und Erreichbarkeit entscheiden — nicht Werbeslogans.',
                'Cost, switching and reachability decide — not slogans.'
              )}
            </p>
          </Reveal>

          <div className="border-t border-rule">
            {faqs.map((faq, i) => {
              const open = openId === i
              return (
                <Reveal key={faq.qDe} delayMs={i * 40}>
                  <div className="border-b border-rule">
                    <button
                      type="button"
                      className="group w-full flex items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : i)}
                    >
                      <span className="font-sans font-medium text-base md:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {lang === 'de' ? faq.qDe : faq.qEn}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 mt-1 text-ink-muted transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {open && (
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-muted text-pretty max-w-2xl">
                        {lang === 'de' ? faq.aDe : faq.aEn}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
