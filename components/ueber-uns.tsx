'use client'

import { optimizedFallback, optimizedSrcSet } from '@/lib/asset-path'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const THUMB_WIDTHS = [480, 800, 1024]

export function UeberUns() {
  const { t } = useLang()

  return (
    <section id="ueber-uns" className="py-24 md:py-32 overflow-hidden" aria-labelledby="ueber-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1 sm:row-span-2 sm:min-h-[380px]">
                <img
                  src={optimizedFallback('about-handshake', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('about-handshake', THUMB_WIDTHS)}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  alt={t(
                    'Persönliches Gespräch mit einem Eigentümer',
                    'Personal meeting with a property owner'
                  )}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square hidden sm:block">
                <img
                  src={optimizedFallback('about-interior', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('about-interior', THUMB_WIDTHS)}
                  sizes="25vw"
                  alt={t(
                    'Helle Wohnung bereit zur Vermietung',
                    'Bright apartment ready to rent'
                  )}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square col-span-2 sm:col-span-1">
                <img
                  src={optimizedFallback('hero-building', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('hero-building', THUMB_WIDTHS)}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  alt={t(
                    'Mehrfamilienhaus unter professioneller Verwaltung',
                    'Apartment building under professional management'
                  )}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
