import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import nl from './locales/nl.json'
import es from './locales/es.json'

export const languages = ['en', 'nl', 'es'] as const
export type Language = (typeof languages)[number]

/** Served without a URL prefix, the others live under /nl/… and /es/… */
export const defaultLanguage: Language = 'en'

export const isLanguage = (value: unknown): value is Language =>
  languages.includes(value as Language)

const languageInUrl = window.location.pathname.split('/')[1]

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
    es: { translation: es },
  },
  lng: isLanguage(languageInUrl) ? languageInUrl : defaultLanguage,
  fallbackLng: defaultLanguage,
  initAsync: false,
  interpolation: { escapeValue: false },
})

export default i18n
