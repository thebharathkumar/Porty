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
              ABOUT_ME
            </h2>
          </div>
          <p className="font-mono text-sm uppercase tracking-widest text-white/30 md:ml-24">Section.02</p>
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

            {/* Education card - Nothing style */}
            <motion.div
              className="nothing-card mt-6"
              whileHover={{ borderColor: roleConfig.accentColor }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2" style={{ backgroundColor: `${roleConfig.accentColor}15` }}>
                  <GraduationCap className="h-5 w-5" style={{ color: roleConfig.accentColor }} />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 font-mono text-sm text-nothing-text-secondary">
                <p className="font-semibold text-white">{education.school}</p>
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-white/60">Period:</span>
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-white/60">Focus:</span>
                    <span>{education.focus}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-white/60">GPA:</span>
                    <span style={{ color: roleConfig.accentColor }}>{education.gpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CLI Skills Terminal - Nothing style */}
          <motion.div
            className="nothing-card font-mono"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Terminal header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-white" />
                <span className="text-xs uppercase tracking-wider text-white/60">
                  SKILLS.SH
                </span>
              </div>
              <span className="text-xs text-white/30" style={{ color: roleConfig.accentColor }}>
                [ACTIVE]
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
                            className={`border px-2 py-1 text-[10px] uppercase tracking-wider transition-all ${
                              isHighlighted
                                ? 'font-bold text-white'
                                : 'text-nothing-text-secondary'
                            }`}
                            style={{
                              backgroundColor: isHighlighted
                                ? `${roleConfig.accentColor}20`
                                : 'rgba(255, 255, 255, 0.03)',
                              borderColor: isHighlighted
                                ? roleConfig.accentColor
                                : 'rgba(255, 255, 255, 0.1)',
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
