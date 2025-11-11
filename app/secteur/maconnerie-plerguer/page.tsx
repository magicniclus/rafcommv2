import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconneriePlerguerConfig = {
  title: "Maçonnerie Plerguer – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Plerguer. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Plerguer",
    "maçon Plerguer",
    "entreprise maçonnerie Plerguer",
    "joints pierres Plerguer",
    "extension maison Plerguer",
    "devis maçonnerie Plerguer",
    "entrepreneur bâtiment Plerguer",
    "assainissement Plerguer",
    "travaux maçonnerie Plerguer"
  ],
  sectorName: "Plerguer",
  heroImage: "/terrassementee.png",
  heroTitle: "Entreprise de maçonnerie à Plerguer",
  heroSubtitle: "Spécialiste maçonnerie générale à Plerguer. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Plerguer",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Plerguer. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune située entre Dol-de-Bretagne et la frontière normande.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions adaptées à l'habitat rural et périurbain." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au style architectural local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour vos projets de construction." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise locale Plerguer",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Dol",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux de qualité"
  ],
  projectExamples: [
    {
      title: "Rénovation maison Plerguer",
      type: "Maison traditionnelle - 105m²",
      description: "Restauration complète avec modernisation et respect du cachet local."
    },
    {
      title: "Extension Plerguer",
      type: "Extension 25m² + garage",
      description: "Agrandissement avec finitions soignées et intégration paysagère."
    },
    {
      title: "Construction neuve Plerguer",
      type: "Maison individuelle - 90m²",
      description: "Construction complète avec adaptation aux contraintes locales."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Dol-de-Bretagne",
    "Miniac-Morvan",
    "Trans-la-Forêt",
    "Baguer-Morvan",
    "Mont-Dol",
    "Combourg",
    "Epiniac",
    "Roz-sur-Couesnon",
    "Antrain",
    "Bazouges-la-Pérouse"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconneriePlerguerConfig.sectorName,
  maconneriePlerguerConfig.location,
  maconneriePlerguerConfig.description,
  maconneriePlerguerConfig.keywords
);

export default function MaconneriePlerguerPage() {
  return <SectorPage {...maconneriePlerguerConfig} />;
}
