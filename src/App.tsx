import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import GettingThere from './pages/GettingThere'
import Gifts from './pages/Gifts'
import Rsvp from './pages/Rsvp'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* English has no prefix (/gifts), other languages do (/es/gifts) */}
      <Route path=":lang?" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="getting-there" element={<GettingThere />} />
        <Route path="gifts" element={<Gifts />} />
        <Route path="rsvp" element={<Rsvp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
