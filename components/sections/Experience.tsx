'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { experiences } from '@/constants/data'
import { getRelevantExperiences, calculateDuration } from '@/lib/utils'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

export default function Experience() {
  const { roleConfig, selectedRole } = useRole()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (!roleConfig || !selectedRole) return null

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-nothing-surface via-black to-nothing-surface px-6 py-24"
    >
      {/* Background elements */}
      <div
        className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: roleConfig.accentColor }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Experience
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: roleConfig.accentColor }}
          />
          <p className="mt-6 text-lg text-nothing-text-secondary">
            Professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-white/10 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={index}
                isInView={isInView}
                accentColor={roleConfig.accentColor}
                selectedRole={selectedRole}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  experience,
  index,
  isInView,
  accentColor,
  selectedRole,
}: {
  experience: any
  index: number
  isInView: boolean
  accentColor: string
  selectedRole: string
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-8 z-10 h-4 w-4 rounded-full border-4 border-black md:left-1/2 md:-translate-x-1/2"
        style={{ backgroundColor: accentColor }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      />

      {/* Content card */}
      <div className="ml-20 w-full md:ml-0 md:w-5/12">
        <motion.div
          className="glass group cursor-hover rounded-2xl border border-white/10 p-6 transition-all hover:border-white/30"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Header */}
          <div className="mb-4">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-opacity-100">
                {experience.title}
              </h3>
              {experience.current && (
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                  }}
                >
                  Current
                </span>
              )}
            </div>

            <div className="mb-3 flex items-center gap-2 text-nothing-text-secondary">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">{experience.company}</span>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-nothing-text-secondary">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements - Show all, highlight relevant ones */}
          <ul className="mb-4 space-y-2">
            {experience.achievements.map((achievement: any, idx: number) => {
              const isRelevant = achievement.relevantFor.includes(selectedRole)

              return (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm transition-all ${
                    isRelevant
                      ? 'text-white'
                      : 'text-nothing-text-secondary opacity-70'
                  }`}
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{
                      color: isRelevant ? accentColor : 'currentColor',
                      opacity: isRelevant ? 1 : 0.5
                    }}
                  />
                  <span>{achievement.text}</span>
                </li>
              )
            })}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white transition-all hover:border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  )
}
