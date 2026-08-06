'use client'

import { ArrowDown } from 'lucide-react'
import { optimizedFallback, optimizedSrcSet } from '@/lib/asset-path'
import { useInquiry } from './inquiry-context'
import { useLang } from './language-context'

const HERO_WIDTHS = [480, 800, 1024]

export function Hero() {
  const { t } = useLang()
  const { startInquiry } = useInquiry()

  return (
    <section
      id="startseite"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden noise-overlay"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/avif"
            srcSet={optimizedSrcSet('hero-building', HERO_WIDTHS, 'avif')}
            sizes="100vw"
          />
          <img
            src={optimizedFallback('hero-building', HERO_WIDTHS)}
            srcSet={optimizedSrcSet('hero-building', HERO_WIDTHS)}
            sizes="100vw"
            alt={t(
              'Modernes Mehrfamilienhaus in der Schweiz',
              'Modern residential apartment building in Switzerland'
            )}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image-motion"
          />
        </picture>
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,36,58,0.88)_0%,rgba(18,36,58,0.58)_45%,rgba(18,36,58,0.22)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(18,36,58,0.55),transparent)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pb-20">
        <p className="hero-rise hero-rise-delay-1 font-sans font-semibold text-hero-foreground text-2xl md:text-3xl tracking-[0.12em] uppercase mb-6 md:mb-8">
          JONOVA
        </p>

        <h1
          id="hero-heading"
          className="hero-rise hero-rise-delay-2 max-w-[18ch] font-sans font-semibold text-[2.35rem] sm:text-5xl md:text-6xl xl:text-[4.1rem] leading-[1.05] tracking-tight text-hero-foreground text-balance mb-5"
        >
          {t(
            'Persönliche Immobilienverwaltung in Zürich und Umgebung.',
            'Personal property management in Zurich and the region.'
          )}
        </h1>

        <p className="hero-rise hero-rise-delay-3 max-w-xl text-base md:text-lg leading-relaxed text-hero-foreground/78 mb-10">
          {t(
            'Moderne, sorgfältige Betreuung von Mietliegenschaften, Gewerbe- und Retailflächen. Ein direkter Ansprechpartner. Klare Abläufe.',
            'Modern, careful management of rental properties, commercial and retail space. One direct contact. Clear processes.'
          )}
        </p>

        <div className="hero-rise hero-rise-delay-4">
          <button
            type="button"
            onClick={() => startInquiry()}
            className="btn-quiet-ghost"
          >
            {t('Unverbindliche Anfrage', 'Free enquiry')}
          </button>
        </div>

        <a
          href="#eigentuemer"
          className="hero-rise hero-rise-delay-5 mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-hero-foreground/55 hover:text-hero-foreground/85 transition-colors"
        >
          <ArrowDown size={14} aria-hidden="true" />
          {t('Weiterlesen', 'Continue')}
        </a>
      </div>
    </section>
  )
}
