'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { roleConfig } = useRole()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  if (!roleConfig) return null

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        className="h-full"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: roleConfig.accentColor,
          boxShadow: `0 0 10px ${roleConfig.accentColor}`,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      />
    </motion.div>
  )
}
