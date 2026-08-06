'use client'

import { Building2, Store, Handshake } from 'lucide-react'
import { Reveal } from './reveal'
import { useInquiry, type PropertyType } from './inquiry-context'
import { useLang } from './language-context'

const paths: {
  type: PropertyType
  icon: typeof Building2
  titleDe: string
  titleEn: string
  bodyDe: string
  bodyEn: string
  ctaDe: string
  ctaEn: string
}[] = [
  {
    type: 'mfh',
    icon: Building2,
    titleDe: 'Mehrfamilienhaus',
    titleEn: 'Apartment building',
    bodyDe:
      'Sie möchten die laufende Verwaltung abgeben: Mieterkommunikation, Unterhalt und Organisation aus einer Hand.',
    bodyEn:
      'You want to hand over day-to-day management: tenant communication, maintenance and organisation in one place.',
    ctaDe: 'Anfrage für MFH',
    ctaEn: 'Enquire for building',
  },
  {
    type: 'gewerbe',
    icon: Store,
    titleDe: 'Gewerbeflächen & Retailflächen',
    titleEn: 'Commercial & retail space',
    bodyDe:
      'Geschäfts- oder Ladenflächen, die eine klare, verlässliche Verwaltung brauchen, ohne unnötige Komplexität.',
    bodyEn:
      'Commercial or retail space that needs clear, reliable management, without unnecessary complexity.',
    ctaDe: 'Anfrage für Gewerbe',
    ctaEn: 'Enquire for commercial',
  },
  {
    type: 'portfolio',
    icon: Handshake,
    titleDe: 'Persönliche Eigentümerbetreuung',
    titleEn: 'Personal owner support',
    bodyDe:
      'Ein oder mehrere Objekte, kurze Wege und ein Ansprechpartner, der Ihre Situation kennt.',
    bodyEn:
      'One or several properties, short paths and one contact who knows your situation.',
    ctaDe: 'Persönlich anfragen',
    ctaEn: 'Enquire personally',
  },
]

export function Eigentuemer() {
  const { lang, t } = useLang()
  const { startInquiry } = useInquiry()

  return (
    <section
      id="eigentuemer"
      className="py-28 md:py-40 border-b border-rule"
      aria-labelledby="eigentuemer-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <p className="section-eyebrow mb-4">
            {t('Für Eigentümer', 'For owners')}
          </p>
          <h2
            id="eigentuemer-heading"
            className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance"
          >
            {t(
              'Welche Situation trifft auf Sie zu?',
              'Which situation fits you?'
            )}
          </h2>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-prose">
            {t(
              'Wählen Sie Ihre Ausgangslage. Wir führen Sie direkt zur passenden Anfrage.',
              'Choose your starting point. We take you straight to the right enquiry.'
            )}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {paths.map((path, i) => {
            const Icon = path.icon
            return (
              <Reveal key={path.type} delayMs={i * 90}>
                <article className="h-full flex flex-col">
                  <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-surface text-primary border border-rule/70">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3 tracking-tight">
                    {lang === 'de' ? path.titleDe : path.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted text-pretty flex-1 mb-8">
                    {lang === 'de' ? path.bodyDe : path.bodyEn}
                  </p>
                  <button
                    type="button"
                    onClick={() => startInquiry(path.type)}
                    className="self-start text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {lang === 'de' ? path.ctaDe : path.ctaEn}
                  </button>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
