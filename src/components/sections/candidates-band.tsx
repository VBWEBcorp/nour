'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { candidatesBandContent } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

export function CandidatesBand() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 via-background to-background px-6 py-8 sm:px-10 sm:py-10"
        >
          {/* Halo discret côté droit */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-primary/[0.06] blur-3xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-primary/80 uppercase">
                {candidatesBandContent.eyebrow}
              </p>
              <h2 className="mt-2.5 font-display text-balance text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                {candidatesBandContent.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {candidatesBandContent.description}
              </p>
            </div>

            <Link
              href={candidatesBandContent.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border/80 bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-[0_4px_14px_-4px_oklch(0.2_0.02_264/0.12)] transition-all hover:border-primary/40 hover:bg-foreground hover:text-background"
            >
              <span>{candidatesBandContent.button}</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
