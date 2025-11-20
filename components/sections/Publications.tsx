'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { publications } from '@/constants/data'
import { BookOpen, Calendar, Award, Download } from 'lucide-react'

export default function Publications() {
  const { roleConfig } = useRole()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  if (!roleConfig) return null

  return (
    <section
      id="publications"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-black via-nothing-surface to-black px-6 py-24"
    >
      {/* Background gradient */}
      <div
        className="absolute left-0 top-1/3 h-96 w-96 rounded-full opacity-10 blur-3xl"
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
            Publications
          </h2>
          <div
            className="mx-auto h-1 w-20 rounded-full"
            style={{ backgroundColor: roleConfig.accentColor }}
          />
          <p className="mt-6 text-lg text-nothing-text-secondary">
            Research contributions in AI and Machine Learning
          </p>
        </motion.div>

        {/* Publications grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              index={index}
              isInView={isInView}
              accentColor={roleConfig.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PublicationCard({
  publication,
  index,
  isInView,
  accentColor,
}: {
  publication: any
  index: number
  isInView: boolean
  accentColor: string
}) {
  return (
    <motion.div
      className="group cursor-hover"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="glass relative h-full overflow-hidden rounded-2xl border border-white/10 p-8 transition-all hover:border-white/30"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${accentColor}10 0%, transparent 50%)`,
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="mb-4 inline-block rounded-full p-3"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            <BookOpen className="h-6 w-6" style={{ color: accentColor }} />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold leading-tight text-white">
            {publication.title}
          </h3>

          {/* Journal */}
          <p
            className="mb-4 font-semibold"
            style={{ color: accentColor }}
          >
            {publication.journal}
          </p>

          {/* Date */}
          <div className="mb-4 flex items-center gap-2 text-sm text-nothing-text-secondary">
            <Calendar className="h-4 w-4" />
            <span>{publication.date}</span>
          </div>

          {/* Achievement badge */}
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: `${accentColor}20`,
              color: accentColor,
            }}
          >
            <Award className="h-4 w-4" />
            <span>{publication.achievement}</span>
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-nothing-text-secondary">
            {publication.description}
          </p>

          {/* Actions */}
          <div className="flex gap-4">
            {publication.pdf && (
              <button
                className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                onClick={() => window.open(publication.pdf, '_blank')}
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            )}
            {publication.doi && (
              <button
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: accentColor }}
                onClick={() => window.open(publication.doi, '_blank')}
              >
                <span>View Paper →</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
