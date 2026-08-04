'use client'

import { Reveal } from './reveal'
import { useInquiry } from './inquiry-context'
import { useLang } from './language-context'

const steps = [
  {
    titleDe: 'Erstgespräch',
    titleEn: 'Initial conversation',
    bodyDe:
      'Wir besprechen Ihre Liegenschaft, Ihre Erwartungen und was heute nicht funktioniert — unverbindlich und ohne Druck.',
    bodyEn:
      'We discuss your property, your expectations and what is not working today — no obligation, no pressure.',
  },
  {
    titleDe: 'Individuelle Offerte',
    titleEn: 'Tailored proposal',
    bodyDe:
      'Sie erhalten ein transparentes Angebot zum vereinbarten Leistungsumfang — nachvollziehbar und auf Ihre Situation abgestimmt.',
    bodyEn:
      'You receive a transparent offer for the agreed scope — clear and tailored to your situation.',
  },
  {
    titleDe: 'Übernahme',
    titleEn: 'Handover',
    bodyDe:
      'Nach der Beauftragung übernehmen wir Unterlagen, Abläufe und die vereinbarten Verwaltungsaufgaben — ruhig und strukturiert.',
    bodyEn:
      'Once commissioned we take over documents, processes and the agreed management tasks — calmly and in a structured way.',
  },
  {
    titleDe: 'Laufende Betreuung',
    titleEn: 'Ongoing support',
    bodyDe:
      'Wir bleiben Ihr Ansprechpartner im Alltag: Mieter, Unterhalt, Organisation — damit Sie nicht nachfragen müssen.',
    bodyEn:
      'We remain your contact in day-to-day operations: tenants, maintenance, organisation — so you do not have to chase.',
  },
]

export function Ablauf() {
  const { lang, t } = useLang()
  const { startInquiry } = useInquiry()

  return (
    <section id="ablauf" className="bg-surface py-24 md:py-32" aria-labelledby="ablauf-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14 max-w-xl">
          <p className="section-eyebrow mb-4">
            {t('Ablauf', 'Process')}
          </p>
          <h2
            id="ablauf-heading"
            className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance"
          >
            {t(
              'Vier klare Schritte bis zur laufenden Verwaltung.',
              'Four clear steps to ongoing management.'
            )}
          </h2>
          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            {t(
              'Von der ersten Anfrage bis zum Alltag — ohne Formular-Pingpong.',
              'From the first enquiry to day-to-day operations — without form ping-pong.'
            )}
          </p>
        </Reveal>

        <ol className="grid md:grid-cols-4 gap-px bg-rule mb-12" role="list">
          {steps.map((step, i) => (
            <Reveal key={step.titleDe} delayMs={i * 80} as="li" className="bg-surface">
              <div className="relative p-8 flex flex-col gap-4 h-full">
                <span
                  className="font-mono text-5xl font-bold leading-none text-primary/15 select-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-lg text-foreground mb-2 tracking-tight text-balance">
                    {lang === 'de' ? step.titleDe : step.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted text-pretty">
                    {lang === 'de' ? step.bodyDe : step.bodyEn}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <button
            type="button"
            onClick={() => startInquiry()}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('Erstgespräch anfragen', 'Request an initial conversation')}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
