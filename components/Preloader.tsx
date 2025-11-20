'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShow(false), 300)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Background grid pattern */}
          <div className="grid-pattern absolute inset-0 opacity-10" />

          {/* Animated gradient blob */}
          <motion.div
            className="absolute h-96 w-96 rounded-full bg-nothing-red opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10 text-center">
            {/* Logo animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="text-7xl font-bold text-nothing-red md:text-8xl"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255, 0, 0, 0.5)',
                    '0 0 40px rgba(255, 0, 0, 0.8)',
                    '0 0 20px rgba(255, 0, 0, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                BK
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="mb-6 font-mono text-sm text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Initializing portfolio...
            </motion.div>

            {/* Progress bar container */}
            <motion.div
              className="relative mx-auto h-1.5 w-72 overflow-hidden rounded-full bg-white/10"
              initial={{ width: 0 }}
              animate={{ width: 288 }}
              transition={{ duration: 0.5 }}
            >
              {/* Progress bar fill */}
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-nothing-red to-red-500"
                style={{ width: `${count}%` }}
                transition={{ duration: 0.2 }}
              />

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: [-100, 300],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>

            {/* Percentage counter */}
            <motion.div
              className="mt-4 font-mono text-lg font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {count}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
