import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { navLinks, wedding } from '../content'
import { useLang } from '../i18n/useLang'
import LanguageSwitcher from './LanguageSwitcher'

// Underline that grows in on hover and stays on the current page
const navLinkClass =
  'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_1px] aria-[current=page]:bg-[length:100%_1px]'

function Header() {
  const { t } = useTranslation()
  const { path } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header
      data-open={menuOpen || undefined}
      className="group absolute inset-x-0 top-0 z-10 grid min-h-header grid-cols-[1fr_auto_1fr] items-center gap-8 px-gutter py-[2vw] text-white data-open:text-black max-md:grid-cols-[1fr_auto] max-md:py-6"
    >
      <a
        className="button absolute top-4 left-1/2 -translate-x-1/2 -translate-y-[200%] focus:translate-y-0"
        href="#page"
      >
        {t('nav.skipToContent')}
      </a>

      <nav
        className="flex flex-wrap gap-x-[1.6rem] gap-y-1 text-[1.1rem] tracking-[0.02em] max-md:hidden"
        aria-label="Main"
      >
        {navLinks.map((link) => (
          <NavLink key={link.to} to={path(link.to)} className={navLinkClass}>
            {t(`nav.${link.key}`)}
          </NavLink>
        ))}
      </nav>

      <Link
        className="relative z-2 font-heading text-[1.9rem] leading-none whitespace-nowrap max-md:text-[1.6rem]"
        to={path('/')}
        onClick={close}
      >
        {wedding.initials} {wedding.shortDate}
      </Link>

      <div className="relative z-2 flex items-center justify-end gap-7 max-md:gap-5">
        <LanguageSwitcher onSwitch={close} />
        <Link className="button button-light max-md:hidden" to={path('/rsvp')}>
          {t('nav.rsvp')}
        </Link>
        <button
          type="button"
          className="relative hidden size-8 cursor-pointer max-md:block"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          </span>
          <span className="absolute inset-x-1 top-3 h-px bg-current transition-transform duration-300 group-data-open:translate-y-1 group-data-open:rotate-45" />
          <span className="absolute inset-x-1 top-5 h-px bg-current transition-transform duration-300 group-data-open:-translate-y-1 group-data-open:-rotate-45" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className="fixed inset-0 z-1 flex animate-fade-in flex-col items-center justify-center gap-10 bg-white"
        hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center gap-4 font-heading text-[2rem]"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={path(link.to)} onClick={close}>
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>
        <Link className="button" to={path('/rsvp')} onClick={close}>
          {t('nav.rsvp')}
        </Link>
      </div>
    </header>
  )
}

export default Header
