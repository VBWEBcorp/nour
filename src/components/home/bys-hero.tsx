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
    <section className="relative isolate overflow-hidden bg-[oklch(0.15_0.03_262)] text-white">
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

      {/* ---------- Voile bleu nuit + décor ---------- */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {/* Voile nuit semi-transparent (lisibilité du texte) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, oklch(0.12 0.03 262 / 0.92) 0%, oklch(0.15 0.035 262 / 0.80) 45%, oklch(0.12 0.03 262 / 0.94) 100%)',
          }}
        />
        {/* Halo lumineux */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="absolute left-1/2 top-[-18%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.22_262/0.32),transparent_62%)] blur-2xl"
        />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.6_0.18_240/0.22),transparent_65%)] blur-2xl" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.2_275/0.2),transparent_65%)] blur-2xl" />
        {/* Grille fine */}
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage:
              'linear-gradient(oklch(1 0 0 / 0.035) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-40 lg:pt-44">
        {/* Eyebrow — positionnement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[oklch(0.72_0.16_260)] opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.72_0.16_260)]" />
          </span>
          <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
            Partenaire de croissance des entreprises
          </span>
        </motion.div>

        {/* BYS en grand + By Your Side */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-8"
        >
          {/* Initiales BYS en majuscule + les autres lettres à côté → « By Your Side »
              Serif italique éditorial (Instrument Serif) pour un rendu premium. */}
          <span className="block font-serif text-6xl italic leading-[0.95] tracking-[0.01em] text-white sm:text-7xl lg:text-9xl">
            <span className="text-7xl uppercase not-italic sm:text-8xl lg:text-[10rem]">B</span>y{' '}
            <span className="text-7xl uppercase not-italic sm:text-8xl lg:text-[10rem]">Y</span>our{' '}
            <span className="text-7xl uppercase not-italic sm:text-8xl lg:text-[10rem]">S</span>ide
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          className="mt-8 text-balance font-display text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
        >
          Là où votre entreprise a besoin de nous.
        </motion.p>

        {/* Sous-titre en 3 temps, serif italic */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-4 font-serif text-xl italic leading-snug text-white/70 sm:text-2xl"
        >
          Aujourd&apos;hui. Demain.{' '}
          <span className="text-[oklch(0.82_0.13_260)]">À chaque étape.</span>
        </motion.p>

        {/* Paragraphe positionnement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.38 }}
          className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Recrutement, intérim et coaching : trois expertises complémentaires pour
          sécuriser vos fonctions supports, traverser vos transitions et faire
          grandir vos équipes. Bien plus qu&apos;un cabinet de recrutement, un
          partenaire, à vos côtés.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group/cta relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.2_0.04_262)] shadow-[0_10px_40px_-10px_oklch(0.6_0.2_260/0.5)] transition-all hover:shadow-[0_14px_48px_-10px_oklch(0.6_0.2_260/0.65)] active:translate-y-px sm:w-auto"
          >
            <CalendarCheck className="size-4" aria-hidden />
            <span>Prendre rendez-vous</span>
          </Link>
          <Link
            href="/a-propos"
            className="group/sec inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
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
