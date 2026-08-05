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
        <img
          src={optimizedFallback('hero-building', HERO_WIDTHS)}
          srcSet={optimizedSrcSet('hero-building', HERO_WIDTHS)}
          sizes="100vw"
          alt={t(
            'Gepflegtes Mehrfamilienhaus in der Schweiz',
            'Well-maintained residential apartment building in Switzerland'
          )}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center hero-image-motion"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,28,24,0.88)_0%,rgba(18,28,24,0.62)_42%,rgba(18,28,24,0.28)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top,rgba(18,28,24,0.55),transparent)]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pb-20">
        <p className="hero-rise hero-rise-delay-1 font-serif text-hero-foreground/90 text-3xl md:text-4xl tracking-tight mb-6 md:mb-8">
          JONOVA
        </p>

        <h1
          id="hero-heading"
          className="hero-rise hero-rise-delay-2 max-w-[16ch] font-sans font-semibold text-[2.35rem] sm:text-5xl md:text-6xl xl:text-[4.25rem] leading-[1.05] tracking-tight text-hero-foreground text-balance mb-5"
        >
          {t(
            'Verwaltung, die Sie nicht nachfragen müssen.',
            'Management you should not have to chase.'
          )}
        </h1>

        <p className="hero-rise hero-rise-delay-3 max-w-xl text-base md:text-lg leading-relaxed text-hero-foreground/78 mb-9">
          {t(
            'Ein direkter Ansprechpartner. Klare Abläufe. Sorgfältige Betreuung Ihrer Mietliegenschaft in der Schweiz.',
            'One direct contact. Clear processes. Careful management of your rental property in Switzerland.'
          )}
        </p>

        <div className="hero-rise hero-rise-delay-4 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => startInquiry()}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground/40"
          >
            {t('Unverbindliche Anfrage', 'Free enquiry')}
          </button>
          <a
            href="#eigentuemer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border border-hero-foreground/35 text-hero-foreground text-sm font-medium rounded-sm hover:border-hero-foreground hover:bg-hero-foreground/8 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground/40"
          >
            {t('Für Eigentümer', 'For owners')}
          </a>
        </div>

        <a
          href="#eigentuemer"
          className="hero-rise hero-rise-delay-5 mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-hero-foreground/55 hover:text-hero-foreground/85 transition-colors"
        >
          <ArrowDown size={14} aria-hidden="true" />
          {t('Weiterlesen', 'Continue')}
        </a>
      </div>
    </section>
  )
}
