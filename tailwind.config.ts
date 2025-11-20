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
        tron: {
          blue: '#00D9FF',      // Electric cyan blue
          purple: '#B026FF',    // Neon purple
          orange: '#FF6600',    // TRON orange accent
          cyan: '#00FFFF',      // Bright cyan
          dark: '#0a0a0a',      // Almost black
          grid: '#003366',      // Dark blue for grids
        },
        purple: {
          deep: '#50207A',      // deep midnight purple/indigo
          lavender: '#D6B9FC',  // soft lavender
          periwinkle: '#838CE5', // cool periwinkle blue
          light: '#E7E4F6',     // very pale lavender/grey
        },
        nothing: {
          red: '#00D9FF',       // TRON blue accent
          dark: '#000000',      // Black background
          light: '#FFFFFF',     // White text
          surface: '#0a0a0a',   // Very dark surface
          'surface-light': '#0f0f0f',
          'text-secondary': '#00D9FF',
        },
        role: {
          software: '#00D9FF',  // Electric blue
          aiml: '#B026FF',      // Neon purple
          backend: '#00FFFF',   // Cyan
          data: '#00D9FF',      // Electric blue
          analyst: '#B026FF',   // Neon purple
          fullstack: '#00FFFF', // Cyan
        },
        accent: {
          success: '#00D9FF',
          warning: '#FF6600',
          info: '#00FFFF',
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
        'tron-glow': 'tron-glow 2s ease-in-out infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(0, 217, 255, 0.6)' },
        },
        'tron-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 40px #00D9FF' },
          '50%': { boxShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 40px #00D9FF, 0 0 80px #00D9FF' },
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
