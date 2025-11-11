import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const maconnerieGeneraleConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Générale Saint-Malo",
  description: "Spécialiste en maçonnerie générale autour de Saint-Malo : fondations, dalles béton, murs porteurs, cloisons, escaliers. Construction neuve et extension avec garantie décennale.",
  keywords: ["maçonnerie générale Saint-Malo", "construction neuve Bretagne", "extension maison Saint-Malo", "fondations béton", "murs porteurs", "entrepreneur bâtiment 35400", "devis gratuit maçonnerie"],
  
  // Contenu principal
  serviceName: "Maçonnerie Générale",
  heroImage: "/macon.png",
  heroTitle: "Maçonnerie Générale - Construction Neuve et Extension",
  heroSubtitle: "Réalisation de fondations, dalles béton, murs porteurs, cloisons et escaliers en béton. Construction neuve et extension de maison avec garantie décennale.",
  
  // Localisation
  sector: "Maçonnerie - Gros œuvre",
  location: "Saint-Malo et rayon 50km",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie met son savoir-faire familial au service de vos projets de construction et d'extension. Forts de notre expérience et de notre garantie décennale, nous réalisons tous vos travaux de gros œuvre avec un travail soigné, durable et de qualité. Notre équipe de 2 professionnels expérimentés intervient dans un rayon de 50 km autour de Saint-Malo.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Fondations et Terrassement",
      description: "Réalisation de fondations solides et durables, terrassement et préparation de terrain pour vos constructions."
    },
    {
      title: "Dalles Béton",
      description: "Coulage de dalles béton pour maisons, garages, terrasses avec respect des normes de construction."
    },
    {
      title: "Murs Porteurs",
      description: "Construction de murs porteurs en béton, parpaings ou pierre selon vos besoins et contraintes techniques."
    },
    {
      title: "Cloisons Intérieures",
      description: "Réalisation de cloisons pour l'aménagement intérieur de vos espaces de vie et de travail."
    },
    {
      title: "Escaliers en Béton",
      description: "Construction d'escaliers en béton sur mesure, intérieurs et extérieurs, avec finitions soignées."
    },
    {
      title: "Extensions de Maison",
      description: "Agrandissement de votre habitat avec extension en harmonie avec l'existant et respect des règles d'urbanisme."
    },
    {
      title: "Construction Neuve",
      description: "Réalisation complète du gros œuvre pour vos projets de construction neuve avec garantie décennale."
    },
    {
      title: "Rénovation Gros Œuvre",
      description: "Rénovation et renforcement de structures existantes, mise aux normes et amélioration de l'habitat."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Entrepreneur du bâtiment avec garantie décennale",
    "Équipe de 2 professionnels expérimentés",
    "Savoir-faire familial depuis 2 générations",
    "Travail soigné, durable et de qualité",
    "Respect des délais et des normes",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Intervention en Bretagne et Normandie",
    "Suivi personnalisé de votre projet"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Saint-Malo",
    "Dinard", 
    "Dinan",
    "Cancale",
    "Dol-de-Bretagne",
    "Saint-Jouan-des-Guérets",
    "Pleurtuit",
    "Saint-Lunaire"
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
  maconnerieGeneraleConfig.serviceName,
  maconnerieGeneraleConfig.location,
  maconnerieGeneraleConfig.description,
  maconnerieGeneraleConfig.keywords
);

export default function MaconnerieGeneralePage() {
  return <ServicePage {...maconnerieGeneraleConfig} />;
}
