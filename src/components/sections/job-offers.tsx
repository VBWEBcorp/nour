'use client'

import { ArrowRight, ArrowUpRight, ChevronDown, MapPin } from 'lucide-react'

import { nicokaCareerUrl } from '@/lib/nicoka'
import type { JobBlock, JobOffer } from '@/lib/nicoka-jobs'
import { candidatesContent } from '@/lib/site-content'

/** Regroupe les puces qui se suivent dans une même liste. */
function Blocks({ blocks }: { blocks: JobBlock[] }) {
  const groups: JobBlock[][] = []
  for (const b of blocks) {
    const last = groups[groups.length - 1]
    if (b.type === 'item' && last?.[0].type === 'item') last.push(b)
    else groups.push([b])
  }
  return (
    <div className="mt-2 space-y-2.5 text-[15px] leading-relaxed text-muted-foreground">
      {groups.map((g, i) =>
        g[0].type === 'item' ? (
          <ul key={i} className="list-disc space-y-1.5 pl-5">
            {g.map((b, j) => (
              <li key={j}>{b.text}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{g[0].text}</p>
        )
      )}
    </div>
  )
}

/** Offres publiées dans Nicoka ; « Postuler » ouvre le formulaire du site. */
export function JobOffers({
  offers,
  onApply,
}: {
  offers: JobOffer[] | null
  onApply: (offer: { title: string; company: string }) => void
}) {
  const { eyebrow, title } = candidatesContent.offers

  return (
    <section id="offres" className="scroll-mt-24 border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {offers && offers.length === 0
              ? "Aucune offre n'est en ligne en ce moment. Vous pouvez nous adresser une candidature spontanée."
              : "Retrouvez ici l'ensemble des postes que nous recrutons actuellement. Les candidatures se font directement depuis chaque offre, et vous pouvez aussi nous adresser une candidature spontanée."}
          </p>
        </div>

        {offers && offers.length > 0 && (
          <div className="mx-auto mt-14 max-w-4xl space-y-5">
            {offers.map((offer) => (
              <article
                key={offer.id}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/30 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                      {offer.title}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                      {offer.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" aria-hidden />
                          {offer.location}
                        </span>
                      )}
                      {offer.facts.map((fact) => (
                        <span key={fact}>{fact}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onApply({
                        title: offer.title,
                        company: [offer.location, offer.facts[0]].filter(Boolean).join(' · '),
                      })
                    }
                    className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_12px_32px_-8px_oklch(0.35_0.095_258/0.6)]"
                  >
                    <span>Postuler à cette offre</span>
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </button>
                </div>

                {offer.sections.length > 0 && (
                  <details className="group/d mt-5 border-t border-border/60 pt-2">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
                      <span>Afficher le détail du poste</span>
                      <ChevronDown
                        className="size-4 transition-transform duration-200 group-open/d:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <div className="space-y-6 pt-3">
                      {offer.sections.map((s) => (
                        <div key={s.title}>
                          <p className="font-display text-base font-semibold text-foreground">
                            {s.title}
                          </p>
                          <Blocks blocks={s.blocks} />
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Nicoka n'a pas répondu : le lien vers le site carrière prend le relais. */}
        {offers === null && nicokaCareerUrl && (
          <div className="mt-9 flex justify-center">
            <a
              href={nicokaCareerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Ouvrir toutes nos offres dans un nouvel onglet
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
