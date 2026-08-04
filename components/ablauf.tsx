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
      'Wir stehen Ihnen als zuverlässiger Ansprechpartner zur Seite und kümmern uns um die professionelle Verwaltung Ihrer Immobilie.',
    bodyEn:
      'We remain your reliable contact and take care of the professional management of your property.',
  },
]

export function Ablauf() {
  const { lang, t } = useLang()

  return (
    <section id="ablauf" className="bg-surface py-24 md:py-32" aria-labelledby="ablauf-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
            {t('So funktioniert es', 'How it works')}
          </p>
          <h2
            id="ablauf-heading"
            className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance"
          >
            {t('Unser Ablauf', 'Our process')}
          </h2>
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
              {i < steps.length - 1 && (
                <span
                  className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-rule text-lg z-10 select-none"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('Unverbindliche Anfrage', 'Free enquiry')}
          </a>
        </div>
      </div>
    </section>
  )
}
