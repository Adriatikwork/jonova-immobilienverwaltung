'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'de' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (de: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'de',
  setLang: () => {},
  t: (de) => de,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')

  useEffect(() => {
    document.documentElement.lang = lang === 'de' ? 'de-CH' : 'en'
  }, [lang])

  function t(de: string, en: string): string {
    return lang === 'de' ? de : en
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
