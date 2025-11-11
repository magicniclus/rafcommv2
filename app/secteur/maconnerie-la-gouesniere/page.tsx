import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieGouesniereConfig = {
  title: "Maçonnerie La Gouesnière – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à La Gouesnière. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie La Gouesnière",
    "maçon Gouesnière",
    "entreprise maçonnerie Gouesnière",
    "joints pierres Gouesnière",
    "extension maison Gouesnière",
    "devis maçonnerie Gouesnière",
    "entrepreneur bâtiment Gouesnière",
    "assainissement Gouesnière",
    "travaux maçonnerie Gouesnière"
  ],
  sectorName: "La Gouesnière",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Entreprise de maçonnerie à La Gouesnière",
  heroSubtitle: "Spécialiste maçonnerie générale à La Gouesnière. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "La Gouesnière",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à La Gouesnière. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune située entre Saint-Malo et Cancale.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions adaptées à l'habitat rural et côtier." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat côtier et au style local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour vos projets." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise locale Gouesnière",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Cancale",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux adaptés au climat"
  ],
  projectExamples: [
    {
      title: "Rénovation maison La Gouesnière",
      type: "Maison traditionnelle - 95m²",
      description: "Restauration complète avec respect du cachet rural breton."
    },
    {
      title: "Extension La Gouesnière",
      type: "Extension 22m² + véranda",
      description: "Agrandissement avec finitions soignées et vue sur la campagne."
    },
    {
      title: "Assainissement La Gouesnière",
      type: "Installation complète",
      description: "Système d'assainissement adapté au terrain et aux normes."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Cancale",
    "Saint-Malo",
    "Saint-Coulomb",
    "Baguer-Morvan",
    "Châteauneuf-d'Ille-et-Vilaine",
    "Saint-Benoît-des-Ondes",
    "Hirel",
    "Cherrueix",
    "Dol-de-Bretagne",
    "Mont-Dol"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieGouesniereConfig.sectorName,
  maconnerieGouesniereConfig.location,
  maconnerieGouesniereConfig.description,
  maconnerieGouesniereConfig.keywords
);

export default function MaconnerieGouesnierePage() {
  return <SectorPage {...maconnerieGouesniereConfig} />;
}
