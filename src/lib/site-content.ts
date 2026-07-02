/**
 * site-content.ts — Contenu BYS Consulting
 *
 * Toute la copie + tous les visuels par défaut sont centralisés ici.
 * Le CMS (via /api/content/[pageId]) peut surcharger n'importe quelle valeur
 * en runtime ; ce qui est ici sert de fallback / d'état initial.
 */

// ============================================================================
//                          IMAGES — pool de visuels
// ============================================================================
// Photos d'équipes, bureaux, réunions, poignées de main, coaching — univers
// "talents · stratégie · accompagnement".

export const images = {
  // Hero homepage — 3 images qui défilent en carousel
  heroCarousel: [
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80',
  ],

  // Section "Notre histoire" sur la home
  story:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',

  // Page À propos — image principale du hero
  aboutHero:
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80',

  // Page Services — image de fond du hero
  servicesHero:
    'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1920&q=80',

  // Page Contact — image de fond du hero
  contactHero:
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80',

  // Page À propos — galerie 4 images
  aboutGallery: [
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
  ],

  // Page Services — images pour chaque prestation
  services: [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', // recrutement
    'https://images.unsplash.com/photo-1573164713619-24c711fe7878?auto=format&fit=crop&w=1200&q=80', // coaching
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80', // intégration
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', // leadership
    'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80', // équipe
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80', // transformation
  ],

  // Section Méthode Leadership 3.0 (home + services) — leader parlant à ses équipes
  method:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',

  // Page Candidats — hero
  candidatesHero:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',

  // Section CTA — 2 colonnes d'images animées en marquee vertical
  ctaScrollColumns: {
    col1: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=500&fit=crop&q=75',
    ],
    col2: [
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop&q=75',
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=500&fit=crop&q=75',
    ],
  },

  // GalleryCarousel sur la home
  homeGallery: [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=720&q=80',
  ],
}

// ============================================================================
//                          HOME — Hero + sections
// ============================================================================

export const heroContent = {
  eyebrow: 'BYS Consulting',
  title: 'By Your Side, à chaque étape clé de votre organisation',
  description:
    "Cabinet de recrutement et de coaching dédié aux fonctions supports. Nous identifions les talents qui font la différence et accompagnons vos managers dans la durée.",
  button1: 'Échanger avec nous',
  button2: 'Découvrir nos services',
  images: images.heroCarousel,
}

export const storyContent = {
  eyebrow: 'Notre conviction',
  title: 'Recruter, ce n\'est pas combler un poste, c\'est construire une équipe qui gagne',
  paragraph1:
    "Chez BYS Consulting, nous sommes convaincus que les fonctions supports (RH, finance, juridique, assistanat, gestion) sont stratégiques. En leur donnant les moyens d'évoluer, c'est toute l'entreprise qui gagne en performance et en agilité.",
  paragraph2:
    "C'est pourquoi nous combinons recrutement stratégique et coaching : sécuriser le bon profil, accélérer son intégration et développer son impact dans la durée. Un mauvais recrutement coûte entre 30 000 et 50 000 €. Le bon, lui, transforme une organisation.",
  image: images.story,
}

// Aperçu des services sur la home (4 cards)
export const servicesPreviewContent = {
  eyebrow: 'Recrutement · Conseil RH · Coaching d\'entreprise',
  title: 'Trois expertises au service de votre performance',
  description:
    "Une approche complète, sur-mesure, pour sécuriser vos recrutements et faire grandir vos équipes.",
  items: [
    {
      iconName: 'UserSearch',
      title: 'Recrutement stratégique',
      desc: 'Chasse de tête sur les fonctions supports (RH, finance, juridique, assistanat, gestion) avec notre méthode Leadership 3.0.',
    },
    {
      iconName: 'Compass',
      title: 'Coaching individuel & collectif',
      desc: "Accompagnement des dirigeants, managers et équipes pour libérer leur potentiel et construire des performances durables.",
    },
    {
      iconName: 'Handshake',
      title: 'Intégration accompagnée',
      desc: 'Coaching dès la période d\'essai pour aligner les nouvelles recrues à la culture et accélérer leur montée en performance.',
    },
    {
      iconName: 'TrendingUp',
      title: 'Transformation managériale',
      desc: "Gestion du stress, des transitions et de l'incertitude. Nous accompagnons vos managers dans les moments clés.",
    },
  ],
}

export const testimonialsContent = {
  eyebrow: 'Ils nous font confiance',
  title: 'Des dirigeants et DRH qui témoignent',
  description:
    "Ce que disent celles et ceux que nous accompagnons au quotidien.",
  items: [
    { name: 'Caroline M.', company: 'DRH, Groupe industriel', text: "BYS a recruté notre Directrice Financière en 6 semaines. Profil parfaitement aligné avec notre culture, intégration réussie. Une vraie différence par rapport aux cabinets classiques.", stars: 5 },
    { name: 'Sébastien L.', company: 'CEO, Cabinet d\'avocats', text: "Le coaching de mes associés a transformé notre dynamique d'équipe. Samir a une capacité rare à mettre le doigt sur ce qui bloque vraiment.", stars: 5 },
    { name: 'Aurélie P.', company: 'DG, PME services', text: "Recrutement de mon assistante de direction et coaching de prise de poste. Nour est exigeante, à l'écoute et profondément humaine. On sent qu'elle croit en ses candidats.", stars: 5 },
    { name: 'Karim B.', company: 'Directeur, Start-up tech', text: "L'approche combinée recrutement + coaching nous a évité une erreur coûteuse sur un poste clé. Méthode rigoureuse et regard juste.", stars: 5 },
    { name: 'Léa T.', company: 'RRH, Groupe retail', text: "Travailler avec BYS, c'est sortir de la logique transactionnelle. Ils s'engagent vraiment, sur le long terme.", stars: 5 },
    { name: 'Vincent D.', company: 'Président, Holding familiale', text: "Accompagnement de la transition managériale de mon DAF. Résultats concrets, mesurables, en moins de 6 mois.", stars: 5 },
    { name: 'Sophia R.', company: 'COO, Scale-up', text: "Ils comprennent les enjeux humains d'une organisation comme peu de cabinets savent le faire. Indispensables.", stars: 5 },
    { name: 'Olivier F.', company: 'DG, ETI', text: "Nour a trouvé en 3 semaines un profil que nous cherchions depuis 6 mois. Et le candidat est toujours là 2 ans après.", stars: 5 },
  ],
}

export const galleryContent = {
  eyebrow: 'Notre univers',
  title: "L'humain au cœur de chaque mission",
  images: images.homeGallery,
}

export const ctaContent = {
  eyebrow: 'Parlons de vos enjeux',
  title: 'Un poste à pourvoir, une équipe à faire grandir ?',
  description:
    "Échangeons sans engagement. Nous vous proposerons l'approche la plus adaptée : recrutement, coaching, ou les deux.",
  button: 'Prendre rendez-vous',
  scrollImages: images.ctaScrollColumns,
}

export const faqContent = {
  eyebrow: 'Questions fréquentes',
  title: 'Vos questions, nos réponses',
  description:
    "Tout ce qu'il faut savoir avant de nous confier un recrutement ou un accompagnement.",
  items: [
    {
      question: 'Sur quels types de postes intervenez-vous ?',
      answer:
        "Nous sommes spécialisés sur les fonctions supports : RH, finance, juridique, assistanat de direction, gestion administrative et contrôle de gestion. Du middle management aux postes de direction, en CDI principalement.",
    },
    {
      question: 'Pourquoi associer recrutement et coaching ?',
      answer:
        "Parce qu'un bon recrutement ne se limite pas à trouver la bonne personne. Il s'agit aussi de l'intégrer durablement. Le coaching dès la période d'essai permet d'aligner les nouvelles recrues à la culture de l'entreprise et de les rendre rapidement performantes. C'est une réponse complète, pas deux prestations séparées.",
    },
    {
      question: 'Quels sont vos délais de recrutement ?',
      answer:
        "En moyenne 4 à 8 semaines entre le lancement de la mission et la signature du candidat. Nous présentons une shortlist de 3 à 4 profils qualifiés dans les 3 premières semaines.",
    },
    {
      question: 'Quelle est votre méthode Leadership 3.0 ?',
      answer:
        "Une approche qui aligne chaque recrutement avec la culture, la vision et les valeurs de l'entreprise. Au-delà des compétences techniques, nous évaluons la capacité du candidat à incarner le projet de l'organisation et à contribuer à sa transformation.",
    },
    {
      question: 'Proposez-vous une garantie sur vos recrutements ?',
      answer:
        "Oui. Nous garantissons nos recrutements pendant la période d'essai. En cas de départ, nous relançons la mission sans honoraires supplémentaires. Mais notre meilleure garantie reste notre méthode et le coaching d'intégration.",
    },
    {
      question: 'Pouvez-vous accompagner une équipe entière ?',
      answer:
        "Oui : coaching collectif, accompagnement du leadership, gestion des transitions, séminaires d'alignement. Samir intervient régulièrement auprès de CODIR et de comités de direction pour faire monter le collectif en maturité.",
    },
  ],
}

// ============================================================================
//                          ABOUT — page À propos
// ============================================================================

export const aboutContent = {
  hero: {
    eyebrow: 'Qui sommes-nous',
    title: 'Deux expertises, une conviction commune : l\'humain fait la performance',
    description:
      "BYS Consulting est né de la rencontre de Nourelhouda Boukhercha et Samir Bourebaba. Deux parcours, une vision partagée : recruter, accompagner et faire grandir les talents qui transforment les organisations.",
    image: images.aboutHero,
  },
  stats: [
    { value: '20+', label: "Années d'expérience cumulées" },
    { value: '98%', label: 'Recrutements pérennes' },
    { value: '4-8 sem', label: 'Délai moyen de recrutement' },
    { value: '100%', label: 'Sur-mesure' },
  ],
  team: {
    eyebrow: 'Les fondateurs',
    title: 'Deux parcours, une seule exigence',
    description:
      "Nour & Samir ont co-fondé BYS Consulting pour incarner une vision plus engagée, plus humaine et plus stratégique du conseil RH.",
    members: [
      {
        name: 'Nourelhouda Boukhercha',
        firstName: 'Nour',
        role: 'Co-fondatrice · Recrutement & Conseil RH',
        photo: 'https://i.ibb.co/twDnRCHC/Nour.jpg',
        bio: "Après 5 années d'expérience en recrutement et en management, marquées par une passion pour l'accompagnement des talents et une forte exigence du service, Nour a co-fondé BYS Consulting pour donner vie à une vision plus engagée, humaine et stratégique du conseil RH.",
        highlights: [
          'Recrutement stratégique sur les fonctions supports',
          'Méthode Leadership 3.0',
          'Accompagnement de l\'intégration & du onboarding',
        ],
        linkedIn: 'https://www.linkedin.com/in/nourelhouda-boukhercha-651b10151/',
      },
      {
        name: 'Samir Bourebaba',
        firstName: 'Samir',
        role: 'Co-fondateur · Coaching & Performance managériale',
        photo: 'https://i.ibb.co/twySH76S/Samir.jpg',
        bio: "Après plus de 15 ans d'expérience dans le sport et le football professionnel, Samir a forgé une vision profonde de la performance, de l'engagement et de la rigueur. Aujourd'hui, il accompagne dirigeants, managers et équipes à libérer leur potentiel et bâtir des performances durables.",
        highlights: [
          'Coaching individuel & collectif en entreprise',
          'Leadership & performance managériale',
          'Gestion du stress, de l\'incertitude et des transitions',
        ],
        linkedIn: 'https://www.linkedin.com/in/samir-bourebaba-100217181/',
      },
    ],
  },
  values: [
    {
      iconName: 'Heart',
      title: 'Humain d\'abord',
      description:
        "Nous comprenons les enjeux humains d'une organisation avant de proposer des solutions. Pas de réponse standard à des situations uniques.",
    },
    {
      iconName: 'Target',
      title: 'Exigence',
      description: "Nous ne présentons que des profils que nous recommanderions à nos propres équipes. L'exigence du service est notre signature.",
    },
    {
      iconName: 'Users',
      title: 'Engagement durable',
      description:
        "By Your Side : à vos côtés sur le long terme, pas seulement le temps d'une mission. Nous suivons nos candidats bien après l'intégration.",
    },
  ],
  gallery: images.aboutGallery,
}

// ============================================================================
//                          SERVICES — page Services
// ============================================================================

export const servicesContent = {
  hero: {
    eyebrow: 'Nos prestations',
    title: 'Recrutement, coaching, transformation : une réponse complète',
    description:
      "Nous combinons recrutement stratégique et accompagnement humain pour sécuriser vos enjeux clés et faire grandir vos équipes.",
  },
  kpis: [
    { value: '7', label: 'expertises' },
    { value: '20+', label: "années d'expérience" },
    { value: '100%', label: 'sur-mesure' },
  ],
  list: [
    {
      iconName: 'UserSearch',
      title: 'Recrutement CDI / CDD',
      description: "Chasse de tête sur les fonctions supports (RH, finance, juridique, assistanat, gestion). Méthode Leadership 3.0 alignée sur la culture et la vision de l'entreprise.",
      points: ['Sourcing ciblé & approche directe', 'Évaluation comportementale', 'Garantie période d\'essai'],
      image: images.services[0],
    },
    {
      iconName: 'Waypoints',
      title: 'Intérim & travail temporaire',
      description: "Des profils opérationnels immédiatement pour absorber un pic d'activité, remplacer une absence ou sécuriser une transition. Nous gérons le sourcing, l'évaluation et l'administratif de bout en bout.",
      points: ['Réactivité sous 24-72h', 'Profils qualifiés & évalués', 'Gestion administrative complète'],
      image: images.services[4],
    },
    {
      iconName: 'Compass',
      title: 'Coaching individuel',
      description: "Accompagnement des dirigeants, managers et talents clés pour libérer leur potentiel et bâtir des performances durables, en prenant en compte l'humain dans toute sa complexité.",
      points: ['Prise de poste & transitions', 'Leadership & posture', 'Gestion du stress & incertitude'],
      image: images.services[1],
    },
    {
      iconName: 'Handshake',
      title: 'Intégration accompagnée',
      description: "Coaching dès la période d'essai pour aligner les nouvelles recrues aux valeurs et à la culture de l'entreprise, et les rendre rapidement performantes.",
      points: ['Onboarding sur 90 jours', 'Alignement culturel', 'Suivi managérial'],
      image: images.services[2],
    },
    {
      iconName: 'TrendingUp',
      title: 'Performance managériale',
      description: "Accompagnement du leadership et de la performance managériale : ateliers, séminaires CODIR, coaching d'équipe pour bâtir des collectifs qui gagnent.",
      points: ['Coaching d\'équipe', 'Séminaires CODIR', 'Alignement stratégique'],
      image: images.services[3],
    },
    {
      iconName: 'Users',
      title: 'Coaching collectif',
      description: "Faire grandir le collectif : gestion des dynamiques de groupe, résolution des tensions, construction d'une culture commune autour d'objectifs partagés.",
      points: ['Dynamiques d\'équipe', 'Résolution de conflits', 'Vision partagée'],
      image: images.services[4],
    },
    {
      iconName: 'Sparkles',
      title: 'Transformation & transitions',
      description: "Accompagnement des moments clés : fusion, croissance, réorganisation, changement de gouvernance. Nous sécurisons l'humain quand tout bouge.",
      points: ['Conduite du changement', 'Gestion des transitions', 'Accompagnement RH'],
      image: images.services[5],
    },
  ],
}

// ============================================================================
//                          CONTACT — page Contact
// ============================================================================

export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Discutons de vos enjeux',
    description:
      'Un poste à pourvoir, un manager à accompagner, une équipe à faire grandir ? Échangeons. Nous répondons sous 24h.',
  },
}

// ============================================================================
//                  MÉTHODE LEADERSHIP 3.0 — home + services
// ============================================================================

export const methodContent = {
  eyebrow: 'Notre méthode',
  title: 'Leadership 3.0, la signature BYS',
  description:
    "Une approche qui aligne chaque recrutement et chaque accompagnement avec la culture, la vision et les valeurs de l'entreprise. Au-delà des compétences techniques, nous évaluons la capacité à incarner le projet et à transformer l'organisation.",
  image: images.method,
  pillars: [
    {
      iconName: 'Target',
      title: 'Aligner',
      description:
        "Comprendre vos enjeux humains et stratégiques avant tout. Pas de réponse standard à des situations uniques.",
    },
    {
      iconName: 'UserSearch',
      title: 'Recruter',
      description:
        "Identifier les profils qui ne se contentent pas du poste : ceux qui portent une vision, incarnent la culture et créent du levier.",
    },
    {
      iconName: 'TrendingUp',
      title: 'Faire grandir',
      description:
        "Accompagner dans la durée : intégration, coaching individuel, performance managériale. By Your Side à chaque étape.",
    },
  ],
}

// ============================================================================
//             CANDIDATES BAND — bande discrète en fin de home
// ============================================================================

export const candidatesBandContent = {
  eyebrow: 'Vous êtes candidat ?',
  title: 'Votre prochain défi commence par une vraie écoute',
  description:
    "Nous recrutons sur les fonctions supports (RH, finance, juridique, assistanat, gestion). Découvrez notre approche et faites-vous connaître.",
  button: "Découvrir l'espace candidats",
  href: '/candidats',
}

// ============================================================================
//                         CANDIDATS — page /candidats
// ============================================================================

export const candidatesContent = {
  hero: {
    eyebrow: 'Candidats',
    title: 'Votre prochain défi commence ici',
    description:
      "Nous chassons les talents qui font la différence sur les fonctions supports. Approche directe, écoute réelle, accompagnement après la signature.",
    image: images.candidatesHero,
  },
  offers: {
    eyebrow: 'Offres en cours',
    title: 'Nos offres d\'emploi',
    description:
      "Voici une sélection de postes que nous recrutons actuellement pour nos clients. Toutes nos missions sont confidentielles : nous vous communiquons le nom de l\'entreprise lors de notre premier échange.",
    items: [
      {
        iconName: 'BarChart3',
        category: 'Finance',
        title: 'Directeur Administratif & Financier (DAF)',
        company: 'Groupe industriel · 250 collaborateurs',
        location: 'Lyon',
        contract: 'CDI',
        salary: '90-110 k€',
        summary:
          "Pilotage finance, contrôle de gestion et systèmes d\'information. Rattaché au DG, membre du COMEX. Enjeux de transformation digitale et d\'optimisation des marges.",
      },
      {
        iconName: 'Users',
        category: 'Ressources Humaines',
        title: 'Directeur·rice des Ressources Humaines',
        company: 'Scale-up tech · 120 collaborateurs',
        location: 'Paris',
        contract: 'CDI',
        salary: '80-100 k€',
        summary:
          "Construire la fonction RH d\'une entreprise en hyper-croissance : structuration, marque employeur, accompagnement managers, culture. Rattaché au CEO.",
      },
      {
        iconName: 'Scale',
        category: 'Juridique',
        title: 'Juriste Corporate Senior',
        company: 'Groupe coté · secteur énergie',
        location: 'Paris',
        contract: 'CDI',
        salary: '65-85 k€',
        summary:
          "Sécurisation des opérations M&A, corporate governance, accompagnement des filiales. Environnement international, 5-8 ans d\'expérience en cabinet ou en entreprise.",
      },
      {
        iconName: 'Briefcase',
        category: 'Assistanat de direction',
        title: 'Office Manager bilingue',
        company: 'Cabinet de conseil · 40 collaborateurs',
        location: 'Paris',
        contract: 'CDI',
        salary: '45-55 k€',
        summary:
          "Assistanat des associés, organisation du bureau, gestion administrative et coordination des événements clients. Anglais courant indispensable.",
      },
      {
        iconName: 'FileText',
        category: 'Comptabilité',
        title: 'Responsable Comptable',
        company: 'ETI services · 600 collaborateurs',
        location: 'Bordeaux',
        contract: 'CDI',
        salary: '55-70 k€',
        summary:
          "Management d\'une équipe de 4 personnes, clôtures mensuelles, consolidation et fiabilisation des process. Bac+5 et 8 ans d\'expérience minimum.",
      },
      {
        iconName: 'TrendingUp',
        category: 'Contrôle de gestion',
        title: 'Contrôleur de Gestion Industriel',
        company: 'Groupe industriel · 4 sites',
        location: 'Nantes',
        contract: 'CDI',
        salary: '50-65 k€',
        summary:
          "Animation du contrôle de gestion industriel, suivi des coûts de production, analyse de la performance des sites. Business partner des directeurs d\'usine.",
      },
    ],
  },
  approach: {
    eyebrow: 'Notre approche candidat',
    title: 'Ce qui change quand vous échangez avec BYS',
    description:
      "Nous ne sommes pas une plateforme de jobs. Nous prenons le temps de comprendre votre parcours, vos aspirations, et nous ne vous présentons que des opportunités où vous pouvez vraiment réussir.",
    items: [
      {
        iconName: 'Heart',
        title: 'Écoute',
        description:
          "Un vrai temps d'échange pour comprendre votre projet professionnel, vos contraintes, vos non-négociables.",
      },
      {
        iconName: 'Sparkles',
        title: 'Transparence',
        description:
          "Pas d'opportunité maquillée. Vous savez exactement où vous postulez, qui décide, pourquoi le poste existe.",
      },
      {
        iconName: 'Handshake',
        title: 'Suivi',
        description:
          "Notre engagement ne s'arrête pas à la signature. Coaching d'intégration, point régulier, support en cas de besoin.",
      },
    ],
  },
  jobs: {
    eyebrow: 'Postes que nous recrutons',
    title: 'Notre terrain de jeu : les fonctions supports',
    description:
      "Du middle management aux postes de direction, en CDI principalement, sur toute la France.",
    items: [
      { iconName: 'Users', label: 'Ressources Humaines', examples: 'DRH · RRH · Responsable Recrutement · Chargé RH' },
      { iconName: 'BarChart3', label: 'Finance', examples: 'DAF · Contrôleur de gestion · Responsable Comptable · Auditeur' },
      { iconName: 'Scale', label: 'Juridique', examples: 'Directeur Juridique · Juriste corporate · Compliance · Contract Manager' },
      { iconName: 'Briefcase', label: 'Assistanat de direction', examples: 'Office Manager · Assistant(e) de direction · Executive Assistant' },
      { iconName: 'FileText', label: 'Gestion administrative', examples: 'Responsable administratif · Coordinateur · Gestionnaire' },
      { iconName: 'TrendingUp', label: 'Contrôle de gestion', examples: 'Contrôleur de gestion · Business Partner Finance · FP&A' },
    ],
  },
  process: {
    eyebrow: 'Notre process',
    title: 'En 4 étapes : de la première rencontre à votre prise de poste',
    items: [
      {
        step: '01',
        title: 'Premier échange',
        description: "30 minutes pour faire connaissance, comprendre votre parcours et vos aspirations. Sans engagement.",
      },
      {
        step: '02',
        title: 'Évaluation approfondie',
        description: "Entretien long format avec Nour pour valider l'adéquation entre votre profil et nos missions ouvertes.",
      },
      {
        step: '03',
        title: 'Présentation à l\'entreprise',
        description: "Nous présentons votre candidature avec un dossier qualitatif. Vous savez à l'avance qui vous rencontrerez et pourquoi.",
      },
      {
        step: '04',
        title: 'Coaching d\'intégration',
        description: "Une fois en poste, Samir vous accompagne sur les 90 premiers jours pour sécuriser votre prise de fonction.",
      },
    ],
  },
  cta: {
    eyebrow: 'Faites-vous connaître',
    title: 'Vous êtes en recherche ou en veille ?',
    description:
      "Envoyez-nous votre CV ou prenons un café virtuel. Nous reviendrons vers vous sous 48h.",
    button: 'Nous écrire',
  },
}
