'use client'

import { motion } from 'framer-motion'
import { Download, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TICKET_URL } from '@/lib/site'

const titleSponsor = 'Maharaja Group'
const goldSponsors = ['Rajputana Jewels', 'Palace Motors', 'Zaffran Foods', 'Aurelia Realty']
const silverSponsors = [
  'Marwar Textiles',
  'Pink City Bank',
  'Suryagarh Resorts',
  'Chokhi Dhani',
  'Amber Beverages',
  'Jaipur Silks',
]

function Marquee({ items, duration }: { items: string[]; duration: number }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-20 min-w-[200px] items-center justify-center rounded-2xl border border-border bg-card px-8"
          >
            <span className="font-serif text-lg font-semibold text-foreground/70">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="sponsors" className="relative border-y border-border bg-muted/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Partners"
          title="Presented By The Finest"
          description="RangiloRaas 2026 is made possible by our esteemed partners and sponsors."
        />

        {/* Title sponsor */}
        <Reveal className="mx-auto mt-12 max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 text-center shadow-[0_0_40px_-16px_var(--gold)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-hairline" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Title Sponsor
            </p>
            <p className="mt-4 font-serif text-4xl font-bold text-gradient-gold">
              {titleSponsor}
            </p>
          </div>
        </Reveal>

        {/* Gold */}
        <div className="mt-14">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.28em] text-primary/90">
            Gold Sponsors
          </p>
          <Marquee items={goldSponsors} duration={22} />
        </div>

        {/* Silver */}
        <div className="mt-8">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Silver Sponsors
          </p>
          <Marquee items={silverSponsors} duration={30} />
        </div>

        {/* CTAs */}
        <Reveal delay={1} className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-10px_var(--gold)] transition-transform hover:scale-[1.03]"
          >
            <Handshake size={18} /> Become a Sponsor
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/10"
          >
            <Download size={18} /> Download Sponsor Deck
          </a>
        </Reveal>
      </div>
    </section>
  )
}
