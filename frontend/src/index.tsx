import './env'

import { lazy, Suspense, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import SuspenseWrapper from './components/Suspense'
import Wrapper from './components/Wrapper'
import './styles/global.css'

// NOT A BIG DEAL
import Router from './Router'
// const Router = lazy(() => import('./Router'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <StrictMode>
      <Suspense fallback={<SuspenseWrapper />}>
        <Wrapper>
          <Router />
        </Wrapper>
      </Suspense>
    </StrictMode>
  </>
)
