import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import EventCard from '../components/EventCard'
import { events, gettingThere, wedding } from '../content'
import { useLang } from '../i18n/useLang'
import ceremonyImg from '../assets/ceremony.jpeg'
import receptionImg from '../assets/reception.jpeg'
import joinUsImg from '../assets/join-us.jpeg'

const heroImg = receptionImg

const eventImages = {
  ceremony: { image: ceremonyImg, focus: '50% 45%' },
  reception: { image: receptionImg, focus: '50% 55%' },
}

const teaserClass =
  'mx-auto flex max-w-[40rem] flex-col items-center gap-6 px-gutter py-12 text-center'

function Home() {
  const { t } = useTranslation()
  const { path } = useLang()

  return (
    <>
      <title>{`${wedding.couple} · ${wedding.shortDate}`}</title>

      <ImageSection image={heroImg} focus="50% 55%" size="full">
        <p className="text-large">{t('home.gettingMarried')}</p>
        <h1 className="my-[0.2em]">{wedding.couple}</h1>
        <p className="text-large">{wedding.date}</p>
      </ImageSection>

      <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-[6vw] gap-y-16 px-gutter pt-32 pb-24 max-md:grid-cols-1 max-md:pt-20 max-md:pb-12">
        {events.map(({ key, ...event }) => (
          <EventCard
            key={key}
            title={t(`home.${key}`)}
            {...event}
            {...eventImages[key]}
          />
        ))}
      </section>

      <section className={teaserClass}>
        <h2>{t('home.walkTitle')}</h2>
        <p>{t('home.walkText', { minutes: gettingThere.walkMinutes })}</p>
        <Link className="button mt-4" to={path('/getting-there')}>
          {t('home.walkButton')}
        </Link>
      </section>

      <section className={`${teaserClass} pb-32`}>
        <h2>{t('home.storyTitle')}</h2>
        <Link className="button mt-4" to={path('/our-story')}>
          {t('nav.ourStory')}
        </Link>
      </section>

      <ImageSection image={joinUsImg} focus="50% 88%" theme="dark">
        <p className="text-large">{t('home.joinUs')}</p>
        <h1 className="mb-[1em]">{t('home.hopeYouCanMakeIt')}</h1>
        <Link className="button button-light" to={path('/rsvp')}>
          {t('nav.rsvp')}
        </Link>
      </ImageSection>
    </>
  )
}

export default Home
