import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum und rechtliche Angaben von ${SITE_NAME}.`,
  alternates: {
    canonical: '/impressum/',
  },
  openGraph: {
    title: `Impressum | ${SITE_NAME}`,
    description: `Impressum und rechtliche Angaben von ${SITE_NAME}.`,
    url: `${SITE_URL}/impressum/`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
