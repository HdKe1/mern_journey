import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './Button'
import Form from src/Form.jsx
import TextState from src/Textstate.jsx
import LoginForm from './LoginFrom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LoginForm></LoginForm>
   
  </StrictMode>
)