import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  "Recrutement CDI/CDD, intérim et coaching d'entreprise sur les fonctions supports : découvrez comment BYS Consulting sécurise vos recrutements et fait grandir vos équipes."

const services = [
  { title: 'Recrutement CDI / CDD', desc: 'Chasse de tête et approche directe sur les fonctions supports, avec notre méthode Leadership 3.0 alignée sur votre culture.' },
  { title: 'Intérim & travail temporaire', desc: "Des profils opérationnels immédiatement pour absorber un pic d'activité, remplacer une absence ou sécuriser une transition." },
  { title: "Coaching d'entreprise", desc: 'Coaching individuel et collectif pour révéler vos managers, aligner vos équipes et installer une performance durable.' },
  { title: 'Intégration accompagnée', desc: "Coaching dès la période d'essai pour aligner les nouvelles recrues à votre culture et accélérer leur montée en performance." },
  { title: 'Performance managériale', desc: "Ateliers, séminaires CODIR et coaching d'équipe pour bâtir des collectifs qui gagnent." },
  { title: 'Transformation & transitions', desc: "Accompagnement des moments clés : croissance, réorganisation, changement de gouvernance. Nous sécurisons l'humain quand tout bouge." },
]

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
