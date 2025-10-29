import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'

export default function App() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Hero />
      
      <main className="space-y-24 pb-24">
        <About />
        <WorkExperience />
        <Education />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
