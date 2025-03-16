import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SvcIndustriesDashboard from './components/SvcIndustriesDashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SvcIndustriesDashboard />
  </StrictMode>,
)
