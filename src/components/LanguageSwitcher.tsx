import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { defaultLanguage, languages } from '../i18n'
import { localizedPath, useLang } from '../i18n/useLang'

type Props = {
  onSwitch?: () => void
}

/** Links to the current page in each language. */
function LanguageSwitcher({ onSwitch }: Props) {
  const { t, i18n } = useTranslation()
  const { lang } = useLang()
  const { pathname } = useLocation()
  const page =
    lang === defaultLanguage
      ? pathname
      : pathname.slice(lang.length + 1) || '/'

  return (
    <nav
      className="flex gap-[0.9rem] text-[0.95rem] tracking-[0.08em]"
      aria-label={t('nav.language')}
    >
      {languages.map((code) => (
        <Link
          key={code}
          className="underline-offset-[0.3em] opacity-70 transition-opacity hover:opacity-100 aria-[current=true]:underline aria-[current=true]:opacity-100"
          to={localizedPath(code, page)}
          hrefLang={code}
          lang={code}
          aria-current={code === lang ? 'true' : undefined}
          onClick={() => {
            i18n.changeLanguage(code)
            onSwitch?.()
          }}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </nav>
  )
}

export default LanguageSwitcher
