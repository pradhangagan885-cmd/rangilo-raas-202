// Central place to manage links & event details.
// Replace TICKET_URL with your Swiggy Scenes / booking link and it updates everywhere.
export const TICKET_URL = 'https://www.district.in/'

export const SITE = {
  name: 'RangiloRaas 2026',
  tagline: 'Where Colors Meet Dance',
  venue: 'Rajwada Palace',
  venueArea: 'Jagatpura, Jaipur',
  dates: '17–18 October 2026',
  // Target date used by the countdown timer.
  eventDate: '2026-10-17T18:00:00+05:30',
  email: 'hello@rangiloraas.com',
  phone: '+91 98290 00000',
  whatsapp: 'https://wa.me/919829000000',
  instagram: 'https://instagram.com/rangiloraas',
  mapsQuery: 'Rajwada+Palace+Jagatpura+Jaipur',
} as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue', href: '#venue' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
] as const
