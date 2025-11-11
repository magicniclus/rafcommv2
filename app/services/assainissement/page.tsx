import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const assainissementConfig = {
  // SEO et métadonnées
  title: "Assainissement Saint-Malo",
  description: "Assainissement, drainage et murs de soutènement autour de Saint-Malo. Solutions complètes pour la gestion des eaux et la stabilité de vos constructions avec garantie décennale.",
  keywords: ["assainissement Saint-Malo", "drainage terrain Bretagne", "murs soutènement", "évacuation eaux", "fosse septique", "épandage 35400", "devis gratuit assainissement"],
  
  // Contenu principal
  serviceName: "Assainissement",
  heroImage: "/assainissement.png",
  heroTitle: "Assainissement - Drainage et Évacuation",
  heroSubtitle: "Assainissement, drainage, murs de soutènement. Solutions complètes pour la gestion des eaux et la stabilité de vos constructions.",
  
  // Localisation
  sector: "Maçonnerie - VRD",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie vous propose des solutions complètes d'assainissement et de drainage. Notre expertise en gestion des eaux et notre savoir-faire en maçonnerie nous permettent de réaliser tous vos travaux d'assainissement individuel, de drainage de terrain et de construction de murs de soutènement. Nous garantissons des installations durables et conformes aux normes.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Assainissement Individuel",
      description: "Installation complète de systèmes d'assainissement non collectif : fosse septique, micro-station."
    },
    {
      title: "Drainage Terrain",
      description: "Mise en place de systèmes de drainage pour évacuer les eaux de ruissellement et protéger vos fondations."
    },
    {
      title: "Murs de Soutènement",
      description: "Construction de murs de soutènement en béton ou pierre pour stabiliser les terrains en pente."
    },
    {
      title: "Épandage Souterrain",
      description: "Réalisation de tranchées d'épandage pour le traitement des eaux usées selon les normes en vigueur."
    },
    {
      title: "Regards et Canalisations",
      description: "Pose de regards de visite et raccordement de canalisations d'évacuation des eaux."
    },
    {
      title: "Puisards et Collecteurs",
      description: "Construction de puisards et collecteurs d'eaux pluviales pour la gestion des eaux de surface."
    },
    {
      title: "Réhabilitation Réseaux",
      description: "Rénovation et mise aux normes d'installations d'assainissement existantes."
    },
    {
      title: "Étude de Sol",
      description: "Réalisation d'études préalables pour dimensionner correctement vos installations d'assainissement."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Conformité aux normes en vigueur",
    "Étude de sol incluse",
    "Installations durables et fiables",
    "Entrepreneur avec garantie décennale",
    "Suivi administratif SPANC",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Matériaux certifiés",
    "Conseil technique personnalisé"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "Baguer-Morvan",
    "Plerguer",
    "Trans-la-Forêt"
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
  assainissementConfig.serviceName,
  assainissementConfig.location,
  assainissementConfig.description,
  assainissementConfig.keywords
);

export default function AssainissementPage() {
  return <ServicePage {...assainissementConfig} />;
}
