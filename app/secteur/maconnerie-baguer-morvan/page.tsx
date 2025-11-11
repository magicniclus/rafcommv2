import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieBaguerConfig = {
  title: "Maçonnerie Baguer-Morvan – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Baguer-Morvan. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Baguer-Morvan",
    "maçon Baguer",
    "entreprise maçonnerie Baguer",
    "joints pierres Baguer",
    "extension maison Baguer",
    "devis maçonnerie Baguer",
    "entrepreneur bâtiment Baguer",
    "assainissement Baguer",
    "travaux maçonnerie Baguer"
  ],
  sectorName: "Baguer-Morvan",
  heroImage: "/facade.png",
  heroTitle: "Entreprise de maçonnerie à Baguer-Morvan",
  heroSubtitle: "Spécialiste maçonnerie générale à Baguer-Morvan. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Baguer-Morvan",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Baguer-Morvan. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune de la baie du Mont-Saint-Michel.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions adaptées à l'habitat rural." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au style architectural local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour vos projets." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise locale Baguer-Morvan",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide baie Mont-Saint-Michel",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux de qualité"
  ],
  projectExamples: [
    {
      title: "Rénovation maison Baguer-Morvan",
      type: "Maison traditionnelle - 100m²",
      description: "Restauration complète avec respect du cachet rural et vue sur la baie."
    },
    {
      title: "Extension Baguer-Morvan",
      type: "Extension 25m² + garage",
      description: "Agrandissement avec finitions soignées et intégration paysagère."
    },
    {
      title: "Construction neuve Baguer",
      type: "Maison individuelle - 85m²",
      description: "Construction complète avec adaptation au terrain et aux contraintes."
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
    "Cancale",
    "La Gouesnière",
    "Châteauneuf-d'Ille-et-Vilaine",
    "Saint-Coulomb",
    "Cherrueix",
    "Lillemer",
    "Miniac-Morvan",
    "Plerguer"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieBaguerConfig.sectorName,
  maconnerieBaguerConfig.location,
  maconnerieBaguerConfig.description,
  maconnerieBaguerConfig.keywords
);

export default function MaconnerieBaguerPage() {
  return <SectorPage {...maconnerieBaguerConfig} />;
}
