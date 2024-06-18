import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StoreContext from './Contexts/StoreContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
  </StrictMode>
)
