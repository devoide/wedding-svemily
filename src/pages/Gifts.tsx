import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageSection from '../components/ImageSection'
import Envelope from '../components/Envelope'
import { gifts, wedding } from '../content'
import bannerImg from '../assets/join-us.jpeg'

const labelClass = 'mt-[0.2rem] text-xs tracking-[0.12em] text-muted uppercase'

function Gifts() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(gifts.iban.replace(/\s/g, ''))
    } catch {
      return // Clipboard blocked; the IBAN is still there to copy by hand
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <title>{`${t('nav.gifts')} · ${wedding.couple}`}</title>

      <ImageSection image={bannerImg} focus="50% 88%" size="banner">
        <h1>{t('nav.gifts')}</h1>
      </ImageSection>

      <section className="mx-auto flex w-full max-w-[48rem] flex-col items-center px-gutter pt-20 pb-8 text-center">
        <p className="mb-4 text-large">{t('gifts.intro')}</p>

        <Envelope
          seal={wedding.initials}
          openLabel={t('gifts.open')}
          closeLabel={t('gifts.close')}
        >
          <h3 className="mb-[0.3rem] text-2xl leading-[1.2]">
            {t('gifts.cardTitle')}
          </h3>
          <p className={labelClass}>{t('gifts.accountHolder')}</p>
          <p>{gifts.accountHolder}</p>
          <p className={labelClass}>{t('gifts.iban')}</p>
          <p className="tracking-[0.04em] tabular-nums">{gifts.iban}</p>
          {/* z-7 keeps it clickable above the envelope's open/close button */}
          <button
            type="button"
            className="relative z-7 mt-[0.4rem] cursor-pointer rounded-full border border-current px-[0.9em] py-[0.35em] text-[0.85rem] hover:bg-black hover:text-white"
            onClick={copyIban}
          >
            {copied ? t('gifts.copied') : t('gifts.copy')}
          </button>
        </Envelope>

        <p className="mt-6 text-base text-muted italic">{t('gifts.hint')}</p>
        <p className="mt-12">{t('gifts.note')}</p>
      </section>
    </>
  )
}

export default Gifts
