import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintSuliacConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Saint-Suliac – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Suliac. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Saint-Suliac",
    "maçon Saint-Suliac",
    "entreprise maçonnerie Saint-Suliac",
    "joints pierres Saint-Suliac",
    "extension maison Saint-Suliac",
    "devis maçonnerie Saint-Suliac",
    "entrepreneur bâtiment Saint-Suliac",
    "assainissement Saint-Suliac",
    "travaux maçonnerie Saint-Suliac"
  ],
  
  // Contenu principal
  sectorName: "Saint-Suliac",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Suliac",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Suliac. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Saint-Suliac",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Suliac. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Saint-Suliac, en respectant le caractère authentique de ce village classé.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour tous vos projets."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration et rénovation de bâtiments anciens avec techniques traditionnelles respectueuses du patrimoine."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures dans murs porteurs et extensions de maison adaptées à vos besoins."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits traditionnels et modernes pour protéger et embellir vos façades."
    },
    {
      title: "Assainissement",
      description: "Installation et rénovation de systèmes d'assainissement individuel conformes aux normes."
    },
    {
      title: "Terrassement",
      description: "Préparation de terrain et petits travaux de terrassement pour vos projets de construction."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Équipe de 2 professionnels expérimentés",
    "Respect du patrimoine architectural local",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide dans un rayon de 50km",
    "Conseil technique personnalisé",
    "Matériaux de qualité professionnelle"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Restauration maison ancienne Saint-Suliac",
      type: "Maison en pierre - 120m²",
      description: "Rejointoiement complet à l'ancienne, rénovation façade et création d'ouverture avec respect du cachet authentique."
    },
    {
      title: "Extension maison Saint-Suliac",
      type: "Extension 25m² + terrasse",
      description: "Agrandissement en harmonie avec l'existant, fondations, murs et enduits façade assortis."
    },
    {
      title: "Assainissement individuel Saint-Suliac",
      type: "Installation complète",
      description: "Mise en place fosse septique et épandage souterrain conforme aux normes SPANC."
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
    "Dinard",
    "Dinan", 
    "Cancale",
    "Dol-de-Bretagne",
    "Saint-Coulomb",
    "La Richardais",
    "Pleurtuit",
    "Saint-Briac-sur-Mer",
    "Saint-Lunaire"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieSaintSuliacConfig.sectorName,
  maconnerieSaintSuliacConfig.location,
  maconnerieSaintSuliacConfig.description,
  maconnerieSaintSuliacConfig.keywords
);

export default function MaconnerieSaintSuliacPage() {
  return <SectorPage {...maconnerieSaintSuliacConfig} />;
}
