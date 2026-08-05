import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Playfair_Display } from 'next/font/google'
import { JonovaJsonLd } from '@/components/json-ld'
import {
  BRAND_COLOR,
  SITE_DESCRIPTION_DE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
} from '@/lib/site'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'fallback',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'fallback',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Mietliegenschaften Schweiz`,
    template: `%s | ${SITE_NAME_SHORT}`,
  },
  description: SITE_DESCRIPTION_DE,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: 'Next.js',
  applicationName: SITE_NAME_SHORT,
  referrer: 'strict-origin-when-cross-origin',
  category: 'Business',
  classification: 'Property Management',
  openGraph: {
    title: `${SITE_NAME} | Verwaltung, die Sie nicht nachfragen müssen.`,
    description: SITE_DESCRIPTION_DE,
    type: 'website',
    url: SITE_URL,
    locale: 'de_CH',
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} | Professionelle Verwaltung von Mietliegenschaften`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Mietliegenschaften Schweiz`,
    description: SITE_DESCRIPTION_DE,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  // No hreflang until separate locale URLs exist (client DE|EN toggle shares one URL)
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: BRAND_COLOR,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className="bg-background scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/optimized/hero-building-800.avif`}
          imageSrcSet={[480, 800, 1024]
            .map((w) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/optimized/hero-building-${w}.avif ${w}w`)
            .join(', ')}
          imageSizes="100vw"
          fetchPriority="high"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="geo.region" content="CH" />
        <meta name="geo.placename" content="Schweiz" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME_SHORT} />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="msapplication-TileColor" content={BRAND_COLOR} />
        <JonovaJsonLd />
      </head>
      <body
        className={`${instrumentSans.variable} ${playfairDisplay.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
