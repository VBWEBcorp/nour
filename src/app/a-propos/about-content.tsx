'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Home, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { CtaSection } from '@/components/sections/cta-section'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { editorial, offers, pitchCroise } from '@/lib/bys-content'
import { getIcon } from '@/lib/icons'
import { aboutContent } from '@/lib/site-content'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = aboutContent

function splitTitle(title: string): { lead: string; accent: string } {
  const words = title.trim().split(/\s+/)
  if (words.length <= 2) return { lead: '', accent: title }
  const accentCount = Math.min(2, Math.max(1, Math.floor(words.length / 3)))
  return {
    lead: words.slice(0, words.length - accentCount).join(' '),
    accent: words.slice(words.length - accentCount).join(' '),
  }
}

function AboutHero({ hero }: { hero: typeof defaults.hero }) {
  const { lead, accent } = splitTitle(hero.title)

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-[oklch(0.975_0.012_260)] dark:bg-[oklch(0.16_0.02_260)]">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="pt-24 sm:pt-28">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <Home className="size-3" aria-hidden />
                <span>Accueil</span>
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3 text-muted-foreground/50" aria-hidden />
              <span aria-current="page" className="font-medium text-foreground">
                À propos
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-20 lg:pb-28">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Eyebrow en mono */}
            <p className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-primary">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 font-display text-balance pb-1 text-4xl leading-[1.15] font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[56px]">
              {lead ? (
                <>
                  {lead}{' '}
                  <span className="relative inline-block pb-1 font-serif italic font-normal tracking-[-0.01em] text-primary">
                    {accent}
                  </span>
                </>
              ) : (
                accent
              )}
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.description}
            </p>

            {/* Stats inline */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {defaults.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease }}
                >
                  <div className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image preview card glassy */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative"
          >
            {/* Glow violet derrière */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse at center, oklch(0.55 0.2 260 / 0.3) 0%, transparent 70%)',
              }}
            />

            <div className="relative overflow-hidden rounded-2xl bg-background/40 p-1.5 shadow-[0_30px_60px_-20px_oklch(0.2_0.02_264/0.3)] backdrop-blur-xl ring-1 ring-border/60">
              {/* Bordure dégradée */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl p-px"
                aria-hidden
                style={{
                  background:
                    'linear-gradient(135deg, oklch(0.55 0.2 260 / 0.4) 0%, oklch(0.91 0.012 264 / 0.5) 50%, oklch(0.55 0.2 260 / 0.4) 100%)',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[3/4]">
                <Image
                  src={hero.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  priority
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>

            {/* Floating badge sur l'image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease }}
              className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-background/90 px-4 py-3 shadow-[0_20px_40px_-12px_oklch(0.2_0.02_264/0.25)] backdrop-blur-xl ring-1 ring-border/60 sm:block lg:-bottom-6 lg:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="size-7 rounded-full ring-2 ring-background"
                      style={{
                        background: `linear-gradient(135deg, oklch(${0.55 + i * 0.05} 0.18 ${260 + i * 15} / 0.8), oklch(${0.65 + i * 0.04} 0.15 ${285 + i * 10} / 0.6))`,
                      }}
                      aria-hidden
                    />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-foreground">Une équipe à votre écoute</div>
                  <div className="text-muted-foreground">Réponse sous 24h</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TeamSection({ team }: { team: typeof defaults.team }) {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            {team.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-balance text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
            {team.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {team.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10"
        >
          {team.members.map((m) => (
            <motion.article
              key={m.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_20px_50px_-20px_oklch(0.2_0.02_264/0.18)] transition-all hover:shadow-[0_30px_70px_-20px_oklch(0.55_0.2_260/0.25)]"
            >
              {/* Bordure dégradée subtile */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    'linear-gradient(135deg, oklch(0.55 0.2 260 / 0.4) 0%, oklch(0.91 0.012 264 / 0.5) 50%, oklch(0.55 0.2 260 / 0.4) 100%)',
                  WebkitMask:
                    'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Portrait — aspect 4/5, zoom léger au hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={m.photo}
                  alt={`Portrait de ${m.name}`}
                  fill
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Voile dégradé bas pour lisibilité */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  aria-hidden
                />
                {/* Nom + rôle sur l'image */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/80">{m.role}</p>
                </div>
              </div>

              {/* Bio + highlights */}
              <div className="p-7 sm:p-8">
                <p className="text-[15px] leading-relaxed text-muted-foreground">{m.bio}</p>

                <ul className="mt-6 space-y-2.5">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                        aria-hidden
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="size-3">
                          <path
                            d="M2.5 6L5 8.5L9.5 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {m.linkedIn && (
                  <a
                    href={m.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="size-4" aria-hidden />
                    <span>Voir le profil de {m.firstName} sur LinkedIn</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ValuesTimeline({ values }: { values: any[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative mx-auto mt-14 max-w-4xl">
      {/* Vertical line (background) */}
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
      />
      {/* Vertical line (animated fill) */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-[oklch(0.6_0.18_260)] md:left-1/2 md:-translate-x-1/2"
      />

      <ul className="space-y-12 md:space-y-16">
        {values.map((v: any, i: number) => {
          const Icon = getIcon(v.iconName ?? aboutContent.values[i]?.iconName)
          const isRight = i % 2 === 1
          return (
            <li key={v.title || i} className="relative">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease, delay: 0.15 }}
                className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
              >
                <span className="relative flex size-10 items-center justify-center rounded-full bg-background ring-1 ring-primary/30 shadow-[0_0_20px_oklch(0.55_0.2_260/0.4)] dark:shadow-[0_0_20px_oklch(0.55_0.2_260/0.5)]">
                  {/* Overlay gradient sur fond opaque */}
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-primary/5"
                    aria-hidden
                  />
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                  <Icon className="relative size-4 text-primary" aria-hidden />
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 20 : -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
                className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isRight ? 'md:ml-[calc(50%+2.5rem)]' : 'md:mr-[calc(50%+2.5rem)]'
                }`}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-card/80 p-6 shadow-[0_8px_24px_-12px_oklch(0.2_0.02_264/0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_oklch(0.2_0.02_264/0.25)]">
                  {/* Bordure dégradée premium */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl p-px transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        'linear-gradient(135deg, oklch(0.55 0.2 260 / 0.35) 0%, oklch(0.91 0.012 264 / 0.6) 50%, oklch(0.55 0.2 260 / 0.35) 100%)',
                      WebkitMask:
                        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  {/* Soft gradient wash on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[11px] font-bold tracking-[0.2em] text-primary">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.01em] text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Offres mises en avant                                             */
/* ------------------------------------------------------------------ */
function OffersStrip() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle eyebrow="Nos offres" title="Trois métiers, une même exigence" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {offers.map((o, i) => {
            const Icon = getIcon(o.iconName)
            return (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Link
                  href={o.href}
                  className="group relative flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[0_2px_8px_oklch(0.2_0.02_264/0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_30px_60px_-30px_oklch(0.5_0.2_262/0.25)]"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                    {o.label}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {o.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    En savoir plus
                    <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Présentation éditoriale d'un métier (définition Larousse + texte) */
/* ------------------------------------------------------------------ */
function EditorialBlock({
  item,
  index,
}: {
  item: (typeof editorial)[number]
  index: number
}) {
  const alt = index % 2 === 1

  return (
    <section
      className={cn(
        'border-b border-border/60',
        alt
          ? 'bg-[oklch(0.975_0.012_260)] dark:bg-[oklch(0.16_0.02_260)]'
          : 'bg-background'
      )}
    >
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {item.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">
            <span className="text-primary/40">«</span> {item.verb}{' '}
            <span className="text-primary/40">»</span>
          </h2>

          {/* Définition Larousse */}
          <figure className="mt-8 rounded-2xl border-l-2 border-primary/40 bg-muted/40 px-6 py-5">
            <ol className="space-y-2 text-[15px] leading-relaxed text-muted-foreground">
              {item.definition.map((d, i) => (
                <li key={i}>
                  <span className="font-semibold text-foreground">{i + 1}.</span> {d}
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 text-right font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">
              {item.source}
            </figcaption>
          </figure>

          {/* Corps de texte */}
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {item.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Chute mise en avant */}
          <div className="mt-8 space-y-1">
            {item.highlight.map((h, i) => (
              <p
                key={i}
                className="font-serif text-xl italic leading-snug text-foreground sm:text-2xl"
              >
                {h}
              </p>
            ))}
          </div>

          {/* Avantages (intérim uniquement) */}
          {'advantages' in item && item.advantages && (
            <div className="mt-10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Les avantages de l&apos;intérim
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {item.advantages.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Pitch croisé Recrutement × Coaching                               */
/* ------------------------------------------------------------------ */
function PitchCroise() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-[oklch(0.15_0.03_262)] text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.17_0.04_262)] to-[oklch(0.14_0.03_262)]" />
        <div className="absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.2_262/0.18),transparent_65%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[oklch(0.8_0.13_260)]">
            {pitchCroise.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl">
            {pitchCroise.title}
          </h2>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {pitchCroise.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {pitchCroise.actions.map((a) => (
              <li key={a} className="flex items-start gap-3 text-[15px] text-white/85">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[oklch(0.72_0.16_260)]/20 text-[oklch(0.82_0.13_260)]"
                  aria-hidden
                >
                  <svg viewBox="0 0 12 12" fill="none" className="size-3">
                    <path
                      d="M2.5 6L5 8.5L9.5 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {a}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-serif text-xl italic leading-snug text-[oklch(0.82_0.13_260)] sm:text-2xl">
            {pitchCroise.closing}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = data.hero ?? defaults.hero
  const team = data.team ?? defaults.team
  const values = data.values ?? defaults.values

  return (
    <>
      <AboutHero hero={hero} />

      {/* Offres mises en avant */}
      <OffersStrip />

      {/* Présentations éditoriales : Recruter / Coacher / Intérim */}
      {editorial.map((item, i) => (
        <EditorialBlock key={item.key} item={item} index={i} />
      ))}

      {/* Pitch croisé Recrutement × Coaching */}
      <PitchCroise />

      {/* Nos valeurs */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui nous guide au quotidien" />
          <ValuesTimeline values={values} />
        </div>
      </section>

      {/* Équipe & présentations — à la fin */}
      <TeamSection team={team} />

      <CtaSection />
    </>
  )
}
