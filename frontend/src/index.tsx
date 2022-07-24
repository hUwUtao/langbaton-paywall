import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'

import SuspenseWrapper from './components/Suspense'

import Wrapper from './components/Wrapper'
const Router = lazy(() => import('./Router'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseWrapper />}>
      <Wrapper>
        <Router />
      </Wrapper>
    </Suspense>
  </React.StrictMode>
)
