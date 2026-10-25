import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import { gettingThere, wedding } from '../content'
import { mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from '../maps'
import bannerImg from '../assets/reception.jpeg'

// Numbered circle (::before) with a dotted line down to the next step (::after)
const stepClass =
  'relative grid grid-cols-2 gap-x-16 gap-y-8 pb-16 pl-20 [counter-increment:step] max-md:grid-cols-1 max-md:pl-16 ' +
  'before:absolute before:top-0 before:left-0 before:grid before:size-12 before:place-items-center before:rounded-full before:bg-black before:font-heading before:text-[1.4rem] before:text-white before:content-[counter(step)] ' +
  'not-last:after:absolute not-last:after:top-[3.75rem] not-last:after:bottom-3 not-last:after:left-[calc(1.5rem-1px)] not-last:after:border-l-2 not-last:after:border-dotted not-last:after:border-accent'

const stepTextClass = 'flex flex-col items-start gap-4 [&_h2]:mt-[0.2rem] [&_h2]:leading-[1.1]'

function GettingThere() {
  const { t } = useTranslation()
  const { parking, venue, walkMinutes } = gettingThere
  const minutes = { minutes: walkMinutes }

  return (
    <>
      <title>{`${t('nav.gettingThere')} · ${wedding.couple}`}</title>

      <ImageSection image={bannerImg} focus="50% 70%" size="banner">
        <h1>{t('nav.gettingThere')}</h1>
        <p className="text-large">{t('gettingThere.subtitle', minutes)}</p>
      </ImageSection>

      <section className="mx-auto w-full max-w-300 px-gutter pt-24 pb-16">
        <p className="mx-auto mb-16 max-w-160 text-center text-large">
          {t('gettingThere.intro')}
        </p>

        <ol className="[counter-reset:step]">
          <li className={stepClass}>
            <div className={stepTextClass}>
              <h2>{t('gettingThere.parkTitle')}</h2>
              <p>
                <strong>{parking.name}</strong>
                <br />
                {parking.address}
              </p>
              {t('gettingThere.parkingNotes', { returnObjects: true }).map(
                (note) => (
                  <p key={note}>{note}</p>
                ),
              )}
              <a
                className="button mt-2"
                href={mapsDirectionsUrl(parking.address)}
                target="_blank"
                rel="noreferrer"
              >
                {t('gettingThere.parkButton')}
              </a>
            </div>
            <iframe
              className="aspect-4/3 w-full rounded-photo border-0 bg-light-accent"
              title={t('gettingThere.mapTitle')}
              src={mapsEmbedUrl(parking.address)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </li>

          <li className={stepClass}>
            <div className={stepTextClass}>
              <h2>{t('gettingThere.walkTitle', minutes)}</h2>
              <p>{t('gettingThere.walkText', minutes)}</p>
              <a
                className="button mt-2"
                href={mapsDirectionsUrl(
                  venue.address,
                  parking.address,
                  'walking',
                )}
                target="_blank"
                rel="noreferrer"
              >
                {t('gettingThere.walkButton')}
              </a>
            </div>
          </li>

          <li className={stepClass}>
            <div className={stepTextClass}>
              <h2>{t('gettingThere.arriveTitle')}</h2>
              <p>
                <strong>{venue.name}</strong>
                <br />
                {venue.address}
              </p>
              <a
                className="button mt-2"
                href={mapsSearchUrl(venue.address)}
                target="_blank"
                rel="noreferrer"
              >
                {t('gettingThere.arriveButton')}
              </a>
            </div>
          </li>
        </ol>
      </section>

      <section className="mx-auto w-full max-w-3xl border-t border-light-accent px-gutter pt-16 pb-8">
        <h2>{t('gettingThere.tipsTitle')}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-[1.2em]">
          {t('gettingThere.tips', { returnObjects: true }).map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default GettingThere
