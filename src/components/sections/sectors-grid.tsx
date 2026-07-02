'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { getIcon } from '@/lib/icons'
import { sectors } from '@/lib/bys-content'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

export function SectorsGrid({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  const reduce = useReducedMotion()

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
      className={cn(
        'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5',
        className
      )}
    >
      {sectors.map((sector) => {
        const Icon = getIcon(sector.iconName)
        return (
          <motion.li
            key={sector.title}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_50px_-28px_oklch(0.5_0.2_262/0.3)] sm:p-6"
          >
            {/* Halo au survol */}
            <span
              className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/12 to-primary/[0.04] text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-foreground">
              {sector.title}
            </h3>
            {!compact && (
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {sector.description}
              </p>
            )}
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
