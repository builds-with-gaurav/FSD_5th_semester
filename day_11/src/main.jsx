import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageSlider from './ImageSlider.jsx'
import Imageanimation from './ImageAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ImageSlider />
    <Imageanimation />
  </StrictMode>,
)

