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
        className="nothing-section-border relative overflow-hidden bg-black px-6 py-20 md:py-32"
      >
        {/* Nothing grid background */}
        <div className="nothing-grid absolute inset-0 opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section title - Nothing style */}
          <motion.div
            className="mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[2px] w-8 md:w-16" style={{ backgroundColor: roleConfig.accentColor }} />
              <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.2em] text-white md:text-4xl">
                PROJECTS
              </h2>
            </div>
            <p className="font-mono text-sm uppercase tracking-widest text-white/30 md:ml-24">
              Section.03 / {roleConfig.title}
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
      {/* Featured badge - Nothing style */}
      {isFeatured && (
        <div
          className="absolute -left-0 -top-0 z-10 border px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider"
          style={{
            backgroundColor: accentColor,
            color: 'black',
            borderColor: accentColor,
          }}
        >
          FEATURED
        </div>
      )}

      <motion.div
        className="nothing-card relative h-full overflow-hidden transition-all"
        whileHover={{ y: -4, borderColor: accentColor }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner accent */}
        <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-white/20" />

        <div className="relative z-10">
          {/* Title */}
          <h3 className="mb-2 font-mono text-lg font-bold uppercase tracking-wider text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-nothing-text-secondary">
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

          {/* Tech stack - Nothing style */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech: string) => (
              <span
                key={tech}
                className="border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-nothing-text-secondary">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Links - Nothing style */}
          <div className="flex gap-3 border-t border-white/10 pt-4">
            {project.github && (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-nothing-text-secondary transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3 w-3" />
                <span>CODE</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-nothing-text-secondary transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3" />
                <span>LIVE</span>
              </a>
            )}
          </div>

          {/* View more indicator */}
          <div
            className="mt-4 font-mono text-xs uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color: accentColor }}
          >
            VIEW_DETAILS →
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

        {/* Modal content - Nothing style */}
        <motion.div
          className="nothing-glass relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-white/20 p-8 md:p-12"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - Nothing style */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 border border-white/20 p-2 text-white transition-all hover:border-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Title */}
          <h2 className="mb-2 font-mono text-2xl font-bold uppercase tracking-wider text-white md:text-3xl">
            {project.title}
          </h2>
          <div className="mb-6 h-[2px] w-16" style={{ backgroundColor: accentColor }} />

          {/* Long description */}
          <p className="mb-6 text-lg text-nothing-text-secondary">
            {project.longDescription}
          </p>

          {/* All achievements */}
          <div className="mb-8">
            <h3
              className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              KEY_ACHIEVEMENTS
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

          {/* Full tech stack - Nothing style */}
          <div className="mb-8">
            <h3
              className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links - Nothing style */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center justify-center gap-2 border border-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>VIEW_CODE</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:opacity-90"
                style={{ backgroundColor: accentColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LIVE_DEMO</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
