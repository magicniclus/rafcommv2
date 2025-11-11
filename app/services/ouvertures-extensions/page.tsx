import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const ouverturesExtensionsConfig = {
  // SEO et métadonnées
  title: "Ouvertures & Extensions Saint-Malo",
  description: "Création d'ouvertures dans murs porteurs et extensions de maison autour de Saint-Malo. Nous adaptons votre habitat à vos besoins avec expertise technique et garantie décennale.",
  keywords: ["ouvertures murs porteurs Saint-Malo", "extension maison Bretagne", "agrandissement maison", "création fenêtre porte", "percement mur", "entrepreneur extension 35400", "devis gratuit ouverture"],
  
  // Contenu principal
  serviceName: "Ouvertures & Extensions",
  heroImage: "/extension.png",
  heroTitle: "Ouvertures & Extensions - Création et Agrandissement",
  heroSubtitle: "Création d'ouvertures dans murs porteurs, extensions de maison. Nous adaptons votre habitat à vos besoins avec expertise technique.",
  
  // Localisation
  sector: "Maçonnerie - Aménagement",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie vous accompagne dans vos projets d'agrandissement et d'aménagement. Que ce soit pour créer de nouvelles ouvertures ou étendre votre habitat, notre expertise technique et notre savoir-faire familial garantissent des réalisations durables et conformes aux normes. Nous étudions chaque projet avec soin pour vous proposer les meilleures solutions.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Ouvertures Murs Porteurs",
      description: "Création d'ouvertures dans murs porteurs avec étude de structure et pose de linteaux adaptés."
    },
    {
      title: "Extensions Maison",
      description: "Agrandissement de votre maison par extension latérale, surélévation ou véranda maçonnée."
    },
    {
      title: "Percement Fenêtres",
      description: "Création de nouvelles fenêtres pour améliorer la luminosité et l'aération de vos pièces."
    },
    {
      title: "Création Portes",
      description: "Percement pour nouvelles portes d'accès, portes-fenêtres et baies vitrées."
    },
    {
      title: "Agrandissement Cuisine",
      description: "Extension spécialisée pour agrandir votre cuisine et créer un espace de vie convivial."
    },
    {
      title: "Garage Attenant",
      description: "Construction de garage attenant à votre habitation avec liaison maçonnée."
    },
    {
      title: "Véranda Maçonnée",
      description: "Réalisation de vérandas avec base maçonnée pour un agrandissement durable."
    },
    {
      title: "Étude Structure",
      description: "Analyse technique préalable pour garantir la faisabilité et la sécurité de vos projets."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Étude technique préalable incluse",
    "Respect des règles d'urbanisme",
    "Travail soigné et durable",
    "Entrepreneur avec garantie décennale",
    "Conseil en aménagement",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Suivi de dossier administratif",
    "Finitions soignées"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "Paramé",
    "Saint-Servan",
    "Rothéneuf"
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
  ouverturesExtensionsConfig.serviceName,
  ouverturesExtensionsConfig.location,
  ouverturesExtensionsConfig.description,
  ouverturesExtensionsConfig.keywords
);

export default function OuverturesExtensionsPage() {
  return <ServicePage {...ouverturesExtensionsConfig} />;
}
