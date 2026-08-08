'use client'

import { motion } from 'framer-motion'
import {
  Music2,
  Disc3,
  Sparkles,
  WandSparkles,
  Gem,
  UtensilsCrossed,
  ShoppingBag,
  Camera,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  { icon: Music2, label: 'Live Folk & Fusion Music' },
  { icon: Disc3, label: 'Celebrity DJ Night' },
  { icon: Sparkles, label: 'Traditional Garba' },
  { icon: WandSparkles, label: 'Dandiya Celebration' },
  { icon: Gem, label: 'Royal Palace Decor' },
  { icon: UtensilsCrossed, label: 'Food Court' },
  { icon: ShoppingBag, label: 'Festive Shopping' },
  { icon: Camera, label: 'Photo Experience' },
  { icon: Users, label: '3000-4000 Garba Lovers' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <motion.img
                src="/images/about.png"
                alt="Dancers in royal garba attire twirling at RangiloRaas"
                className="aspect-[4/5] w-full object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="glass absolute -bottom-6 -right-4 rounded-2xl border border-gold bg-card/70 backdrop-blur-xl hover:glow-gold transition-all duration-500 hover:-translate-y-1">
              <div className="font-serif text-3xl font-bold text-gradient-gold">
                4000+
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Expected Visitors
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="RANGILORAAS EXPERIENCE"
              title="Jaipur's Most Premium Garba & Dandiya Experience"
              description="RangiloRaas brings together the grandeur of Rajasthan and the vibrant spirit of Navratri. Celebrate two unforgettable evenings at Rajwada Palace with live music, Garba, Dandiya, gourmet food, premium décor, cultural performances and thousands of passionate dancers under one royal celebration."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3 py-3 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <h.icon size={18} />
                  </span>
                  <span className="text-sm font-medium leading-tight text-foreground/90">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
