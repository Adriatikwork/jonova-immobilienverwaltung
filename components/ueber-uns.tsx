'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { useLang } from './language-context'

export function UeberUns() {
  const { t } = useLang()

  const stats = [
    { value: '100%', labelDe: 'Eigentümerfokus', labelEn: 'Owner focus' },
    { value: t('Direkt', 'Direct'), labelDe: 'Ein Ansprechpartner', labelEn: 'Single point of contact' },
    { value: 'Swiss', labelDe: 'Lokale Expertise', labelEn: 'Local expertise' },
  ]

  return (
    <section id="ueber-uns" className="py-24 md:py-32 overflow-hidden" aria-labelledby="ueber-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
            {t('Über JONOVA', 'About JONOVA')}
          </p>
          <h2
            id="ueber-heading"
            className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance"
          >
            {t(
              'Professionelle Verwaltung — persönlich umgesetzt.',
              'Professional management — delivered personally.'
            )}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="grid grid-cols-2 gap-3 h-full">
            <div className="relative rounded-sm overflow-hidden row-span-2 min-h-[420px]">
              <Image
                src={assetPath('/images/about-handshake.png')}
                alt={t(
                  'JONOVA im Gespräch mit einem Eigentümer',
                  'JONOVA meeting with a property owner'
                )}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-square">
              <Image
                src={assetPath('/images/about-exterior.png')}
                alt={t(
                  'Gepflegte Fassade eines Schweizer Mehrfamilienhauses',
                  'Well-maintained Swiss apartment building facade'
                )}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden aspect-square">
              <Image
                src={assetPath('/images/about-interior.png')}
                alt={t(
                  'Helle Wohnung bereit zur Vermietung',
                  'Bright apartment ready to rent'
                )}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pt-2">
            <div className="space-y-5 text-base leading-relaxed text-ink-muted text-pretty max-w-prose mb-10">
              <p>
                {t(
                  'JONOVA Immobilienverwaltung ist ein modernes Unternehmen mit Fokus auf die professionelle Verwaltung von Mietliegenschaften in der Schweiz.',
                  'JONOVA Immobilienverwaltung is a modern company focused on the professional management of rental properties in Switzerland.'
                )}
              </p>
              <p>
                {t(
                  'Wir setzen auf persönliche Zusammenarbeit, kurze Entscheidungswege und eine zuverlässige Betreuung. Jede Immobilie wird individuell betrachtet und mit der nötigen Sorgfalt verwaltet.',
                  'We rely on personal collaboration, short decision paths, and reliable support. Every property is treated individually and managed with the necessary care.'
                )}
              </p>
              <p>
                {t(
                  'Unser Anspruch ist es, Eigentümer zu entlasten und den langfristigen Werterhalt ihrer Immobilien sicherzustellen.',
                  'Our aim is to relieve owners and ensure the long-term value preservation of their properties.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-0 border border-rule rounded-sm overflow-hidden mb-10">
              {stats.map((s, i) => (
                <div
                  key={s.labelEn}
                  className={`px-5 py-6 flex flex-col gap-1 bg-surface ${i < stats.length - 1 ? 'border-r border-rule' : ''}`}
                >
                  <span className="font-serif text-2xl md:text-3xl text-foreground leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-ink-muted tracking-wide leading-snug">
                    {t(s.labelDe, s.labelEn)}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:underline"
            >
              {t('Jetzt Kontakt aufnehmen', 'Get in touch')}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
