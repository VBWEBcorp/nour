'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { Reveal } from '@/components/home/reveal'
import { getIcon } from '@/lib/icons'
import { needs } from '@/lib/bys-content'
import { cn } from '@/lib/utils'

const links = ['/a-propos', '/a-propos', '/candidats'] as const

function NeedRow({
  need,
  index,
}: {
  need: (typeof needs)[number]
  index: number
}) {
  const Icon = getIcon(need.iconName)
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const reversed = index % 2 === 1

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-26, 26])

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20"
    >
      {/* Visuel */}
      <Reveal
        x={reversed ? 40 : -40}
        y={0}
        className={cn('relative', reversed && 'md:order-2')}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-[0_30px_70px_-30px_oklch(0.26_0.05_258/0.35)] ring-1 ring-foreground/[0.06]">
          <motion.div className="absolute -inset-y-8 inset-x-0" style={{ y: imageY }}>
            <Image
              src={need.image}
              alt=""
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              loading="lazy"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.21_0.045_258)]/30 via-transparent to-transparent" />
          {/* Puce numéro */}
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur-sm ring-1 ring-border/60">
            <Icon className="size-3.5 text-primary" aria-hidden />
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
              {need.kicker}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Texte */}
      <Reveal
        x={reversed ? -40 : 40}
        y={0}
        delay={0.1}
        className={cn('max-w-xl', reversed && 'md:order-1')}
      >
        <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          0{index + 1}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[2.35rem]">
          {need.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {need.description}
        </p>
        <Link
          href={links[index]}
          className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          En savoir plus
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </Reveal>
    </div>
  )
}

export function NeedsBlocks() {
  return (
    <section className="relative border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Partenaire de croissance
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            BYS Consulting, ce n&apos;est pas un simple cabinet de recrutement,
            c&apos;est un réel{' '}
            <span className="font-serif italic font-normal text-primary">
              partenaire de croissance
            </span>
            .
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Recrutement, intérim, coaching : nous intervenons là où votre
            organisation en a besoin, avec la même exigence et le même sens de
            l&apos;humain.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24 lg:space-y-28">
          {needs.map((need, i) => (
            <NeedRow key={need.title} need={need} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
