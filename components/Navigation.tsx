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
            ? 'glass-heavy border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.button
            onClick={resetRole}
            className="cursor-hover text-2xl font-bold"
            style={{ color: roleConfig?.accentColor || '#FF0000' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BK
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-hover text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="cursor-hover rounded-full p-2 text-white/80 transition-all hover:bg-white/10 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Change Role Button */}
            <button
              onClick={resetRole}
              className="cursor-hover rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              Change Role
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-hover text-3xl font-bold text-white transition-colors hover:text-nothing-red"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  toggleTheme()
                  setIsMobileMenuOpen(false)
                }}
                className="cursor-hover mt-4 rounded-full border border-white/20 px-6 py-3 text-lg font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </motion.button>

              <motion.button
                onClick={() => {
                  resetRole()
                  setIsMobileMenuOpen(false)
                }}
                className="cursor-hover rounded-full border border-nothing-red px-6 py-3 text-lg font-medium text-nothing-red transition-all hover:bg-nothing-red hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Change Role
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
