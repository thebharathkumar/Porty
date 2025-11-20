import type { Metadata } from 'next'
import './globals.css'
import { RoleProvider } from '@/contexts/RoleContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Toaster } from 'react-hot-toast'
import TronScanner from '@/components/TronScanner'

export const metadata: Metadata = {
  title: 'Bharath Kumar Rajesh | Portfolio',
  description: 'AI/ML Engineer, Data Engineer, and Software Developer specializing in scalable data pipelines, machine learning systems, and full-stack development.',
  keywords: [
    'Bharath Kumar Rajesh',
    'AI Engineer',
    'ML Engineer',
    'Data Engineer',
    'Software Engineer',
    'Full Stack Developer',
    'Machine Learning',
    'Data Science',
    'Python',
    'React',
    'Portfolio'
  ],
  authors: [{ name: 'Bharath Kumar Rajesh' }],
  creator: 'Bharath Kumar Rajesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bharathkumar.dev',
    title: 'Bharath Kumar Rajesh | Portfolio',
    description: 'AI/ML Engineer, Data Engineer, and Software Developer specializing in scalable data pipelines, machine learning systems, and full-stack development.',
    siteName: 'Bharath Kumar Rajesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharath Kumar Rajesh | Portfolio',
    description: 'AI/ML Engineer, Data Engineer, and Software Developer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="custom-scrollbar font-sans">
        <ThemeProvider>
          <RoleProvider>
            <TronScanner />
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#000000',
                  color: '#fff',
                  border: '1px solid rgba(0, 217, 255, 0.5)',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                },
                success: {
                  iconTheme: {
                    primary: '#00D9FF',
                    secondary: '#000',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#FF6600',
                    secondary: '#000',
                  },
                },
              }}
            />
          </RoleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
