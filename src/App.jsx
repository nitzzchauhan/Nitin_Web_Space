import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'
import EducationAndInterests from './components/EducationAndInterest'

function App() {
  return (
    <div className="font-sans text-primary">
      <Header />
      <About />
      <Experience />
      <Projects />
      <EducationAndInterests />
      
      <Contact />
    </div>
  )
}

export default App