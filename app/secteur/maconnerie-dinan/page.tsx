import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieDinanConfig = {
  // SEO et métadonnées
  title: "Maçonnerie Dinan – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Dinan. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Dinan",
    "maçon Dinan",
    "entreprise maçonnerie Dinan",
    "joints pierres Dinan",
    "extension maison Dinan",
    "devis maçonnerie Dinan",
    "entrepreneur bâtiment Dinan",
    "assainissement Dinan",
    "travaux maçonnerie Dinan"
  ],
  
  // Contenu principal
  sectorName: "Dinan",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Entreprise de maçonnerie à Dinan",
  heroSubtitle: "Spécialiste maçonnerie générale à Dinan. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  
  // Localisation
  location: "Dinan",
  
  // Description détaillée
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Dinan. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités architecturales de Dinan, cité médiévale classée avec ses remparts et maisons à colombages.",
  
  // Prestations principales
  mainServices: [
    {
      title: "Maçonnerie générale",
      description: "Construction neuve, extensions, fondations et dalles béton avec respect du caractère historique de Dinan."
    },
    {
      title: "Joints de pierres à l'ancienne",
      description: "Restauration de bâtiments médiévaux et maisons anciennes avec techniques traditionnelles bretonnes."
    },
    {
      title: "Ouvertures et extensions",
      description: "Création d'ouvertures et extensions en harmonie avec l'architecture médiévale et les contraintes ABF."
    },
    {
      title: "Enduits de façade",
      description: "Application d'enduits traditionnels à la chaux respectueux du patrimoine historique dinannais."
    },
    {
      title: "Assainissement",
      description: "Installation de systèmes d'assainissement adaptés aux contraintes du centre historique."
    },
    {
      title: "Restauration patrimoine",
      description: "Rénovation de bâtiments classés avec respect des techniques ancestrales et des matériaux d'époque."
    }
  ],
  
  // Avantages
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en restauration patrimoine",
    "Respect des contraintes ABF",
    "Techniques traditionnelles maîtrisées",
    "Tarification transparente",
    "Intervention rapide secteur Dinan",
    "Conseil en restauration ancienne",
    "Matériaux authentiques et locaux"
  ],
  
  // Exemples de chantiers
  projectExamples: [
    {
      title: "Restauration maison médiévale Dinan",
      type: "Maison XVe siècle - 80m²",
      description: "Rénovation complète avec joints à l'ancienne, enduits chaux et respect des contraintes ABF."
    },
    {
      title: "Extension maison de ville Dinan",
      type: "Extension 20m² + cour",
      description: "Agrandissement discret en pierre locale avec intégration parfaite dans le tissu urbain ancien."
    },
    {
      title: "Rénovation commerce centre historique",
      type: "Local commercial - 60m²",
      description: "Aménagement avec création d'ouvertures, sols pierre et respect du cachet médiéval."
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
    "Dinard",
    "Pleurtuit",
    "Lanvallay",
    "Taden",
    "Quévert",
    "Léhon",
    "Évran",
    "Plouër-sur-Rance",
    "Pleudihen-sur-Rance",
    "La Vicomté-sur-Rance"
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieDinanConfig.sectorName,
  maconnerieDinanConfig.location,
  maconnerieDinanConfig.description,
  maconnerieDinanConfig.keywords
);

export default function MaconnerieDinanPage() {
  return <SectorPage {...maconnerieDinanConfig} />;
}
