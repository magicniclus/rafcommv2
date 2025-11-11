import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieCombourgConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Combourg – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Combourg. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Combourg",
    "maçon Combourg",
    "entreprise maçonnerie Combourg",
    "joints pierres Combourg",
    "extension maison Combourg",
    "devis maçonnerie Combourg",
    "entrepreneur bâtiment Combourg",
    "assainissement Combourg",
    "travaux maçonnerie Combourg"
  ],
  
  // Contenu principal
  sectorName: "Combourg",
  heroImage: "/facade.png",
  heroTitle: "Entreprise de maçonnerie à Combourg",
  heroSubtitle: "Spécialiste maçonnerie générale à Combourg. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Combourg",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Combourg. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Combourg, ville de Chateaubriand au riche patrimoine historique.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec respect du caractère historique de Combourg."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de maisons anciennes et bâtiments de caractère avec techniques traditionnelles bretonnes."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures et extensions en harmonie avec l'architecture locale et le paysage lacustre."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits traditionnels et modernes adaptés au climat et au style architectural local."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement adaptés aux terrains et contraintes environnementales."
    },
    {
      title: "Aménagements extérieurs",
      description: "Terrasses, murets et aménagements pour profiter du cadre naturel exceptionnel de Combourg."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en rénovation ancienne",
    "Respect de l'environnement lacustre",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Combourg",
    "Conseil architectural personnalisé",
    "Matériaux adaptés au climat local"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Rénovation maison de maître Combourg",
      type: "Demeure XIXe siècle - 180m²",
      description: "Restauration complète façade, joints pierre, enduits et création d'ouvertures vue lac."
    },
    {
      title: "Extension maison familiale Combourg",
      type: "Extension 30m² + terrasse",
      description: "Agrandissement avec vue sur le lac, fondations adaptées et finitions en harmonie."
    },
    {
      title: "Rénovation longère Combourg",
      type: "Longère bretonne - 120m²",
      description: "Restauration traditionnelle avec joints à l'ancienne, enduits chaux et respect du cachet."
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
    "Dol-de-Bretagne",
    "Tinténiac",
    "Hédé-Bazouges",
    "Québriac",
    "Lanrigan",
    "Meillac",
    "Trémeheuc",
    "Saint-Pierre-de-Plesguen",
    "Pleugueneuc",
    "Bonnemain"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieCombourgConfig.sectorName,
  maconnerieCombourgConfig.location,
  maconnerieCombourgConfig.description,
  maconnerieCombourgConfig.keywords
);

export default function MaconnerieCombourgPage() {
  return <SectorPage {...maconnerieCombourgConfig} />;
}
