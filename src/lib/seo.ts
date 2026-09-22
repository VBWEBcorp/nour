export const siteConfig = {
  name: 'BYS Consulting',
  url: 'https://bysconsulting.fr',
  locale: 'fr_FR',
  description:
    "BYS Consulting. Recrutement, Conseil RH & Coaching d'entreprise. Nous accompagnons les entreprises dans le recrutement de leurs fonctions supports et le développement de leurs managers. By Your Side, à chaque étape clé.",
  ogImage: 'https://bysconsulting.fr/logo.png',
  twitterHandle: '@bysconsulting',
  themeColor: '#0a182d',
  // Coordonnées transmises par Nour le 21/09/2026. Le siège social est à son
  // domicile : à sa demande, aucune adresse postale n'apparaît sur le site.
  phone: '07 81 31 83 92',
  phoneLink: 'tel:+33781318392',
  email: 'nour.boukhercha@bysconsulting.fr',
  legal: {
    legalForm: 'SAS',
    capital: '1 000 €',
    siret: '942 988 015 00015',
    rcs: 'RCS Nanterre 942 988 015',
    vat: 'FR88942988015',
    publisher: 'Nourelhouda Boukhercha',
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
