export const SITE_NAME = "L'Art d'Oise";
export const SITE_TAGLINE = "Réceptions d'exception à Saint-Maximin";
export const SITE_DESCRIPTION =
  "L'Art d'Oise, lieu de réception prestigieux à Saint-Maximin. Mariages, fiançailles et événements privés dans un cadre d'exception. Jusqu'à 850 invités, terrasse de 300 m², espaces modulables.";

export const CONTACT = {
  phone: "01 23 45 67 89",
  email: "contact@lartdoise.fr",
  address: "Saint-Maximin, Oise",
  fullAddress: "Rue de l'Exemple, 60740 Saint-Maximin, Oise",
};

export const SOCIALS = {
  instagram: "https://instagram.com/lartdoise",
  facebook: "https://facebook.com/lartdoise",
  pinterest: "https://pinterest.com/lartdoise",
};

export const SPACES = [
  {
    id: "salle-principale",
    name: "La Grande Salle",
    surface: "750 m²",
    capacityStanding: 850,
    capacitySeated: 550,
    description:
      "Un volume majestueux baigné de lumière naturelle, conçu pour accueillir les réceptions les plus ambitieuses. Son ampleur permet une mise en scène sur-mesure, du cocktail au dîner, jusqu'à la soirée dansante.",
    usage: "Mariages, grandes réceptions, galas",
    featured: true,
  },
  {
    id: "salle-2",
    name: "Le Salon d'Honneur",
    surface: "110 m²",
    capacityStanding: 100,
    capacitySeated: 100,
    description:
      "Un espace intimiste et raffiné, idéal pour une réception élégante à taille humaine ou pour prolonger la Grande Salle lors de grandes célébrations.",
    usage: "Réceptions privées, cocktails, espace complémentaire",
    featured: false,
  },
  {
    id: "salle-3",
    name: "Le Boudoir",
    surface: "70 m²",
    capacityStanding: 70,
    capacitySeated: 70,
    description:
      "Un écrin de charme pour vos moments les plus précieux. Parfait pour un vin d'honneur intimiste, une cérémonie laïque ou un espace dédié aux enfants.",
    usage: "Cérémonies, espaces enfants, réunions privées",
    featured: false,
  },
  {
    id: "loge-vip",
    name: "La Loge VIP",
    surface: "20 m²",
    capacityStanding: undefined,
    capacitySeated: undefined,
    description:
      "Un refuge exclusif réservé aux mariés et à leurs proches. Un moment de calme et d'intimité au cœur de votre célébration.",
    usage: "Espace mariés, préparatifs, moments privilégiés",
    featured: false,
  },
  {
    id: "terrasse",
    name: "La Terrasse",
    surface: "300 m²",
    capacityStanding: 300,
    capacitySeated: undefined,
    description:
      "Une terrasse généreuse ouverte sur l'extérieur, parfaite pour un cocktail en plein air, des photos inoubliables ou une soirée sous les étoiles.",
    usage: "Cocktails, vin d'honneur, photos, soirées estivales",
    featured: false,
  },
];

export const BENEFITS = [
  {
    title: "Grands volumes",
    description:
      "Plus de 750 m² de salle principale pour accueillir vos invités dans un confort absolu.",
    icon: "Maximize2" as const,
  },
  {
    title: "Réception fluide",
    description:
      "Des espaces modulables qui permettent un déroulé harmonieux du cocktail à la soirée dansante.",
    icon: "Sparkles" as const,
  },
  {
    title: "Soirée dansante",
    description:
      "Manifestations dansantes autorisées : prolongez la fête jusqu'au bout de la nuit.",
    icon: "Music" as const,
  },
  {
    title: "Liberté totale",
    description:
      "Traiteur et restauration non imposés. Vous êtes libre de choisir vos prestataires.",
    icon: "ChefHat" as const,
  },
  {
    title: "Terrasse & extérieurs",
    description:
      "300 m² de terrasse pour vos cocktails en plein air et vos photos de rêve.",
    icon: "Sun" as const,
  },
  {
    title: "Confort des invités",
    description:
      "Accès PMR, lumière naturelle et espaces généreux pour le bien-être de chacun.",
    icon: "Heart" as const,
  },
  {
    title: "Accès pratique",
    description:
      "Parking sur place et nombreuses places à proximité. Hôtels accessibles à quelques minutes.",
    icon: "Car" as const,
  },
  {
    title: "Situation idéale",
    description:
      "Au cœur de Saint-Maximin, un accès facile depuis Paris et les grandes villes de l'Oise.",
    icon: "MapPin" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Camille & Thomas",
    event: "Mariage — Juin 2025",
    text: "Un lieu magique qui a sublimé notre mariage. L'espace, la lumière, la terrasse… chaque détail était parfait. Nos 350 invités en parlent encore.",
    rating: 5,
  },
  {
    name: "Sophie & Julien",
    event: "Mariage — Septembre 2025",
    text: "Nous cherchions un lieu à la hauteur de nos rêves. L'Art d'Oise a dépassé toutes nos attentes. L'équipe est à l'écoute, le lieu est simplement somptueux.",
    rating: 5,
  },
  {
    name: "Amira & Karim",
    event: "Mariage — Août 2025",
    text: "La Grande Salle est impressionnante, la terrasse est un rêve pour les photos. Merci pour cette journée inoubliable dans ce cadre exceptionnel.",
    rating: 5,
  },
  {
    name: "Marie & Antoine",
    event: "Fiançailles — Mars 2025",
    text: "Le Salon d'Honneur était parfait pour nos fiançailles intimes. L'ambiance chaleureuse et l'élégance du lieu ont conquis tous nos proches.",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Quelle est la capacité maximale du lieu ?",
    answer:
      "La Grande Salle peut accueillir jusqu'à 850 personnes debout et 550 personnes assises. Avec la terrasse et les espaces complémentaires, nous pouvons adapter la configuration à votre événement.",
  },
  {
    question: "Peut-on choisir librement son traiteur ?",
    answer:
      "Absolument. Nous n'imposons aucun traiteur ni prestataire de restauration. Vous êtes entièrement libre de faire appel au professionnel de votre choix.",
  },
  {
    question: "Comment fonctionne la demande de devis ?",
    answer:
      "Remplissez notre formulaire en quelques étapes. Notre équipe vous recontacte sous 48h avec une proposition personnalisée adaptée à votre événement et vos souhaits.",
  },
  {
    question: "Comment fonctionne la pré-réservation ?",
    answer:
      "La pré-réservation constitue une demande de blocage temporaire de date, soumise à validation par notre équipe. Elle vous permet de sécuriser votre date le temps de finaliser votre projet.",
  },
  {
    question: "Le lieu dispose-t-il d'un parking ?",
    answer:
      "Oui, un parking est disponible sur place. De nombreuses places de stationnement supplémentaires sont également accessibles à proximité immédiate du lieu.",
  },
  {
    question: "Y a-t-il un hébergement sur place ?",
    answer:
      "Le lieu ne dispose pas d'hébergement, mais plusieurs hôtels de qualité se trouvent à proximité. Nous pouvons vous orienter vers nos partenaires hôteliers.",
  },
  {
    question: "Peut-on organiser une soirée dansante ?",
    answer:
      "Oui, les manifestations dansantes sont autorisées. L'Art d'Oise est parfaitement adapté pour prolonger votre réception en une soirée festive mémorable.",
  },
  {
    question: "Peut-on visiter la salle avant de réserver ?",
    answer:
      "Bien sûr. Nous vous invitons à prendre rendez-vous pour une visite personnalisée. C'est l'occasion de découvrir les espaces et d'échanger sur votre projet.",
  },
];

export const KEY_FIGURES = [
  { value: "750", unit: "m²", label: "de salle principale" },
  { value: "850", unit: "", label: "invités debout" },
  { value: "300", unit: "m²", label: "de terrasse" },
  { value: "5", unit: "", label: "espaces distincts" },
];

export const NAV_LINKS = [
  { label: "Le Lieu", href: "#espaces" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avantages", href: "#avantages" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#devis" },
];

export const EVENT_TYPES = [
  { value: "mariage", label: "Mariage" },
  { value: "fiancailles", label: "Fiançailles" },
  { value: "reception", label: "Réception privée" },
  { value: "autre", label: "Autre événement" },
];

export const GUEST_RANGES = [
  { value: "moins-50", label: "Moins de 50" },
  { value: "50-100", label: "50 à 100" },
  { value: "100-200", label: "100 à 200" },
  { value: "200-400", label: "200 à 400" },
  { value: "400+", label: "400+" },
];

export const SPACE_OPTIONS = [
  { value: "salle-principale", label: "Salle principale" },
  { value: "terrasse", label: "Terrasse" },
  { value: "plusieurs", label: "Plusieurs espaces" },
  { value: "a-definir", label: "À définir ensemble" },
];

export const NEED_TYPES = [
  { value: "location", label: "Location de salle uniquement" },
  { value: "accompagnement", label: "Accompagnement personnalisé" },
  { value: "conseil", label: "Je souhaite être conseillé" },
];

export const BUDGET_OPTIONS = [
  { value: "a-definir", label: "À définir" },
  { value: "maitrise", label: "Budget maîtrisé" },
  { value: "confort", label: "Confort" },
  { value: "premium", label: "Premium" },
  { value: "sur-mesure", label: "Sur-mesure" },
];
