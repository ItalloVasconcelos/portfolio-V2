import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MobileMenu from './components/MobileMenu'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      
      <div className="lg:flex">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block lg:fixed lg:inset-y-0 lg:left-0 lg:w-2/5 xl:w-1/2 2xl:max-w-2xl">
          <Sidebar 
            activeSection={activeSection}
            onNavigate={scrollToSection}
            onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
          />
        </div>

        {/* Main Content */}
        <div className="lg:ml-auto lg:w-3/5 xl:w-1/2">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {/* Mobile Header */}
            <div className="lg:hidden">
              <Hero onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
            </div>

            {/* Sections */}
            <div className="space-y-0">
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}

export default App 