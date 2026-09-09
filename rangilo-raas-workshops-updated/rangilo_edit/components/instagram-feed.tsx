'use client'

import { motion } from 'framer-motion'
import { Play, Heart } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/site'

const reels = [
  { src: '/images/gallery-1.png', caption: 'Garba nights that never end', likes: '12.4k' },
  { src: '/images/gallery-3.png', caption: 'When the DJ drops the beat', likes: '9.8k' },
  { src: '/images/gallery-6.png', caption: 'Bring the whole family', likes: '7.1k' },
  { src: '/images/gallery-4.png', caption: 'Dressed to dazzle', likes: '15.2k' },
]

export function InstagramFeed() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="@rangiloraas"
          title="Latest From Instagram"
          description="Catch the energy — follow along for reels, behind-the-scenes and announcements."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {reels.map((reel, i) => (
            <motion.a
              key={reel.src}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[9/14] overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={reel.src || '/placeholder.svg'}
                alt={reel.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm">
                <Play size={16} className="fill-current" />
              </span>
              <div className="absolute inset-x-3 bottom-3">
                <p className="text-sm font-medium leading-tight text-foreground">
                  {reel.caption}
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart size={12} className="fill-accent text-accent" /> {reel.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary/10"
          >
            <InstagramIcon size={18} /> Follow @rangiloraas
          </a>
        </div>
      </div>
    </section>
  )
}
