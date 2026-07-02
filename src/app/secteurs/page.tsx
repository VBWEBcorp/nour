import type { Metadata } from 'next'

import { HomeCta } from '@/components/home/home-cta'
import { PageHero } from '@/components/sections/page-hero'
import { SectorsGrid } from '@/components/sections/sectors-grid'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { images } from '@/lib/site-content'
import { sectors } from '@/lib/bys-content'

const description =
  "Comptabilité, finance, RH, juridique, IT, IA, assistanat, ADV, commerce, supply chain, achats, BTP : découvrez les secteurs et fonctions supports sur lesquels BYS Consulting recrute et accompagne."

export const metadata: Metadata = {
  title: 'Secteurs & métiers',
  description,
  alternates: { canonical: '/secteurs' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Secteurs & métiers', description, '/secteurs'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Secteurs', path: '/secteurs' },
    ]),
  ],
}

export default function SecteursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Secteurs & métiers"
        title="Une expertise transverse sur vos fonctions supports"
        description="Des métiers techniques aux fonctions stratégiques, nous couvrons l'ensemble des expertises qui font tourner et grandir votre organisation."
        image={images.sectorsHero}
        breadcrumb="Secteurs"
      />

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {sectors.length} domaines d&apos;expertise
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Chaque métier a ses codes. Nous les connaissons.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pour recruter juste, il faut comprendre en profondeur le métier, ses
              enjeux et son marché. C&apos;est notre exigence sur chacun de ces
              domaines, du middle management aux postes de direction.
            </p>
          </div>

          <div className="mt-14">
            <SectorsGrid />
          </div>
        </div>
      </section>

      <HomeCta />
    </>
  )
}
