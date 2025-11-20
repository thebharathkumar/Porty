'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { skills, education } from '@/constants/data'
import { getOrderedSkills } from '@/lib/utils'
import { GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  const { roleConfig } = useRole()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCommand, setActiveCommand] = useState<string | null>(null)

  const orderedSkills = roleConfig
    ? getOrderedSkills(skills, roleConfig.highlightedSkills)
    : skills

  if (!roleConfig) return null

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      {/* Background gradient */}
      <div
        className="absolute right-0 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
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
            About Me
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: roleConfig.accentColor }}
          />
        </motion.div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-nothing-text-secondary">
              I'm a passionate{' '}
              <span
                className="font-semibold"
                style={{ color: roleConfig.accentColor }}
              >
                {roleConfig.title}
              </span>{' '}
              currently pursuing my Master's in Computer Science at Pace
              University. With a strong foundation in AI/ML, data engineering,
              and software development, I specialize in building intelligent
              systems that solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed text-nothing-text-secondary">
              My experience spans from developing scalable data pipelines
              processing 50K+ records to building machine learning models with
              93%+ accuracy. I'm driven by the challenge of transforming complex
              data into actionable insights and elegant software solutions.
            </p>

            {/* Education card */}
            <motion.div
              className="glass rounded-2xl border border-white/10 p-6"
              whileHover={{ scale: 1.02, borderColor: roleConfig.accentColor }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="rounded-full p-2"
                  style={{ backgroundColor: `${roleConfig.accentColor}20` }}
                >
                  <GraduationCap
                    className="h-6 w-6"
                    style={{ color: roleConfig.accentColor }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-nothing-text-secondary">
                <p className="font-semibold text-white">{education.school}</p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                  <span className="mx-2">•</span>
                  <span>{education.period}</span>
                </div>
                <p className="text-sm">
                  <span className="font-semibold">Focus:</span>{' '}
                  {education.focus}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">GPA:</span> {education.gpa}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CLI Skills Terminal */}
          <motion.div
            className="glass rounded-2xl border border-white/10 p-6 font-mono"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Terminal header */}
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-nothing-text-secondary">
                skills.sh
              </span>
            </div>

            {/* Commands */}
            <div className="space-y-4 text-sm">
              {orderedSkills.map((skill, index) => (
                <motion.div
                  key={skill.command}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {/* Command */}
                  <button
                    onClick={() =>
                      setActiveCommand(
                        activeCommand === skill.command ? null : skill.command
                      )
                    }
                    className="cursor-hover mb-2 flex items-center gap-2 text-left transition-colors hover:text-white"
                  >
                    <span style={{ color: roleConfig.accentColor }}>$</span>
                    <span className="text-nothing-text-secondary">
                      {skill.command}
                    </span>
                  </button>

                  {/* Output */}
                  <motion.div
                    className="ml-4 flex flex-wrap gap-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeCommand === skill.command ? 'auto' : 0,
                      opacity: activeCommand === skill.command ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeCommand === skill.command &&
                      skill.items.map((item: string, itemIndex: number) => {
                        const isHighlighted =
                          roleConfig.highlightedSkills.includes(item)

                        return (
                          <motion.span
                            key={item}
                            className={`rounded-full px-3 py-1 text-xs transition-all ${
                              isHighlighted
                                ? 'font-semibold text-white'
                                : 'text-nothing-text-secondary'
                            }`}
                            style={{
                              backgroundColor: isHighlighted
                                ? `${roleConfig.accentColor}30`
                                : 'rgba(255, 255, 255, 0.05)',
                              borderColor: isHighlighted
                                ? roleConfig.accentColor
                                : 'transparent',
                              borderWidth: '1px',
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: itemIndex * 0.05 }}
                          >
                            {item}
                          </motion.span>
                        )
                      })}
                  </motion.div>
                </motion.div>
              ))}

              {/* Help text */}
              <motion.div
                className="mt-6 pt-4 text-xs text-nothing-text-secondary/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <span style={{ color: roleConfig.accentColor }}>Tip:</span>{' '}
                Click on any command to view skills
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
