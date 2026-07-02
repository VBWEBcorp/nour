'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Apparition douce au scroll. Utilisé par les sections de la home pour une
 * mise en scène cohérente (fade + translation courte).
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  className,
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
  once?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y, x: reduce ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
