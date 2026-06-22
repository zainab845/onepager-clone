import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen text-slate-800 bg-white selection:bg-teal-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Team />
      <About />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
