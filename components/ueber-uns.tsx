'use client'

import { optimizedFallback, optimizedSrcSet } from '@/lib/asset-path'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const THUMB_WIDTHS = [480, 800, 1024]

export function UeberUns() {
  const { t } = useLang()

  return (
    <section
      id="ueber-uns"
      className="py-28 md:py-40 overflow-hidden"
      aria-labelledby="ueber-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1 sm:row-span-2 sm:min-h-[380px]">
                <img
                  src={optimizedFallback('about-exterior', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('about-exterior', THUMB_WIDTHS)}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  alt={t(
                    'Moderne Wohnanlage in Zürich und Umgebung',
                    'Modern residential complex in Zurich and the region'
                  )}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square hidden sm:block">
                <img
                  src={optimizedFallback('about-commercial', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('about-commercial', THUMB_WIDTHS)}
                  sizes="25vw"
                  alt={t(
                    'Modernes Geschäftsobjekt für Gewerbe- und Retailflächen',
                    'Modern commercial building for business and retail space'
                  )}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative overflow-hidden aspect-square col-span-2 sm:col-span-1">
                <img
                  src={optimizedFallback('about-interior', THUMB_WIDTHS)}
                  srcSet={optimizedSrcSet('about-interior', THUMB_WIDTHS)}
                  sizes="(max-width: 640px) 100vw, 25vw"
                  alt={t(
                    'Gepflegte Mietwohnung mit Blick auf Mehrfamilienhäuser',
                    'Well-kept rental apartment overlooking apartment buildings'
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
                'Eine moderne Verwaltung mit persönlichem Anspruch.',
                'A modern management firm with a personal standard.'
              )}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted text-pretty max-w-prose">
              <p>
                {t(
                  'JONOVA Immobilienverwaltung betreut Mietliegenschaften sowie Gewerbe- und Retailflächen mit Fokus auf Zürich und Umgebung, persönlich erreichbar und mit klaren Abläufen.',
                  'JONOVA Immobilienverwaltung manages rental properties as well as commercial and retail space with a focus on Zurich and the surrounding region, personally reachable and with clear processes.'
                )}
              </p>
              <p>
                {t(
                  'Als junges Unternehmen setzen wir auf kurze Wege, individuelle Betreuung und einen modernen, seriösen Auftritt, ohne den Charakter einer anonymen Grossverwaltung.',
                  'As a young company we rely on short paths, individual care and a modern, serious presence, without the character of an anonymous large management firm.'
                )}
              </p>
              <p className="text-foreground font-medium">
                {t(
                  'Sie sprechen mit Menschen, die Verantwortung übernehmen.',
                  'You speak with people who take responsibility.'
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
