import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '../data/portfolio'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center section-padding py-12 lg:py-16 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary-500/5 rounded-full blur-xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary-400/10 rounded-full blur-lg"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl relative z-10"
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
            My professional journey is defined by consistent growth and hands-on impact. At Versatus HPC,
            where I've worked for three years, I evolved from a junior developer on the BananaCloud project
            to leading the front-end efforts of{' '}
            <span className="text-primary-400 font-medium">
              Kosen Energy (ACL)
            </span>
            . I owned the UI architecture, built the MVP with React and TypeScript, created the design system
            with Storybook, and implemented key features using solid, testable code.
          </p>

          <p>
            My technical foundation was shaped at{' '}
            <span className="text-primary-400 font-medium">
              IFCE
            </span>
            , where I built a React system for the NDS sector that’s still in production — a proof of
            maintainable, real-world code. As a freelancer, I led the complete frontend redesign of the
            Orthomovi website and contributed to the backend using Node.js and GraphQL, delivering fast
            and measurable results.
          </p>

          <p>
            I believe great frontend is more than visuals — it’s fast, scalable, and built with purpose.
            If you're looking for someone who moves confidently between{' '}
            <span className="text-primary-400 font-medium">
              clean code and great UX
            </span>
            , let’s talk.
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