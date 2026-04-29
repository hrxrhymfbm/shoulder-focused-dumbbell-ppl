import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SEED_LOGS } from './data/seedLogs'

// Seed historical data on first load (or if logs are empty)
const stored = localStorage.getItem('logs');
if (!stored || stored === '[]') {
  localStorage.setItem('logs', JSON.stringify(SEED_LOGS));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
