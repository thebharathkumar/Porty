'use client'

import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { roleConfigs, roleOrder } from '@/constants/roles'
import { RoleType } from '@/types'

export default function RoleSelection() {
  const { selectRole } = useRole()

  const handleRoleSelect = (role: RoleType) => {
    selectRole(role)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background grid pattern */}
      <div className="grid-pattern absolute inset-0 opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-nothing-surface/50 to-black" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
            Who are you looking for?
          </h1>
          <p className="text-xl text-nothing-text-secondary md:text-2xl">
            Select a role to personalize your experience
          </p>
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roleOrder.map((roleId, index) => {
            const role = roleConfigs[roleId]

            return (
              <motion.button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className="cursor-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-nothing-surface to-black p-8 text-left transition-all duration-300 hover:border-white/30 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: `0 0 40px ${role.accentColor}15`,
                }}
              >
                {/* Accent line */}
                <motion.div
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: role.accentColor }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div className="mb-4 text-5xl">{role.icon}</div>

                {/* Title */}
                <h3
                  className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-opacity-100"
                  style={{ color: role.accentColor }}
                >
                  {role.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-4 text-sm text-nothing-text-secondary">
                  {role.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white/70">
                  {role.description}
                </p>

                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${role.accentColor}10 0%, transparent 70%)`,
                  }}
                />

                {/* Arrow icon */}
                <motion.div
                  className="absolute bottom-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.div>
              </motion.button>
            )
          })}
        </div>

        <motion.p
          className="mt-12 text-center text-sm text-nothing-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Don't worry, you can change this anytime
        </motion.p>
      </div>
    </div>
  )
}
