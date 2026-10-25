import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useLang } from '../i18n/useLang'

type Props = {
  title: string
  image: string
  focus?: string
  time: string
  place: string
  address: readonly string[]
}

function EventCard({ title, image, focus, time, place, address }: Props) {
  const { t } = useTranslation()
  const { path } = useLang()

  return (
    <article className="flex flex-col items-center gap-6 text-center">
      <h1>{title}</h1>
      <img
        className="my-4 aspect-[4/5] w-full rounded-photo object-cover"
        src={image}
        alt=""
        style={{ objectPosition: focus }}
      />
      <h3>{time}</h3>
      <p>
        {place}
        {address.map((line) => (
          <span key={line}>
            <br />
            {line}
          </span>
        ))}
      </p>
      <Link className="button mt-2" to={path('/getting-there')}>
        {t('nav.gettingThere')}
      </Link>
    </article>
  )
}

export default EventCard
