'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const { roleConfig, resetRole } = useRole()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'nothing-glass border-b border-white/10'
            : 'bg-black/50 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
          {/* Logo - Nothing style */}
          <motion.button
            onClick={resetRole}
            className="cursor-hover flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: roleConfig?.accentColor || '#FF0000' }} />
            <span className="font-mono text-lg font-bold uppercase tracking-wider text-white md:text-xl">
              BK.DEV
            </span>
          </motion.button>

          {/* Desktop Navigation - Nothing style */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-hover font-mono text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}

            {/* Change Role Button - Nothing style */}
            <button
              onClick={resetRole}
              className="cursor-hover border border-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
            >
              CHANGE_ROLE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-hover md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Nothing style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="nothing-grid absolute inset-0 opacity-30" />
            <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-hover font-mono text-2xl font-bold uppercase tracking-wider text-white transition-colors"
                  style={{
                    textShadow: `0 0 20px ${roleConfig?.accentColor || '#FF0000'}40`
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: roleConfig?.accentColor || '#FF0000' }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  resetRole()
                  setIsMobileMenuOpen(false)
                }}
                className="mt-8 border px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-black"
                style={{
                  borderColor: roleConfig?.accentColor || '#FF0000',
                  color: roleConfig?.accentColor || '#FF0000'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                CHANGE_ROLE
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
