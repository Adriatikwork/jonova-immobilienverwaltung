'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { useLang } from './language-context'

export function UeberUns() {
  const { t } = useLang()

  return (
    <section id="ueber-uns" className="py-24 md:py-32 overflow-hidden" aria-labelledby="ueber-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-sm overflow-hidden aspect-[3/4] col-span-2 sm:col-span-1 sm:row-span-2 sm:min-h-[380px]">
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
            <div className="relative rounded-sm overflow-hidden aspect-square hidden sm:block">
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
            <div className="relative rounded-sm overflow-hidden aspect-square col-span-2 sm:col-span-1">
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

          <div>
            <h2
              id="ueber-heading"
              className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance mb-8"
            >
              {t('Über JONOVA', 'About JONOVA')}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted text-pretty max-w-prose">
              <p>
                {t(
                  'JONOVA Immobilienverwaltung ist ein modernes Unternehmen mit Fokus auf die professionelle Verwaltung von Mietliegenschaften in der Schweiz.',
                  'JONOVA Immobilienverwaltung is a modern company focused on the professional management of rental properties in Switzerland.'
                )}
              </p>
              <p>
                {t(
                  'Wir setzen auf kurze Entscheidungswege und individuelle Betrachtung jeder Liegenschaft — ohne unnötige Bürokratie.',
                  'We rely on short decision paths and treat every property individually — without unnecessary bureaucracy.'
                )}
              </p>
              <p>
                {t(
                  'Unser Anspruch ist es, Eigentümer zu entlasten und den langfristigen Werterhalt ihrer Immobilien sicherzustellen.',
                  'Our aim is to relieve owners and ensure the long-term value preservation of their properties.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
