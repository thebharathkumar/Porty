'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRole } from '@/contexts/RoleContext'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactForm() {
  const { roleConfig } = useRole()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission
    try {
      // Create mailto link
      const mailtoLink = `mailto:bharath.kr702@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`

      window.location.href = mailtoLink

      setTimeout(() => {
        setStatus('success')
        toast.success('Email client opened! Send your message.')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      }, 500)
    } catch (error) {
      setStatus('error')
      toast.error('Failed to open email client')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (!roleConfig) return null

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass w-full max-w-2xl rounded-2xl border border-white/10 p-6 sm:p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-white sm:text-2xl">Send a Message</h3>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="Your name"
            style={{
              borderColor: status === 'error' ? '#FF0000' : undefined,
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="What's this about?"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/40 transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-lg disabled:opacity-50 sm:py-4 sm:text-base"
          style={{ backgroundColor: roleConfig.accentColor }}
          whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'sending' ? (
            <>
              <motion.div
                className="h-4 w-4 rounded-full border-2 border-white border-t-transparent sm:h-5 sm:w-5"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <span>Sending...</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Sent!</span>
            </>
          ) : status === 'error' ? (
            <>
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Try Again</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  )
}
