'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const targetSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function EasterEgg() {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [showSecret, setShowSecret] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...konamiCode, e.key].slice(-10)
      setKonamiCode(newSequence)

      if (newSequence.join(',') === targetSequence.join(',')) {
        setShowSecret(true)
        setTimeout(() => setShowSecret(false), 5000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [konamiCode])

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSecret(false)}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.5, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.5, rotateY: 180 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="mb-4 text-8xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              🎉
            </motion.div>
            <h2 className="mb-4 text-4xl font-bold text-nothing-red">
              You found the secret!
            </h2>
            <p className="text-xl text-white/80">
              Konami Code master! Here's a virtual high five! ✋
            </p>
            <p className="mt-4 text-sm text-white/60">
              (Click anywhere to close)
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
