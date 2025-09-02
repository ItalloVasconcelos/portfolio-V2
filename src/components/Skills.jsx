import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Server, Wrench } from 'lucide-react'
import { skills } from '../data/portfolio'

const SkillCategory = ({ title, icon: Icon, items }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="bg-secondary-800/30 p-8 rounded-xl border border-secondary-700/50 hover:border-primary-500/30 transition-all duration-300"
    >
      <motion.div 
        className="flex items-center space-x-3 mb-6"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={28} className="text-primary-400" />
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </motion.div>
      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <motion.span 
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.08,
              type: "spring",
              stiffness: 200 
            }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)" 
            }}
            className="tech-tag cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="py-12 lg:py-16 section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-title mb-12">Skills & Technologies</h2>
        <div className="space-y-8">
          <SkillCategory title="Frontend" icon={Code} items={skills.frontend} />
          <SkillCategory title="Backend" icon={Server} items={skills.backend} />
          <SkillCategory title="Tools" icon={Wrench} items={skills.tools} />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 