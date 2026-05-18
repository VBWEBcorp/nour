'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

import { getIcon } from '@/lib/icons'
import { methodContent } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

export function MethodSection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-30, 30])

  return (
    <section
      ref={ref}
      className="relative border-b border-border/60 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Bloc image + texte */}
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image — slide depuis la droite + parallax */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] ring-1 ring-foreground/5">
              <motion.div className="absolute inset-0 -inset-y-8" style={{ y: imageY }}>
                <Image
                  src={methodContent.image}
                  alt=""
                  fill
                  sizes="(min-width:768px) 45vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>
              {/* Badge "Leadership 3.0" sur l'image */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-1.5 backdrop-blur-sm ring-1 ring-border/60">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase">
                  Leadership 3.0
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="order-1 max-w-xl md:order-2"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: reduceMotion ? 0 : 32 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
              }}
              className="inline-block font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase"
            >
              {methodContent.eyebrow}
            </motion.span>

            <motion.h2
              variants={{
                hidden: { opacity: 0, x: reduceMotion ? 0 : 32 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
              }}
              className="mt-5 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[48px]"
            >
              {methodContent.title}
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
              className="mt-7 text-[15px] leading-relaxed text-muted-foreground sm:text-base"
            >
              {methodContent.description}
            </motion.p>
          </motion.div>
        </div>

        {/* 3 piliers — cards en dessous */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mt-20 grid gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-24"
        >
          {methodContent.pillars.map((pillar, i) => {
            const Icon = getIcon(pillar.iconName)
            return (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-7 transition-all hover:border-primary/30 hover:shadow-[0_20px_50px_-20px_oklch(0.55_0.2_285/0.18)]"
              >
                {/* Numéro discret */}
                <span className="absolute right-5 top-5 font-display text-xs font-semibold tracking-[0.18em] text-muted-foreground/50">
                  0{i + 1}
                </span>

                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" aria-hidden />
                </span>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
