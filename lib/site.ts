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
  'JONOVA Immobilienverwaltung betreut Mietliegenschaften in der Schweiz — kaufmännisch, technisch und bei der Vermietung. Persönlich. Professionell. Zuverlässig.'

export const SITE_DESCRIPTION_EN =
  'JONOVA Immobilienverwaltung manages rental properties in Switzerland — commercially, technically, and for letting. Personal. Professional. Reliable.'

export const SITE_KEYWORDS = [
  'Immobilienverwaltung Schweiz',
  'Verwaltung Mietliegenschaften',
  'Kaufmännische Verwaltung',
  'Technische Betreuung Immobilie',
  'Vermietung Verwaltung',
  'JONOVA',
  'Property Management Switzerland',
  'Rental property management',
].join(', ')

export const BRAND_COLOR = '#2E5946'

/**
 * Contact details — single source of truth for UI + JSON-LD.
 * Leave phoneE164 empty until the client provides a real number (hides phone in UI/schema).
 */
export const CONTACT = {
  email: 'info@jonova-immo.ch',
  /** Shown only when non-empty */
  phoneDisplay: '',
  phoneE164: '',
  areaServedDe: 'Schweiz',
  areaServedEn: 'Switzerland',
  country: 'CH',
} as const
