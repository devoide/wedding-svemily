import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { defaultLanguage, isLanguage } from '../i18n'
import Header from './Header'
import Footer from './Footer'
import NotFound from '../pages/NotFound'

function Layout() {
  const { pathname } = useLocation()
  const { lang: param } = useParams()
  const { i18n } = useTranslation()
  const lang = isLanguage(param) ? param : defaultLanguage

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
  }, [i18n, lang])

  // The default language lives at the root, so /en/gifts → /gifts
  if (param === defaultLanguage) {
    return <Navigate to={pathname.slice(param.length + 1) || '/'} replace />
  }

  return (
    <>
      <Header />
      <main id="page">
        {param === undefined || isLanguage(param) ? <Outlet /> : <NotFound />}
      </main>
      <Footer />
    </>
  )
}

export default Layout
