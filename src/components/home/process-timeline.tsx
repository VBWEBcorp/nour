'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Reveal } from '@/components/home/reveal'
import { getIcon } from '@/lib/icons'
import { processSteps } from '@/lib/bys-content'

const ease = [0.22, 1, 0.36, 1] as const

export function ProcessTimeline() {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.21_0.045_258)] text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.19_0.04_258)] via-[oklch(0.22_0.05_258)] to-[oklch(0.19_0.04_258)]" />
        <div className="absolute left-1/2 top-1/4 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.4_0.07_258/0.16),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[oklch(0.84_0.05_255)]">
            Notre process
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl md:text-[2.6rem]">
            Une méthode rigoureuse, en cinq étapes
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            De la compréhension de votre besoin à l&apos;intégration du talent,
            chaque étape est pensée pour sécuriser la réussite, la vôtre comme
            celle du candidat.
          </p>
        </Reveal>

        {/* ---------- Timeline ---------- */}
        <div className="relative mt-20">
          {/* Ligne horizontale (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden lg:block"
            aria-hidden
          >
            <div className="mx-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          {/* Ligne verticale (mobile / tablette) */}
          <div
            className="pointer-events-none absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-white/25 via-white/15 to-transparent lg:hidden"
            aria-hidden
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((s, i) => {
              const Icon = getIcon(s.iconName)
              return (
                <motion.li
                  key={s.step}
                  initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                  className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[oklch(0.26_0.05_258)] shadow-[0_10px_30px_-10px_oklch(0.44_0.08_258/0.5)] backdrop-blur-sm">
                    <span
                      className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,oklch(0.44_0.08_258/0.35),transparent_70%)]"
                      aria-hidden
                    />
                    <Icon className="relative size-6 text-[oklch(0.86_0.045_255)]" aria-hidden />
                    <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[oklch(0.26_0.05_258)]">
                      {i + 1}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="pt-1 lg:mt-6 lg:px-2 lg:pt-0">
                    <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Étape {s.step}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {s.description}
                    </p>
                    {'substeps' in s && s.substeps && (
                      <ul className="mt-3 space-y-1.5 text-left">
                        {s.substeps.map((ss) => (
                          <li
                            key={ss}
                            className="flex items-start gap-2 text-xs leading-relaxed text-white/55"
                          >
                            <span
                              className="mt-1.5 size-1 shrink-0 rounded-full bg-[oklch(0.8_0.055_255)]"
                              aria-hidden
                            />
                            <span>{ss}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <Reveal delay={0.15} className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.26_0.05_258)] shadow-[0_10px_40px_-10px_oklch(0.44_0.08_258/0.5)] transition-all hover:shadow-[0_14px_48px_-10px_oklch(0.44_0.08_258/0.65)] active:translate-y-px"
          >
            Lancer votre recrutement
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
