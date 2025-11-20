'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { roleConfigs, roleOrder } from '@/constants/roles'
import { RoleType } from '@/types'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const { roleConfig, selectRole, resetRole, isViewingAll } = useRole()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false)

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
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: roleConfig?.accentColor || '#50207A' }} />
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

            {/* Role Filter Dropdown - Nothing style */}
            <div className="relative">
              <button
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="flex items-center gap-2 border border-tron-blue px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-tron-blue hover:text-black"
                style={{ boxShadow: '0 0 10px rgba(0, 217, 255, 0.4)' }}
              >
                <span>{isViewingAll ? 'ALL_ROLES' : roleConfig.title.toUpperCase().replace(/ /g, '_')}</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isRoleDropdownOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 w-56 border border-tron-blue/40 bg-black/95 backdrop-blur-md"
                    style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.05)' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => {
                        resetRole()
                        setIsRoleDropdownOpen(false)
                      }}
                      className={`w-full border-b border-tron-blue/10 px-4 py-3 text-left font-mono text-xs uppercase tracking-wider transition-colors ${
                        isViewingAll ? 'bg-tron-blue/20 text-white' : 'text-white/60 hover:bg-tron-blue/5 hover:text-white'
                      }`}
                      style={isViewingAll ? { boxShadow: '0 0 10px rgba(0, 217, 255, 0.3)' } : {}}
                    >
                      All Roles
                    </button>
                    {roleOrder.map((roleId) => {
                      const role = roleConfigs[roleId]
                      return (
                        <button
                          key={roleId}
                          onClick={() => {
                            selectRole(roleId)
                            setIsRoleDropdownOpen(false)
                          }}
                          className={`w-full border-b border-tron-blue/10 px-4 py-3 text-left font-mono text-xs uppercase tracking-wider transition-colors last:border-b-0 ${
                            !isViewingAll && roleConfig.id === roleId
                              ? 'bg-tron-blue/20 text-white'
                              : 'text-white/60 hover:bg-tron-blue/5 hover:text-white'
                          }`}
                          style={{
                            borderLeftWidth: !isViewingAll && roleConfig.id === roleId ? '3px' : '0',
                            borderLeftColor: role.accentColor,
                            boxShadow: !isViewingAll && roleConfig.id === roleId ? `0 0 10px ${role.accentColor}60` : 'none',
                          }}
                        >
                          {role.title}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                    textShadow: `0 0 20px ${roleConfig?.accentColor || '#D6B9FC'}40`
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: roleConfig?.accentColor || '#D6B9FC' }}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.div
                className="mt-8 w-full max-w-xs space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-white/40">Filter by Role</p>
                <button
                  onClick={() => {
                    resetRole()
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full border px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all ${
                    isViewingAll ? 'bg-tron-blue text-black border-tron-blue' : 'border-tron-blue/40 text-white hover:bg-tron-blue/10'
                  }`}
                  style={isViewingAll ? { boxShadow: '0 0 20px #00D9FF' } : { boxShadow: '0 0 5px rgba(0, 217, 255, 0.3)' }}
                >
                  All Roles
                </button>
                {roleOrder.slice(0, 3).map((roleId) => {
                  const role = roleConfigs[roleId]
                  return (
                    <button
                      key={roleId}
                      onClick={() => {
                        selectRole(roleId)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all ${
                        !isViewingAll && roleConfig.id === roleId
                          ? 'text-black'
                          : 'border-tron-blue/40 text-white hover:bg-tron-blue/10'
                      }`}
                      style={{
                        backgroundColor: !isViewingAll && roleConfig.id === roleId ? role.accentColor : 'transparent',
                        borderColor: !isViewingAll && roleConfig.id === roleId ? role.accentColor : undefined,
                        boxShadow: !isViewingAll && roleConfig.id === roleId ? `0 0 20px ${role.accentColor}` : '0 0 5px rgba(0, 217, 255, 0.2)',
                      }}
                    >
                      {role.title}
                    </button>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
