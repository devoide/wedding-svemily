import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import { rsvp, wedding } from '../content'
import { useLang } from '../i18n/useLang'
import bannerImg from '../assets/ceremony.jpeg'

const embedUrl = (formUrl: string) => {
  const url = new URL(formUrl)
  url.searchParams.set('embedded', 'true')
  return url.toString()
}

function Rsvp() {
  const { t } = useTranslation()
  const { lang } = useLang()

  const deadline =
    rsvp.deadline &&
    new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long' }).format(
      new Date(rsvp.deadline),
    )

  return (
    <>
      <title>{`${t('nav.rsvp')} · ${wedding.couple}`}</title>

      <ImageSection image={bannerImg} focus="50% 42%" size="banner" theme="dark">
        <h1>{t('nav.rsvp')}</h1>
        <p className="text-large">{t('rsvp.subtitle')}</p>
      </ImageSection>

      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-gutter pt-20 pb-8 text-center">
        <p className="text-large">
          {deadline
            ? t('rsvp.introDeadline', { deadline })
            : t('rsvp.intro')}
        </p>

        {rsvp.formUrl ? (
          <>
            <iframe
              className="h-350 w-full border-0"
              title={t('rsvp.formTitle')}
              src={embedUrl(rsvp.formUrl)}
              loading="lazy"
            >
              {t('rsvp.loading')}
            </iframe>
            <p className="text-base">
              {t('rsvp.notLoading')}{' '}
              <a
                className="underline"
                href={rsvp.formUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t('rsvp.openInNewTab')}
              </a>
              .
            </p>
          </>
        ) : (
          <p>{t('rsvp.comingSoon')}</p>
        )}
      </section>
    </>
  )
}

export default Rsvp
