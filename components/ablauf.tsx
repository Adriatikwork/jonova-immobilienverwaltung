'use client'

import { useLang } from './language-context'

const steps = [
  {
    titleDe: 'Erstgespräch',
    titleEn: 'Initial conversation',
    bodyDe: 'Wir besprechen Ihre Liegenschaft und Ihre Erwartungen.',
    bodyEn: 'We discuss your property and your expectations.',
  },
  {
    titleDe: 'Individuelle Offerte',
    titleEn: 'Tailored proposal',
    bodyDe: 'Sie erhalten ein transparentes Angebot, das auf Ihre Bedürfnisse abgestimmt ist.',
    bodyEn: 'You receive a transparent offer tailored to your needs.',
  },
  {
    titleDe: 'Übernahme der Verwaltung',
    titleEn: 'Handover of management',
    bodyDe: 'Nach der Beauftragung übernehmen wir die vereinbarten Verwaltungsaufgaben.',
    bodyEn: 'Once commissioned, we take over the agreed management tasks.',
  },
  {
    titleDe: 'Laufende Betreuung',
    titleEn: 'Ongoing support',
    bodyDe:
      'Wir bleiben Ihr Ansprechpartner und führen die vereinbarte Verwaltung im Alltag.',
    bodyEn:
      'We remain your contact and carry out the agreed management in day-to-day operations.',
  },
]

export function Ablauf() {
  const { lang, t } = useLang()

  return (
    <section id="ablauf" className="bg-surface py-24 md:py-32" aria-labelledby="ablauf-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-xl">
          <h2
            id="ablauf-heading"
            className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance"
          >
            {t('Unser Ablauf', 'Our process')}
          </h2>
          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            {t(
              'Vier klare Schritte von der ersten Anfrage bis zur laufenden Verwaltung.',
              'Four clear steps from the first enquiry to ongoing management.'
            )}
          </p>
        </div>

        <ol className="grid md:grid-cols-4 gap-px bg-rule" role="list">
          {steps.map((step, i) => (
            <li key={step.titleDe} className="relative bg-surface p-8 flex flex-col gap-4">
              <span
                className="font-mono text-5xl font-bold leading-none text-primary/15 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2 text-balance">
                  {lang === 'de' ? step.titleDe : step.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted text-pretty">
                  {lang === 'de' ? step.bodyDe : step.bodyEn}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
