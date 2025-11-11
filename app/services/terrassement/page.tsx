import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const terrassementConfig = {
  // SEO et métadonnées
  title: "Terrassement Saint-Malo",
  description: "Petits travaux de terrassement et finitions extérieures autour de Saint-Malo. Préparation de terrain et aménagements pour vos projets de construction avec expertise technique.",
  keywords: ["terrassement Saint-Malo", "préparation terrain Bretagne", "aménagement extérieur", "nivellement terrain", "excavation", "remblai 35400", "devis gratuit terrassement"],
  
  // Contenu principal
  serviceName: "Terrassement",
  heroImage: "/terrassementee.png",
  heroTitle: "Terrassement - Petits Travaux de Terrassement",
  heroSubtitle: "Petits travaux de terrassement et finitions extérieures. Préparation de terrain et aménagements pour vos projets de construction.",
  
  // Localisation
  sector: "Maçonnerie - VRD",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie réalise tous vos petits travaux de terrassement avec précision et savoir-faire. Notre équipe expérimentée prépare vos terrains pour vos projets de construction, d'aménagement extérieur ou de rénovation. Nous maîtrisons les techniques de terrassement adaptées aux spécificités du sol breton et aux contraintes de votre projet.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Préparation Terrain",
      description: "Préparation et nivellement de terrain pour fondations, dalles et constructions diverses."
    },
    {
      title: "Excavation Manuelle",
      description: "Excavation précise pour fondations, canalisations et aménagements en espaces restreints."
    },
    {
      title: "Remblaiement",
      description: "Remblaiement et compactage avec matériaux adaptés pour stabiliser vos terrains."
    },
    {
      title: "Tranchées Réseaux",
      description: "Creusement de tranchées pour passage de réseaux : eau, électricité, assainissement."
    },
    {
      title: "Aménagement Accès",
      description: "Création d'accès et de chemins pour faciliter l'approche de vos constructions."
    },
    {
      title: "Évacuation Terres",
      description: "Évacuation des terres excédentaires et gestion des déblais selon les normes."
    },
    {
      title: "Finitions Extérieures",
      description: "Finitions de terrain : talutage, modelé paysager, préparation pour espaces verts."
    },
    {
      title: "Drainage Périphérique",
      description: "Mise en place de drains périphériques pour protéger vos fondations de l'humidité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Travail précis et soigné",
    "Respect de l'environnement",
    "Matériel adapté aux petits espaces",
    "Évacuation des déblais incluse",
    "Conseil technique personnalisé",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Intervention rapide",
    "Finitions soignées"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "Saint-Coulomb",
    "Hirel",
    "Cherrueix"
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
  terrassementConfig.serviceName,
  terrassementConfig.location,
  terrassementConfig.description,
  terrassementConfig.keywords
);

export default function TerrassementPage() {
  return <ServicePage {...terrassementConfig} />;
}
