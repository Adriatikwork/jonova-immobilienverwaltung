'use client'

import React, { createContext, useCallback, useContext, useState } from 'react'

export type PropertyType =
  | ''
  | 'mfh'
  | 'gewerbe'
  | 'portfolio'
  | 'einzeln'
  | 'sonstiges'

interface InquiryContextValue {
  propertyType: PropertyType
  setPropertyType: (value: PropertyType) => void
  startInquiry: (type?: PropertyType) => void
}

const InquiryContext = createContext<InquiryContextValue>({
  propertyType: '',
  setPropertyType: () => {},
  startInquiry: () => {},
})

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [propertyType, setPropertyType] = useState<PropertyType>('')

  const startInquiry = useCallback((type: PropertyType = '') => {
    if (type) setPropertyType(type)
    const el = document.getElementById('kontakt')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => {
        const name = document.getElementById('name') as HTMLInputElement | null
        name?.focus({ preventScroll: true })
      }, 450)
    } else {
      window.location.hash = 'kontakt'
    }
  }, [])

  return (
    <InquiryContext.Provider value={{ propertyType, setPropertyType, startInquiry }}>
      {children}
    </InquiryContext.Provider>
  )
}

export function useInquiry() {
  return useContext(InquiryContext)
}
