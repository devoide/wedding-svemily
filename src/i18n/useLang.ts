import { useParams } from 'react-router'
import { defaultLanguage, isLanguage, type Language } from '.'

export const localizedPath = (lang: Language, to: string) =>
  lang === defaultLanguage ? to : `/${lang}${to === '/' ? '' : to}`

/** Current language from the URL, plus a helper to prefix links with it. */
export function useLang() {
  const { lang: param } = useParams()
  const lang = isLanguage(param) ? param : defaultLanguage
  return { lang, path: (to: string) => localizedPath(lang, to) }
}
