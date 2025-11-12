import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const urgenceFibreConfig = {
  // SEO et métadonnées
  title: "Urgence Fibre Paris - RAFCOM",
  description: "Service d'urgence fibre optique 24h/24 en Île-de-France. Intervention rapide pour pannes et problèmes de connexion fibre. Dépannage express, devis gratuit.",
  keywords: ["urgence fibre Paris", "dépannage fibre 24h", "panne fibre optique", "intervention urgence télécom", "devis gratuit urgence", "RAFCOM", "urgence fibre 75015", "dépannage express"],
  
  // Contenu principal
  serviceName: "Urgence Fibre",
  heroImage: "/assainissement.png",
  heroTitle: "Service d'Urgence Fibre Optique 24h/24",
  heroSubtitle: "Intervention d'urgence fibre optique 24h/24 et 7j/7. Service réactif pour résoudre rapidement vos pannes et problèmes de connexion fibre en Île-de-France.",
  
  // Localisation
  sector: "Télécommunications - Urgence",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM propose un service d'urgence fibre optique disponible 24h/24 et 7j/7 en Île-de-France. Notre équipe d'intervention rapide se déplace immédiatement pour résoudre vos pannes de fibre optique, problèmes de connexion et dysfonctionnements critiques. Nous comprenons l'importance de la continuité de service et intervenons en urgence pour rétablir vos connexions dans les plus brefs délais avec un devis gratuit et une tarification transparente.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Dépannage Express 24h/24",
      description: "Intervention d'urgence 24h/24 et 7j/7 pour tous types de pannes fibre optique. Équipe de dépannage disponible en permanence."
    },
    {
      title: "Diagnostic Rapide",
      description: "Diagnostic express des pannes fibre optique avec équipements mobiles. Identification rapide de l'origine du dysfonctionnement."
    },
    {
      title: "Réparation Immédiate",
      description: "Réparation immédiate des câbles fibre endommagés. Stock de pièces de rechange pour intervention sans délai."
    },
    {
      title: "Rétablissement de Service",
      description: "Rétablissement prioritaire du service fibre optique. Solutions temporaires si nécessaire en attendant la réparation définitive."
    },
    {
      title: "Intervention Sécurisée",
      description: "Intervention d'urgence en toute sécurité, y compris en hauteur ou en milieu contraint. Équipements de sécurité professionnels."
    },
    {
      title: "Support Téléphonique",
      description: "Support téléphonique d'urgence pour diagnostic à distance. Assistance technique immédiate pour évaluer la situation."
    },
    {
      title: "Contournement Temporaire",
      description: "Mise en place de solutions de contournement temporaires. Maintien de la connectivité pendant les réparations."
    },
    {
      title: "Suivi Post-Intervention",
      description: "Suivi post-intervention pour s'assurer de la stabilité de la réparation. Contrôle qualité et tests de performance."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Intervention 24h/24 et 7j/7",
    "Équipe d'urgence dédiée",
    "Temps de réponse ultra-rapide",
    "Stock de pièces disponible",
    "Solutions temporaires",
    "Estimation gratuite et sans engagement",
    "Tarification transparente d'urgence",
    "Support téléphonique permanent",
    "Intervention sécurisée",
    "Garantie de réparation",
    "Suivi qualité"
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
  title: "Urgence Fibre Paris 24h/24 - RAFCOM | Dépannage Express | Devis Gratuit",
  description: urgenceFibreConfig.description,
  keywords: urgenceFibreConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Urgence Fibre Paris 24h/24 - RAFCOM | Dépannage Express",
    description: urgenceFibreConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UrgenceFibrePage() {
  return <ServicePage {...urgenceFibreConfig} />;
}
