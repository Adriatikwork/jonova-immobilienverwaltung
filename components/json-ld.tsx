import {
  CONTACT,
  SITE_DESCRIPTION_DE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function JonovaJsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION_DE,
    url: `${SITE_URL}/`,
    email: CONTACT.email,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/icon.svg`,
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: CONTACT.country,
    },
    currenciesAccepted: 'CHF',
    priceRange: '$$',
    knowsLanguage: ['de-CH', 'de', 'en'],
    sameAs: [] as string[],
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
    email: CONTACT.email,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: CONTACT.email,
        availableLanguage: ['German', 'English'],
        areaServed: 'CH',
      },
    ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION_DE,
    inLanguage: ['de-CH', 'en'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  }

  const services = [
    {
      name: 'Verwaltung von Mietliegenschaften',
      description:
        'Laufende Verwaltung Ihrer Liegenschaft – von der Mieterkommunikation bis zur Organisation des täglichen Betriebs.',
    },
    {
      name: 'Kaufmännische Verwaltung',
      description:
        'Verwaltung von Mietverhältnissen, Korrespondenz, Rechnungsprüfung, Budgetplanung und administrative Betreuung.',
    },
    {
      name: 'Technische Betreuung',
      description:
        'Koordination von Unterhaltsarbeiten, Reparaturen, Handwerksbetrieben und Kontrolle des Gebäudezustands.',
    },
    {
      name: 'Vermietung',
      description:
        'Vermarktung, Besichtigungen, Mieterauswahl, Mietverträge sowie Wohnungsübergaben und -abnahmen.',
    },
  ].map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Switzerland' },
    serviceType: 'Property management',
  }))

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: `${SITE_URL}/`,
      },
    ],
  }

  const navigation = {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main',
    hasPart: [
      { '@type': 'WebPage', name: 'Startseite', url: `${SITE_URL}/#startseite` },
      { '@type': 'WebPage', name: 'Leistungen', url: `${SITE_URL}/#leistungen` },
      { '@type': 'WebPage', name: 'Über uns', url: `${SITE_URL}/#ueber-uns` },
      { '@type': 'WebPage', name: 'Ablauf', url: `${SITE_URL}/#ablauf` },
      { '@type': 'WebPage', name: 'Kontakt', url: `${SITE_URL}/#kontakt` },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Welche Leistungen bietet JONOVA an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JONOVA übernimmt die Verwaltung von Mietliegenschaften, kaufmännische Verwaltung, technische Betreuung und Vermietung in der Schweiz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie läuft die Zusammenarbeit ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nach dem Erstgespräch erhalten Sie eine individuelle Offerte. Nach der Beauftragung übernehmen wir die vereinbarten Verwaltungsaufgaben und betreuen Sie laufend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Verwaltet JONOVA einzelne Liegenschaften und Portfolios?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Ob einzelne Liegenschaft oder grösseres Portfolio – JONOVA berät persönlich und entwickelt eine passende Verwaltungslösung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Warum JONOVA wählen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Persönliche Betreuung, transparente Kommunikation, effiziente digitale Prozesse und nachhaltiger Werterhalt Ihrer Immobilie.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLdScript data={localBusiness} />
      <JsonLdScript data={organization} />
      <JsonLdScript data={webSite} />
      {services.map((service) => (
        <JsonLdScript key={service.name as string} data={service} />
      ))}
      <JsonLdScript data={breadcrumb} />
      <JsonLdScript data={navigation} />
      <JsonLdScript data={faq} />
    </>
  )
}
