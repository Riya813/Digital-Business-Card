import React from 'react'
import './App.css'
import Info from './Information'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

function App() {
  return (
    <div className='container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
