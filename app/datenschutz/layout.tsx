import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Datenschutz', 
  description: `Datenschutzerklärung von ${SITE_NAME}: Informationen zur Bearbeitung personenbezogener Daten (nDSG).`, 
  alternates: {
    canonical: '/datenschutz/', 
  }, 
  openGraph: {
    title: `Datenschutz | ${SITE_NAME}`, 
    description: `Datenschutzerklärung von ${SITE_NAME}.`, 
    url: `${SITE_URL}/datenschutz/`, 
    type: 'website', 
  }, 
  robots: {
    index: true, 
    follow: true, 
  }, 
}

export default function DatenschutzLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return children
}
