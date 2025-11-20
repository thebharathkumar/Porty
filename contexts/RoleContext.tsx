'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { RoleType, RoleConfig } from '@/types'
import { roleConfigs, defaultRoleConfig } from '@/constants/roles'

interface RoleContextType {
  selectedRole: RoleType | null
  roleConfig: RoleConfig
  selectRole: (role: RoleType) => void
  resetRole: () => void
  isViewingAll: boolean
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null)

  const selectRole = (role: RoleType) => {
    setSelectedRole(role)
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedRole', role)
    }
  }

  const resetRole = () => {
    setSelectedRole(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('selectedRole')
    }
  }

  // Always provide a config - default when no role selected
  const roleConfig = selectedRole ? roleConfigs[selectedRole] : defaultRoleConfig
  const isViewingAll = selectedRole === null

  return (
    <RoleContext.Provider
      value={{
        selectedRole,
        roleConfig,
        selectRole,
        resetRole,
        isViewingAll,
      }}
    >
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}
