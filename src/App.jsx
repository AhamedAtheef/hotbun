import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden selection:bg-orange-600/30 selection:text-orange-500 relative">
      <NavBar />
      <main className="w-full flex flex-col">
        <Hero />
        <Menu />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
