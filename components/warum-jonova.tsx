'use client'

import { optimizedFallback, optimizedSrcSet } from '@/lib/asset-path'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const EXTERIOR_WIDTHS = [480, 800, 1024]

const outcomes = [
  {
    number: '01',
    titleDe: 'Erreichbarkeit statt Hotline',
    titleEn: 'Reachable, not a hotline',
    bodyDe:
      'Ein direkter Ansprechpartner begleitet Sie, ohne anonymes Callcenter. Persönlich, klar und verbindlich.',
    bodyEn:
      'A direct contact accompanies you, not an anonymous call centre. Personal, clear and reliable.',
  },
  {
    number: '02',
    titleDe: 'Abrechnungen ohne Rätselraten',
    titleEn: 'Accounts without guesswork',
    bodyDe:
      'Klare Abläufe und nachvollziehbare Kommunikation zu Mieten, Kosten und Vorgängen.',
    bodyEn:
      'Clear processes and understandable communication on rents, costs and cases.',
  },
  {
    number: '03',
    titleDe: 'Alltag aus einer Hand',
    titleEn: 'Day-to-day from one desk',
    bodyDe:
      'Mieteranliegen, Handwerkerkoordination und organisatorische Verwaltung: strukturiert und lösungsorientiert.',
    bodyEn:
      'Tenant requests, trades coordination and organisational management: structured and solution-oriented.',
  },
  {
    number: '04',
    titleDe: 'Sorgfältige Betreuung',
    titleEn: 'Careful stewardship',
    bodyDe:
      'Unterhalt und Vermietung mit dem Ziel, Ihre Liegenschaft zuverlässig und langfristig zu betreuen.',
    bodyEn:
      'Maintenance and letting with the aim of looking after your property reliably and for the long term.',
  },
]

export function WarumJonova() {
  const { lang, t } = useLang()

  return (
    <section
      id="warum"
      className="bg-surface py-28 md:py-40"
      aria-labelledby="warum-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
          <div>
            <Reveal className="mb-14 max-w-xl">
              <p className="section-eyebrow mb-4">
                {t('Warum JONOVA', 'Why JONOVA')}
              </p>
              <h2
                id="warum-heading"
                className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance"
              >
                {t(
                  'Modern, seriös und persönlich.',
                  'Modern, serious and personal.'
                )}
              </h2>
            </Reveal>

            <div className="flex flex-col divide-y divide-rule/80">
              {outcomes.map((a, i) => (
                <Reveal key={a.number} delayMs={i * 70}>
                  <article className="group py-8 first:pt-0 last:pb-0 grid grid-cols-[2.5rem_1fr] gap-5 items-start">
                    <span className="font-mono text-xs font-medium text-gold mt-1.5 tabular-nums">
                      {a.number}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-lg md:text-xl text-foreground mb-2 tracking-tight">
                        {lang === 'de' ? a.titleDe : a.titleEn}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-muted text-pretty max-w-prose">
                        {lang === 'de' ? a.bodyDe : a.bodyEn}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={120} className="relative min-h-[360px] lg:min-h-[560px] lg:sticky lg:top-24">
            <div className="absolute inset-0 overflow-hidden rounded-sm">
              <img
                src={optimizedFallback('hero-building', EXTERIOR_WIDTHS)}
                srcSet={optimizedSrcSet('hero-building', EXTERIOR_WIDTHS)}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt={t(
                  'Modernes Mehrfamilienhaus unter professioneller Verwaltung',
                  'Modern apartment building under professional management'
                )}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-6 bg-[linear-gradient(to_top,rgba(18,36,58,0.72),transparent)]"
                aria-hidden="true"
              >
                <p className="text-sm text-hero-foreground/90 leading-snug max-w-[18rem]">
                  {t(
                    'Persönliche Betreuung. Klare Prozesse. Fokus Zürich und Umgebung.',
                    'Personal support. Clear processes. Focus on Zurich and the region.'
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
