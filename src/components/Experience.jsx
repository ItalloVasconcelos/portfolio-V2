import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'

const ExperienceCard = ({ exp, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="p-8 bg-secondary-800/30 rounded-2xl border border-secondary-700/50 card-hover">
        {/* Period */}
        <div className="flex items-center space-x-2 mb-4">
          <Calendar size={16} className="text-primary-400" />
          <span className="text-sm font-mono text-primary-400 tracking-wider">
            {exp.period}
          </span>
        </div>

        {/* Title & Company */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
            {exp.title}
          </h3>
          <p className="text-secondary-300 font-medium">{exp.company}</p>
        </div>

        {/* Description */}
        <p className="text-secondary-200 mb-6 leading-relaxed">
          {exp.description}
        </p>

        {/* Achievements */}
        {exp.achievements && (
          <div className="mb-6">
            <h4 className="text-primary-400 font-semibold mb-3 text-sm">
              KEY ACHIEVEMENTS
            </h4>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                  <span className="text-secondary-200 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen section-padding py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
          <p className="text-secondary-300 mt-4 text-lg">
            My journey in software development, always focused on creating
            exceptional experiences and positively impacting people's lives.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-300 mb-6">
            Interested in learning more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <span>Let's talk</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience 