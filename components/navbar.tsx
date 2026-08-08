'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE, TICKET_URL } from '@/lib/site'
import Image from "next/image"
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-yellow-500/20 glow-gold py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-tight">
            <Image
            src="/images/logo.png"
            alt="RangiloRaas"
            width={400}
             height={300}
             priority
             className="h-16 lg:h-20 w-auto transition-transform duration-500 group-hover:scale-105"
             />
          
          
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.45em] text-yellow-400/80">
            JAIPUR • 2026
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-gray-300 transition-all duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 px-7 py-3 text-sm font-bold text-black shadow-[0_0_35px_rgba(255,196,61,0.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,196,61,0.75)]"
          >
            🎟 Early Bird Passes
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={TICKET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Book Tickets — {SITE.dates.split('–')[0]} Oct
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
