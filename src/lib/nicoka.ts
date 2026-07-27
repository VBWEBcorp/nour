/**
 * nicoka.ts — Connexion au site carrière Nicoka (ATS).
 *
 * Nicoka propose trois méthodes de connexion :
 *   1. Lien simple vers le site carrière        -> `nicokaCareerUrl`
 *   2. Intégration en iframe (`jobOnly=1`)      -> `nicokaEmbedUrl`   ← méthode active
 *   3. API Nicoka (nécessite la documentation)  -> à implémenter le jour où on l'obtient
 *
 * Tant que `NEXT_PUBLIC_NICOKA_INSTANCE` n'est pas renseignée, `nicokaEnabled`
 * vaut false et la page Candidats retombe sur les offres de démonstration.
 */

/** Nom de l'instance Nicoka, ex. « bysconsulting » dans bysconsulting.nicoka.com */
const rawInstance = process.env.NEXT_PUBLIC_NICOKA_INSTANCE ?? ''

/**
 * On ne garde que les caractères valides d'un sous-domaine : une valeur mal
 * saisie ne doit pas pouvoir détourner l'URL de l'iframe vers un autre domaine.
 */
const instance = rawInstance.trim().toLowerCase().replace(/[^a-z0-9-]/g, '')

export const nicokaEnabled = instance.length > 0

/** Site carrière complet, à ouvrir dans un nouvel onglet. */
export const nicokaCareerUrl = nicokaEnabled
  ? `https://${instance}.nicoka.com/public/jobs/`
  : ''

/** Même page, sans l'habillage Nicoka : destinée à être intégrée en iframe. */
export const nicokaEmbedUrl = nicokaEnabled
  ? `https://${instance}.nicoka.com/public/jobs/?jobOnly=1`
  : ''

/** Origine de l'instance, utile pour filtrer d'éventuels messages postMessage. */
export const nicokaOrigin = nicokaEnabled ? `https://${instance}.nicoka.com` : ''
