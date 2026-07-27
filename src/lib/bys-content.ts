/**
 * bys-content.ts — Contenu éditorial « bespoke » BYS Consulting
 *
 * Contenu statique, sans dépendance CMS/DB, utilisé par la page d'accueil,
 * la page Secteurs et la page À propos. Copywriting premium, ton humain &
 * expert. Les icônes sont des noms lucide-react résolus dans chaque composant.
 */

// ---------------------------------------------------------------------------
// Bandeau de mots animé (Hero)
// ---------------------------------------------------------------------------
export const heroWords = [
  'Excellence',
  'Confiance',
  'Performance',
  'Proximité',
  'Engagement',
  'Expertise',
  'Leadership',
  'Accompagnement',
] as const

// ---------------------------------------------------------------------------
// « Trois moments où nous entrons en jeu » (3 blocs)
// ---------------------------------------------------------------------------
export const needs = [
  {
    iconName: 'Sprout',
    kicker: 'Recrutement',
    title: 'Vous recrutez pour grandir',
    description:
      "Vous ouvrez de nouveaux marchés, vous accélérez, vous avez besoin des bonnes personnes au bon moment. Nous identifions les profils qui ne cherchent pas, ceux qui feront la différence, pas seulement ceux qui sont disponibles.",
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1100&q=80',
  },
  {
    iconName: 'Waypoints',
    kicker: 'Intérim & transition',
    title: 'Vous traversez une transition',
    description:
      "Restructuration, réorganisation, pic d'activité, départ clé. L'intérim de haut niveau vous donne la flexibilité dont vous avez besoin, sans sacrifier la qualité. Nous gérons l'urgence avec la même exigence que le long terme.",
    image:
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1100&q=80',
  },
  {
    iconName: 'TrendingUp',
    kicker: 'Coaching',
    title: 'Vous voulez faire grandir vos équipes',
    description:
      "Un bon recrutement ne suffit pas si le management ne suit pas. Nous accompagnons vos managers et vos équipes pour que la croissance ne s'arrête pas à l'arrivée d'un nouveau talent, elle se propage.",
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80',
  },
] as const

// ---------------------------------------------------------------------------
// « Pourquoi choisir BYS Consulting » (4 objectifs)
// ---------------------------------------------------------------------------
export const whyBys = [
  {
    iconName: 'Clock',
    title: 'Faire gagner du temps',
    description:
      "Nous prenons en charge l'intégralité du processus, du sourcing à la préqualification, pour vous présenter une shortlist de profils réellement pertinents. Vous vous concentrez sur la décision, pas sur le tri.",
  },
  {
    iconName: 'Compass',
    title: 'Définir la stratégie',
    description:
      "Avant de chercher, nous clarifions le besoin réel : enjeux, contexte, culture, trajectoire. Un recrutement juste commence toujours par une lecture juste de votre organisation.",
  },
  {
    iconName: 'Radar',
    title: 'Accès aux profils invisibles',
    description:
      "Les meilleurs talents ne répondent pas aux annonces. Notre réseau et notre approche directe nous ouvrent les portes des profils passifs, ceux que vous ne trouverez nulle part ailleurs.",
  },
  {
    iconName: 'LineChart',
    title: 'Lecture fine du marché',
    description:
      "Salaires, tensions, disponibilités, attentes des candidats : nous vous apportons une vision claire et actuelle de votre marché pour recruter au bon niveau, au bon moment.",
  },
] as const

// ---------------------------------------------------------------------------
// « Nos convictions » (3 valeurs)
// ---------------------------------------------------------------------------
export const convictions = [
  {
    iconName: 'Users',
    tag: '01',
    title: 'La Collaboration',
    description:
      "Nous ne travaillons pas pour vous, nous travaillons avec vous. Chaque mission commence par une écoute réelle, de votre culture, de vos contraintes, de ce que vous ne dites pas encore, et se construit en dialogue permanent.",
  },
  {
    iconName: 'ShieldCheck',
    tag: '02',
    title: 'La Confiance',
    description:
      "Elle ne se décrète pas, elle se prouve. Par la transparence sur les profils que nous présentons, par l'honnêteté quand un besoin est mal calibré, par le suivi long après la mission terminée. Nos clients reviennent parce qu'ils savent ce qu'ils trouveront ici.",
  },
  {
    iconName: 'MessagesSquare',
    tag: '03',
    title: 'La Communication',
    description:
      "Un recrutement qui échoue, c'est presque toujours un manque d'information au bon moment. Nous maintenons un flux clair, régulier et sincère, avec vous, avec les candidats, tout au long du process.",
  },
] as const

// ---------------------------------------------------------------------------
// Process — 5 étapes (home + candidats)
// ---------------------------------------------------------------------------
export const processSteps = [
  {
    iconName: 'Telescope',
    step: '01',
    title: 'Rendez-vous client',
    description:
      "Analyse des besoins et du contexte. Nous prenons le temps de comprendre votre organisation, vos enjeux et le profil réellement attendu.",
  },
  {
    iconName: 'Megaphone',
    step: '02',
    title: 'Diffusion & recherches',
    description:
      "Diffusion des annonces et recherches actives : vivier interne, cvthèque en ligne et approche directe des profils ciblés.",
  },
  {
    iconName: 'UserSearch',
    step: '03',
    title: 'Présélection & envoi',
    description:
      "Entretiens candidats, puis envoi d'une shortlist de profils sélectionnés, qualifiés et alignés avec votre besoin.",
  },
  {
    iconName: 'Users',
    step: '04',
    title: 'Premiers entretiens clients',
    description:
      "Planification et coordination des entretiens entre vous et les candidats retenus.",
  },
  {
    iconName: 'HeartHandshake',
    step: '05',
    title: "Suivi période d'essai & coaching",
    description:
      "Accompagnement du candidat et du client tout au long de la période d'essai, et mise en place d'un coaching si besoin.",
    substeps: [
      'Points téléphoniques réguliers avec le candidat (J+15 / J+30 / J+90)',
      "Échanges avec le manager ou la DRH pour évaluer l'intégration",
      "Détection des signaux d'alerte : désalignement culturel, difficultés relationnelles, montée en compétences",
    ],
  },
] as const

// ---------------------------------------------------------------------------
// Secteurs / métiers couverts (12)
// ---------------------------------------------------------------------------
export const sectors = [
  {
    iconName: 'Calculator',
    title: 'Comptabilité',
    description:
      'Comptable, responsable comptable, chef comptable, consolideur.',
  },
  {
    iconName: 'BarChart3',
    title: 'Finance',
    description:
      'DAF, contrôleur de gestion, trésorier, analyste financier, FP&A.',
  },
  {
    iconName: 'Users',
    title: 'Ressources Humaines',
    description: 'DRH, RRH, chargé de recrutement, gestionnaire paie, HRBP.',
  },
  {
    iconName: 'Scale',
    title: 'Juridique',
    description:
      'Directeur juridique, juriste corporate, compliance, contract manager.',
  },
  {
    iconName: 'MonitorSmartphone',
    title: 'IT',
    description:
      'DSI, chef de projet, développeur, administrateur système, support.',
  },
  {
    iconName: 'BrainCircuit',
    title: 'Intelligence Artificielle',
    description:
      'Data scientist, ML engineer, AI product manager, data analyst.',
  },
  {
    iconName: 'Briefcase',
    title: 'Assistanat',
    description:
      'Office manager, assistant(e) de direction, executive assistant.',
  },
  {
    iconName: 'PackageCheck',
    title: 'ADV',
    description:
      "Responsable ADV, gestionnaire administration des ventes, back-office.",
  },
  {
    iconName: 'Handshake',
    title: 'Commerce',
    description:
      'Directeur commercial, business developer, key account, ingénieur d’affaires.',
  },
  {
    iconName: 'Truck',
    title: 'Supply Chain',
    description:
      'Supply chain manager, planificateur, responsable logistique, appro.',
  },
  {
    iconName: 'ShoppingCart',
    title: 'Achats',
    description:
      'Directeur achats, acheteur, category manager, sourcing manager.',
  },
  {
    iconName: 'HardHat',
    title: 'BTP',
    description:
      "Conducteur de travaux, ingénieur, responsable d'affaires, chef de chantier.",
  },
] as const

// ---------------------------------------------------------------------------
// Offres mises en avant (page À propos)
// ---------------------------------------------------------------------------
export const offers = [
  {
    iconName: 'UserSearch',
    label: 'Recrutement CDI / CDD',
    description: 'Chasse de tête sur vos fonctions clés, alignée sur votre culture.',
    href: '#recruter',
  },
  {
    iconName: 'Waypoints',
    label: 'Intérim',
    description: "Des profils opérationnels immédiatement pour tenir la position.",
    href: '#interim',
  },
  {
    iconName: 'Compass',
    label: 'Coaching',
    description: 'Faire grandir dirigeants, managers et équipes dans la durée.',
    href: '#coacher',
  },
] as const

// ---------------------------------------------------------------------------
// Présentations éditoriales des métiers (page À propos)
// Définition « Larousse » + texte lyrique. Le mot-verbe s'affiche en « … ».
// ---------------------------------------------------------------------------
export const editorial = [
  {
    key: 'recruter',
    iconName: 'UserSearch',
    kicker: 'Le recrutement',
    verb: 'Recruter',
    summary:
      "Sourcer, qualifier, accompagner jusqu'à la signature. Et lire, derrière un CV, le talent qu'il ne dit pas encore.",
    punch: "Un CV, c'est une page. Un talent, c'est une histoire.",
    definition: [
      "Amener quelqu'un à entrer dans un parti, un groupe, une société.",
      'Engager des gens pour tenir certains emplois.',
    ],
    source: 'Larousse',
    paragraphs: [
      'Recruter. Ce verbe qui semble définir une action si simple.',
      'Une annonce. Quelques CV. Un entretien. Une décision.',
      "Mais ceux qui l'ont fait savent ce que ça coûte vraiment : le temps passé à sourcer les bons profils, à qualifier des candidatures, à mener des entretiens, à croiser les retours, à contacter des références, à challenger des motivations, à accompagner jusqu'à la signature, et parfois au-delà.",
      "Et même avec tout cela, il reste la part la plus délicate. Celle qu'aucune grille d'évaluation ne capture vraiment : comprendre une personnalité. Sentir un potentiel que le parcours n'exprime pas encore. Percevoir ce qu'un humain peut devenir dans le bon environnement.",
    ],
    highlight: [
      "Un CV, c'est une page. Un talent, c'est une histoire.",
      "Savoir les lire ensemble, c'est un métier.",
      "C'est le nôtre.",
    ],
  },
  {
    key: 'coacher',
    iconName: 'Compass',
    kicker: 'Coaching · Leadership 3.0',
    verb: 'Coacher',
    summary:
      "Poser les bonnes questions plutôt que donner des réponses. Révéler et faire grandir dirigeants, managers et équipes.",
    punch: "Ce n'est pas former. C'est transformer.",
    definition: [
      'Entraîner une équipe sportive, préparer un athlète à la compétition.',
      "Conseiller et guider quelqu'un pour l'aider à progresser dans sa vie professionnelle ou personnelle.",
    ],
    source: 'Larousse',
    paragraphs: [
      "Coacher. Ce verbe emprunté au sport, entré dans l'entreprise.",
      "Un objectif. Une séance. Quelques conseils. Un plan d'action.",
      "Mais ceux qui l'ont vraiment vécu savent que le coaching ne ressemble à aucune de ces images.",
      "Ce n'est pas donner des réponses. C'est poser les bonnes questions. Ce n'est pas corriger. C'est révéler. Ce n'est pas former. C'est transformer.",
      "Derrière un manager qui doute, il y a souvent un leader qui cherche sa voix. Derrière une équipe qui peine, il y a presque toujours un collectif qui n'a pas encore trouvé son rythme. Derrière une prise de poste difficile, il y a un talent qui a besoin qu'on lui fasse confiance, à commencer par lui-même.",
      "Le coaching, c'est créer l'espace où tout cela devient possible. Pas en un jour. Pas par magie. Par un travail exigeant, structuré, profondément humain.",
    ],
    highlight: [
      'Faire grandir les hommes et les femmes qui font grandir votre entreprise.',
      "C'est notre deuxième métier.",
    ],
  },
  {
    key: 'interim',
    iconName: 'Waypoints',
    kicker: "L'intérim",
    verb: 'Intérim',
    summary:
      "Le bon profil au bon moment, même quand ce moment est court. Tenir une position, avec la même exigence que le long terme.",
    punch: 'Le provisoire bien géré change tout.',
    definition: [
      "Intervalle de temps pendant lequel une fonction est exercée par une personne autre que le titulaire.",
      "Situation d'une personne qui travaille pour une entreprise de travail temporaire.",
    ],
    source: 'Larousse',
    paragraphs: [
      'Intérim. Ce mot qui évoque le provisoire, le temporaire, le transitoire.',
      "Un besoin urgent. Un contrat court. Une solution d'attente.",
      "Mais ceux qui ont traversé une restructuration, géré un pic d'activité, absorbé un départ imprévu savent que l'intérim n'a rien d'anodin.",
      "Ce n'est pas boucher un trou. C'est tenir une position. Ce n'est pas gagner du temps. C'est ne pas en perdre. Ce n'est pas une solution par défaut. C'est parfois la décision la plus stratégique qu'une entreprise puisse prendre.",
      "Derrière une mission d'intérim, il y a une entreprise en mouvement. Qui se réorganise, qui traverse, qui cherche à ne pas perdre pied pendant qu'elle se réinvente. Et qui a besoin, précisément à ce moment-là, du bon profil, pas du premier disponible.",
      "Trouver la bonne personne pour le bon moment, même quand ce moment est court. Avec la même exigence, la même écoute, la même attention au facteur humain. Parce que le provisoire mal géré coûte cher. Et le provisoire bien géré change tout.",
    ],
    highlight: ["C'est notre troisième métier."],
    advantages: [
      "Flexibilité et rapidité d'embauche",
      'Allègement de la masse salariale',
      'Disponibilité des candidats',
    ],
  },
] as const

// ---------------------------------------------------------------------------
// Pitch croisé Recrutement × Coaching (page À propos)
// ---------------------------------------------------------------------------
export const pitchCroise = {
  eyebrow: 'Recrutement × Coaching',
  title: "Recruter, c'est bien. Fidéliser, c'est mieux.",
  paragraphs: [
    "Le succès d'un recrutement se mesure souvent à la signature du contrat. La bonne personne, au bon poste, au bon moment. Mission accomplie.",
    "Mais la vraie question n'est pas : avez-vous recruté le bon profil ? Elle est : est-il encore là dans 6 mois ?",
    "Car ce que les chiffres disent, et que les entreprises savent trop bien, c'est qu'un recrutement raté coûte cher. En temps. En énergie. En désorganisation. Et surtout, en opportunités perdues.",
    "Et un recrutement raté, ce n'est pas toujours le mauvais candidat. C'est parfois le bon candidat, mal accueilli, mal accompagné, mal intégré. Un talent qui part non pas parce qu'il n'était pas à sa place, mais parce qu'on ne l'a pas aidé à la trouver.",
    "La période d'essai est le moment le plus fragile d'un recrutement. C'est là que tout se joue vraiment. Le candidat observe, doute, se compare à ses attentes. Le manager juge, s'impatiente, ne comprend pas toujours ce qu'il voit. Et entre les deux, il y a un fossé que personne ne pense à combler.",
    "C'est précisément là qu'intervient le coaching. Pas comme un aveu d'échec. Pas comme un outil de remédiation. Mais comme le prolongement naturel d'un recrutement bien pensé.",
  ],
  actionsTitle: 'Concrètement',
  actions: [
    'Accompagner le nouveau collaborateur dans sa prise de poste.',
    "Aligner ses ambitions avec les attentes de l'entreprise.",
    'Donner au manager les clés pour embarquer, pas seulement évaluer.',
    "Créer les conditions d'une intégration qui dure.",
  ],
  closing:
    "Recruter sans accompagner, c'est planter une graine sans arroser. Le potentiel est là, mais rien ne garantit qu'il s'exprimera.",
  outro: [
    "C'est pourquoi chez BYS Consulting, recrutement et coaching ne sont pas deux services séparés. Ce sont deux temps d'un même engagement : vous aider à trouver le bon talent, et à le garder.",
    "Parce que le turn-over n'est pas une fatalité. C'est souvent le symptôme d'un accompagnement qui s'est arrêté trop tôt.",
  ],
  signature: 'Nous, nous restons.',
} as const

// ---------------------------------------------------------------------------
// Les métiers sur lesquels BYS Consulting intervient (page À propos & Secteurs)
// ---------------------------------------------------------------------------
export const jobFamilies = [
  {
    iconName: 'Calculator',
    title: 'Comptabilité & Finance',
    jobs: [
      'Comptable Général',
      'Comptable Clients',
      'Comptable Fournisseurs',
      'Collaborateur Comptable',
      'Responsable Comptabilité',
      'RAF',
      'DAF',
      'Directeur Financier',
      'Chef de Mission',
      'Expert-Comptable',
      'Auditeur Financier',
      'Contrôleur de Gestion',
      'Comptable Fiscaliste',
    ],
  },
  {
    iconName: 'Banknote',
    title: 'Paie',
    jobs: [
      'Gestionnaire Paie',
      'Assistant Paie',
      'Coordinateur Paie',
      'Superviseur Paie',
      'Responsable Paie',
      'Expert Paie',
      'Directeur Paie',
      'Consultant SIRH',
    ],
  },
  {
    iconName: 'Scale',
    title: 'Juridique & RH',
    jobs: [
      'Secrétaire Juridique',
      'Assistant Juridique',
      'Juriste',
      'Responsable Juridique',
      'Chargé de Conformité',
      'Contrôleur Juridique',
      'Chargé Ressources Humaines',
      'Chargé Formation',
      'RRH',
      'DRH',
    ],
  },
  {
    iconName: 'BrainCircuit',
    title: 'IT & IA',
    jobs: [
      'Data Analyst',
      'Développeur',
      'Administrateur BDD',
      'Chef de Projet Applicatif',
      'Product Owner',
      'Ingénieur IA',
      'Data Scientist',
      'Data Engineer',
      'ML Engineer',
      'MLOps Engineer',
      'AI Product Manager',
      'Prompt Engineer',
    ],
  },
  {
    iconName: 'Briefcase',
    title: 'Assistanat de Direction & Office Management',
    jobs: [
      'Secrétaire',
      'Assistant(e) Administratif(ve)',
      'Assistant(e) de Direction',
      'Assistant(e) Bilingue',
      'Assistant(e) Trilingue',
      'Office Manager',
      'Executive Assistant',
      'Chef de Cabinet',
    ],
  },
  {
    iconName: 'Handshake',
    title: 'Assistanat Commercial & Commerce',
    jobs: [
      'Assistante Commerciale',
      'Chargé(e) de Clientèle BtoB/BtoC',
      'Assistant(e) Import-Export',
      'Technico-Commercial(e)',
      'Analyste Commercial(e)',
    ],
  },
  {
    iconName: 'ClipboardCheck',
    title: 'Administration des Ventes (ADV)',
    jobs: [
      'Assistant(e) ADV',
      'Gestionnaire ADV',
      'Coordinateur(trice) ADV',
      'Assistant(e) SAV / Gestionnaire Litiges',
      'Responsable ADV',
    ],
  },
  {
    iconName: 'ShoppingCart',
    title: 'Achats & Approvisionnement',
    jobs: [
      'Assistant(e) Achats',
      'Approvisionneur(se)',
      'Acheteur(se)',
      'Responsable Achats',
    ],
  },
  {
    iconName: 'Truck',
    title: 'Logistique & Supply Chain',
    jobs: [
      'Coordinateur(trice) Logistique',
      "Responsable d'Exploitation",
      'Supply Chain Manager',
      'Responsable E-commerce / Logistique Omnicanale',
    ],
  },
  {
    iconName: 'HardHat',
    title: 'BTP',
    jobs: [
      'Dessinateur',
      'Chef de Chantier',
      "Chargé d'Affaires",
      'Conducteur de Travaux',
      'Ingénieur Travaux',
    ],
  },
] as const

// ---------------------------------------------------------------------------
// Page Candidats — les volets adressés aux candidats
// ---------------------------------------------------------------------------

// Volet 1 — « Quel est le process de recrutement ? »
export const candidateProcess = [
  {
    iconName: 'Inbox',
    step: '01',
    title: 'Réception et traitement des candidatures',
    description:
      'Chaque candidature est lue et étudiée. Vous recevez un retour, quelle que soit notre décision.',
  },
  {
    iconName: 'Phone',
    step: '02',
    title: 'Premier échange téléphonique',
    description:
      'Un premier contact pour faire connaissance, comprendre votre recherche et vous présenter le poste.',
  },
  {
    iconName: 'MessagesSquare',
    step: '03',
    title: 'Entretien approfondi',
    description:
      'Un entretien pour échanger plus en détail sur votre parcours, vos compétences et vos aspirations.',
  },
  {
    iconName: 'Users',
    step: '04',
    title: 'Entretien client',
    description:
      "Nous organisons et préparons votre rencontre avec l'entreprise, en vous donnant toutes les clés.",
  },
  {
    iconName: 'ClipboardCheck',
    step: '05',
    title: 'Débrief et retour',
    description:
      "Un retour clair après chaque étape, côté entreprise comme côté candidat. Sans langue de bois.",
  },
] as const

// Volet 2 — « Pourquoi postuler chez BYS Consulting ? »
export const whyApply = [
  {
    iconName: 'Eye',
    title: 'Transparence des process',
    description:
      "Vous savez où vous postulez, qui décide, à quelle étape vous en êtes et pourquoi le poste existe.",
  },
  {
    iconName: 'MessagesSquare',
    title: 'Communication fluide',
    description:
      "Nous restons joignables et nous revenons vers vous. Pas de candidature qui disparaît dans le vide.",
  },
  {
    iconName: 'Lightbulb',
    title: 'Des conseils qui font la différence',
    description:
      "Améliorer votre CV, préparer votre entretien, travailler votre posture : de quoi réussir haut la main.",
  },
  {
    iconName: 'Compass',
    title: 'Un coaching pendant la période d’essai',
    description:
      "Possibilité de se faire accompagner sur du coaching au cours de votre période d'essai.",
  },
] as const
