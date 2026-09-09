'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const images = [
  { src: '/images/gallery-1.png', alt: 'Garba dancers in a circular formation', span: 'row-span-2' },
  { src: '/images/gallery-3.png', alt: 'Celebrity DJ performing on the festival stage', span: '' },
  { src: '/images/gallery-4.png', alt: 'Elegant woman in royal garba jewellery', span: '' },
  { src: '/images/gallery-2.png', alt: 'Decorated dandiya sticks held by dancers', span: '' },
  { src: '/images/gallery-5.png', alt: 'Premium palace courtyard festival decor', span: 'row-span-2' },
  { src: '/images/gallery-6.png', alt: 'Friends and family celebrating together', span: '' },
]

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  )
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, next, prev])

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments From The Raas"
          description="A glimpse into the colour, energy and elegance that defines RangiloRaas."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute inset-x-4 bottom-4 translate-y-2 text-left text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={close}
              className="absolute right-5 top-5 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary sm:left-8"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary sm:right-8"
            >
              <ChevronRight size={24} />
            </button>
            <motion.img
              key={images[index].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={images[index].src || '/placeholder.svg'}
              alt={images[index].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl border border-border object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
