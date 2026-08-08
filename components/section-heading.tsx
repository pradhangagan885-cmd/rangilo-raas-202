import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-primary ${
              align === 'center' ? 'justify-center' : ''
            }`}
          >
            <span className="h-px w-6 bg-primary/60" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={1}>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-balance md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={2}>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
