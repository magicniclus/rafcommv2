import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieDinardConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Dinard – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Dinard. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Dinard",
    "maçon Dinard",
    "entreprise maçonnerie Dinard",
    "joints pierres Dinard",
    "extension maison Dinard",
    "devis maçonnerie Dinard",
    "entrepreneur bâtiment Dinard",
    "assainissement Dinard",
    "travaux maçonnerie Dinard"
  ],
  
  // Contenu principal
  sectorName: "Dinard",
  heroImage: "/extension.png",
  heroTitle: "Entreprise de maçonnerie à Dinard",
  heroSubtitle: "Spécialiste maçonnerie générale à Dinard. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Dinard",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Dinard. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Dinard, perle de la Côte d'Émeraude réputée pour ses villas Belle Époque.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour villas de prestige."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de villas Belle Époque et maisons de maître avec respect du patrimoine architectural."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures et extensions haut de gamme pour optimiser vos espaces de vie face à la mer."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits de qualité supérieure adaptés au climat marin et au standing dinardais."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement conformes aux exigences de cette station balnéaire."
    },
    {
      title: "Aménagements de prestige",
      description: "Terrasses, escaliers en pierre et murets pour sublimer vos extérieurs face à la baie."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en rénovation de prestige",
    "Respect du patrimoine Belle Époque",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide Côte d'Émeraude",
    "Conseil architectural haut de gamme",
    "Matériaux nobles et durables"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Restauration villa Belle Époque Dinard",
      type: "Villa 1900 - 200m²",
      description: "Rénovation complète façade, joints pierre, enduits de prestige et création d'ouvertures panoramiques."
    },
    {
      title: "Extension contemporaine Dinard",
      type: "Extension 50m² + terrasse",
      description: "Agrandissement moderne en harmonie avec l'existant, vue mer et finitions haut de gamme."
    },
    {
      title: "Aménagement jardin en pente Dinard",
      type: "Terrasses et escaliers pierre",
      description: "Création de terrasses étagées avec escaliers en pierre naturelle et murs de soutènement."
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
    "Saint-Lunaire",
    "Saint-Briac-sur-Mer",
    "Pleurtuit",
    "La Richardais",
    "Saint-Énogat",
    "Lancieux",
    "Ploubalay",
    "Plancoët",
    "Dinan"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieDinardConfig.sectorName,
  maconnerieDinardConfig.location,
  maconnerieDinardConfig.description,
  maconnerieDinardConfig.keywords
);

export default function MaconnerieDinardPage() {
  return <SectorPage {...maconnerieDinardConfig} />;
}
