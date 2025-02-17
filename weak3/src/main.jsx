import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TextUpdater from './TextUpdater'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextUpdater></TextUpdater>
  </StrictMode>
)
