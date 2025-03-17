import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TextUpdater from './TextUpdater'
import SimpleForm from './SimpleForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm></SimpleForm>
  </StrictMode>
)
