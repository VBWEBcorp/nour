import type { Metadata } from 'next'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { getJobOffers } from '@/lib/nicoka-jobs'

import { CandidatesContent } from './candidates-content'

const description =
  "Vous êtes candidat sur une fonction support (RH, finance, juridique, assistanat, gestion) ? Découvrez l'approche BYS Consulting et faites-vous connaître."

export const metadata: Metadata = {
  title: 'Candidats',
  description,
  alternates: { canonical: '/candidats' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Candidats', description, '/candidats'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Candidats', path: '/candidats' },
    ]),
  ],
}

/** Les offres Nicoka se rafraîchissent toutes les dix minutes. */
export const revalidate = 600

export default async function CandidatsPage() {
  const offers = await getJobOffers()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CandidatesContent offers={offers} />
    </>
  )
}
