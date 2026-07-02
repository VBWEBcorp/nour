import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="BYS Consulting — Accueil"
      className={cn(
        'group inline-flex items-center transition-opacity hover:opacity-90',
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="BYS Consulting"
        width={317}
        height={189}
        priority
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </Link>
  )
}
