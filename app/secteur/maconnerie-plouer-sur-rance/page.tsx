import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconneriePlouerConfig = {
  title: "Maçonnerie Plouer-sur-Rance – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Plouer-sur-Rance. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Plouer-sur-Rance",
    "maçon Plouer",
    "entreprise maçonnerie Plouer",
    "joints pierres Plouer",
    "extension maison Plouer",
    "devis maçonnerie Plouer",
    "entrepreneur bâtiment Plouer",
    "assainissement Plouer",
    "travaux maçonnerie Plouer"
  ],
  sectorName: "Plouer-sur-Rance",
  heroImage: "/extension.png",
  heroTitle: "Entreprise de maçonnerie à Plouer-sur-Rance",
  heroSubtitle: "Spécialiste maçonnerie générale à Plouer-sur-Rance. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Plouer-sur-Rance",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Plouer-sur-Rance. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune de la vallée de la Rance.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions avec vue sur la vallée de la Rance." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au patrimoine local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements en vallée." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise vallée de la Rance",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Rance",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux adaptés au terrain"
  ],
  projectExamples: [
    {
      title: "Rénovation maison Plouer-sur-Rance",
      type: "Maison traditionnelle - 110m²",
      description: "Restauration avec vue sur la Rance et respect du cachet local."
    },
    {
      title: "Extension Plouer-sur-Rance",
      type: "Extension 25m² + terrasse",
      description: "Agrandissement avec intégration paysagère en vallée."
    },
    {
      title: "Construction neuve Plouer",
      type: "Maison individuelle - 95m²",
      description: "Construction complète avec adaptation au terrain en pente."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Dinan",
    "Lanvallay",
    "Taden",
    "Quévert",
    "Léhon",
    "Évran",
    "Pleudihen-sur-Rance",
    "La Vicomté-sur-Rance",
    "Plouër-sur-Rance",
    "Saint-Samson-sur-Rance"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconneriePlouerConfig.sectorName,
  maconneriePlouerConfig.location,
  maconneriePlouerConfig.description,
  maconneriePlouerConfig.keywords
);

export default function MaconneriePlouerPage() {
  return <SectorPage {...maconneriePlouerConfig} />;
}
