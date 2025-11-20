'use client'

export default function TronScanner() {
  return (
    <>
      {/* Animated Scanner Strip */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="scanline absolute inset-0" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute h-1 w-1 rounded-full bg-tron-blue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4,
              boxShadow: '0 0 4px #00D9FF, 0 0 8px #00D9FF',
            }}
          />
        ))}
      </div>

      {/* Corner Accents */}
      <div className="pointer-events-none fixed left-0 top-0 z-40 h-20 w-20 border-l-2 border-t-2 border-tron-blue opacity-60" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }} />
      <div className="pointer-events-none fixed right-0 top-0 z-40 h-20 w-20 border-r-2 border-t-2 border-tron-cyan opacity-60" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }} />
      <div className="pointer-events-none fixed bottom-0 left-0 z-40 h-20 w-20 border-b-2 border-l-2 border-tron-blue opacity-60" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }} />
      <div className="pointer-events-none fixed bottom-0 right-0 z-40 h-20 w-20 border-b-2 border-r-2 border-tron-cyan opacity-60" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }} />

      {/* Vertical Scan Lines */}
      <div className="pointer-events-none fixed inset-0 z-30 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 217, 255, 0.1) 2px, rgba(0, 217, 255, 0.1) 4px)',
          animation: 'vertical-scan 15s linear infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes vertical-scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 0;
          }
        }
      `}</style>
    </>
  )
}
