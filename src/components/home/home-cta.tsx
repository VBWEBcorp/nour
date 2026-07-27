'use client'

import { ArrowRight, CalendarCheck } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/home/reveal'

export function HomeCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[oklch(0.35_0.095_258)] px-6 py-16 text-center shadow-[0_40px_80px_-40px_oklch(0.35_0.095_258/0.55)] sm:px-12 sm:py-20">
            {/* Décor */}
            <div className="absolute inset-0 -z-10" aria-hidden>
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.4_0.075_258)] via-[oklch(0.33_0.09_258)] to-[oklch(0.27_0.075_258)]" />
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[oklch(0.8_0.05_255/0.25)] blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    'linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                  maskImage:
                    'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)',
                }}
              />
            </div>

            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Votre projet ? Notre mission.
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl md:text-[2.75rem]">
              Un poste à pourvoir, une équipe à faire grandir&nbsp;?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              Échangeons sans engagement. Nous vous proposerons l&apos;approche la
              plus adaptée : recrutement, intérim, coaching ou la bonne
              combinaison des trois.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.3_0.085_258)] shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                <CalendarCheck className="size-4" aria-hidden />
                Prendre rendez-vous
              </Link>
              <Link
                href="/candidats"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
              >
                Vous êtes candidat&nbsp;?
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
