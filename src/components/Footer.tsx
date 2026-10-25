import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { navLinks, wedding } from '../content'
import { useLang } from '../i18n/useLang'

function Footer() {
  const { t } = useTranslation()
  const { path } = useLang()

  return (
    <footer className="flex flex-col items-center gap-4 px-gutter py-24 text-center">
      <p className="text-large">{t('footer.questions')}</p>
      <a className="text-large underline" href={`mailto:${wedding.email}`}>
        {t('footer.emailUs')}
      </a>
      <nav
        className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 [&_a]:hover:underline"
        aria-label="Footer"
      >
        <Link to={path('/')}>{t('nav.home')}</Link>
        {navLinks.map((link) => (
          <Link key={link.to} to={path(link.to)}>
            {t(`nav.${link.key}`)}
          </Link>
        ))}
        <Link to={path('/rsvp')}>{t('nav.rsvp')}</Link>
      </nav>
      <p className="mt-8 font-heading text-h3">{wedding.hashtag}</p>
    </footer>
  )
}

export default Footer
