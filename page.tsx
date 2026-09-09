import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Countdown } from '@/components/countdown'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Workshops } from '@/components/workshops'
import { Gallery } from '@/components/gallery'
import { Venue } from '@/components/venue'
import { Tickets } from '@/components/tickets'
import { Sponsors } from '@/components/sponsors'
import { InstagramFeed } from '@/components/instagram-feed'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Experience />
      <Workshops />
      <Gallery />
      <Venue />
      <Tickets />
      <Sponsors />
      <InstagramFeed />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
