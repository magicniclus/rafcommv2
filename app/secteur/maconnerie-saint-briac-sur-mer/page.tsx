import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintBriacConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Saint-Briac-sur-Mer – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Briac-sur-Mer. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Saint-Briac-sur-Mer",
    "maçon Saint-Briac",
    "entreprise maçonnerie Saint-Briac",
    "joints pierres Saint-Briac",
    "extension maison Saint-Briac",
    "devis maçonnerie Saint-Briac",
    "entrepreneur bâtiment Saint-Briac",
    "assainissement Saint-Briac",
    "travaux maçonnerie Saint-Briac"
  ],
  
  // Contenu principal
  sectorName: "Saint-Briac-sur-Mer",
  heroImage: "/facade.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Briac-sur-Mer",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Briac-sur-Mer. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Saint-Briac-sur-Mer",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Briac-sur-Mer. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Saint-Briac-sur-Mer, station balnéaire prisée de la Côte d'Émeraude.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour villas et résidences."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de villas anciennes et maisons de caractère avec techniques traditionnelles bretonnes."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures pour optimiser la vue mer et extensions pour agrandir vos espaces de vie."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits haute résistance aux embruns pour préserver vos façades face à la mer."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement adaptés aux résidences secondaires et principales."
    },
    {
      title: "Terrasses et murets",
      description: "Aménagements extérieurs en pierre pour profiter pleinement de votre cadre de vie exceptionnel."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en construction balnéaire",
    "Matériaux haute résistance marine",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide Côte d'Émeraude",
    "Conseil architectural personnalisé",
    "Respect de l'environnement côtier"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Rénovation villa balnéaire Saint-Briac",
      type: "Villa années 30 - 150m²",
      description: "Restauration complète façade, joints pierre, enduits anti-embruns et création baie vitrée vue mer."
    },
    {
      title: "Extension résidence secondaire",
      type: "Extension 40m² + terrasse",
      description: "Agrandissement avec ouvertures panoramiques, fondations renforcées et finitions haut de gamme."
    },
    {
      title: "Aménagement terrain en pente",
      type: "Murets et terrasses",
      description: "Création de terrasses étagées en pierre avec murs de soutènement pour optimiser l'espace."
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
    "Dinard",
    "Saint-Lunaire",
    "Saint-Malo",
    "Pleurtuit",
    "La Richardais",
    "Lancieux",
    "Ploubalay",
    "Plancoët",
    "Créhen",
    "Fréhel"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieSaintBriacConfig.sectorName,
  maconnerieSaintBriacConfig.location,
  maconnerieSaintBriacConfig.description,
  maconnerieSaintBriacConfig.keywords
);

export default function MaconnerieSaintBriacPage() {
  return <SectorPage {...maconnerieSaintBriacConfig} />;
}
