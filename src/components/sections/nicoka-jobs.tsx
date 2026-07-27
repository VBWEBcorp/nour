'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { nicokaCareerUrl, nicokaEmbedUrl } from '@/lib/nicoka'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Offres d'emploi servies par Nicoka, intégrées en iframe (`jobOnly=1`).
 *
 * L'iframe est cross-domain : le navigateur ne nous laisse pas lire la hauteur
 * réelle du contenu, on fixe donc une hauteur généreuse et l'iframe défile en
 * interne si les offres dépassent. Ajuster `HEIGHT` une fois le volume réel
 * d'offres connu.
 */
const HEIGHT = 1500

export function NicokaJobs() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Offres en cours
          </p>
          <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
            Nos offres d&apos;emploi
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Retrouvez ici l&apos;ensemble des postes que nous recrutons
            actuellement. Les candidatures se font directement depuis chaque
            offre.
          </p>
        </motion.div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
          <iframe
            src={nicokaEmbedUrl}
            title="Offres d'emploi BYS Consulting"
            loading="lazy"
            className="block w-full border-0"
            style={{ height: HEIGHT }}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={nicokaCareerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Ouvrir toutes nos offres dans un nouvel onglet
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  )
}
