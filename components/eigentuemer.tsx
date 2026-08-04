'use client'

import { Building2, Home, Layers } from 'lucide-react'
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
      'Sie wollen die laufende Verwaltung abgeben — Mieterkommunikation, Unterhalt und Organisation aus einer Hand.',
    bodyEn:
      'You want to hand over day-to-day management — tenant communication, maintenance and organisation in one place.',
    ctaDe: 'Anfrage für MFH',
    ctaEn: 'Enquire for building',
  },
  {
    type: 'einzeln',
    icon: Home,
    titleDe: 'Wohnung vermieten',
    titleEn: 'Letting a flat',
    bodyDe:
      'Sie vermieten nebenher oder haben eine einzelne Einheit — und brauchen Entlastung ohne Unternehmenskomplexität.',
    bodyEn:
      'You let on the side or own a single unit — and want relief without corporate complexity.',
    ctaDe: 'Anfrage für Wohnung',
    ctaEn: 'Enquire for flat',
  },
  {
    type: 'portfolio',
    icon: Layers,
    titleDe: 'Kleines Portfolio',
    titleEn: 'Small portfolio',
    bodyDe:
      'Mehrere Objekte, kurze Wege und ein Ansprechpartner der den Überblick behält — ohne anonyme Hotline.',
    bodyEn:
      'Several properties, short paths and one contact who keeps the overview — no anonymous hotline.',
    ctaDe: 'Anfrage für Portfolio',
    ctaEn: 'Enquire for portfolio',
  },
]

export function Eigentuemer() {
  const { lang, t } = useLang()
  const { startInquiry } = useInquiry()

  return (
    <section
      id="eigentuemer"
      className="py-24 md:py-32 border-b border-rule"
      aria-labelledby="eigentuemer-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14 max-w-2xl">
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
          <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-prose">
            {t(
              'Wählen Sie Ihre Ausgangslage — wir führen Sie direkt zur passenden Anfrage.',
              'Choose your starting point — we take you straight to the right enquiry.'
            )}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-rule">
          {paths.map((path, i) => {
            const Icon = path.icon
            return (
              <Reveal key={path.type} delayMs={i * 90} className="bg-background">
                <article className="h-full flex flex-col p-8 md:p-9">
                  <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-surface text-primary">
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
