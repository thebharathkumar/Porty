import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          deep: '#50207A',      // deep midnight purple/indigo
          lavender: '#D6B9FC',  // soft lavender
          periwinkle: '#838CE5', // cool periwinkle blue
          light: '#E7E4F6',     // very pale lavender/grey
        },
        nothing: {
          red: '#50207A',       // Updated to deep purple
          dark: '#50207A',      // Deep purple as primary dark
          light: '#E7E4F6',     // Light lavender as light
          surface: '#50207A',
          'surface-light': '#E7E4F6',
          'text-secondary': '#838CE5',
        },
        role: {
          software: '#838CE5',  // periwinkle
          aiml: '#D6B9FC',      // soft lavender
          backend: '#838CE5',   // periwinkle
          data: '#D6B9FC',      // soft lavender
          analyst: '#838CE5',   // periwinkle
          fullstack: '#D6B9FC', // soft lavender
        },
        accent: {
          success: '#838CE5',
          warning: '#D6B9FC',
          info: '#838CE5',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(80, 32, 122, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(80, 32, 122, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
