import 'i18next'
import type en from './locales/en.json'

// Makes t() keys type-checked against the English translations.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: { translation: typeof en }
  }
}
