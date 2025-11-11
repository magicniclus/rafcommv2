import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieCancaleConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Cancale – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Cancale. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Cancale",
    "maçon Cancale",
    "entreprise maçonnerie Cancale",
    "joints pierres Cancale",
    "extension maison Cancale",
    "devis maçonnerie Cancale",
    "entrepreneur bâtiment Cancale",
    "assainissement Cancale",
    "travaux maçonnerie Cancale"
  ],
  
  // Contenu principal
  sectorName: "Cancale",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Entreprise de maçonnerie à Cancale",
  heroSubtitle: "Spécialiste maçonnerie générale à Cancale. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Cancale",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Cancale. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Cancale, en respectant le caractère maritime et authentique de cette cité ostréicole.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour tous vos projets."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration et rénovation de bâtiments anciens avec techniques traditionnelles respectueuses du patrimoine maritime."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures dans murs porteurs et extensions de maison adaptées aux contraintes côtières."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits résistants aux embruns marins pour protéger et embellir vos façades."
    },
    {
      title: "Assainissement",
      description: "Installation et rénovation de systèmes d'assainissement adaptés aux terrains côtiers."
    },
    {
      title: "Murs de soutènement",
      description: "Construction de murs de soutènement pour stabiliser les terrains en pente face à la mer."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en construction côtière",
    "Matériaux résistants aux embruns",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide dans un rayon de 50km",
    "Conseil technique personnalisé",
    "Respect de l'environnement maritime"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Rénovation maison de pêcheur Cancale",
      type: "Maison traditionnelle - 100m²",
      description: "Restauration complète avec joints à l'ancienne, enduits résistants aux embruns et création d'ouvertures."
    },
    {
      title: "Extension vue mer Cancale",
      type: "Extension 30m² + terrasse",
      description: "Agrandissement avec fondations renforcées, murs en pierre et finitions adaptées au climat marin."
    },
    {
      title: "Mur de soutènement Cancale",
      type: "Mur 20m linéaires",
      description: "Construction mur de soutènement en pierre pour stabiliser terrain en pente face à la baie."
    }
  ],
  
  // Informations de contact
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  
  // Secteurs proches
  nearbyAreas: [
    "Saint-Malo",
    "Saint-Coulomb",
    "Saint-Méloir-des-Ondes",
    "Lillemer",
    "Baguer-Morvan",
    "La Gouesnière",
    "Mont-Dol",
    "Dol-de-Bretagne",
    "Cherrueix",
    "Hirel"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieCancaleConfig.sectorName,
  maconnerieCancaleConfig.location,
  maconnerieCancaleConfig.description,
  maconnerieCancaleConfig.keywords
);

export default function MaconnerieCancalePage() {
  return <SectorPage {...maconnerieCancaleConfig} />;
}
