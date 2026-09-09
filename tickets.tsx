'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TICKET_URL } from '@/lib/site'

// To wire a specific Swiggy Scenes link per tier, replace `TICKET_URL`
// below with the tier-specific URL.
const tiers = [
  {
    name: 'Early Bird',
    price: '₹499',
    unit: 'per person',
    featured: false,
    perks: ['Single entry (1 night)', 'Access to Garba arena', 'Food court access', 'Limited quantity'],
  },
  {
    name: 'Couple Pass',
    price: '₹1,499',
    unit: 'for two',
    featured: false,
    perks: ['Entry for 2 (both nights)', 'Priority entry lane', 'Food court access', 'Complimentary welcome drink'],
  },
  {
    name: 'Group Pass',
    price: '₹3,499',
    unit: 'for five',
    featured: true,
    perks: ['Entry for 5 (both nights)', 'Reserved group zone', 'Priority entry lane', 'Complimentary refreshments'],
  },
  {
    name: 'VIP',
    price: '₹4,999',
    unit: 'per person',
    featured: false,
    perks: ['Both nights · VIP lounge', 'Front-stage viewing deck', 'Premium dining & bar', 'Valet parking & concierge'],
  },
]

export function Tickets() {
  return (
    <section id="tickets" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Tickets"
          title="Secure Your Passes"
          description="Choose the experience that suits you best. Early bird passes are limited — book before they’re gone."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                tier.featured
                  ? 'border-primary bg-card shadow-[0_0_50px_-16px_var(--gold)]'
                  : 'border-border bg-card/60'
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  <Star size={12} className="fill-current" /> Most Popular
                </span>
              ) : null}

              <h3 className="font-serif text-xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold text-gradient-gold">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">/ {tier.unit}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                  tier.featured
                    ? 'bg-primary text-primary-foreground hover:scale-[1.03]'
                    : 'border border-primary/40 text-foreground hover:border-primary hover:bg-primary/10'
                }`}
              >
                Buy Now
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Tickets powered by Swiggy Scenes · Prices inclusive of applicable taxes
        </p>
      </div>
    </section>
  )
}
