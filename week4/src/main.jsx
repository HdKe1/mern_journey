import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import ProductList from './ProductList'
import Footer from './Footer'
import ProductDetailsPage from './ProductDetailsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductDetailsPage></ProductDetailsPage>
  </StrictMode>,
)
