import { cn } from '@/lib/utils'

/**
 * Monogramme « bc » de BYS Consulting — deux glyphes entrelacés (b + c).
 * Tracé en SVG (currentColor) : net à toute taille et adaptatif au thème
 * (bleu nuit en clair, blanc en sombre). Pour utiliser le fichier officiel,
 * remplacer ce tracé par le SVG fourni sans toucher au reste.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="8 4 58 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="BYS Consulting"
    >
      {/* b — hampe + panse */}
      <path d="M15 33 V 11" />
      <circle cx="27" cy="33" r="12" />
      {/* c — anneau ouvert à droite, entrelacé avec le b */}
      <path d="M54.4 25.6 A 12 12 0 1 0 54.4 40.4" />
    </svg>
  )
}
