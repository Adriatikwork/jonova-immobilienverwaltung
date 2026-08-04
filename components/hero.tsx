'use client'

import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { useLang } from './language-context'

export function Hero() {
  const { t } = useLang()

  return (
    <section
      id="startseite"
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col lg:flex-row flex-1 pt-16">
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-0 lg:w-[52%] xl:w-[48%] z-10">
          <h1
            id="hero-heading"
            className="animate-fade-up font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-balance text-foreground mb-5"
          >
            {t('Ihre Immobilie.', 'Your property.')}{' '}
            <span className="text-primary italic">
              {t('Unsere', 'Our')}
            </span>{' '}
            {t('Verantwortung.', 'responsibility.')}
          </h1>

          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl font-medium tracking-wide text-ink-muted mb-6">
            {t('Persönlich. Professionell. Zuverlässig.', 'Personal. Professional. Reliable.')}
          </p>

          <p className="animate-fade-up animation-delay-300 text-base leading-relaxed text-ink-muted max-w-prose mb-10">
            {t(
              'JONOVA Immobilienverwaltung betreut Mietliegenschaften mit Sorgfalt, Transparenz und einem hohen Qualitätsanspruch. Wir kümmern uns um die kaufmännische und organisatorische Verwaltung Ihrer Immobilien, damit Sie sich auf das Wesentliche konzentrieren können.',
              'JONOVA Immobilienverwaltung manages rental properties with care, transparency, and a high standard of quality. We handle the commercial and organisational management of your properties — so you can focus on what matters most.'
            )}
          </p>

          <div className="animate-fade-up animation-delay-400 flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t('Unverbindliche Anfrage', 'Free enquiry')}
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-rule text-foreground text-sm font-medium rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t('Unsere Leistungen', 'Our services')}
            </a>
          </div>
        </div>

        <div className="relative lg:w-[48%] xl:w-[52%] min-h-[55vw] lg:min-h-0">
          <span
            className="hidden lg:block absolute left-0 inset-y-0 w-px bg-rule z-10"
            aria-hidden="true"
          />
          <Image
            src={assetPath('/images/hero-building.png')}
            alt={t(
              'Gepflegtes Mehrfamilienhaus in der Schweiz',
              'Well-maintained residential apartment building in Switzerland'
            )}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
