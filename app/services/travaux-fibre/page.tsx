import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const travauxFibreConfig = {
  // SEO et métadonnées
  title: "Travaux Fibre Optique Paris - RAFCOM",
  description: "Spécialiste des travaux fibre optique en Île-de-France. Installation, maintenance et réparation de réseaux fibre. Devis gratuit et personnalisé. Intervention rapide Paris 75015.",
  keywords: ["travaux fibre optique Paris", "installation fibre Paris", "maintenance fibre optique", "réparation fibre Paris", "devis gratuit fibre", "RAFCOM", "fibre optique 75015", "entrepreneur fibre optique"],
  
  // Contenu principal
  serviceName: "Travaux Fibre Optique",
  heroImage: "/macon.png",
  heroTitle: "Travaux Fibre Optique Professionnels",
  heroSubtitle: "Installation, maintenance et réparation de réseaux fibre optique en Île-de-France. Expertise technique et intervention rapide pour particuliers et professionnels.",
  
  // Localisation
  sector: "Télécommunications - Fibre Optique",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM est votre spécialiste des travaux fibre optique en Île-de-France. Nous intervenons pour l'installation, la maintenance et la réparation de réseaux fibre optique pour particuliers et professionnels. Notre expertise technique nous permet de réaliser tous types de travaux fibre, des installations simples aux projets les plus complexes. Nous garantissons un service professionnel, rapide et de qualité avec un devis gratuit et personnalisé pour chaque intervention.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Installation Fibre Optique",
      description: "Installation complète de réseaux fibre optique pour particuliers et entreprises. Raccordement depuis le point de branchement jusqu'aux équipements terminaux."
    },
    {
      title: "Maintenance Préventive",
      description: "Maintenance préventive et curative des installations fibre optique. Contrôle de la qualité du signal et optimisation des performances."
    },
    {
      title: "Réparation de Fibre",
      description: "Réparation rapide des câbles fibre optique endommagés. Diagnostic précis et intervention d'urgence pour rétablir la connexion."
    },
    {
      title: "Tirage de Câbles",
      description: "Tirage de câbles fibre optique dans les gaines et fourreaux existants. Techniques spécialisées pour les passages difficiles."
    },
    {
      title: "Soudure Fibre Optique",
      description: "Soudure de précision des fibres optiques. Équipements professionnels pour des connexions optimales et durables."
    },
    {
      title: "Tests et Mesures",
      description: "Tests de continuité, mesures de réflectométrie et certification des installations fibre optique selon les normes en vigueur."
    },
    {
      title: "Raccordement Équipements",
      description: "Raccordement et configuration des équipements actifs : box, switches, routeurs et équipements de télécommunications."
    },
    {
      title: "Documentation Technique",
      description: "Fourniture de la documentation technique complète : plans de câblage, rapports de tests et certificats de conformité."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Expertise technique certifiée",
    "Intervention rapide et réactive",
    "Matériel professionnel de qualité",
    "Respect des normes télécoms",
    "Garantie sur tous nos travaux",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Service client dédié",
    "Disponibilité 7j/7",
    "Équipe expérimentée",
    "Solutions techniques adaptées"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Paris 15ème",
    "Paris 14ème", 
    "Paris 16ème",
    "Paris 7ème",
    "Paris 6ème",
    "Issy-les-Moulineaux",
    "Boulogne-Billancourt",
    "Vanves",
    "Malakoff",
    "Montrouge",
    "Île-de-France"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcom.net",
    address: "Paris (75015), Île-de-France"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = {
  title: "Travaux Fibre Optique Paris - RAFCOM | Devis Gratuit",
  description: travauxFibreConfig.description,
  keywords: travauxFibreConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Travaux Fibre Optique Paris - RAFCOM",
    description: travauxFibreConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TravauxFibrePage() {
  return <ServicePage {...travauxFibreConfig} />;
}
