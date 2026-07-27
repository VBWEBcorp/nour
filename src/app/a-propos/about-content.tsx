'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { CtaSection } from '@/components/sections/cta-section'
import { JobFamilies } from '@/components/sections/job-families'
import { PremiumHero } from '@/components/sections/premium-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { editorial, offers, pitchCroise } from '@/lib/bys-content'
import { getIcon } from '@/lib/icons'
import { aboutContent, images as siteImages } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = aboutContent

/* ------------------------------------------------------------------ */
/*  Nos offres — mises en avant en tête de page                        */
/* ------------------------------------------------------------------ */
function OffersSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Nos offres"
          title="Trois façons de travailler ensemble"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {offers.map((offer, i) => {
            const Icon = getIcon(offer.iconName)
            return (
              <motion.a
                key={offer.label}
                href={offer.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/12">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                  {offer.label}
                </h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  En savoir plus
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Présentations éditoriales : Recruter / Coacher / Intérim           */
/* ------------------------------------------------------------------ */
function EditorialBlock({
  item,
  index,
}: {
  item: (typeof editorial)[number]
  index: number
}) {
  const Icon = getIcon(item.iconName)
  const advantages = 'advantages' in item ? item.advantages : undefined
  const alt = index % 2 === 1

  return (
    <section
      id={item.key}
      className={`scroll-mt-24 border-b border-border ${
        alt ? 'bg-muted/40' : 'bg-background'
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease }}
        >
          {/* En-tête */}
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/12">
              <Icon className="size-4.5" aria-hidden />
            </span>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {item.kicker}
            </p>
          </div>

          {/* Définition Larousse */}
          <div className="mt-8 border-l-2 border-primary/25 pl-6 sm:pl-8">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              <span className="text-primary/35">«</span> {item.verb}{' '}
              <span className="text-primary/35">»</span>
            </h2>
            <ol className="mt-5 space-y-2">
              {item.definition.map((d, i) => (
                <li
                  key={d}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                >
                  <span className="shrink-0 tabular-nums text-primary/50">
                    {i + 1}.
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 font-serif text-sm italic text-muted-foreground/80">
              — {item.source}
            </p>
          </div>

          {/* Corps du texte */}
          <div className="mt-10 max-w-3xl space-y-5">
            {item.paragraphs.map((p) => (
              <p
                key={p}
                className="text-pretty text-base leading-[1.75] text-foreground/80 sm:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Chute — en serif italique */}
          <div className="mt-10 border-t border-border pt-8">
            {item.highlight.map((h) => (
              <p
                key={h}
                className="font-serif text-xl italic leading-snug text-primary sm:text-2xl"
              >
                {h}
              </p>
            ))}
          </div>

          {/* Avantages (intérim uniquement) */}
          {advantages && (
            <div className="mt-10 rounded-2xl border border-border bg-card p-7">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Les avantages de l&apos;intérim
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {advantages.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{a}</span>
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
/*  Pitch croisé : Recrutement × Coaching                              */
/* ------------------------------------------------------------------ */
function PitchCroise() {
  return (
    <section className="border-b border-border bg-[oklch(0.21_0.045_258)] text-white">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            {pitchCroise.eyebrow}
          </p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            {pitchCroise.title}
          </h2>

          <div className="mt-9 max-w-3xl space-y-5">
            {pitchCroise.paragraphs.map((p) => (
              <p
                key={p}
                className="text-pretty text-base leading-[1.75] text-white/70 sm:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Les 4 actions */}
          <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.04] p-7">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
              {pitchCroise.actionsTitle}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {pitchCroise.actions.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-2.5 text-[15px] leading-relaxed text-white/85"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[oklch(0.84_0.05_255)]"
                    aria-hidden
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 max-w-2xl font-serif text-xl italic leading-snug text-[oklch(0.86_0.045_255)] sm:text-2xl">
            {pitchCroise.closing}
          </p>

          <div className="mt-8 max-w-3xl space-y-4">
            {pitchCroise.outro.map((p) => (
              <p
                key={p}
                className="text-pretty text-base leading-[1.75] text-white/70 sm:text-[17px]"
              >
                {p}
              </p>
            ))}
          </div>

          <p className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {pitchCroise.signature}
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.21_0.045_258)] transition-colors hover:bg-white/90 active:translate-y-px"
          >
            Prendre rendez-vous
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Nos valeurs — timeline                                             */
/* ------------------------------------------------------------------ */
function ValuesTimeline({ values }: { values: any[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative mx-auto mt-14 max-w-4xl">
      {/* Ligne verticale (fond) */}
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
      />
      {/* Ligne verticale (remplissage au scroll) */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="absolute left-4 top-0 w-px bg-primary md:left-1/2 md:-translate-x-1/2"
      />

      <ul className="space-y-12 md:space-y-16">
        {values.map((v: any, i: number) => {
          const Icon = getIcon(v.iconName ?? aboutContent.values[i]?.iconName)
          const isRight = i % 2 === 1
          return (
            <li key={v.title || i} className="relative">
              {/* Puce */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease, delay: 0.15 }}
                className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-background ring-1 ring-primary/25">
                  <Icon className="size-4 text-primary" aria-hidden />
                </span>
              </motion.div>

              {/* Carte */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 20 : -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
                className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isRight ? 'md:ml-[calc(50%+2.5rem)]' : 'md:mr-[calc(50%+2.5rem)]'
                }`}
              >
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[11px] font-bold tracking-[0.2em] text-primary">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.01em] text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
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
/*  Équipe — photos & présentations, en fin de page                    */
/* ------------------------------------------------------------------ */
function TeamSection({ team }: { team: typeof defaults.team }) {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {team.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[44px]">
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
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/30"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={m.photo}
                  alt={`Portrait de ${m.name}`}
                  fill
                  sizes="(min-width:768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[oklch(0.19_0.04_258)]/80 via-[oklch(0.19_0.04_258)]/20 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[28px]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/80">{m.role}</p>
                </div>
              </div>

              {/* Bio + points clés */}
              <div className="p-7 sm:p-8">
                <p className="text-[15px] leading-relaxed text-muted-foreground">{m.bio}</p>

                <ul className="mt-6 space-y-2.5">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
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

/* ------------------------------------------------------------------ */

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = data.hero ?? defaults.hero
  const team = data.team ?? defaults.team
  const values = data.values ?? defaults.values

  return (
    <>
      <PremiumHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="À propos"
        compact
        backgroundImage={siteImages.servicesHero}
      />

      {/* 1 — Les offres, mises en avant */}
      <OffersSection />

      {/* 2 — Présentation de chaque métier, en toutes lettres */}
      {editorial.map((item, i) => (
        <EditorialBlock key={item.key} item={item} index={i} />
      ))}

      {/* 3 — Pitch croisé Recrutement × Coaching */}
      <PitchCroise />

      {/* 4 — Les métiers sur lesquels nous intervenons */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle
            eyebrow="Nos périmètres"
            title="Les métiers sur lesquels BYS Consulting intervient"
          />
          <JobFamilies className="mt-14" />
        </div>
      </section>

      {/* 5 — Nos valeurs */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui nous guide au quotidien" />
          <ValuesTimeline values={values} />
        </div>
      </section>

      {/* 6 — Photos & présentations de l'équipe, à la fin */}
      <TeamSection team={team} />

      <CtaSection />
    </>
  )
}
