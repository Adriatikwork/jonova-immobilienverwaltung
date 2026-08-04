'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const outcomes = [
  {
    number: '01',
    titleDe: 'Erreichbarkeit statt Hotline',
    titleEn: 'Reachable — not a hotline',
    bodyDe:
      'Ein direkter Ansprechpartner begleitet Sie — ohne anonymes Callcenter. Erreichbarkeit ist für Eigentümer der häufigste Grund zu wechseln.',
    bodyEn:
      'A direct contact accompanies you — no anonymous call centre. Reachability is the most common reason owners switch.',
  },
  {
    number: '02',
    titleDe: 'Abrechnungen ohne Rätselraten',
    titleEn: 'Accounts without guesswork',
    bodyDe:
      'Klare Abläufe und nachvollziehbare Kommunikation zu Mieten, Kosten und Vorgängen — damit Sie nicht hinterherlaufen müssen.',
    bodyEn:
      'Clear processes and understandable communication on rents, costs and cases — so you do not have to chase updates.',
  },
  {
    number: '03',
    titleDe: 'Alltag aus einer Hand',
    titleEn: 'Day-to-day from one desk',
    bodyDe:
      'Mieteranliegen, Handwerkerkoordination und organisatorische Verwaltung — strukturiert, digital und lösungsorientiert.',
    bodyEn:
      'Tenant requests, trades coordination and organisational management — structured, digital and solution-oriented.',
  },
  {
    number: '04',
    titleDe: 'Werterhalt im Blick',
    titleEn: 'Value preservation in focus',
    bodyDe:
      'Unterhalt und Vermietung mit dem Ziel, Ihre Liegenschaft langfristig sorgfältig zu betreuen — nicht nur Probleme abzuarbeiten.',
    bodyEn:
      'Maintenance and letting with the aim of carefully looking after your property long-term — not only fixing problems.',
  },
]

export function WarumJonova() {
  const { lang, t } = useLang()

  return (
    <section
      id="warum"
      className="bg-surface py-24 md:py-32"
      aria-labelledby="warum-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <Reveal className="mb-12 max-w-xl">
              <p className="section-eyebrow mb-4">
                {t('Warum Eigentümer wechseln', 'Why owners switch')}
              </p>
              <h2
                id="warum-heading"
                className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance"
              >
                {t(
                  'Was Eigentümer wirklich erwarten.',
                  'What owners actually expect.'
                )}
              </h2>
            </Reveal>

            <div className="flex flex-col divide-y divide-rule/80">
              {outcomes.map((a, i) => (
                <Reveal key={a.number} delayMs={i * 70}>
                  <article className="group py-7 first:pt-0 last:pb-0 grid grid-cols-[2.5rem_1fr] gap-5 items-start">
                    <span className="font-mono text-xs font-medium text-primary/70 mt-1.5 tabular-nums">
                      {a.number}
                    </span>
                    <div>
                      <h3 className="font-sans font-semibold text-lg md:text-xl text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-200">
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
              <Image
                src={assetPath('/images/about-exterior.png')}
                alt={t(
                  'Gepflegte Fassade einer Mietliegenschaft in der Schweiz',
                  'Well-maintained facade of a rental property in Switzerland'
                )}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-6 bg-[linear-gradient(to_top,rgba(18,28,24,0.72),transparent)]"
                aria-hidden="true"
              >
                <p className="text-sm text-hero-foreground/90 leading-snug max-w-[18rem]">
                  {t(
                    'Persönliche Betreuung. Klare Prozesse. Schweizer Qualitätsanspruch.',
                    'Personal support. Clear processes. Swiss standard of care.'
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
