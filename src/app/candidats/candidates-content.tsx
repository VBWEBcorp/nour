'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MapPin, Paperclip, Send, Upload, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getIcon } from '@/lib/icons'
import { candidatesContent } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

type Offer = (typeof candidatesContent.offers.items)[number]

/* ------------------------------------------------------------------ */
/*  Modale de candidature (formulaire + upload CV / lettre)           */
/* ------------------------------------------------------------------ */
function ApplicationModal({
  offer,
  onClose,
}: {
  offer: Offer | null
  onClose: () => void
}) {
  const [cvName, setCvName] = useState<string | null>(null)
  const [lmName, setLmName] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!offer) {
      document.body.style.overflow = ''
      return
    }
    setSent(false)
    setSubmitting(false)
    setError(null)
    setCvName(null)
    setLmName(null)
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [offer, onClose])

  return (
    <AnimatePresence>
      {offer && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Postuler : ${offer.title}`}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-lg rounded-3xl bg-card p-6 shadow-[0_40px_100px_-20px_oklch(0.2_0.02_264/0.5)] sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" aria-hidden />
            </button>

            {sent ? (
              <div className="py-8 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CheckCircle2 className="size-7" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold text-foreground">
                  Candidature envoyée&nbsp;!
                </h2>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  Merci, nous avons bien reçu votre candidature pour{' '}
                  <span className="font-medium text-foreground">{offer.title}</span>.
                  Nous revenons vers vous rapidement.
                </p>
                <Button onClick={onClose} className="mt-6">
                  Fermer
                </Button>
              </div>
            ) : (
              <>
                <div className="pr-8">
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Postuler
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground">
                    {offer.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">{offer.company}</p>
                </div>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (!offer) return
                    const fd = new FormData(e.currentTarget)
                    fd.append('offerTitle', offer.title)
                    fd.append('offerCompany', offer.company ?? '')
                    setSubmitting(true)
                    setError(null)
                    try {
                      const res = await fetch('/api/applications', {
                        method: 'POST',
                        body: fd,
                      })
                      if (!res.ok) {
                        const data = await res.json().catch(() => ({}))
                        throw new Error(data?.error || 'Envoi impossible.')
                      }
                      setSent(true)
                    } catch (err) {
                      setError(err instanceof Error ? err.message : 'Envoi impossible.')
                    } finally {
                      setSubmitting(false)
                    }
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="app-firstname">Prénom</Label>
                      <Input id="app-firstname" name="firstname" placeholder="Jean" autoComplete="given-name" required className="h-11 rounded-xl bg-background/70" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="app-lastname">Nom</Label>
                      <Input id="app-lastname" name="lastname" placeholder="Dupont" autoComplete="family-name" required className="h-11 rounded-xl bg-background/70" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="app-email">Email</Label>
                    <Input id="app-email" name="email" type="email" placeholder="jean@email.fr" autoComplete="email" required className="h-11 rounded-xl bg-background/70" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="app-phone">
                      Téléphone <span className="font-normal text-muted-foreground">(optionnel)</span>
                    </Label>
                    <Input id="app-phone" name="phone" type="tel" placeholder="06 12 34 56 78" autoComplete="tel" className="h-11 rounded-xl bg-background/70" />
                  </div>

                  {/* CV (requis) */}
                  <div className="space-y-2">
                    <Label htmlFor="app-cv">CV</Label>
                    <label
                      htmlFor="app-cv"
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-input bg-background/60 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/[0.03]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Upload className="size-4" aria-hidden />
                      </span>
                      <span className={cn('min-w-0 flex-1 truncate text-sm', cvName ? 'font-medium text-foreground' : 'text-muted-foreground')}>
                        {cvName || 'Déposer votre CV · PDF ou DOC'}
                      </span>
                      <input
                        id="app-cv"
                        name="cv"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setCvName(e.target.files?.[0]?.name ?? null)}
                      />
                    </label>
                  </div>

                  {/* Lettre de motivation (optionnel) */}
                  <div className="space-y-2">
                    <Label htmlFor="app-lm">
                      Lettre de motivation <span className="font-normal text-muted-foreground">(optionnel)</span>
                    </Label>
                    <label
                      htmlFor="app-lm"
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-input bg-background/60 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/[0.03]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Paperclip className="size-4" aria-hidden />
                      </span>
                      <span className={cn('min-w-0 flex-1 truncate text-sm', lmName ? 'font-medium text-foreground' : 'text-muted-foreground')}>
                        {lmName || 'Ajouter une lettre · PDF ou DOC'}
                      </span>
                      <input
                        id="app-lm"
                        name="lettre"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => setLmName(e.target.files?.[0]?.name ?? null)}
                      />
                    </label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="app-msg">
                      Message <span className="font-normal text-muted-foreground">(optionnel)</span>
                    </Label>
                    <textarea
                      id="app-msg"
                      name="message"
                      rows={3}
                      placeholder="Un mot sur votre motivation..."
                      className="w-full rounded-xl border border-input bg-background/70 px-3.5 py-3 text-sm leading-relaxed text-foreground transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg bg-red-500/10 px-3 py-2 text-center text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}
                  <Button type="submit" size="lg" disabled={submitting} className="group w-full">
                    {submitting ? 'Envoi en cours…' : 'Envoyer ma candidature'}
                    {!submitting && (
                      <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Vos fichiers restent confidentiels et ne servent qu&apos;à votre candidature.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function CandidatesContent() {
  const { hero, offers, approach, jobs, process, cta } = candidatesContent
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null)

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Candidats"
      />

      {/* OFFRES D'EMPLOI — première section */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              {offers.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
              {offers.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {offers.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {offers.items.map((offer) => {
              const Icon = getIcon(offer.iconName)
              return (
                <motion.article
                  key={offer.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.2_260/0.18)]"
                >
                  {/* En-tête : catégorie + icon */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-display text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">
                      {offer.category}
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon className="size-4" aria-hidden />
                    </span>
                  </div>

                  {/* Titre + entreprise */}
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                    {offer.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{offer.company}</p>

                  {/* Méta : lieu · contrat · salaire */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden />
                      {offer.location}
                    </span>
                    <span className="size-1 rounded-full bg-border" aria-hidden />
                    <span className="font-medium">{offer.contract}</span>
                    <span className="size-1 rounded-full bg-border" aria-hidden />
                    <span>{offer.salary}</span>
                  </div>

                  {/* Description courte */}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {offer.summary}
                  </p>

                  {/* Bouton Postuler — pousse en bas de la carte */}
                  <div className="mt-6 flex-1" />
                  <button
                    type="button"
                    onClick={() => setActiveOffer(offer)}
                    className="group/btn mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-all hover:bg-primary"
                  >
                    <span>Postuler à cette offre</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />
                  </button>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {approach.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
              {approach.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {approach.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
            className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6"
          >
            {approach.items.map((item) => {
              const Icon = getIcon(item.iconName)
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  className="group rounded-2xl border border-border/60 bg-background p-7 transition-all hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.2_260/0.18)]"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* POSTES — catégories */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {jobs.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
              {jobs.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {jobs.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
            }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {jobs.items.map((item) => {
              const Icon = getIcon(item.iconName)
              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-background p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.examples}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {process.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
              {process.title}
            </h2>
          </motion.div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.items.map((item, i) => (
              <motion.li
                key={item.step}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                }}
                className="relative rounded-2xl border border-border/60 bg-background p-7"
              >
                <span className="font-display text-3xl font-bold tracking-tight text-primary/80">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {i < process.items.length - 1 && (
                  <ArrowRight
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-border lg:block"
                    aria-hidden
                  />
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* CTA — Nous écrire (renvoie vers /contact) */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-primary/80 uppercase">
              {cta.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {cta.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.48_0.22_260/0.5)] transition-all hover:shadow-[0_12px_32px_-8px_oklch(0.48_0.22_260/0.6)]"
              >
                <span>{cta.button}</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ApplicationModal offer={activeOffer} onClose={() => setActiveOffer(null)} />
    </>
  )
}
