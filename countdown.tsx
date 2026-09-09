'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '@/lib/site'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const target = new Date(SITE.eventDate).getTime()
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <section className="relative border-y border-border bg-muted/30 py-14">
      <div className="mx-auto max-w-4xl px-5">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-primary">
          The Celebration Begins In
        </p>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 text-center sm:p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline" />
              <div className="font-serif text-3xl font-bold tabular-nums text-gradient-gold sm:text-5xl">
                {u.value === undefined
                  ? '--'
                  : String(u.value).padStart(2, '0')}
              </div>
              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground sm:text-xs">
                {u.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
