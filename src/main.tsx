import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { CardsProvider } from './context/CardsContext.tsx'

import App from './App.tsx'
import './index.css'
import { theme } from './theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardsProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CardsProvider>
  </React.StrictMode>,

)
