import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MobileMenu from './components/MobileMenu'
import Skills from './components/Skills'

function App() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'projects', 'contact']
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
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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
            <motion.div className="space-y-8"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                <About />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                <Experience />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                <Skills />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                <Projects />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                <Contact />
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}

export default App 