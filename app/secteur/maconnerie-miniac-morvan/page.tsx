import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieMiniacConfig = {
  title: "Maçonnerie Miniac-Morvan – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Miniac-Morvan. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Miniac-Morvan",
    "maçon Miniac",
    "entreprise maçonnerie Miniac",
    "joints pierres Miniac",
    "extension maison Miniac",
    "devis maçonnerie Miniac",
    "entrepreneur bâtiment Miniac",
    "assainissement Miniac",
    "travaux maçonnerie Miniac"
  ],
  sectorName: "Miniac-Morvan",
  heroImage: "/assainissement.png",
  heroTitle: "Entreprise de maçonnerie à Miniac-Morvan",
  heroSubtitle: "Spécialiste maçonnerie générale à Miniac-Morvan. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Miniac-Morvan",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Miniac-Morvan. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune rurale proche de Dol-de-Bretagne.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de longères et maisons anciennes avec techniques traditionnelles." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions pour moderniser votre habitat rural." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au style architectural rural." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement individuel conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour constructions rurales." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en construction rurale",
    "Respect de l'architecture traditionnelle",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Dol",
    "Conseil technique personnalisé",
    "Matériaux adaptés au rural"
  ],
  projectExamples: [
    {
      title: "Rénovation longère Miniac-Morvan",
      type: "Longère bretonne - 140m²",
      description: "Restauration complète avec respect du cachet rural et modernisation."
    },
    {
      title: "Extension Miniac-Morvan",
      type: "Extension 30m² + garage",
      description: "Agrandissement en harmonie avec l'architecture rurale existante."
    },
    {
      title: "Assainissement Miniac-Morvan",
      type: "Installation complète",
      description: "Système d'assainissement individuel adapté au terrain rural."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Dol-de-Bretagne",
    "Mont-Dol",
    "Baguer-Morvan",
    "Plerguer",
    "Trans-la-Forêt",
    "Combourg",
    "Epiniac",
    "Roz-sur-Couesnon",
    "Cherrueix",
    "Lillemer"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieMiniacConfig.sectorName,
  maconnerieMiniacConfig.location,
  maconnerieMiniacConfig.description,
  maconnerieMiniacConfig.keywords
);

export default function MaconnerieMiniacPage() {
  return <SectorPage {...maconnerieMiniacConfig} />;
}
