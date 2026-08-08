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
      <motion.div style={{ y }} className="absolute inset-0 scale-105">
        <img
          src="/images/hero.png"
          alt="Dancers celebrating at RangiloRaas Garba festival"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#120D0B]/45 to-[#050505]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,196,61,0.18),transparent_60%)]" />

      <Particles count={60} />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary"
        >
          ✨ JAIPUR'S PREMIER GARBA FESTIVAL ✨
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="font-serif text-7xl font-bold leading-[0.9] tracking-tight sm:text-8xl md:text-[8rem] lg:text-[10rem]"
        >
          <span className="text-gradient-gold">Rangilo</span>
          <span className="text-white">Raas</span>

          <span className="mt-5 block text-sm font-light uppercase tracking-[0.65em] text-yellow-400">
          17–18 OCTOBER 2026 • RAJWADA PALACE
          </span>
          <div className="absolute -z-10 h-[420px] w-[420px] rounded-full bg-yellow-500/15 blur-[160px]" />
        </motion.h1>
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease }}
  className="mt-6 font-serif text-xl italic text-foreground/80 sm:text-2xl"
>
  Where Tradition Meets Celebration
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4, ease }}
  className="mt-4 max-w-2xl text-base text-gray-300 md:text-lg"
>
 Celebrate the spirit of Navratri with grand Garba, live music, royal décor, authentic cuisine and unforgettable festive experiences at Rajwada Palace, Jaipur.
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
    className="group rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 px-10 py-4 text-base font-bold text-black shadow-[0_0_35px_rgba(255,196,61,0.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,196,61,0.75)]"
  >
    🎟 Early Bird Passes
  </a>

  <a
    href="#sponsors"
    className="rounded-full border border-yellow-500/60 bg-black/35 px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:border-yellow-400 hover:bg-yellow-500/10 hover:scale-105"
  >
    ✨ Explore Experience
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
  <span className="text-[10px] uppercase tracking-[0.3em]">
    Scroll
  </span>

  <motion.span
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <ChevronDown size={20} className="text-primary" />
  </motion.span>
</motion.a>
</section>
  )
}