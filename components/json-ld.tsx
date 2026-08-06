import {
  CONTACT,
  SITE_DESCRIPTION_DE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import { FAQ_ITEMS } from '@/lib/faq-content'

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function JonovaJsonLd() {
  const orgId = `${SITE_URL}/#organization`

  const contactPoint: Record<string, unknown> = {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: CONTACT.email,
    availableLanguage: ['German', 'English'],
    areaServed: 'CH',
  }
  if (CONTACT.phoneE164) {
    contactPoint.telephone = CONTACT.phoneE164
  }

  const organization: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: SITE_NAME,
    description: SITE_DESCRIPTION_DE,
    url: `${SITE_URL}/`,
    email: CONTACT.email,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/images/logo.jpeg`,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Zürich',
      },
      {
        '@type': 'Country',
        name: 'Switzerland',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zürich',
      addressCountry: CONTACT.country,
    },
    currenciesAccepted: 'CHF',
    knowsLanguage: ['de-CH', 'de', 'en'],
    contactPoint: [contactPoint],
  }
  if (CONTACT.phoneE164) {
    organization.telephone = CONTACT.phoneE164
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION_DE,
    inLanguage: ['de-CH', 'en'],
    publisher: { '@id': orgId },
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: `${SITE_NAME} | Zürich und Umgebung`,
    description: SITE_DESCRIPTION_DE,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': orgId },
    inLanguage: 'de-CH',
  }

  const services = [
    {
      name: 'Verwaltung von Mietliegenschaften',
      description:
        'Laufende Verwaltung Ihrer Wohnliegenschaft: von der Mieterkommunikation bis zur Organisation des täglichen Betriebs.',
    },
    {
      name: 'Verwaltung von Gewerbe- und Retailflächen',
      description:
        'Strukturierte Verwaltung von Geschäfts- und Ladenflächen mit klaren Abläufen.',
    },
    {
      name: 'Kaufmännische Immobilienverwaltung',
      description:
        'Nachvollziehbare finanzielle und administrative Betreuung Ihrer Liegenschaft.',
    },
    {
      name: 'Technische Betreuung',
      description:
        'Koordination von Unterhaltsarbeiten, Reparaturen und Handwerksbetrieben.',
    },
    {
      name: 'Vermietung und Wiedervermietung',
      description:
        'Vermarktung, Besichtigungen, Mieterauswahl sowie Übergaben und Abnahmen.',
    },
    {
      name: 'Kommunikation mit Mietern',
      description:
        'Direkte, verbindliche Kommunikation mit Mietern zu Anliegen und Vorgängen.',
    },
    {
      name: 'Persönliche Betreuung von Eigentümern',
      description:
        'Ein Ansprechpartner für Eigentümer, erreichbar und verantwortungsbewusst.',
    },
  ].map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': orgId },
    areaServed: { '@type': 'AdministrativeArea', name: 'Zürich' },
    serviceType: 'Property management',
  }))

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.qDe,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.aDe,
      },
    })),
  }

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={webSite} />
      <JsonLdScript data={webPage} />
      <JsonLdScript data={faqPage} />
      {services.map((service) => (
        <JsonLdScript key={service.name as string} data={service} />
      ))}
    </>
  )
}
