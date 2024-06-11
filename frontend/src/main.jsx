import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContext from './Contexts/StoreContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
    </StrictMode>
  // </BrowserRouter>
)
