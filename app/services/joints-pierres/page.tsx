import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const jointsPierresConfig = {
  // SEO et métadonnées
  title: "Joints de Pierres Saint-Malo",
  description: "Spécialiste en joints de pierres à l'ancienne autour de Saint-Malo. Pose de pierres naturelles et rénovation de bâtiments anciens avec respect des techniques traditionnelles.",
  keywords: ["joints pierres Saint-Malo", "rénovation pierre ancienne", "joints à l'ancienne Bretagne", "pierre naturelle", "restauration bâtiment ancien", "maçon pierre 35400", "devis gratuit joints"],
  
  // Contenu principal
  serviceName: "Joints de Pierres",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Joints de Pierres - Technique Traditionnelle à l'Ancienne",
  heroSubtitle: "Pose de pierres naturelles et réalisation de joints de pierres à l'ancienne. Spécialisation en rénovation de bâtiments anciens avec respect des techniques traditionnelles.",
  
  // Localisation
  sector: "Maçonnerie - Restauration patrimoine",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie perpétue les techniques traditionnelles de maçonnerie pierre. Notre savoir-faire familial nous permet de restaurer et rénover vos bâtiments anciens en respectant les méthodes d'antan. Nous maîtrisons parfaitement les joints à l'ancienne et la pose de pierres naturelles pour préserver l'authenticité de votre patrimoine.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Joints à l'Ancienne",
      description: "Réalisation de joints traditionnels au mortier de chaux, respectant les techniques ancestrales de maçonnerie."
    },
    {
      title: "Pose Pierre Naturelle",
      description: "Pose et taille de pierres naturelles locales (granit, schiste) pour murs, murets et façades."
    },
    {
      title: "Restauration Façades Anciennes",
      description: "Rénovation complète de façades en pierre avec rejointoiement et remplacement des pierres abîmées."
    },
    {
      title: "Murs en Pierre Sèche",
      description: "Construction et réparation de murs en pierre sèche selon les traditions bretonnes."
    },
    {
      title: "Rejointoiement Patrimoine",
      description: "Rejointoiement de bâtiments classés et patrimoniaux avec mortiers adaptés et techniques respectueuses."
    },
    {
      title: "Taille de Pierre",
      description: "Taille sur mesure de pierres de remplacement pour restaurations et créations architecturales."
    },
    {
      title: "Murets et Clôtures",
      description: "Création de murets et clôtures en pierre naturelle pour délimiter et embellir vos espaces extérieurs."
    },
    {
      title: "Réparation Ouvrages Anciens",
      description: "Réparation et consolidation d'ouvrages anciens en pierre : puits, fours, cheminées, escaliers."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Spécialisation techniques traditionnelles",
    "Respect du patrimoine architectural",
    "Matériaux locaux et authentiques",
    "Travail artisanal de qualité",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Conseil en restauration patrimoine",
    "Garantie sur les travaux réalisés"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "Combourg",
    "Pleudihen-sur-Rance",
    "Saint-Suliac"
  ],
  
  // Contact
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  jointsPierresConfig.serviceName,
  jointsPierresConfig.location,
  jointsPierresConfig.description,
  jointsPierresConfig.keywords
);

export default function JointsPierresPage() {
  return <ServicePage {...jointsPierresConfig} />;
}
