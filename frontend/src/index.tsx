import './env'

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import SuspenseWrapper from './components/Suspense'
import Wrapper from './components/Wrapper'
import './styles/global.css'

const Router = lazy(() => import('./Router'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <React.StrictMode>
      <Suspense fallback={<SuspenseWrapper />}>
        <Wrapper>
          <Router />
        </Wrapper>
      </Suspense>
    </React.StrictMode>
  </>
)
