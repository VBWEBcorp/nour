'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { getIcon } from '@/lib/icons'
import { jobFamilies } from '@/lib/bys-content'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Les métiers sur lesquels BYS Consulting intervient.
 *
 * - par défaut : une carte par famille, avec tous les intitulés de postes ;
 * - `compact` : uniquement les familles, pour un rappel en page Candidats.
 */
export function JobFamilies({
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
      viewport={{ once: true, amount: 0.05 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
      className={cn(
        compact
          ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid gap-5 md:grid-cols-2',
        className
      )}
    >
      {jobFamilies.map((family) => {
        const Icon = getIcon(family.iconName)
        return (
          <motion.li
            key={family.title}
            variants={{
              hidden: { opacity: 0, y: reduce ? 0 : 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className={cn(
              'rounded-2xl border border-border bg-card transition-colors hover:border-primary/30',
              compact ? 'p-5' : 'p-6 sm:p-7'
            )}
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/12">
                <Icon className="size-4.5" aria-hidden />
              </span>
              <h3 className="font-display text-[17px] font-semibold leading-tight tracking-tight text-foreground">
                {family.title}
              </h3>
            </div>

            {compact ? (
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {family.jobs.slice(0, 4).join(' · ')}
                {family.jobs.length > 4 && '…'}
              </p>
            ) : (
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                {family.jobs.map((job) => (
                  <li
                    key={job}
                    className="rounded-lg bg-muted px-2.5 py-1 text-[13px] leading-snug text-muted-foreground"
                  >
                    {job}
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
