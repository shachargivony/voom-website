import React, { useState } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import InteractiveCanvas from './components/InteractiveCanvas'
import AccessibilityWidget from './components/AccessibilityWidget'
import TachlesButton from './components/TachlesButton'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <CustomCursor />
      <InteractiveCanvas />
      <AccessibilityWidget />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <Portfolio />}
      <Footer />
      <TachlesButton />
    </>
  )
}

export default App



