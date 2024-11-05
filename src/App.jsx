import About from './components/About'
import Achievements from './components/Achievements'
import ContactForm from './components/ContactForm'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Testimonials />
      <ContactForm />
    </main>
  )
}

export default App