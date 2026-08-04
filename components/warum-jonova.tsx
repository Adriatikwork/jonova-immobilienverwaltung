'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { useLang } from './language-context'

const advantages = [
  {
    number: '01',
    titleDe: 'Persönliche Betreuung',
    titleEn: 'Personal support',
    bodyDe: 'Ein direkter Ansprechpartner begleitet Sie zuverlässig und persönlich.',
    bodyEn: 'A dedicated contact accompanies you reliably and personally.',
  },
  {
    number: '02',
    titleDe: 'Transparente Kommunikation',
    titleEn: 'Transparent communication',
    bodyDe: 'Klare Abläufe und offene Kommunikation schaffen Vertrauen.',
    bodyEn: 'Clear processes and open communication build trust.',
  },
  {
    number: '03',
    titleDe: 'Effiziente Prozesse',
    titleEn: 'Efficient processes',
    bodyDe: 'Wir arbeiten strukturiert, digital und lösungsorientiert.',
    bodyEn: 'We work in a structured, digital, and solution-oriented way.',
  },
  {
    number: '04',
    titleDe: 'Nachhaltige Werterhaltung',
    titleEn: 'Sustainable value preservation',
    bodyDe:
      'Unser Ziel ist der langfristige Erhalt und die sorgfältige Betreuung Ihrer Immobilie.',
    bodyEn:
      'Our goal is the long-term preservation and careful management of your property.',
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
        <div className="mb-14 max-w-2xl">
          <h2
            id="warum-heading"
            className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance"
          >
            {t('Warum JONOVA?', 'Why JONOVA?')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col divide-y divide-rule">
            {advantages.map((a) => (
              <article
                key={a.number}
                className="group py-7 first:pt-0 last:pb-0 grid grid-cols-[2rem_1fr] gap-6 items-start"
              >
                <span className="font-mono text-xs font-medium text-ink-muted mt-1 tabular-nums">
                  {a.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {lang === 'de' ? a.titleDe : a.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted text-pretty">
                    {lang === 'de' ? a.bodyDe : a.bodyEn}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative min-h-[320px] lg:min-h-full rounded-sm overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  )
}
