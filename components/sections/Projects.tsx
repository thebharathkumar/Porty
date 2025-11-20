'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { projects } from '@/constants/data'
import { getOrderedProjects } from '@/lib/utils'
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react'

export default function Projects() {
  const { roleConfig, selectedRole } = useRole()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<any>(null)

  if (!roleConfig || !selectedRole) return null

  const orderedProjects = getOrderedProjects(
    projects.filter((p) => p.relevantFor.includes(selectedRole)),
    roleConfig.featuredProjects
  )

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative overflow-hidden bg-black px-6 py-24"
      >
        {/* Background gradient */}
        <div
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: roleConfig.accentColor }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section title */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Featured Projects
            </h2>
            <div
              className="mx-auto h-1 w-20 rounded-full"
              style={{ backgroundColor: roleConfig.accentColor }}
            />
            <p className="mt-6 text-lg text-nothing-text-secondary">
              Projects relevant to {roleConfig.title}
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {orderedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
                accentColor={roleConfig.accentColor}
                onSelect={() => setSelectedProject(project)}
                isFeatured={roleConfig.featuredProjects.includes(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        accentColor={roleConfig.accentColor}
      />
    </>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
  accentColor,
  onSelect,
  isFeatured,
}: {
  project: any
  index: number
  isInView: boolean
  accentColor: string
  onSelect: () => void
  isFeatured: boolean
}) {
  return (
    <motion.div
      className="group relative cursor-hover"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onSelect}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div
          className="absolute -right-2 -top-2 z-10 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            backgroundColor: accentColor,
            color: 'white',
          }}
        >
          Featured
        </div>
      )}

      <motion.div
        className="glass relative h-full overflow-hidden rounded-2xl border border-white/10 p-6 transition-all hover:border-white/30"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at top right, ${accentColor}10 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-opacity-100">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-nothing-text-secondary">
            {project.description}
          </p>

          {/* Achievements */}
          <ul className="mb-4 space-y-2">
            {project.achievements.slice(0, 2).map((achievement: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-nothing-text-secondary"
              >
                <ChevronRight
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-nothing-text-secondary">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-nothing-text-secondary transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-nothing-text-secondary transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live</span>
              </a>
            )}
          </div>

          {/* View more indicator */}
          <div
            className="mt-4 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color: accentColor }}
          >
            Click to learn more →
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
  accentColor,
}: {
  project: any
  onClose: () => void
  accentColor: string
}) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal content */}
        <motion.div
          className="glass relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/20 p-8"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white">
            {project.title}
          </h2>

          {/* Long description */}
          <p className="mb-6 text-lg text-nothing-text-secondary">
            {project.longDescription}
          </p>

          {/* All achievements */}
          <div className="mb-6">
            <h3
              className="mb-3 text-xl font-semibold"
              style={{ color: accentColor }}
            >
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {project.achievements.map((achievement: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-nothing-text-secondary"
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: accentColor }}
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full tech stack */}
          <div className="mb-6">
            <h3
              className="mb-3 text-xl font-semibold"
              style={{ color: accentColor }}
            >
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-2 rounded-full border-2 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
                style={{ borderColor: accentColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>View Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: accentColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
