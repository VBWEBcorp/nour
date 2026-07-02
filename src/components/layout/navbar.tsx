'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { cn } from '@/lib/utils'

interface NavLink {
  to: string
  label: string
}

const defaultLinks: NavLink[] = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Nos services' },
  { to: '/secteurs', label: 'Secteurs' },
  { to: '/candidats', label: 'Candidats' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [links] = useState<NavLink[]>(defaultLinks)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        // Barre pleine largeur au fond bleu clair EXACT du logo (#e4ecfc) — 100% opaque
        'fixed inset-x-0 top-0 z-50 border-b bg-[#e4ecfc] transition-all duration-300',
        scrolled
          ? 'border-[#0b1e3b]/10 shadow-[0_10px_30px_-16px_rgba(11,30,59,0.35)]'
          : 'border-[#0b1e3b]/[0.06]'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Navigation principale"
          onMouseLeave={() => setHoveredKey(null)}
        >
          {links.map((l) => {
            const isActive = pathname === l.to
            const isHovered = hoveredKey === l.to
            return (
              <Link
                key={l.to}
                href={l.to}
                onMouseEnter={() => setHoveredKey(l.to)}
                className={cn(
                  'group relative whitespace-nowrap rounded-xl px-3 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b50c4]/40',
                  isActive
                    ? 'text-[#0b1e3b]'
                    : 'text-[#0b1e3b]/60 hover:text-[#0b1e3b]'
                )}
              >
                {/* Hover background qui suit la souris */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-xl bg-[#0b1e3b]/[0.06] ring-1 ring-[#0b1e3b]/[0.04]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    aria-hidden
                  />
                )}

                <span className={cn('relative', isActive && 'font-semibold')}>
                  {l.label}
                </span>

                {/* Underline fin animé sous le lien actif */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-3 bottom-0.5 h-[2px] rounded-full bg-[#2b50c4]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    aria-hidden
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="text-[#0b1e3b]/45 hover:bg-[#0b1e3b]/[0.05] hover:text-[#0b1e3b]" />

          {/* CTA premium : gradient + shimmer + arrow */}
          <Link
            href="/contact"
            className="group/cta relative hidden h-9 items-center gap-1.5 overflow-hidden rounded-xl px-3.5 text-[13px] font-medium text-white shadow-[0_4px_14px_-4px_rgba(20,40,120,0.5)] transition-all hover:shadow-[0_6px_20px_-4px_rgba(20,40,120,0.6)] active:translate-y-px sm:inline-flex"
          >
            {/* Fond gradient */}
            <span
              className="absolute inset-0 bg-gradient-to-br from-[#2b50c4] via-[#2246b5] to-[#173a99]"
              aria-hidden
            />
            {/* Shimmer animé au hover */}
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/cta:translate-x-full"
              aria-hidden
            />
            {/* Highlight haut */}
            <span
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              aria-hidden
            />
            <span className="relative">Prendre rendez-vous</span>
            <ArrowRight
              className="relative size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5"
              aria-hidden
            />
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            className="relative inline-flex size-9 items-center justify-center rounded-xl text-[#0b1e3b] transition-colors hover:bg-[#0b1e3b]/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b50c4]/40 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu avec stagger animation */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#0b1e3b]/10 bg-[#e4ecfc] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
              {links.map((l, i) => {
                const isActive = pathname === l.to
                return (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.22,
                      delay: 0.04 + i * 0.035,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={l.to}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-[#0b1e3b]/[0.07] text-[#0b1e3b] ring-1 ring-[#0b1e3b]/10'
                          : 'text-[#0b1e3b]/70 hover:bg-[#0b1e3b]/[0.05] hover:text-[#0b1e3b]'
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <span>{l.label}</span>
                      {isActive && (
                        <span
                          className="size-1.5 rounded-full bg-[#2b50c4]"
                          aria-hidden
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.24,
                  delay: 0.04 + links.length * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-2 border-t border-[#0b1e3b]/10 pt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group/cta relative flex h-10 w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(20,40,120,0.5)]"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-br from-[#2b50c4] via-[#2246b5] to-[#173a99]"
                    aria-hidden
                  />
                  <span
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    aria-hidden
                  />
                  <span className="relative">Prendre rendez-vous</span>
                  <ArrowRight className="relative size-4" aria-hidden />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
