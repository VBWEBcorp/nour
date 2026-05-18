/**
 * Articles du blog BYS Consulting — version statique.
 * Source : posts LinkedIn recyclés + contenu éditorial original.
 */

export type StaticBlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string // HTML (compatible avec le rendu TipTap-like de blog-post-content)
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string // ISO date
  metaTitle?: string
  metaDescription?: string
}

export const blogSettings = {
  enabled: true,
  title: 'Le blog BYS',
  description:
    "Recrutement, coaching, leadership : nos convictions, nos retours d'expérience et les questions qui font bouger les organisations.",
  eyebrow: 'Insights',
  heroImage:
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1920&q=80',
  categories: ['Recrutement', 'Coaching', 'Leadership 3.0', 'Intégration'],
}

export const blogPosts: StaticBlogPost[] = [
  {
    slug: 'mauvais-recrutement-coute-cher',
    title: 'Un mauvais recrutement coûte cher. Très cher.',
    excerpt:
      "En moyenne, on estime une perte entre 30 000 et 50 000 €. Et pourtant, combien d'entreprises recrutent encore dans l'urgence, sans méthode, juste pour combler un poste ?",
    coverImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    category: 'Recrutement',
    tags: ['Recrutement', 'Coût', 'Méthode'],
    author: 'Nour Boukhercha',
    publishedAt: '2025-09-22T08:00:00.000Z',
    metaTitle: 'Le vrai coût d\'un mauvais recrutement | BYS Consulting',
    metaDescription:
      "Entre 30 000 et 50 000 € : c'est ce que coûte en moyenne un recrutement raté. Pourquoi, et comment l'éviter.",
    content: `
<p>Un mauvais recrutement coûte cher. Très cher.</p>
<p>En moyenne, on estime une perte entre <strong>30 000 et 50 000 €</strong> par recrutement raté : temps perdu, intégration ratée, démotivation des équipes, besoin de tout recommencer.</p>
<p>Et pourtant… combien d'entreprises recrutent encore <em>dans l'urgence</em>, sans méthode, juste pour « combler un poste » ?</p>
<h2>Notre conviction</h2>
<p>Chez BYS Consulting, nous avons une conviction simple :</p>
<blockquote>Le recrutement, ce n'est pas combler un poste, c'est construire une équipe qui gagne.</blockquote>
<p>Et pour cela, nous combinons notre expertise en recrutement stratégique avec notre <strong>méthode Leadership 3.0</strong> : aligner chaque recrutement avec la culture et la vision de l'entreprise.</p>
<h2>Le parallèle sportif</h2>
<p>Un joueur brillant mal intégré ne fait pas gagner une équipe. Un manager mal recruté peut même la faire perdre.</p>
<p>C'est exactement la même chose en entreprise. Le talent ne suffit pas. Il faut le bon talent, à la bonne place, au bon moment, intégré dans un collectif qui sait l'accueillir.</p>
<h2>La question qu'on devrait toujours se poser</h2>
<p>Avant de lancer un recrutement, posez-vous ces 3 questions :</p>
<ul>
  <li><strong>Quelle est la mission précise ?</strong> Pas le poste, la mission. À quoi servira cette personne dans 12 mois ?</li>
  <li><strong>Quelle est la culture du collectif qu'elle va rejoindre ?</strong> Quelles sont les règles non écrites ?</li>
  <li><strong>Qui va l'accompagner dans ses 90 premiers jours ?</strong> Si la réponse est « personne », l'échec est probable.</li>
</ul>
<p>Et vous ? Quel a été le recrutement le plus coûteux que vous ayez connu (en argent, en énergie, en temps) ?</p>
    `.trim(),
  },
  {
    slug: 'pourquoi-recrutement-et-coaching',
    title: 'Pourquoi avoir lié le recrutement au coaching ?',
    excerpt:
      "On nous pose souvent cette question. Le coaching n'est pas toujours concret pour tout le monde. Certains se demandent même quel est l'intérêt. Voici pourquoi nous avons fait ce choix.",
    coverImage:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80',
    category: 'Coaching',
    tags: ['Coaching', 'Recrutement', 'Intégration'],
    author: 'Nour Boukhercha',
    publishedAt: '2025-10-15T08:00:00.000Z',
    metaTitle: 'Recrutement + coaching : pourquoi ce choix | BYS Consulting',
    metaDescription:
      "Pourquoi BYS Consulting combine recrutement et coaching dans une même offre. Notre vision d'une vraie innovation RH.",
    content: `
<p>On nous pose souvent cette question :</p>
<blockquote>« Mais pourquoi avoir lié le recrutement au coaching ? »</blockquote>
<p>C'est vrai : le coaching n'est pas toujours concret pour tout le monde. Certains se demandent même quel est l'intérêt de nos actions.</p>
<h2>Notre choix n'est pas un hasard</h2>
<p>Chez BYS Consulting, si nous avons fait le choix de combiner recrutement et coaching, ce n'est pas un hasard :</p>
<ul>
  <li>Parce qu'<strong>un bon recrutement ne se limite pas à trouver la bonne personne</strong>. Il s'agit aussi de l'intégrer durablement.</li>
  <li>Parce que <strong>le coaching, dès la période d'essai</strong>, permet d'aligner les nouvelles recrues aux valeurs et à la culture de l'entreprise et de les rendre rapidement performantes.</li>
  <li>Parce que <strong>l'accompagnement des managers est un levier direct</strong> de performance, d'innovation et de fidélisation des talents.</li>
</ul>
<h2>Une réponse complète, pas deux prestations séparées</h2>
<p>En associant ces deux expertises, nous apportons une réponse complète :</p>
<ul>
  <li>Sécuriser vos recrutements</li>
  <li>Accélérer l'intégration</li>
  <li>Développer le potentiel de vos équipes</li>
</ul>
<h2>La vraie innovation RH</h2>
<p>Et si la vraie innovation RH, c'était justement de ne plus penser le recrutement et le développement séparément, mais comme <strong>deux faces d'une même réussite</strong> ?</p>
<p>C'est cette conviction qui a donné naissance à BYS Consulting. C'est cette conviction qui guide chacune de nos missions.</p>
    `.trim(),
  },
  {
    slug: 'leadership-3-0-methode',
    title: 'Leadership 3.0 : qu\'est-ce que ça change concrètement ?',
    excerpt:
      "La méthode Leadership 3.0, c'est notre signature. Elle aligne chaque recrutement et chaque accompagnement avec la culture, la vision et les valeurs de l'entreprise. Décryptage.",
    coverImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    category: 'Leadership 3.0',
    tags: ['Leadership 3.0', 'Méthode', 'Culture'],
    author: 'Samir Bourebaba',
    publishedAt: '2025-11-08T08:00:00.000Z',
    metaTitle: 'La méthode Leadership 3.0 expliquée | BYS Consulting',
    metaDescription:
      "Aligner, recruter, faire grandir : notre méthode Leadership 3.0 en 3 piliers. Ce qui change pour vos recrutements et vos équipes.",
    content: `
<p>Quand on parle de « méthode », on s'attend souvent à un process figé. Une checklist. Un livrable normé.</p>
<p>Leadership 3.0, ce n'est pas ça. C'est une <strong>philosophie d'intervention</strong> structurée autour de 3 piliers : aligner, recruter, faire grandir.</p>
<h2>Pilier 1 : Aligner</h2>
<p>Avant tout recrutement, avant tout coaching, nous prenons le temps de comprendre :</p>
<ul>
  <li>La vision et les enjeux stratégiques de l'entreprise</li>
  <li>La culture réelle, pas celle affichée sur le site corporate</li>
  <li>Les dynamiques de pouvoir et les non-dits du collectif</li>
</ul>
<p>Sans cet alignement, le meilleur candidat du monde échouera. Et le meilleur coaching tombera à plat.</p>
<h2>Pilier 2 : Recruter</h2>
<p>Une fois l'alignement fait, le recrutement devient évident. Nous ne cherchons plus « la bonne personne pour le poste », nous cherchons <strong>celle qui va incarner le projet</strong>.</p>
<p>Cela change tout :</p>
<ul>
  <li>La rédaction du brief : on parle vision, pas fiche de poste</li>
  <li>L'approche directe : on parle aux candidats qui peuvent transformer, pas seulement à ceux qui peuvent exécuter</li>
  <li>L'évaluation : compétences techniques <em>et</em> capacité d'incarnation</li>
</ul>
<h2>Pilier 3 : Faire grandir</h2>
<p>Une fois la personne en poste, le travail commence vraiment. Coaching d'intégration sur 90 jours, accompagnement managérial, points réguliers.</p>
<p>C'est ce dernier pilier qui fait souvent la différence entre un recrutement qui tient et un recrutement qui pérennise.</p>
<h2>Pourquoi ça marche</h2>
<p>Parce que c'est <strong>cohérent</strong>. Parce que nous portons les mêmes valeurs du brief jusqu'à la fin du coaching. Parce que vous avez un seul interlocuteur stratégique sur toute la chaîne.</p>
<p>By Your Side, à chaque étape clé.</p>
    `.trim(),
  },
  {
    slug: 'integration-90-premiers-jours',
    title: 'Les 90 premiers jours : pourquoi ils décident de tout',
    excerpt:
      "Statistiquement, un tiers des nouvelles recrues quittent leur poste dans la première année. Et la décision se joue dans les 90 premiers jours. Voici comment sécuriser cette période critique.",
    coverImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80',
    category: 'Intégration',
    tags: ['Intégration', 'Onboarding', 'Coaching'],
    author: 'Samir Bourebaba',
    publishedAt: '2026-01-12T08:00:00.000Z',
    metaTitle: 'Sécuriser les 90 premiers jours d\'un recrutement | BYS Consulting',
    metaDescription:
      "Pourquoi les 90 premiers jours d'une nouvelle recrue sont décisifs, et comment BYS Consulting accompagne cette phase critique.",
    content: `
<p>Recruter coûte cher. Mais perdre une nouvelle recrue après 6 mois coûte encore plus cher.</p>
<p>Selon plusieurs études, <strong>un tiers des nouvelles recrues</strong> quittent leur poste dans la première année. Et la décision se joue presque toujours dans les <strong>90 premiers jours</strong>.</p>
<h2>Ce qui se passe vraiment dans les 90 premiers jours</h2>
<p>Trois choses simultanées, souvent invisibles depuis l'extérieur :</p>
<ul>
  <li><strong>Évaluation mutuelle.</strong> Le candidat valide (ou non) ce qu'on lui a vendu en entretien. L'entreprise valide (ou non) son investissement.</li>
  <li><strong>Construction de la légitimité.</strong> La personne doit se positionner face à des collègues, des subordonnés, parfois des prédécesseurs.</li>
  <li><strong>Premier vrai test opérationnel.</strong> Le décalage entre ce qui était promis et ce qui est demandé apparaît crûment.</li>
</ul>
<h2>Les 3 erreurs classiques de l'employeur</h2>
<ol>
  <li><strong>« On le laisse atterrir. »</strong> Pas de point structuré, pas de feedback, pas d'objectif clair sur les 30 / 60 / 90 jours.</li>
  <li><strong>Surcharger trop vite.</strong> Pour « rentabiliser » le recrutement, on donne 4 sujets prioritaires dès le jour 15.</li>
  <li><strong>Pas de relais managérial.</strong> Le manager direct est lui-même débordé ou absent.</li>
</ol>
<h2>Notre approche : le coaching d'intégration</h2>
<p>Chez BYS, dès que nous recrutons quelqu'un, nous proposons systématiquement un coaching d'intégration. Concrètement :</p>
<ul>
  <li>Un point hebdomadaire avec la nouvelle recrue (30 min) pendant les 12 premières semaines</li>
  <li>Un point bilatéral avec le manager à J+30 et J+60</li>
  <li>Un debrief croisé à J+90 avec un plan d'action partagé</li>
</ul>
<p>Le coût est minime comparé à celui d'un départ. Et l'impact est massif : nos recrutements suivis en coaching d'intégration ont un taux de maintien à 18 mois supérieur à 95 %.</p>
<h2>L'enjeu réel</h2>
<p>Les 90 premiers jours ne sont pas une formalité administrative. C'est <strong>le moment où se décide le ROI du recrutement</strong>. C'est aussi le moment où se construit l'engagement durable.</p>
<p>Investir dessus, c'est le plus grand levier de fidélisation que nous connaissons.</p>
    `.trim(),
  },
]
