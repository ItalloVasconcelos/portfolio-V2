import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Hero = ({ onMobileMenuToggle }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section-padding py-4 border-b border-secondary-800"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {personalInfo.name}
          </h1>
          <p className="text-primary-400 font-medium">
            {personalInfo.title}
          </p>
        </div>
        
        <button
          onClick={onMobileMenuToggle}
          className="p-2 text-secondary-400 hover:text-white transition-colors duration-300"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  )
}

export default Hero 