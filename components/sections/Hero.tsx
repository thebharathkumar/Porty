'use client'

import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { roleConfig } = useRole()

  if (!roleConfig) return null

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-32"
    >
      {/* Nothing grid background */}
      <div className="nothing-grid absolute inset-0" />

      {/* Corner accents - Nothing signature */}
      <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-white/20" />
      <div className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-white/20" />
      <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-white/20" />

      {/* Red accent dot - Nothing signature */}
      <motion.div
        className="absolute left-8 top-8 h-2 w-2 rounded-full md:left-16 md:top-16"
        style={{ backgroundColor: roleConfig.accentColor }}
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Nothing-style badge - rectangular */}
        <motion.div
          className="mb-8 inline-block md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] md:px-6 md:py-2"
            style={{
              borderColor: roleConfig.accentColor,
              color: roleConfig.accentColor
            }}
          >
            {roleConfig.title}
          </div>
        </motion.div>

        {/* Main heading - Nothing style: BOLD and HIGH CONTRAST */}
        <motion.h1
          className="mb-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white sm:text-6xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            BHARATH
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            KUMAR
          </motion.span>
          <motion.span
            className="block"
            style={{ color: roleConfig.accentColor }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            RAJESH
          </motion.span>
        </motion.h1>

        {/* Description - Bold and minimal */}
        <motion.p
          className="mx-auto mb-12 max-w-3xl text-base font-light leading-relaxed text-white/60 sm:text-lg md:text-xl lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {roleConfig.description}
        </motion.p>

        {/* Key metric - Technical display */}
        <motion.div
          className="mb-12 flex items-center justify-center gap-4 sm:mb-16 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="h-[1px] w-12 bg-white/20 md:w-24" />
          <div className="flex flex-col items-center gap-1">
            <div className="font-mono text-4xl font-bold tracking-wider sm:text-5xl md:text-7xl" style={{ color: roleConfig.accentColor }}>
              {roleConfig.primaryMetric.match(/\d+/)?.[0] || '93'}
              <span className="text-white/60">{roleConfig.primaryMetric.match(/[^\d]+$/)?.[0] || '%'}</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
              ACHIEVEMENT_RATE
            </div>
          </div>
          <div className="h-[1px] w-12 bg-white/20 md:w-24" />
        </motion.div>

        {/* CTAs - Sharp rectangular buttons */}
        <motion.div
          className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#contact"
            className="group relative overflow-hidden px-10 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-all sm:px-12 sm:py-4"
            style={{ backgroundColor: roleConfig.accentColor }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">GET_IN_TOUCH</span>
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative overflow-hidden border px-10 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-white transition-all sm:px-12 sm:py-4"
            style={{ borderColor: 'white' }}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">VIEW_PROJECTS</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator - technical */}
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block sm:bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">SCROLL</div>
            <div className="h-10 w-[1px] bg-white/20" />
            <div className="h-1 w-1 rounded-full bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
