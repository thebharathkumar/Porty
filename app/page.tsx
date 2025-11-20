'use client'

import { useState, useEffect } from 'react'
import { useRole } from '@/contexts/RoleContext'
import RoleSelection from '@/components/RoleSelection'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'
import Preloader from '@/components/Preloader'

export default function Home() {
  const { selectedRole } = useRole()
  const [showContent, setShowContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (selectedRole) {
      setShowContent(true)
    }
  }, [selectedRole])

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <>
      <CustomCursor />

      {!showContent ? (
        <RoleSelection />
      ) : (
        <main className="relative">
          <Navigation />

          <Hero />

          <About />

          <Experience />

          <Projects />

          <Publications />

          <Contact />
        </main>
      )}
    </>
  )
}
