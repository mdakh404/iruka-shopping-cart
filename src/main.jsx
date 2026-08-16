import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/900.css";
import "@fontsource/jetbrains-mono/400.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
