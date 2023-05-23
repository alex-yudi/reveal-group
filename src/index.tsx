import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main/Main'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
