'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, Check, IndianRupee, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const FREE_WORKSHOP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeFb9wjwbk9lAv6SDMRYzcTxjVPl46bFosTLnGDXlDMrYa5Vg/viewform?usp=dialog'

const freeHighlights = [
  'Special Garba instructors coming from Gujarat',
  'Beginner-friendly learning session',
  'Traditional Garba & Dandiya moves',
  'Open for all age groups',
]

const paidHighlights = [
  '21 days of structured Garba training',
  'Beginner to advanced choreography',
  'Regular practice & guided learning',
  'Perfect preparation for RangiloRaas 2026',
]

export function Workshops() {
  return (
    <section id="workshops" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Learn • Dance • Celebrate"
          title="Garba Workshops"
          description="Get festival-ready with our special Garba training experiences before RangiloRaas 2026."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-7 shadow-[0_0_50px_-24px_var(--gold)] md:p-9"
          >
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Free Entry
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Sparkles size={22} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-primary">12–13 September 2026</p>
            <h3 className="mt-3 font-serif text-3xl font-bold md:text-4xl">Free Garba Workshop</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Learn Garba from special instructors coming all the way from Gujarat and get ready to dance at RangiloRaas.
            </p>

            <ul className="mt-7 space-y-3">
              {freeHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={FREE_WORKSHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Register Free <ArrowUpRight size={17} />
            </a>
            <p className="mt-3 text-center text-xs text-muted-foreground">Limited registrations • Confirmation & updates on WhatsApp</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-9"
          >
            <div className="absolute right-0 top-0 rounded-bl-2xl border-b border-l border-border bg-muted px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              21 Days
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <CalendarDays size={22} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-primary">From 15 September 2026</p>
            <h3 className="mt-3 font-serif text-3xl font-bold md:text-4xl">21-Day Garba Workshop</h3>
            <div className="mt-4 flex items-center gap-2 text-2xl font-bold">
              <IndianRupee size={23} className="text-primary" />999 <span className="text-sm font-normal text-muted-foreground">/ participant</span>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A focused 21-day training experience designed to build your Garba skills, confidence and festival-ready choreography.
            </p>

            <ul className="mt-7 space-y-3">
              {paidHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-muted/50 px-5 py-4 text-center">
              <p className="text-sm font-semibold">Registrations opening soon</p>
              <p className="mt-1 text-xs text-muted-foreground">Payment and registration details will be announced shortly.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
