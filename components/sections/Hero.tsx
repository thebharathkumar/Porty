'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const { roleConfig } = useRole()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const metrics = [
    { value: 60, label: 'Efficiency Boost', suffix: '%' },
    { value: 50, label: 'Records Processed', suffix: 'K+' },
    { value: 93, label: 'ML Accuracy', suffix: '%' },
  ]

  useEffect(() => {
    if (!roleConfig) return

    const text = roleConfig.tagline
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [roleConfig])

  if (!roleConfig) return null

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-nothing-surface to-black px-6 py-20"
    >
      {/* Background grid */}
      <div className="grid-pattern absolute inset-0 opacity-10" />

      {/* Animated gradient blob */}
      <motion.div
        className="absolute -top-40 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: roleConfig.accentColor }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Hello intro */}
        <motion.div
          className="mb-6 font-mono text-nothing-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-nothing-red">$</span> hello_world
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="mb-4 text-5xl font-bold text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Bharath Kumar Rajesh
        </motion.h1>

        {/* Dynamic role tagline with typing effect */}
        <motion.div
          className="mb-8 min-h-[4rem] text-2xl font-medium md:text-4xl"
          style={{ color: roleConfig.accentColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="font-mono">// </span>
          {displayText}
          {showCursor && <span className="animate-pulse">|</span>}
        </motion.div>

        {/* Description */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg text-nothing-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transforming data into intelligent solutions. Specialized in building
          scalable ML systems, robust data pipelines, and innovative software
          applications.
        </motion.p>

        {/* Metrics */}
        <motion.div
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass rounded-2xl border border-white/10 p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: roleConfig.accentColor }}
            >
              <CountUpAnimation
                end={metric.value}
                suffix={metric.suffix}
                accentColor={roleConfig.accentColor}
              />
              <div className="mt-2 text-sm text-nothing-text-secondary">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="#contact"
            className="cursor-hover group relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: roleConfig.accentColor }}
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </a>

          <a
            href="#projects"
            className="cursor-hover rounded-full border-2 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
            style={{ borderColor: roleConfig.accentColor }}
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8 text-nothing-text-secondary" />
        </motion.a>
      </div>
    </section>
  )
}

function CountUpAnimation({
  end,
  suffix = '',
  accentColor,
}: {
  end: number
  suffix?: string
  accentColor: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end])

  return (
    <div className="text-4xl font-bold" style={{ color: accentColor }}>
      {count}
      {suffix}
    </div>
  )
}
