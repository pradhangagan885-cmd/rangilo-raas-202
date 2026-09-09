'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CalendarDays, MapPin, ChevronDown } from 'lucide-react'
import { Particles } from '@/components/particles'
import { SITE, TICKET_URL } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src="/images/hero.png"
          alt="Dancers celebrating at RangiloRaas Garba festival"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent,rgba(9,9,11,0.75))]" />

      <Particles count={30} />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary"
        >
          Jaipur’s Grandest Navratri
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="font-serif text-6xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="text-gradient-gold">Rangilo</span>
          <span className="text-foreground">Raas</span>
          <span className="mt-2 block text-2xl font-normal tracking-normal text-foreground/90 sm:text-3xl md:text-4xl">
            2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-6 font-serif text-xl italic text-foreground/80 sm:text-2xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-8 flex flex-col items-center gap-3 text-sm text-foreground/80 sm:flex-row sm:gap-6"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            {SITE.venue}, {SITE.venueArea}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} className="text-primary" />
            {SITE.dates}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_36px_-8px_var(--gold)] transition-transform hover:scale-[1.04]"
          >
            Book Tickets
          </a>
          <a
            href="#sponsors"
            className="rounded-full border border-primary/40 bg-background/30 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary/10"
          >
            Become Sponsor
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-primary" />
        </motion.span>
      </motion.a>
    </section>
  )
}
