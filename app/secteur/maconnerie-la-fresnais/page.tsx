import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieFresnaisConfig = {
  title: "Maçonnerie La Fresnais – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à La Fresnais. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie La Fresnais",
    "maçon Fresnais",
    "entreprise maçonnerie Fresnais",
    "joints pierres Fresnais",
    "extension maison Fresnais",
    "devis maçonnerie Fresnais",
    "entrepreneur bâtiment Fresnais",
    "assainissement Fresnais",
    "travaux maçonnerie Fresnais"
  ],
  sectorName: "La Fresnais",
  heroImage: "/extension.png",
  heroTitle: "Entreprise de maçonnerie à La Fresnais",
  heroSubtitle: "Spécialiste maçonnerie générale à La Fresnais. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "La Fresnais",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à La Fresnais. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune située entre Saint-Malo et Dinan.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions adaptées à l'habitat périurbain." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au style architectural local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements pour vos projets." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise locale La Fresnais",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Saint-Malo",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux de qualité"
  ],
  projectExamples: [
    {
      title: "Rénovation maison La Fresnais",
      type: "Maison traditionnelle - 110m²",
      description: "Restauration complète avec modernisation et respect du cachet local."
    },
    {
      title: "Extension La Fresnais",
      type: "Extension 30m² + terrasse",
      description: "Agrandissement avec finitions soignées et intégration paysagère."
    },
    {
      title: "Construction neuve La Fresnais",
      type: "Maison individuelle - 95m²",
      description: "Construction complète avec adaptation aux contraintes locales."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Saint-Malo",
    "Dinan",
    "Pleurtuit",
    "La Richardais",
    "Dinard",
    "Saint-Lunaire",
    "Lanvallay",
    "Taden",
    "Quévert",
    "Léhon"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieFresnaisConfig.sectorName,
  maconnerieFresnaisConfig.location,
  maconnerieFresnaisConfig.description,
  maconnerieFresnaisConfig.keywords
);

export default function MaconnerieFresnaisPage() {
  return <SectorPage {...maconnerieFresnaisConfig} />;
}
