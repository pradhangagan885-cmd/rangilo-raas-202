'use client'

import { motion } from 'framer-motion'
import { Car, Navigation, Crown, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/site'

const features = [
  { icon: Car, title: 'Ample Parking', text: 'Secure valet & self-parking for thousands of guests.' },
  { icon: Navigation, title: 'Easy Access', text: 'Minutes from Jagatpura, well-connected across Jaipur.' },
  { icon: Crown, title: 'Premium Venue', text: 'A heritage Rajput palace built for grand celebrations.' },
]

export function Venue() {
  const mapSrc = `https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`

  return (
    <section id="venue" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Venue"
          title="Rajwada Palace, Jaipur"
          description="A regal setting worthy of RangiloRaas — heritage architecture, sprawling courtyards and world-class hospitality."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Map */}
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Rajwada Palace location on Google Maps"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full grayscale-[0.3] contrast-110 md:h-[460px]"
              />
            </div>
          </Reveal>

          {/* Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Reveal className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/venue.png"
                alt="Illuminated Rajwada Palace at night"
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-primary" />
                <span className="font-medium">{SITE.venue}, {SITE.venueArea}</span>
              </div>
            </Reveal>

            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
