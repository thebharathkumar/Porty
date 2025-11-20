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
      {/* Nothing-style background */}
      <div className="dot-matrix absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Geometric shapes */}
      <motion.div
        className="absolute right-0 top-0 h-[500px] w-[500px] opacity-5"
        style={{ border: `2px solid ${roleConfig.accentColor}` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full opacity-10"
        style={{ border: `3px solid ${roleConfig.accentColor}` }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Nothing-style badge */}
        <motion.div
          className="mb-12 inline-block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest"
            style={{
              border: `2px solid ${roleConfig.accentColor}`,
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

        {/* Key metric - Nothing style */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-6xl font-black sm:text-7xl md:text-9xl" style={{ color: roleConfig.accentColor }}>
            {roleConfig.primaryMetric.match(/\d+/)?.[0] || '93'}
            <span className="text-white">{roleConfig.primaryMetric.match(/[^\d]+$/)?.[0] || '%'}</span>
          </div>
          <div className="mt-3 text-xs font-medium uppercase tracking-widest text-white/40 sm:mt-4 sm:text-sm">
            Primary Achievement
          </div>
        </motion.div>

        {/* CTAs - Nothing style buttons */}
        <motion.div
          className="flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#contact"
            className="cursor-hover group relative overflow-hidden px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-black sm:px-12 sm:py-5 sm:text-base"
            style={{ backgroundColor: roleConfig.accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a
            href="#projects"
            className="cursor-hover group overflow-hidden border-2 px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition-all sm:px-12 sm:py-5 sm:text-base"
            style={{ borderColor: roleConfig.accentColor }}
            whileHover={{ scale: 1.05, backgroundColor: `${roleConfig.accentColor}20` }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator - minimalist */}
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block sm:bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-[2px]" style={{ backgroundColor: roleConfig.accentColor }} />
            <ChevronDown className="h-6 w-6" style={{ color: roleConfig.accentColor }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
