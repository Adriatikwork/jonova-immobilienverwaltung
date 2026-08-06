'use client'

import {
  Building2,
  Store,
  BookOpen,
  Wrench,
  KeyRound,
  MessagesSquare,
  Handshake,
} from 'lucide-react'
import { Reveal } from './reveal'
import { useLang } from './language-context'

const services = [
  {
    id: 'mietliegenschaften',
    icon: Building2,
    titleDe: 'Verwaltung von Mietliegenschaften',
    titleEn: 'Rental property management',
    summaryDe:
      'Laufende Betreuung Ihrer Wohnliegenschaft: Mieterkommunikation, Organisation und Betrieb aus einer Hand.',
    summaryEn:
      'Ongoing care of your residential property: tenant communication, organisation and operations in one place.',
  },
  {
    id: 'gewerbe',
    icon: Store,
    titleDe: 'Verwaltung von Gewerbe- und Retailflächen',
    titleEn: 'Commercial & retail management',
    summaryDe:
      'Strukturierte Verwaltung von Geschäfts- und Ladenflächen mit klaren Abläufen für Eigentümer und Nutzer.',
    summaryEn:
      'Structured management of commercial and retail space with clear processes for owners and occupants.',
  },
  {
    id: 'kaufmaennisch',
    icon: BookOpen,
    titleDe: 'Kaufmännische Immobilienverwaltung',
    titleEn: 'Commercial property administration',
    summaryDe:
      'Nachvollziehbare finanzielle und administrative Betreuung Ihrer Liegenschaft.',
    summaryEn:
      'Transparent financial and administrative management of your property.',
  },
  {
    id: 'technisch',
    icon: Wrench,
    titleDe: 'Technische Betreuung',
    titleEn: 'Technical maintenance',
    summaryDe:
      'Koordination von Unterhalt und Instandhaltung mit Handwerksbetrieben, dokumentiert und lösungsorientiert.',
    summaryEn:
      'Coordination of maintenance and upkeep with tradespeople, documented and solution-oriented.',
  },
  {
    id: 'vermietung',
    icon: KeyRound,
    titleDe: 'Vermietung und Wiedervermietung',
    titleEn: 'Letting & re-letting',
    summaryDe:
      'Von der Vermarktung bis zur Übergabe, damit Leerstände kurz bleiben und der Prozess sauber dokumentiert ist.',
    summaryEn:
      'From marketing to handover, so vacancies stay short and the process is cleanly documented.',
  },
  {
    id: 'mieter',
    icon: MessagesSquare,
    titleDe: 'Kommunikation mit Mietern',
    titleEn: 'Tenant communication',
    summaryDe:
      'Direkte, verbindliche Kommunikation mit Mietern, damit Anliegen klar und zeitnah bearbeitet werden.',
    summaryEn:
      'Direct, reliable communication with tenants, so requests are handled clearly and promptly.',
  },
  {
    id: 'eigentuemer',
    icon: Handshake,
    titleDe: 'Persönliche Betreuung von Eigentümern',
    titleEn: 'Personal owner care',
    summaryDe:
      'Ein Ansprechpartner, der Ihre Situation kennt, erreichbar bleibt und Verantwortung übernimmt.',
    summaryEn:
      'One contact who knows your situation, stays reachable and takes responsibility.',
  },
]

export function Leistungen() {
  const { lang, t } = useLang()

  return (
    <section
      id="leistungen"
      className="py-28 md:py-40"
      aria-labelledby="leistungen-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <p className="section-eyebrow mb-4">
            {t('Leistungen', 'Services')}
          </p>
          <h2
            id="leistungen-heading"
            className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-foreground text-balance leading-[1.15]"
          >
            {t(
              'Immobilienverwaltung, die Eigentümer entlastet.',
              'Property management that relieves owners.'
            )}
          </h2>
          <p className="mt-5 text-base text-ink-muted leading-relaxed">
            {t(
              'Fokus auf Verwaltung, Vermietung und Betreuung, klar und persönlich.',
              'Focused on management, letting and care, clear and personal.'
            )}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-14">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delayMs={i * 50}>
                <article className="flex flex-col gap-4 h-full">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-surface text-primary border border-rule/70"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-foreground mb-2 tracking-tight text-balance">
                      {lang === 'de' ? service.titleDe : service.titleEn}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted text-pretty">
                      {lang === 'de' ? service.summaryDe : service.summaryEn}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
