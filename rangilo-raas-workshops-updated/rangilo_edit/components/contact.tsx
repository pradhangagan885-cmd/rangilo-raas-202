'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/site'

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: SITE.whatsapp,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@rangiloraas',
    href: SITE.instagram,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: 'Google Maps',
    value: `${SITE.venue}, Jaipur`,
    href: `https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border py-24 md:py-32">
      <div className="absolute inset-0 bg-radial-glow" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Celebrate Together"
          description="Questions about tickets, sponsorships or the event? Reach out — we’d love to hear from you."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/50"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon size={24} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1.5 font-medium text-foreground">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
