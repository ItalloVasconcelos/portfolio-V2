import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Coffee, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email',
      description: 'The best way to reach me',
      action: 'Send email',
      href: `mailto:${personalInfo.contact.email}`,
      highlight: true
    },
    {
      icon: MessageCircle,
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      action: 'Connect',
      href: personalInfo.social.linkedin,
      highlight: false
    }
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center section-padding py-12 lg:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-secondary-200 max-w-2xl mx-auto leading-relaxed">
              I'm seeking a remote opportunity that challenges me to unite creativity 
              and technical excellence. If you have an innovative project or want to 
              discuss how I can help bring memorable digital solutions to life, let's connect!
            </p>
          </motion.div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.a
                key={option.title}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                 className={`group block p-6 rounded-2xl border transition-all duration-300 card-hover ${
                  option.highlight
                    ? 'bg-primary-500/10 border-primary-500/30 hover:border-primary-400'
                    : 'bg-secondary-800/30 border-secondary-700/50 hover:border-secondary-600'
                }`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    option.highlight
                      ? 'bg-primary-500 text-white'
                      : 'bg-secondary-700 text-secondary-300 group-hover:bg-secondary-600 group-hover:text-white'
                  } transition-colors duration-300`}>
                    <Icon size={24} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 ${
                    option.highlight ? 'text-primary-400' : 'text-white'
                  }`}>
                    {option.title}
                  </h3>
                  
                  <p className="text-secondary-300 text-sm mb-4">
                    {option.description}
                  </p>
                  
                  <div className={`inline-flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                    option.highlight
                      ? 'text-primary-400 group-hover:text-primary-300'
                      : 'text-secondary-400 group-hover:text-white'
                  }`}>
                    <span>{option.action}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-secondary-800/50 to-secondary-700/30 rounded-2xl border border-secondary-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md">
              Let's discuss how I can help bring your ideas to life?
            </p>
            <a
              href={`mailto:${personalInfo.contact.email}?subject=Let's work together!&body=Hello! I'd like to talk about a project...`}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Get in touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-secondary-700/50 text-center"
        >
          <p className="text-secondary-400 text-sm">
            © 2024 {personalInfo.name}. Built with ❤️ using React and Tailwind CSS.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact 