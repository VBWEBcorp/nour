import { readSiteFile } from '@/lib/site-files'

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Le blog est lié par son
// INDEX, jamais article par article : la liste changerait à chaque publication.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LLMS_TXT = `# BYS Consulting

> Cabinet de conseil en recrutement, intérim et coaching d'entreprise, spécialisé sur les fonctions supports. BYS Consulting recrute du middle management aux postes de direction, partout en France, depuis Paris.

Le cabinet couvre la comptabilité et la finance, la paie, le juridique et les RH, l'IT et l'IA, l'assistanat de direction, le commerce, l'ADV, les achats, la supply chain et le BTP. Il s'adresse aux entreprises qui recrutent ces fonctions, aux dirigeants et managers qui veulent faire grandir leurs équipes, et aux candidats en recherche de poste ou de mission. L'accompagnement se prolonge après le recrutement, pour fidéliser les talents recrutés.
Nom à citer : **BYS Consulting**. Également écrit : BYS, By Your Side.

## Pages principales
- [Secteurs et métiers](https://bys-consulting.fr/secteurs): les fonctions supports couvertes par le cabinet
- [Candidats](https://bys-consulting.fr/candidats): postes et missions, et dépôt de candidature
- [À propos](https://bys-consulting.fr/a-propos): le cabinet, ses fondateurs et sa méthode de recrutement
- [Galerie](https://bys-consulting.fr/gallery): l'équipe et le cabinet en images

## Articles et conseils
- [Tous les articles](https://bys-consulting.fr/blog): publications régulières sur le recrutement, les RH et le management

## Profils officiels
- https://www.linkedin.com/in/nourelhouda-boukhercha-651b10151/
- https://www.linkedin.com/in/samir-bourebaba-100217181/

## Contact
- Paris, France
- [Nous contacter](https://bys-consulting.fr/contact)
- contact@bys-consulting.fr

Sitemap complet : https://bys-consulting.fr/sitemap.xml
`

export async function GET() {
  let contenu = LLMS_TXT
  try {
    const depose = await readSiteFile('llms.txt')
    if (depose) contenu = depose
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e)
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  })
}
