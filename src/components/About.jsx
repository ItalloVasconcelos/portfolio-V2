import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../data/portfolio'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center section-padding py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-secondary-200 text-lg leading-relaxed">
          <p>
            {personalInfo.description}
          </p>

          <p>
            {personalInfo.currentRole.description}
          </p>

          <p>
            My professional journey is marked by continuous evolution. At Versatus HPC, 
            where I've been working for three years, I grew from a junior developer on 
            the BananaCloud project to a key piece in developing{' '}
            <span className="text-primary-400 font-medium">
              Kosen Energy (ACL)
            </span>
            . In this project, I had the unique opportunity to lead the Design front, 
            creating prototypes and the visual identity of the system.
          </p>

          <p>
            My technical foundation was solidified at{' '}
            <span className="text-primary-400 font-medium">
              IFCE
            </span>
            , where I developed a React system for the NDS sector that remains in use today - 
            a testament to the impact and quality of my work. As a freelancer, I honed my 
            backend skills (Node.js, GraphQL) and generated high-impact results, such as 
            the complete design and frontend restructuring of the Orthomovi website.
          </p>

          <p>
            I believe the best technology is one that serves a creative and functional experience. 
            If you're looking for a professional who moves fluidly between design and code to 
            create{' '}
            <span className="text-primary-400 font-medium">
              high-level solutions
            </span>
            , let's talk.
          </p>
        </div>

        {/* Current Role Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-secondary-800/50 rounded-xl border border-secondary-700"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full mt-2"></div>
            <div>
              <h3 className="text-primary-400 font-semibold text-lg">
                {personalInfo.currentRole.position}
              </h3>
              <p className="text-white font-medium">
                {personalInfo.currentRole.company}
              </p>
              <p className="text-secondary-300 mt-2">
                {personalInfo.currentRole.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-6 text-secondary-400"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>{personalInfo.contact.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="hover:text-primary-400 transition-colors duration-300"
            >
              {personalInfo.contact.email}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About 