'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'When and where is RangiloRaas 2026?',
    a: 'RangiloRaas 2026 takes place on 17–18 October 2026 at Rajwada Palace, Jagatpura, Jaipur. Gates open in the evening on both nights.',
  },
  {
    q: 'What is included in my ticket?',
    a: 'Every ticket includes entry to the Garba & Dandiya arena and access to the food court and shopping bazaar. Higher tiers add priority entry, reserved zones, VIP lounges and premium dining.',
  },
  {
    q: 'Is the event family friendly?',
    a: 'Absolutely. RangiloRaas is designed for all ages — from young children to grandparents. Dedicated family zones and safe, well-managed spaces are available throughout.',
  },
  {
    q: 'Do I need to wear traditional attire?',
    a: 'Traditional attire is encouraged and adds to the experience, but it is not mandatory. Come dressed to celebrate in style.',
  },
  {
    q: 'Is parking available at the venue?',
    a: 'Yes. Rajwada Palace offers ample secure self-parking, and valet parking is available for VIP guests.',
  },
  {
    q: 'How do I book tickets?',
    a: 'Tap any "Buy Now" or "Book Tickets" button to be taken to our official booking partner. Early bird passes are limited, so we recommend booking early.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything You Need To Know"
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-primary/40 bg-card' : 'border-border bg-card/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-primary"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
