import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const MobileMenu = ({ isOpen, onClose, activeSection, onNavigate }) => {
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${personalInfo.contact.email}`, label: 'Email' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-secondary-900 border-l border-secondary-800 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-800">
                <h2 className="text-xl font-semibold text-white">Navigation</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-secondary-400 hover:text-white transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => onNavigate(item.id)}
                        className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                            : 'text-secondary-300 hover:text-white hover:bg-secondary-800'
                        }`}
                      >
                        <span className="text-lg font-medium">{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div className="p-6 border-t border-secondary-800">
                <p className="text-sm text-secondary-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu 