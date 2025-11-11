import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieDolConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Dol-de-Bretagne – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Dol-de-Bretagne. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Dol-de-Bretagne",
    "maçon Dol-de-Bretagne",
    "entreprise maçonnerie Dol",
    "joints pierres Dol",
    "extension maison Dol",
    "devis maçonnerie Dol",
    "entrepreneur bâtiment Dol",
    "assainissement Dol",
    "travaux maçonnerie Dol"
  ],
  
  // Contenu principal
  sectorName: "Dol-de-Bretagne",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie à Dol-de-Bretagne",
  heroSubtitle: "Spécialiste maçonnerie générale à Dol-de-Bretagne. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Dol-de-Bretagne",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Dol-de-Bretagne. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Dol-de-Bretagne, cité épiscopale riche d'un patrimoine architectural exceptionnel.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec respect du caractère historique dolois."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de bâtiments anciens et maisons de caractère avec techniques traditionnelles bretonnes."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures et extensions respectueuses de l'architecture locale et des contraintes patrimoniales."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits traditionnels adaptés au climat et au style architectural de Dol-de-Bretagne."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement conformes aux normes pour habitations et commerces."
    },
    {
      title: "Rénovation centre-ville",
      description: "Rénovation de commerces et habitations du centre historique avec respect du cachet authentique."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en rénovation ancienne",
    "Respect du patrimoine architectural",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Dol",
    "Conseil technique personnalisé",
    "Matériaux traditionnels et modernes"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Rénovation maison bourgeoise Dol",
      type: "Maison XIXe siècle - 140m²",
      description: "Restauration façade, joints pierre, enduits traditionnels et création d'ouvertures avec respect du style."
    },
    {
      title: "Extension pavillon Dol-de-Bretagne",
      type: "Extension 35m² + garage",
      description: "Agrandissement en harmonie avec l'existant, fondations, murs et finitions soignées."
    },
    {
      title: "Rénovation commerce centre Dol",
      type: "Local commercial - 80m²",
      description: "Aménagement complet avec création vitrine, sols et respect du caractère historique."
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
    "Mont-Dol",
    "Baguer-Morvan",
    "Cherrueix",
    "Roz-sur-Couesnon",
    "Trans-la-Forêt",
    "Plerguer",
    "Combourg",
    "Epiniac",
    "Lillemer",
    "Saint-Broladre"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieDolConfig.sectorName,
  maconnerieDolConfig.location,
  maconnerieDolConfig.description,
  maconnerieDolConfig.keywords
);

export default function MaconnerieDolPage() {
  return <SectorPage {...maconnerieDolConfig} />;
}
