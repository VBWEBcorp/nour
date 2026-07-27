'use client'

import { heroWords } from '@/lib/bys-content'
import { cn } from '@/lib/utils'

/**
 * Bandeau de mots défilant en continu (Excellence · Confiance · …).
 * Deux pistes dupliquées pour une boucle infinie sans couture.
 */
export function WordBand({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const dark = variant === 'dark'

  const track = (
    <div className="flex shrink-0 items-center gap-10 pr-10 animate-marquee-left sm:gap-14 sm:pr-14">
      {heroWords.map((w) => (
        <span
          key={w}
          className={cn(
            'inline-flex shrink-0 items-center gap-10 font-display text-sm font-medium uppercase tracking-[0.28em] sm:gap-14 sm:text-[15px]',
            dark ? 'text-white/55' : 'text-foreground/55'
          )}
        >
          {w}
          <span
            className={cn(
              'size-1 rounded-full',
              dark ? 'bg-[oklch(0.8_0.055_255)]' : 'bg-primary'
            )}
            aria-hidden
          />
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={cn(
        'relative flex overflow-hidden py-5',
        dark
          ? 'border-t border-white/10 bg-white/[0.02]'
          : 'border-y border-border/60 bg-muted/20',
        className
      )}
      aria-hidden
    >
      {/* Fondus latéraux */}
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28',
          dark
            ? 'bg-gradient-to-r from-[oklch(0.21_0.045_258)] to-transparent'
            : 'bg-gradient-to-r from-background to-transparent'
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28',
          dark
            ? 'bg-gradient-to-l from-[oklch(0.21_0.045_258)] to-transparent'
            : 'bg-gradient-to-l from-background to-transparent'
        )}
      />
      {track}
      {track}
    </div>
  )
}
