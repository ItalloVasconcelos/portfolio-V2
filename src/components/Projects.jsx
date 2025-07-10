import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, Star } from 'lucide-react'
import { projects } from '../data/portfolio'

const ProjectCard = ({ project, index }) => {
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
      className={`group relative ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="h-full bg-secondary-800/30 rounded-2xl border border-secondary-700/50 overflow-hidden card-hover">
        {/* Project Image */}
        <div className="relative h-48 lg:h-56 bg-gradient-to-br from-primary-500/20 to-secondary-700 overflow-hidden">
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
                          <div className="flex items-center space-x-1 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
              <Star size={12} />
              <span>FEATURED</span>
            </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent" />
          
          {/* Placeholder for project image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-secondary-600">🚀</div>
          </div>
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors duration-300"
                aria-label="View demo"
              >
                <Play size={20} />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-700 hover:bg-secondary-600 text-white rounded-full transition-colors duration-300"
                aria-label="View code"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-700 hover:bg-secondary-600 text-white rounded-full transition-colors duration-300"
                aria-label="Live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-secondary-200 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-4 text-sm">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                <Play size={14} />
                <span>Demo</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-secondary-400 hover:text-white transition-colors duration-300"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-secondary-400 hover:text-white transition-colors duration-300"
              >
                <ExternalLink size={14} />
                <span>Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen section-padding py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
          <p className="text-secondary-300 mt-4 text-lg">
            A selection of projects I'm most proud of. Each represents
            a challenge overcome and an opportunity for growth.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Other Projects
              </h3>
              <p className="text-secondary-400">
                Additional projects worth checking out
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={featuredProjects.length + index} 
                />
              ))}
            </div>
          </>
        )}

        {/* Archive Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-400 mb-4">
            Curious to see more of my work?
          </p>
          <a
            href="https://github.com/ItalloVasconcelos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
          >
            <span>View full archive</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects 