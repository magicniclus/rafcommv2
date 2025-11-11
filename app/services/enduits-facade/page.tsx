import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const enduitsFacadeConfig = {
  // SEO et métadonnées
  title: "Enduits de Façade Saint-Malo",
  description: "Application d'enduits de façade et finitions extérieures autour de Saint-Malo. Nous protégeons et embellissons vos murs avec des matériaux de qualité et un savoir-faire artisanal.",
  keywords: ["enduits façade Saint-Malo", "ravalement façade Bretagne", "finitions extérieures", "enduit chaux", "crépi façade", "rénovation façade 35400", "devis gratuit enduit"],
  
  // Contenu principal
  serviceName: "Enduits de Façade",
  heroImage: "/facade.png",
  heroTitle: "Enduits de Façade - Finitions Extérieures",
  heroSubtitle: "Application d'enduits de façade, finitions extérieures. Nous protégeons et embellissons vos murs avec des matériaux de qualité.",
  
  // Localisation
  sector: "Maçonnerie - Finitions",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie maîtrise tous les types d'enduits de façade pour protéger et embellir vos murs extérieurs. Notre savoir-faire familial nous permet de réaliser des finitions durables et esthétiques, adaptées au climat breton. Nous utilisons des matériaux de qualité et respectons les techniques traditionnelles pour un résultat optimal.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Enduit Chaux Traditionnelle",
      description: "Application d'enduit à la chaux naturelle, respirant et adapté aux murs anciens en pierre."
    },
    {
      title: "Crépi Moderne",
      description: "Réalisation de crépis contemporains avec finitions lisses, grattées ou projetées selon vos goûts."
    },
    {
      title: "Enduit Monocouche",
      description: "Application d'enduit monocouche pour une finition rapide et efficace sur supports neufs."
    },
    {
      title: "Ravalement Complet",
      description: "Ravalement complet de façade avec préparation, réparation et application d'enduit neuf."
    },
    {
      title: "Finitions Décoratives",
      description: "Réalisation de finitions décoratives : enduit taloché, brossé, écrasé pour personnaliser votre façade."
    },
    {
      title: "Réparation Fissures",
      description: "Traitement et réparation des fissures de façade avant application de l'enduit de finition."
    },
    {
      title: "Enduit Isolant",
      description: "Application d'enduits isolants pour améliorer les performances thermiques de votre habitat."
    },
    {
      title: "Soubassement",
      description: "Réalisation d'enduits de soubassement résistants à l'humidité et aux intempéries."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Matériaux de qualité professionnelle",
    "Techniques traditionnelles et modernes",
    "Protection durable contre intempéries",
    "Large choix de finitions et couleurs",
    "Respect de l'architecture locale",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie sur les travaux",
    "Conseil en choix de matériaux"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "La Gouesnière",
    "Châteauneuf-d'Ille-et-Vilaine",
    "Miniac-Morvan"
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
  enduitsFacadeConfig.serviceName,
  enduitsFacadeConfig.location,
  enduitsFacadeConfig.description,
  enduitsFacadeConfig.keywords
);

export default function EnduitsFacadePage() {
  return <ServicePage {...enduitsFacadeConfig} />;
}
