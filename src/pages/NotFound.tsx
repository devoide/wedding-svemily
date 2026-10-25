import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import { wedding } from '../content'
import { useLang } from '../i18n/useLang'
import bannerImg from '../assets/reception.jpeg'

function NotFound() {
  const { t } = useTranslation()
  const { path } = useLang()

  return (
    <ImageSection image={bannerImg} size="tall">
      <title>{`${t('notFound.title')} · ${wedding.couple}`}</title>
      <h1>{t('notFound.title')}</h1>
      <p className="text-large">{t('notFound.text')}</p>
      <Link className="button button-light" to={path('/')}>
        {t('notFound.back')}
      </Link>
    </ImageSection>
  )
}

export default NotFound
