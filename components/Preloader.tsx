'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 15)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 text-6xl font-bold text-nothing-red"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          BK
        </motion.div>

        <motion.div
          className="relative h-1 w-64 overflow-hidden rounded-full bg-white/10"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-nothing-red"
            style={{ width: `${count}%` }}
          />
        </motion.div>

        <motion.div
          className="mt-4 font-mono text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {count}%
        </motion.div>
      </div>
    </motion.div>
  )
}
