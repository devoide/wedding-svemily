import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import { wedding } from '../content'
import { useLang } from '../i18n/useLang'
import bannerImg from '../assets/ceremony.jpeg'
import storyImg from '../assets/our-story.jpeg'

function OurStory() {
  const { t } = useTranslation()
  const { path } = useLang()

  return (
    <>
      <title>{`${t('nav.ourStory')} · ${wedding.couple}`}</title>

      <ImageSection image={bannerImg} focus="50% 42%" size="banner">
        <h1>{t('nav.ourStory')}</h1>
      </ImageSection>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center gap-x-[6vw] gap-y-16 px-gutter py-24 max-md:grid-cols-1 max-md:py-16">
        <img
          className="aspect-[4/5] w-full rounded-photo object-cover object-[50%_40%]"
          src={storyImg}
          alt=""
        />
        <div className="flex flex-col items-start gap-6">
          {t('story.paragraphs', { returnObjects: true }).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="button mt-4" to={path('/rsvp')}>
            {t('nav.rsvp')}
          </Link>
        </div>
      </section>
    </>
  )
}

export default OurStory
