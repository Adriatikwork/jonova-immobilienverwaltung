'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/faq-content'
import { Reveal } from './reveal'
import { useLang } from './language-context'

export function Faq() {
  const { lang, t } = useLang()
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-surface py-28 md:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24">
          <Reveal>
            <p className="section-eyebrow mb-4">FAQ</p>
            <h2
              id="faq-heading"
              className="font-sans font-semibold text-3xl md:text-4xl tracking-tight text-foreground leading-[1.15] text-balance mb-5"
            >
              {t(
                'Fragen, die Eigentümer wirklich stellen.',
                'Questions owners actually ask.'
              )}
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted max-w-sm">
              {t(
                'Kosten, Wechsel und Erreichbarkeit. Klar und ohne Werbeslogans.',
                'Cost, switching and reachability. Clear, without slogans.'
              )}
            </p>
          </Reveal>

          <div className="border-t border-rule">
            {FAQ_ITEMS.map((faq, i) => {
              const open = openId === i
              return (
                <Reveal key={faq.qDe} delayMs={i * 40}>
                  <div className="border-b border-rule">
                    <button
                      type="button"
                      className="group w-full flex items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : i)}
                    >
                      <span className="font-sans font-medium text-base md:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {lang === 'de' ? faq.qDe : faq.qEn}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 mt-1 text-ink-muted transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {open && (
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-ink-muted text-pretty max-w-2xl">
                        {lang === 'de' ? faq.aDe : faq.aEn}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
