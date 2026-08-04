'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { Reveal } from './reveal'
import { useLang } from './language-context'

export function UeberUns() {
  const { t } = useLang()

  return (
    <section id="ueber-uns" className="py-24 md:py-32 overflow-hidden" aria-labelledby="ueber-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1 sm:row-span-2 sm:min-h-[380px]">
                <Image
                  src={assetPath('/images/about-handshake.png')}
                  alt={t(
                    'Persönliches Gespräch mit einem Eigentümer',
                    'Personal meeting with a property owner'
                  )}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square hidden sm:block">
                <Image
                  src={assetPath('/images/about-interior.png')}
                  alt={t(
                    'Helle Wohnung bereit zur Vermietung',
                    'Bright apartment ready to rent'
                  )}
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square col-span-2 sm:col-span-1">
                <Image
                  src={assetPath('/images/hero-building.png')}
                  alt={t(
                    'Mehrfamilienhaus unter professioneller Verwaltung',
                    'Apartment building under professional management'
                  )}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="section-eyebrow mb-4">
              {t('Über uns', 'About us')}
            </p>
            <h2
              id="ueber-heading"
              className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground leading-[1.15] text-balance mb-8"
            >
              {t(
                'Kurz entschieden. Persönlich betreut.',
                'Short decisions. Personal care.'
              )}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted text-pretty max-w-prose">
              <p>
                {t(
                  'JONOVA Immobilienverwaltung betreut Mietliegenschaften in der Schweiz mit Fokus auf persönliche Erreichbarkeit und nachvollziehbare Abläufe, ohne unnötige Bürokratie.',
                  'JONOVA Immobilienverwaltung manages rental properties in Switzerland with a focus on personal reachability and clear processes, without unnecessary bureaucracy.'
                )}
              </p>
              <p>
                {t(
                  'Wir setzen auf kurze Entscheidungswege und die individuelle Betrachtung jeder Liegenschaft. Unser Anspruch: Eigentümer entlasten und den langfristigen Werterhalt sicherstellen.',
                  'We rely on short decision paths and treat every property individually. Our aim: relieve owners and protect long-term value.'
                )}
              </p>
              <p className="text-foreground font-medium">
                {t(
                  'Sie sprechen mit Menschen, die Verantwortung übernehmen, nicht mit einer Warteschleife.',
                  'You speak with people who take responsibility, not a hold queue.'
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
