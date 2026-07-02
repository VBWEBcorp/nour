'use client'

import { Reveal } from '@/components/home/reveal'
import { getIcon } from '@/lib/icons'
import { whyBys } from '@/lib/bys-content'

export function WhyBys() {
  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.15_0.03_262)] text-white">
      {/* Décor */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.17_0.04_262)] to-[oklch(0.14_0.03_262)]" />
        <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.2_262/0.22),transparent_65%)] blur-2xl" />
        <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.18_240/0.18),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[oklch(0.8_0.13_260)]">
            Pourquoi choisir BYS Consulting
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl md:text-[2.6rem]">
            Un partenaire qui vous fait gagner sur tous les tableaux
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            Nous ne nous contentons pas de vous envoyer des CV. Nous devenons une
            extension de votre équipe, avec une exigence rare et une lecture fine
            de votre marché.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyBys.map((item, i) => {
            const Icon = getIcon(item.iconName)
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
                  <span className="absolute right-6 top-6 font-display text-xs font-semibold tracking-[0.18em] text-white/20">
                    0{i + 1}
                  </span>
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.6_0.2_262)] to-[oklch(0.5_0.2_255)] text-white shadow-[0_8px_24px_-8px_oklch(0.6_0.2_262/0.6)] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
