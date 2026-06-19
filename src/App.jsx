
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Contact from './components/Contact'
import About from './components/About'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen text-slate-800 bg-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
       <Services />
      <Team />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App
