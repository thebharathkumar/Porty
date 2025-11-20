'use client'

import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { contactInfo } from '@/constants/data'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const { roleConfig } = useRole()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!roleConfig) return null

  return (
    <footer className="relative border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div>
            <motion.h3
              className="mb-4 text-2xl font-bold"
              style={{ color: roleConfig.accentColor }}
              whileHover={{ scale: 1.05 }}
            >
              BK
            </motion.h3>
            <p className="text-sm text-nothing-text-secondary">
              Building intelligent systems and elegant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Experience', 'Projects', 'Publications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="cursor-hover text-nothing-text-secondary transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="cursor-hover text-nothing-text-secondary transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  className="cursor-hover text-nothing-text-secondary transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  className="cursor-hover text-nothing-text-secondary transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-nothing-text-secondary">
            © 2025 Bharath Kumar Rajesh. Built with{' '}
            <Heart
              className="h-4 w-4 fill-nothing-red text-nothing-red"
              style={{ fill: roleConfig.accentColor, color: roleConfig.accentColor }}
            />{' '}
            using Next.js
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="cursor-hover flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-all hover:border-white/40 hover:bg-white/10"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
