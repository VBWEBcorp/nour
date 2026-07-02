export const siteConfig = {
  name: 'BYS Consulting',
  url: 'https://bys-consulting.fr',
  locale: 'fr_FR',
  description:
    "BYS Consulting. Recrutement, Conseil RH & Coaching d'entreprise. Nous accompagnons les entreprises dans le recrutement de leurs fonctions supports et le développement de leurs managers. By Your Side, à chaque étape clé.",
  ogImage: 'https://www.example.com/og.png',
  twitterHandle: '@bysconsulting',
  themeColor: '#1d4ed8',
  phone: '+33 6 12 34 56 78',
  email: 'contact@bys-consulting.fr',
  address: {
    street: '12 Rue de la Performance',
    city: 'Paris',
    postalCode: '75008',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/secteurs',
  '/blog',
  '/candidats',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
