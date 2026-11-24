import { nicokaEmbedUrl, nicokaEnabled, nicokaOrigin } from '@/lib/nicoka'

/**
 * nicoka-jobs.ts — Offres publiées par Nour dans Nicoka, lues côté serveur.
 *
 * L'iframe Nicoka affichait les offres mais gardait les candidatures dans l'ATS
 * (retirée le 23/10/2026, et les offres avec elle). Ici on lit les mêmes pages
 * publiques pour afficher les offres dans le site : « Postuler » ouvre le
 * formulaire du site, qui envoie la candidature sur la boîte de Nour.
 *
 * Une offre ajoutée, modifiée ou dépubliée dans Nicoka suit en dix minutes.
 */

export type JobBlock = { type: 'text' | 'item'; text: string }
export type JobOffer = {
  id: string
  title: string
  location: string
  /** Contrat, salaire, télétravail... dans l'ordre d'affichage. */
  facts: string[]
  sections: { title: string; blocks: JobBlock[] }[]
}

export const JOBS_REVALIDATE = 600

async function fetchHtml(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: JOBS_REVALIDATE },
      signal: AbortSignal.timeout(8000),
    })
    return res.ok ? await res.text() : null
  } catch {
    return null
  }
}

const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', euro: '€', rsquo: '’', hellip: '…',
}

function decode(s: string): string {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (full, code: string) => {
    if (code[0] !== '#') return NAMED[code.toLowerCase()] ?? full
    const hex = code[1].toLowerCase() === 'x'
    const n = parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10)
    return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : ''
  })
}

const clean = (s: string) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()

/** Le HTML de Nicoka devient du texte : aucune balise tierce n'entre dans la page. */
function toBlocks(html: string): JobBlock[] {
  const marked = html
    .replace(/<li\b[^>]*>/gi, '\n\u0001')
    .replace(/<\/?(?:p|div|br|ul|ol|h[1-6]|tr)\b[^>]*>|<\/li>/gi, '\n')
    .replace(/<[^>]*>/g, '')
  return marked
    .split('\n')
    .map((line): JobBlock => ({
      type: line.includes('\u0001') ? 'item' : 'text',
      text: decode(line.replace(/\u0001/g, '')).replace(/\s+/g, ' ').trim(),
    }))
    .filter((b) => b.text !== '')
}

function parseDetail(html: string): Pick<JobOffer, 'facts' | 'sections'> {
  const info = new Map<string, string>()
  for (const [, label, value] of html.matchAll(/<b>([^<]+)<\/b>\s*:\s*([\s\S]*?)<\/li>/g)) {
    info.set(clean(label), clean(value))
  }
  const remote = info.get('Télétravail')
  const facts = [
    info.get('Type de Contrat'),
    info.get('Durée de Travail'),
    info.get('Salaire')?.replace(/ A /, ' à ').replace(/Par an/, 'par an'),
    remote ? (/^aucun/i.test(remote) ? 'Présentiel' : `Télétravail : ${remote}`) : undefined,
  ].filter((f): f is string => !!f)

  const sections = [
    ...html.matchAll(
      /<h4 class="bold"[^>]*>([\s\S]*?)<\/h4>\s*<div class="nk-html-content"[^>]*>([\s\S]*?)(?=<h4 class="bold"|<div class="card-footer|<\/section>)/g
    ),
  ]
    .map(([, title, body]) => ({ title: clean(title), blocks: toBlocks(body) }))
    .filter((s) => s.blocks.length > 0)

  return { facts, sections }
}

/**
 * Offres en ligne, [] s'il n'y en a aucune, null si Nicoka ne répond pas (la
 * page propose alors le lien vers le site carrière).
 */
export async function getJobOffers(): Promise<JobOffer[] | null> {
  if (!nicokaEnabled) return null
  const html = await fetchHtml(nicokaEmbedUrl)
  if (!html || !html.includes('list-of-jobs')) return null

  const jobs = html.split(/<div class="job shown"/).slice(1).flatMap((chunk) => {
    const link = chunk.match(/<h5 class="job-title">\s*<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/)
    if (!link) return []
    const href = decode(link[1])
    // On ne suit que les pages d'offres de l'instance de Nour.
    if (!href.startsWith(`${nicokaOrigin}/public/jobs/`)) return []
    const location = clean(chunk.match(/<li class="job-location">([\s\S]*?)<\/li>/)?.[1] ?? '')
    return [{ href, title: clean(link[2]), location: location.replace(/^\d{5}\s+/, '') }]
  })

  return Promise.all(
    jobs.map(async ({ href, title, location }) => {
      const detail = await fetchHtml(href)
      return {
        id: href,
        title,
        location,
        ...(detail ? parseDetail(detail) : { facts: [], sections: [] }),
      }
    })
  )
}

