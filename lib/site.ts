/**
 * Central site config for SEO / JSON-LD / sitemap.
 * When a custom domain is ready, change SITE_URL only (and drop basePath in next.config).
 */
export const SITE_NAME = 'JONOVA Immobilienverwaltung'
export const SITE_NAME_SHORT = 'JONOVA'

/** Live URL until custom domain is registered */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://adriatikwork.github.io/jonova-immobilienverwaltung'

export const SITE_DESCRIPTION_DE =
  'JONOVA Immobilienverwaltung – professionelle Verwaltung von Mietliegenschaften in der Schweiz. Persönlich. Professionell. Zuverlässig.'

export const SITE_DESCRIPTION_EN =
  'JONOVA Immobilienverwaltung – professional management of rental properties in Switzerland. Personal. Professional. Reliable.'

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

/** Placeholder contact — replace when client provides final details */
export const CONTACT = {
  email: 'info@jonova-immo.ch',
  phoneDisplay: '+41 xx xxx xx xx',
  phoneE164: '', // set when known, e.g. +41441234567
  areaServed: 'Switzerland',
  country: 'CH',
} as const
