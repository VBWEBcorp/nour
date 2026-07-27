'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { WordBand } from '@/components/home/word-band'
import { images } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

export function BysHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.21_0.045_258)] text-white">
      {/* ---------- Image de fond ---------- */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={images.heroCarousel[0]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ---------- Voile bleu nuit ---------- */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.19 0.04 258 / 0.94) 0%, oklch(0.21 0.045 258 / 0.88) 50%, oklch(0.19 0.04 258 / 0.96) 100%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-40 lg:pt-44">
        {/* Eyebrow — positionnement */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-white/55"
        >
          Partenaire de croissance des entreprises
        </motion.p>

        {/* BYS en très grand, « By Your Side » juste en dessous */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-10"
        >
          <span className="block font-display text-[5.5rem] font-semibold uppercase leading-[0.85] tracking-[0.04em] text-white sm:text-[8rem] lg:text-[12rem]">
            BYS
          </span>
          <span className="mt-4 block font-serif text-3xl italic leading-tight text-white/85 sm:text-4xl lg:text-5xl">
            By Your Side
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          className="mx-auto mt-10 max-w-xl text-balance font-display text-xl font-medium leading-[1.35] tracking-[-0.01em] text-white sm:text-2xl"
        >
          Là où votre entreprise a besoin de nous.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Aujourd&apos;hui. Demain. À chaque étape.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.38 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.21_0.045_258)] transition-colors hover:bg-white/90 active:translate-y-px sm:w-auto"
          >
            <CalendarCheck className="size-4" aria-hidden />
            <span>Prendre rendez-vous</span>
          </Link>
          <Link
            href="/a-propos"
            className="group/sec inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <span>Découvrir nos métiers</span>
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/sec:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>

      {/* Bandeau de mots */}
      <WordBand variant="dark" />
    </section>
  )
}
