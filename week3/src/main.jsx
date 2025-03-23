import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Textstate from './Textstate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Textstate></Textstate>
  </StrictMode>
)
