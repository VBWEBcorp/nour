'use client'

import { Reveal } from '@/components/home/reveal'
import { getIcon } from '@/lib/icons'
import { convictions } from '@/lib/bys-content'

export function Convictions() {
  return (
    <section className="relative border-b border-border/60 bg-gradient-to-b from-background via-muted/25 to-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Nos convictions
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Ce partenariat repose sur trois convictions que nous ne{' '}
            <span className="font-serif font-normal italic text-primary">
              négocions pas
            </span>
            .
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ce ne sont pas des mots sur une plaquette. Ce sont les règles que nous
            nous imposons, à chaque mission, à chaque étape.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {convictions.map((c, i) => {
            const Icon = getIcon(c.iconName)
            return (
              <Reveal key={c.title} delay={i * 0.1} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-[0_2px_8px_oklch(0.24_0.03_258/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_30px_60px_-30px_oklch(0.37_0.07_258/0.25)]">
                  {/* Filet de lumière au survol */}
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-primary/[0.04] text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-display text-4xl font-semibold tracking-tight text-muted-foreground/20">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
