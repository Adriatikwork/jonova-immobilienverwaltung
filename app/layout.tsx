import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JONOVA Immobilienverwaltung',
  description:
    'Professionelle Verwaltung von Mietliegenschaften in der Schweiz. Persönlich. Professionell. Zuverlässig.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2E5946',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className="bg-background">
      <body
        className={`${instrumentSans.variable} ${playfairDisplay.variable} antialiased font-sans`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
