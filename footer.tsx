import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'
import { NAV_LINKS, SITE, TICKET_URL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold">
              <span className="text-gradient-gold">Rangilo</span>
              <span className="text-foreground">Raas</span>
            </span>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Jaipur’s biggest luxury Garba & Dandiya festival. {SITE.tagline}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: SITE.instagram, label: 'Instagram' },
                { icon: MessageCircle, href: SITE.whatsapp, label: 'WhatsApp' },
                { icon: Mail, href: `mailto:${SITE.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Event Details
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {SITE.venue}, {SITE.venueArea}
              </li>
              <li>{SITE.dates}</li>
            </ul>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book Tickets
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RangiloRaas. All rights reserved.</p>
          <p>Crafted with devotion in Jaipur, Rajasthan.</p>
        </div>
      </div>
    </footer>
  )
}
