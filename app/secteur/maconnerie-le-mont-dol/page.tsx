import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieMontDolConfig = {
  title: "Maçonnerie Le Mont-Dol – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie au Mont-Dol. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Mont-Dol",
    "maçon Mont-Dol",
    "entreprise maçonnerie Mont-Dol",
    "joints pierres Mont-Dol",
    "extension maison Mont-Dol",
    "devis maçonnerie Mont-Dol",
    "entrepreneur bâtiment Mont-Dol",
    "assainissement Mont-Dol",
    "travaux maçonnerie Mont-Dol"
  ],
  sectorName: "Le Mont-Dol",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie au Mont-Dol",
  heroSubtitle: "Spécialiste maçonnerie générale au Mont-Dol. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Le Mont-Dol",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie au Mont-Dol. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune située au pied du Mont-Dol, site emblématique de la baie du Mont-Saint-Michel.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions avec vue sur le Mont-Dol et la baie." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au patrimoine local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour vos projets." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise locale Mont-Dol",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur baie",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux de qualité"
  ],
  projectExamples: [
    {
      title: "Rénovation maison traditionnelle Mont-Dol",
      type: "Maison en pierre - 100m²",
      description: "Restauration complète avec joints à l'ancienne et vue sur la baie du Mont-Saint-Michel."
    },
    {
      title: "Extension Mont-Dol",
      type: "Extension 25m² + terrasse",
      description: "Agrandissement avec ouvertures panoramiques sur le site emblématique du Mont-Dol."
    },
    {
      title: "Construction neuve Mont-Dol",
      type: "Maison individuelle - 85m²",
      description: "Construction complète avec intégration paysagère et respect de l'environnement."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Dol-de-Bretagne",
    "Baguer-Morvan",
    "Cherrueix",
    "Roz-sur-Couesnon",
    "Trans-la-Forêt",
    "Plerguer",
    "Lillemer",
    "Saint-Broladre",
    "Epiniac",
    "Combourg"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieMontDolConfig.sectorName,
  maconnerieMontDolConfig.location,
  maconnerieMontDolConfig.description,
  maconnerieMontDolConfig.keywords
);

export default function MaconnerieMontDolPage() {
  return <SectorPage {...maconnerieMontDolConfig} />;
}
