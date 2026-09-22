'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { PremiumHero } from '@/components/sections/premium-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'
import { contactContent, images as siteImages } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: { ...contactContent.hero, image: '' as string },
  // Pas d'adresse postale : le siège est au domicile de la fondatrice, elle a
  // demandé qu'il n'apparaisse pas sur le site (email du 21/09/2026).
  info: {
    phone: siteConfig.phone,
    email: siteConfig.email,
  },
}

export function ContactContent() {
  const { data } = useContent('contact', defaults)
  const hero = data.hero ?? defaults.hero
  const info = data.info ?? defaults.info

  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      firstname: String(fd.get('firstname') || ''),
      lastname: String(fd.get('lastname') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      message: String(fd.get('message') || ''),
      hp: String(fd.get('hp') || ''), // honeypot
    }

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d?.error || 'Envoi impossible.')
      }
      setSent(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Envoi impossible.')
    } finally {
      setSubmitting(false)
    }
  }

  const phone: string = info.phone || siteConfig.phone
  const email: string = info.email || siteConfig.email
  // Le lien tel: attend un numéro sans espaces ; le numéro par défaut est déjà
  // au format international dans la config.
  const phoneHref =
    phone === siteConfig.phone ? siteConfig.phoneLink : `tel:${phone.replace(/\s+/g, '')}`

  return (
    <>
      <PremiumHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="Contact"
        compact
        backgroundImage={siteImages.contactHero}
      >
        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-[oklch(0.84_0.05_255)]" aria-hidden />
            <span>Réponse sous 24h</span>
          </div>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline" aria-hidden />
          <div className="flex items-center gap-2">
            <Send className="size-4 text-[oklch(0.84_0.05_255)]" aria-hidden />
            <span>Devis gratuit</span>
          </div>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline" aria-hidden />
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_oklch(0.7_0.15_150/0.8)]" aria-hidden />
            <span>Disponible cette semaine</span>
          </div>
        </div>
      </PremiumHero>

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form card premium */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-card/90 p-7 shadow-[0_20px_50px_-20px_oklch(0.24_0.03_258/0.25)] backdrop-blur-sm sm:p-9">
                {/* Bordure dégradée */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl p-px"
                  aria-hidden
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.4 0.07 258 / 0.4) 0%, oklch(0.92 0.012 258 / 0.55) 50%, oklch(0.4 0.07 258 / 0.4) 100%)',
                    WebkitMask:
                      'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                      <Send className="size-4" aria-hidden />
                    </span>
                    <div>
                      <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
                        Envoyer un message
                      </h2>
                      <p className="text-xs text-muted-foreground">Tous les champs sont obligatoires sauf indication</p>
                    </div>
                  </div>

                  {sent ? (
                    <div className="mt-7 py-8 text-center">
                      <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <CheckCircle2 className="size-7" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                        Message envoyé&nbsp;!
                      </h3>
                      <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                        Merci, nous avons bien reçu votre message et revenons vers vous sous 24h.
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-6"
                        onClick={() => setSent(false)}
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                      {/* Honeypot anti-spam : masqué aux humains */}
                      <input
                        type="text"
                        name="hp"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="absolute left-[-9999px] h-0 w-0 opacity-0"
                      />
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstname">Prénom</Label>
                          <Input
                            id="firstname"
                            name="firstname"
                            placeholder="Jean"
                            autoComplete="given-name"
                            required
                            className="h-11 rounded-xl bg-background/70 transition-shadow focus-visible:shadow-[0_0_0_4px_oklch(0.4_0.07_258/0.1)]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastname">Nom</Label>
                          <Input
                            id="lastname"
                            name="lastname"
                            placeholder="Dupont"
                            autoComplete="family-name"
                            required
                            className="h-11 rounded-xl bg-background/70 transition-shadow focus-visible:shadow-[0_0_0_4px_oklch(0.4_0.07_258/0.1)]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jean@entreprise.fr"
                          autoComplete="email"
                          required
                          className="h-11 rounded-xl bg-background/70 transition-shadow focus-visible:shadow-[0_0_0_4px_oklch(0.4_0.07_258/0.1)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Téléphone <span className="font-normal text-muted-foreground">(optionnel)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          autoComplete="tel"
                          className="h-11 rounded-xl bg-background/70 transition-shadow focus-visible:shadow-[0_0_0_4px_oklch(0.4_0.07_258/0.1)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Votre message</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          placeholder="Décrivez votre projet en quelques mots..."
                          className="w-full rounded-xl border border-input bg-background/70 px-3.5 py-3 text-sm leading-relaxed text-foreground transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:shadow-[0_0_0_4px_oklch(0.4_0.07_258/0.1)] focus-visible:outline-none"
                        />
                      </div>
                      {error && (
                        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-center text-sm font-medium text-red-600">
                          {error}
                        </p>
                      )}
                      <Button type="submit" size="lg" disabled={submitting} className="w-full group">
                        {submitting ? 'Envoi en cours…' : 'Envoyer le message'}
                        {!submitting && (
                          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sidebar info + map */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              className="space-y-5"
            >
              {/* Info card */}
              <div className="relative overflow-hidden rounded-3xl bg-card/90 p-7 shadow-[0_10px_30px_-12px_oklch(0.24_0.03_258/0.18)] backdrop-blur-sm">
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl p-px"
                  aria-hidden
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.4 0.07 258 / 0.35) 0%, oklch(0.92 0.012 258 / 0.55) 50%, oklch(0.4 0.07 258 / 0.35) 100%)',
                    WebkitMask:
                      'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="relative space-y-5">
                  <h2 className="font-display text-base font-semibold tracking-tight text-foreground">
                    Nous joindre directement
                  </h2>

                  <a
                    href={phoneHref}
                    className="group flex items-start gap-4 -mx-3 rounded-xl px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Téléphone</p>
                      <p className="text-sm font-semibold text-foreground">{phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="group flex items-start gap-4 -mx-3 rounded-xl px-3 py-2 transition-colors hover:bg-foreground/[0.04]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Email</p>
                      <p className="text-sm font-semibold text-foreground break-all">{email}</p>
                    </div>
                  </a>

                  <div className="border-t border-border/60 pt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className="relative flex size-2 items-center justify-center"
                        aria-hidden
                      >
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        Disponible aujourd'hui
                      </span>
                      <span className="text-xs text-muted-foreground">· Lun-Ven 9h-18h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte de visite transmise par Nour (remplace la carte Google Maps :
                  aucune adresse n'est publiée) */}
              <a
                href={phoneHref}
                aria-label={`Appeler ${siteConfig.name} au ${phone}`}
                className="group relative block overflow-hidden rounded-3xl shadow-[0_10px_30px_-12px_oklch(0.24_0.03_258/0.18)] transition-shadow hover:shadow-[0_16px_40px_-12px_oklch(0.24_0.03_258/0.28)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-3xl p-px"
                  aria-hidden
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.4 0.07 258 / 0.3) 0%, oklch(0.92 0.012 258 / 0.5) 50%, oklch(0.4 0.07 258 / 0.3) 100%)',
                    WebkitMask:
                      'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <Image
                  src="/carte-de-visite.png"
                  alt={`Carte de visite de Nour Boukhercha, ${siteConfig.name} : ${phone}`}
                  width={1200}
                  height={400}
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
