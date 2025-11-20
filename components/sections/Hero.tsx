'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const { roleConfig } = useRole()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax transformations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="perspective-deep relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-32"
    >
      {/* Nothing grid background with parallax */}
      <motion.div
        className="nothing-grid absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />

      {/* 3D Floating geometric shapes */}
      <motion.div
        className="absolute right-[10%] top-[20%] h-32 w-32 border border-white/10 md:h-48 md:w-48"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          translateZ: [0, 30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[15%] h-20 w-20 border border-white/10 md:h-32 md:w-32"
        animate={{
          rotateX: [0, -360],
          rotateZ: [0, 360],
          translateZ: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Corner accents - Nothing signature with 3D depth */}
      <motion.div
        className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-white/20"
        whileHover={{ scale: 1.1, translateZ: 10 }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-white/20"
        whileHover={{ scale: 1.1, translateZ: 10 }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-white/20"
        whileHover={{ scale: 1.1, translateZ: 10 }}
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-white/20"
        whileHover={{ scale: 1.1, translateZ: 10 }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Red accent dot - Nothing signature with floating 3D */}
      <motion.div
        className="absolute left-8 top-8 h-2 w-2 rounded-full md:left-16 md:top-16"
        style={{ backgroundColor: roleConfig.accentColor, transformStyle: 'preserve-3d' }}
        animate={{
          opacity: [1, 0.3, 1],
          translateZ: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="preserve-3d relative z-10 mx-auto max-w-7xl text-center"
        style={{ y, opacity }}
      >
        {/* Nothing-style badge - rectangular with 3D float */}
        <motion.div
          className="mb-8 inline-block md:mb-12"
          initial={{ opacity: 0, y: -20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 20 }}
          whileHover={{ rotateX: 5, translateZ: 20, scale: 1.05 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] md:px-6 md:py-2"
            style={{
              borderColor: roleConfig.accentColor,
              color: roleConfig.accentColor,
              boxShadow: `0 10px 30px ${roleConfig.accentColor}20`
            }}
          >
            {roleConfig.title}
          </div>
        </motion.div>

        {/* Main heading - Nothing style with 3D depth */}
        <motion.h1
          className="preserve-3d mb-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white sm:text-6xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.span
            className="layer-1 block"
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ translateZ: 10, rotateY: 2 }}
            style={{
              transformStyle: 'preserve-3d',
              textShadow: '4px 4px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            BHARATH
          </motion.span>
          <motion.span
            className="layer-2 block"
            initial={{ opacity: 0, x: 50, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ translateZ: 20, rotateY: -2 }}
            style={{
              transformStyle: 'preserve-3d',
              textShadow: '6px 6px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            KUMAR
          </motion.span>
          <motion.span
            className="layer-3 block"
            style={{
              color: roleConfig.accentColor,
              transformStyle: 'preserve-3d',
              textShadow: `8px 8px 0 rgba(0, 0, 0, 0.3), 0 0 40px ${roleConfig.accentColor}40`
            }}
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ translateZ: 30, scale: 1.05 }}
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

        {/* CTAs - Sharp rectangular buttons with 3D depth */}
        <motion.div
          className="perspective flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 30, rotateX: -30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.a
            href="#contact"
            className="depth-shadow-strong group relative overflow-hidden px-10 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-black transition-all sm:px-12 sm:py-4"
            style={{
              backgroundColor: roleConfig.accentColor,
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              translateZ: 20
            }}
            whileTap={{ scale: 0.95, translateZ: 5 }}
          >
            <span className="relative z-10">GET_IN_TOUCH</span>
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: `linear-gradient(135deg, ${roleConfig.accentColor} 0%, transparent 100%)`,
                transform: 'translateZ(-10px)'
              }}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="depth-shadow group relative overflow-hidden border px-10 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-white transition-all sm:px-12 sm:py-4"
            style={{
              borderColor: 'white',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              rotateY: -5,
              translateZ: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95, translateZ: 5 }}
          >
            <span className="relative z-10">VIEW_PROJECTS</span>
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
                transform: 'translateZ(-10px)'
              }}
            />
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
      </motion.div>
    </section>
  )
}
