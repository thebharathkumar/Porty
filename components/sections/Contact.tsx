'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { contactInfo } from '@/constants/data'
import { copyToClipboard } from '@/lib/utils'
import { Mail, MapPin, FileDown, Linkedin, Github, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Contact() {
  const { roleConfig } = useRole()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copiedEmail, setCopiedEmail] = useState(false)

  if (!roleConfig) return null

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(contactInfo.email)
      setCopiedEmail(true)
      toast.success('Email copied to clipboard!')
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      toast.error('Failed to copy email')
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-24"
    >
      {/* Background effects */}
      <div className="grid-pattern absolute inset-0 opacity-10" />
      <div
        className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: roleConfig.accentColor }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: roleConfig.accentColor }}
      />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center">
        {/* Section title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-5xl font-bold text-white md:text-7xl">
            Let's Connect
          </h2>
          <p
            className="text-2xl font-medium md:text-3xl"
            style={{ color: roleConfig.accentColor }}
          >
            Let's create something extraordinary together
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="mb-16 grid w-full gap-8 md:grid-cols-3">
          {/* Email */}
          <motion.div
            className="glass group cursor-hover rounded-2xl border border-white/10 p-8 text-center transition-all hover:border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <motion.div
              className="mb-4 inline-block rounded-full p-4"
              style={{ backgroundColor: `${roleConfig.accentColor}20` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="h-8 w-8" style={{ color: roleConfig.accentColor }} />
            </motion.div>
            <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
            <p className="mb-4 text-nothing-text-secondary">
              {contactInfo.email}
            </p>
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Location */}
          <motion.div
            className="glass group cursor-hover rounded-2xl border border-white/10 p-8 text-center transition-all hover:border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <motion.div
              className="mb-4 inline-block rounded-full p-4"
              style={{ backgroundColor: `${roleConfig.accentColor}20` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="h-8 w-8" style={{ color: roleConfig.accentColor }} />
            </motion.div>
            <h3 className="mb-2 text-xl font-bold text-white">Location</h3>
            <p className="mb-4 text-nothing-text-secondary">
              {contactInfo.location}
            </p>
            <p className="text-sm text-nothing-text-secondary/60">
              Open to remote opportunities
            </p>
          </motion.div>

          {/* Resume */}
          <motion.div
            className="glass group cursor-hover rounded-2xl border border-white/10 p-8 text-center transition-all hover:border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <motion.div
              className="mb-4 inline-block rounded-full p-4"
              style={{ backgroundColor: `${roleConfig.accentColor}20` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FileDown className="h-8 w-8" style={{ color: roleConfig.accentColor }} />
            </motion.div>
            <h3 className="mb-2 text-xl font-bold text-white">Resume</h3>
            <p className="mb-4 text-nothing-text-secondary">
              Download my latest resume
            </p>
            <button
              className="rounded-full px-6 py-2 font-medium text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: roleConfig.accentColor }}
              onClick={() => toast('Resume download coming soon!')}
            >
              Download CV
            </button>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover rounded-full p-4 text-white transition-all hover:bg-white/10"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover rounded-full p-4 text-white transition-all hover:bg-white/10"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-nothing-text-secondary">
            Designed & Built by Bharath Kumar Rajesh
          </p>
          <p className="mt-2 text-xs text-nothing-text-secondary/60">
            © 2025 All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  )
}
