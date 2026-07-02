'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { CtaSection } from '@/components/sections/cta-section'
import { PremiumHero } from '@/components/sections/premium-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { editorial, pitchCroise } from '@/lib/bys-content'
import { getIcon } from '@/lib/icons'
import { aboutContent, images as siteImages } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = aboutContent

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
/*  Nos métiers — 3 cartes simples (Recruter / Coacher / Intérim)     */
/* ------------------------------------------------------------------ */
function MetiersCards() {
  return (
    <section className="border-b border-border/60 bg-[oklch(0.985_0.006_260)] dark:bg-[oklch(0.15_0.02_260)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos métiers"
          title="Trois métiers, une même exigence de l'humain"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {editorial.map((e, i) => {
            const Icon = getIcon(e.iconName)
            return (
              <motion.article
                key={e.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-[0_2px_10px_oklch(0.2_0.02_264/0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_40px_70px_-30px_oklch(0.5_0.2_262/0.3)]"
              >
                {/* Filet de lumière au survol */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                {/* Halo d'angle au survol */}
                <span
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <span className="relative inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/[0.04] text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-6" aria-hidden />
                </span>

                <p className="relative mt-6 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {e.kicker}
                </p>
                <h3 className="relative mt-1.5 font-display text-[26px] font-semibold leading-tight tracking-tight text-foreground">
                  <span className="text-primary/40">«</span> {e.verb}{' '}
                  <span className="text-primary/40">»</span>
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {e.summary}
                </p>

                {/* Signature */}
                <div className="relative mt-auto pt-6">
                  <span
                    className="block h-px w-10 bg-gradient-to-r from-primary/60 to-transparent"
                    aria-hidden
                  />
                  <p className="mt-4 font-serif text-lg italic leading-snug text-primary">
                    {e.punch}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Carte large : statement Recrutement × Coaching (bleu nuit) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="relative mt-6 overflow-hidden rounded-3xl bg-[oklch(0.16_0.03_262)] px-8 py-14 text-center sm:px-14 sm:py-16"
        >
          {/* Décor */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.2_262/0.28),transparent_65%)] blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  'linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage:
                  'radial-gradient(ellipse 70% 80% at 50% 0%, #000 30%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 70% 80% at 50% 0%, #000 30%, transparent 100%)',
              }}
            />
          </div>

          <div className="relative">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[oklch(0.8_0.13_260)]">
              {pitchCroise.eyebrow}
            </p>
            <h3 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              {pitchCroise.title}
            </h3>
            <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-snug text-[oklch(0.82_0.13_260)] sm:text-xl">
              {pitchCroise.closing}
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[oklch(0.2_0.04_262)] shadow-[0_10px_40px_-10px_oklch(0.6_0.2_260/0.5)] transition-all hover:shadow-[0_14px_48px_-10px_oklch(0.6_0.2_260/0.65)] active:translate-y-px"
            >
              Prendre rendez-vous
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
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
      <PremiumHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="À propos"
        compact
        backgroundImage={siteImages.servicesHero}
      />

      {/* Nos métiers : 3 cartes + carte large « Recruter, c'est bien… » */}
      <MetiersCards />

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
