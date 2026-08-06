/**
 * Central site config for SEO / JSON-LD / sitemap / UI contact.
 * When a custom domain is ready, change SITE_URL (and drop basePath in next.config).
 */
export const SITE_NAME = 'JONOVA Immobilienverwaltung'
export const SITE_NAME_SHORT = 'JONOVA'

/** Live URL until custom domain is registered */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://adriatikwork.github.io/jonova-immobilienverwaltung'

export const SITE_DESCRIPTION_DE =
  'JONOVA Immobilienverwaltung: persönliche Betreuung von Mietliegenschaften in Zürich und Umgebung. Modern, erreichbar und klar in den Abläufen.'

export const SITE_DESCRIPTION_EN =
  'JONOVA Immobilienverwaltung: personal management of rental properties in Zurich and the surrounding region. Modern, reachable and clear in process.'

export const SITE_KEYWORDS = [
  'Immobilienverwaltung Zürich',
  'Immobilienverwaltung Schweiz',
  'Verwaltung Mietliegenschaften',
  'Gewerbeverwaltung Zürich',
  'Kaufmännische Immobilienverwaltung',
  'Technische Betreuung Immobilie',
  'Vermietung Verwaltung',
  'JONOVA',
].join(', ')

/** Deep navy from brand logo */
export const BRAND_COLOR = '#1A2F4A'

/**
 * Contact details, single source of truth for UI + JSON-LD.
 * Leave phoneE164 empty until the client provides a real number (hides phone in UI/schema).
 */
export const CONTACT = {
  email: 'info@jonova-immo.ch',
  /** Shown only when non-empty */
  phoneDisplay: '',
  phoneE164: '',
  areaServedDe: 'Zürich und Umgebung',
  areaServedEn: 'Zurich and surrounding region',
  country: 'CH',
} as const

/**
 * Swiss Impressum fields, fill when the client provides registration details.
 * Empty strings are omitted from UI/schema (honest gap, not invented NAP).
 */
export const LEGAL = {
  /** e.g. Einzelfirma / GmbH */
  legalForm: '',
  responsibleName: '',
  street: '',
  postalCode: '',
  city: '',
  /** CHE-xxx.xxx.xxx MwSt-Nr. if applicable */
  uid: '',
} as const
