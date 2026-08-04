'use client'

import { useState } from 'react'
import { ChevronDown, Building2, BookOpen, Wrench, Home } from 'lucide-react'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const services = [
  {
    id: 'verwaltung',
    icon: Building2,
    titleDe: 'Verwaltung von Mietliegenschaften',
    titleEn: 'Rental property management',
    summaryDe:
      'Laufende Betreuung Ihrer Liegenschaft — von der Mieterkommunikation bis zur Organisation des täglichen Betriebs, damit Sie den Überblick behalten ohne den Alltag zu führen.',
    summaryEn:
      'Ongoing care of your property — from tenant communication to organising day-to-day operations, so you keep the overview without running the daily grind.',
    itemsDe: null as string[] | null,
    itemsEn: null as string[] | null,
  },
  {
    id: 'kaufmaennisch',
    icon: BookOpen,
    titleDe: 'Kaufmännische Verwaltung',
    titleEn: 'Commercial administration',
    summaryDe:
      'Strukturierte finanzielle und administrative Betreuung — damit Abrechnungen und Vorgänge nachvollziehbar bleiben.',
    summaryEn:
      'Structured financial and administrative management — so accounts and cases stay understandable.',
    itemsDe: [
      'Verwaltung von Mietverhältnissen',
      'Korrespondenz mit Mietern',
      'Rechnungsprüfung',
      'Budgetplanung',
      'Administrative Betreuung',
    ],
    itemsEn: [
      'Tenancy management',
      'Tenant correspondence',
      'Invoice review',
      'Budget planning',
      'Administrative support',
    ],
  },
  {
    id: 'technisch',
    icon: Wrench,
    titleDe: 'Technische Betreuung',
    titleEn: 'Technical maintenance',
    summaryDe:
      'Koordination von Unterhalt und Instandhaltung mit Handwerksbetrieben — proaktiv und dokumentiert, nicht nur im Notfall.',
    summaryEn:
      'Coordination of maintenance and upkeep with tradespeople — proactive and documented, not only in emergencies.',
    itemsDe: [
      'Koordination von Unterhaltsarbeiten',
      'Organisation von Reparaturen',
      'Zusammenarbeit mit Handwerksbetrieben',
      'Laufende Kontrolle des Gebäudezustands',
    ],
    itemsEn: [
      'Coordination of maintenance work',
      'Organisation of repairs',
      'Collaboration with tradespeople',
      'Ongoing monitoring of building condition',
    ],
  },
  {
    id: 'vermietung',
    icon: Home,
    titleDe: 'Vermietung',
    titleEn: 'Letting & tenant placement',
    summaryDe:
      'Von der Vermarktung bis zur Wohnungsübergabe — damit Leerstand kurz bleibt und der Prozess sauber dokumentiert ist.',
    summaryEn:
      'From marketing to key handover — so vacancy stays short and the process is cleanly documented.',
    itemsDe: [
      'Vermarktung freier Objekte',
      'Organisation von Besichtigungen',
      'Auswahl geeigneter Mieter',
      'Vorbereitung der Mietverträge',
      'Wohnungsübergaben und -abnahmen',
    ],
    itemsEn: [
      'Marketing of vacant units',
      'Organising viewings',
      'Selection of suitable tenants',
      'Preparation of rental agreements',
      'Property handovers and inspections',
    ],
  },
]

function ServicePanel({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { lang } = useLang()
  const [open, setOpen] = useState(index === 1)
  const Icon = service.icon
  const title = lang === 'de' ? service.titleDe : service.titleEn
  const summary = lang === 'de' ? service.summaryDe : service.summaryEn
  const items = lang === 'de' ? service.itemsDe : service.itemsEn
  const expandable = Boolean(items && items.length > 0)

  const body = (
    <>
      <span className="flex-shrink-0 flex flex-col items-center gap-1 mt-0.5" aria-hidden="true">
        <span className="text-[10px] font-mono text-ink-muted tracking-widest">
          0{index + 1}
        </span>
        <span className="w-9 h-9 flex items-center justify-center rounded-sm bg-surface text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
          <Icon size={18} strokeWidth={1.5} />
        </span>
      </span>

      <span className="flex-1 min-w-0">
        <span className="block font-sans font-semibold text-xl md:text-2xl text-foreground mb-1 tracking-tight text-balance">
          {title}
        </span>
        <span className="block text-sm leading-relaxed text-ink-muted text-pretty">
          {summary}
        </span>
      </span>
    </>
  )

  return (
    <div className="border-b border-rule last:border-b-0">
      {expandable ? (
        <button
          type="button"
          className="group w-full flex items-start gap-5 py-7 text-left focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {body}
          <ChevronDown
            size={18}
            className={`flex-shrink-0 mt-1.5 text-ink-muted transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      ) : (
        <div className="group flex items-start gap-5 py-7">{body}</div>
      )}

      {expandable && open && items && (
        <ul className="pb-7 pl-14 md:pl-[68px] grid sm:grid-cols-2 gap-y-2 gap-x-8" role="list">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <span
                className="mt-[5px] flex-shrink-0 w-1 h-1 rounded-full bg-primary"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Leistungen() {
  const { t } = useLang()

  return (
    <section id="leistungen" className="py-24 md:py-32" aria-labelledby="leistungen-heading">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-14 max-w-2xl">
          <p className="section-eyebrow mb-4">
            {t('Leistungen', 'Services')}
          </p>
          <h2
            id="leistungen-heading"
            className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground text-balance leading-[1.15]"
          >
            {t(
              'Was wir konkret für Sie übernehmen.',
              'What we concretely take on for you.'
            )}
          </h2>
          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            {t(
              'Kein Feature-Katalog um der Vollständigkeit willen — sondern die Aufgaben, die Eigentümer entlasten.',
              'Not a feature catalogue for completeness — the tasks that actually relieve owners.'
            )}
          </p>
        </Reveal>

        <Reveal>
          <div className="border-t border-rule" role="list">
            {services.map((service, i) => (
              <ServicePanel key={service.id} service={service} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
