const FREE_WORKSHOP_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFb9wjwbk9lAv6SDMRYzcTxjVPl46bFosTLnGDXlDMrYa5Vg/viewform?usp=dialog"

export function Workshops() {
  return (
    <section id="workshops" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-yellow-500 mb-4">
            Learn • Dance • Celebrate
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            Garba Workshops
          </h2>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Get ready for RangiloRaas with special Garba workshops designed
            for everyone — from complete beginners to experienced dancers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FREE WORKSHOP */}
          <div className="rounded-3xl border border-yellow-500/30 bg-white/[0.04] p-8 md:p-10">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
                FREE WORKSHOP
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Garba from Gujarat 🇮🇳
            </h3>

            <p className="mt-4 text-white/70 leading-relaxed">
              Learn Garba with special instructors coming all the way from
              Gujarat and experience the authentic rhythm, energy and spirit
              of Garba.
            </p>

            <div className="mt-7 space-y-3 text-white/80">
              <p>📅 <strong>12 & 13 September 2026</strong></p>
              <p>🎟️ <strong>FREE ENTRY</strong></p>
              <p>💃 Beginner friendly</p>
              <p>🇮🇳 Special instructors from Gujarat</p>
            </div>

            <a
              href={FREE_WORKSHOP_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
            >
              REGISTER FREE →
            </a>

            <p className="mt-4 text-center text-sm text-white/50">
              Limited registrations available
            </p>
          </div>

          {/* 21 DAY WORKSHOP */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                21-DAY WORKSHOP
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Master Garba & Dandiya
            </h3>

            <p className="mt-4 text-white/70 leading-relaxed">
              A complete 21-day Garba training experience to build your
              confidence, rhythm and choreography before RangiloRaas 2026.
            </p>

            <div className="mt-7 space-y-3 text-white/80">
              <p>📅 <strong>From 15 September 2026</strong></p>
              <p>⏳ <strong>21 Days</strong></p>
              <p>💰 <strong>₹999 / participant</strong></p>
              <p>💃 Beginner to experienced dancers</p>
            </div>

            <div className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-4 font-bold text-white/60">
              REGISTRATION OPENING SOON
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
