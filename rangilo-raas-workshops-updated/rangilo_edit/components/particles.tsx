'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Particle = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
}

export function Particles({ count = 28 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 9,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 60,
    }))
    setParticles(items)
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            bottom: -10,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px 1px rgba(212,175,55,0.7)',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -700 - p.drift],
            x: [0, p.drift],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
