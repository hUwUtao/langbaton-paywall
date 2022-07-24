import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Actions = lazy(() => import('./pages/Actions'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:username/" element={<Actions />} />
      </Routes>
    </BrowserRouter>
  )
}
