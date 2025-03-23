import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/NavBar.tsx'
// import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className="h-screen overflow-hidden">
      <App />
    </div>
  </StrictMode>
)
