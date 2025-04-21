import HeroSection from './components/HeroSection'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'
import EducationAndInterests from './components/EducationAndInterest'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="font-sans text-primary" id='home'>
      <Navbar/>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <EducationAndInterests />
      
      <Contact />
    </div>
  )
}

export default App