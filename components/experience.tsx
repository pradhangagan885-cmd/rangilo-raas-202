'use client'

import { motion } from 'framer-motion'
import { Music, Sparkles, Landmark, Crown, Users, PartyPopper } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Music,
    title: 'Music',
    text: 'A live orchestra and chart-topping celebrity DJs drive the beat all night long.',
  },
  {
    icon: Sparkles,
    title: 'Dance',
    text: 'Traditional Garba circles and high-energy Dandiya raas for every skill level.',
  },
  {
    icon: Landmark,
    title: 'Culture',
    text: 'Authentic Rajasthani rituals, attire and artistry woven through every moment.',
  },
  {
    icon: Crown,
    title: 'Luxury Venue',
    text: 'A regal palace setting with premium decor, lounges and immersive lighting.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Thousands of families and friends come together in joyful celebration.',
  },
  {
    icon: PartyPopper,
    title: 'Celebration',
    text: 'Food, shopping, photography and unforgettable memories under one sky.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="Six Reasons You’ll Never Forget This Night"
          description="Every detail is orchestrated for a world-class festival experience."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon size={22} />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl font-bold">
                {item.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
