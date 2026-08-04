'use client'

import { useState } from 'react'
import { ChevronDown, Building2, BookOpen, Wrench, Home } from 'lucide-react'
import { useLang } from './language-context'

const services = [
  {
    id: 'verwaltung',
    icon: Building2,
    titleDe: 'Verwaltung von Mietliegenschaften',
    titleEn: 'Rental property management',
    summaryDe:
      'Wir übernehmen die laufende Verwaltung Ihrer Liegenschaft und sorgen für eine zuverlässige Betreuung – von der Mieterkommunikation bis zur Organisation des täglichen Betriebs.',
    summaryEn:
      'We take over the ongoing management of your property and ensure reliable support — from tenant communication to organising day-to-day operations.',
    itemsDe: null as string[] | null,
    itemsEn: null as string[] | null,
  },
  {
    id: 'kaufmaennisch',
    icon: BookOpen,
    titleDe: 'Kaufmännische Verwaltung',
    titleEn: 'Commercial administration',
    summaryDe: 'Strukturierte finanzielle und administrative Betreuung für volle Transparenz.',
    summaryEn: 'Structured financial and administrative management for full clarity.',
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
    summaryDe: 'Professionelle Koordination von Unterhalt und Instandhaltung.',
    summaryEn: 'Professional coordination of maintenance and upkeep.',
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
    summaryDe: 'Von der Vermarktung bis zur Wohnungsübergabe — wir begleiten den gesamten Prozess.',
    summaryEn: 'From marketing to key handover — we manage the entire letting process.',
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
  const [open, setOpen] = useState(false)
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
        <span className="block font-serif text-xl md:text-2xl text-foreground mb-1 text-balance">
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
        <div className="mb-14 max-w-2xl">
          <h2
            id="leistungen-heading"
            className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight"
          >
            {t('Unsere Leistungen', 'Our services')}
          </h2>
        </div>

        <div className="border-t border-rule" role="list">
          {services.map((service, i) => (
            <ServicePanel key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
