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
    <section className="bg-surface py-24 md:py-32" aria-labelledby="warum-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
              {t('Ihr Vorteil', 'Your advantage')}
            </p>
            <h2
              id="warum-heading"
              className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance"
            >
              {t('Warum JONOVA?', 'Why JONOVA?')}
            </h2>
          </div>
          <p className="text-base text-ink-muted leading-relaxed max-w-xs md:text-right text-pretty">
            {t(
              'Persönliche Verwaltung, die Eigentümer entlastet — zuverlässig und ohne Überraschungen.',
              'Personal property management that relieves owners — reliably and without surprises.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div className="flex flex-col divide-y divide-rule">
            {advantages.map((a) => (
              <article
                key={a.number}
                className="group py-8 first:pt-0 last:pb-0 grid grid-cols-[2rem_1fr] gap-6 items-start"
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

          <div className="relative lg:sticky lg:top-28 flex flex-col gap-4">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] w-full">
              <Image
                src={assetPath('/images/hero-building.png')}
                alt={t(
                  'Von JONOVA betreute Mietliegenschaft in der Schweiz',
                  'Rental property managed by JONOVA in Switzerland'
                )}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <p className="font-serif text-xl md:text-2xl text-white leading-snug text-balance italic">
                  {t(
                    '«Wir betreuen Ihre Immobilie mit Sorgfalt und Verantwortung.»',
                    '“We manage your property with care and responsibility.”'
                  )}
                </p>
                <p className="mt-2 text-xs font-medium tracking-widest uppercase text-white/70">
                  JONOVA Immobilienverwaltung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
