import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Sidebar = ({ activeSection, onNavigate }) => {
  const menuItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ]

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Mail, url: `mailto:${personalInfo.contact.email}`, label: 'Email' }
  ]

  return (
    <div className="h-full flex flex-col justify-between px-12 lg:px-16 xl:px-24 2xl:px-28 py-16">
      {/* Header */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl lg:text-2xl text-primary-400 font-medium mt-2 typewriter">
            {personalInfo.title}
          </h2>
          <p className="text-secondary-300 mt-4 text-lg lg:text-xl leading-relaxed">
            {personalInfo.description.split('.')[0]}.
          </p>
        </motion.div>

                 {/* Navigation */}
         <motion.nav
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="space-y-4"
         >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`block w-full text-left group transition-all duration-300 hover:transform hover:translate-x-2 ${
                activeSection === item.id
                  ? 'text-primary-400'
                  : 'text-secondary-400 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`h-px transition-all duration-300 ${
                    activeSection === item.id
                      ? 'w-16 bg-primary-400'
                      : 'w-8 bg-secondary-600 group-hover:w-12 group-hover:bg-white'
                  }`}
                />
                <span className="text-sm lg:text-base font-mono tracking-widest font-semibold">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </motion.nav>
      </div>

      {/* Footer - Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex space-x-6"
      >
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-400 hover:text-primary-400 transition-all duration-300 hover:transform hover:scale-110"
              aria-label={social.label}
            >
              <Icon size={24} />
            </a>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Sidebar 