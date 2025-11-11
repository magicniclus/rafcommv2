import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconneriePleurtuiConfig = {
  title: "Maçonnerie Pleurtuit – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Pleurtuit. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: ["maçonnerie Pleurtuit", "maçon Pleurtuit", "entreprise maçonnerie Pleurtuit", "joints pierres Pleurtuit", "extension maison Pleurtuit", "devis maçonnerie Pleurtuit"],
  sectorName: "Pleurtuit",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie à Pleurtuit",
  heroSubtitle: "Spécialiste maçonnerie générale à Pleurtuit. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Pleurtuit",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Pleurtuit. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions en harmonie avec l'architecture locale." },
    { title: "Enduits de façade", description: "Application d'enduits adaptés au climat et au style architectural local." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement conformes aux normes." },
    { title: "Terrassement", description: "Préparation de terrain et aménagements extérieurs." }
  ],
  advantages: ["Entrepreneur du bâtiment avec garantie décennale", "Devis gratuit et personnalisé", "Savoir-faire familial depuis 2 générations", "Expertise locale", "Travail soigné, durable et de qualité", "Tarification transparente"],
  projectExamples: [
    { title: "Rénovation maison Pleurtuit", type: "Maison traditionnelle - 100m²", description: "Restauration façade et modernisation avec respect du cachet." },
    { title: "Extension Pleurtuit", type: "Extension 20m²", description: "Agrandissement avec finitions soignées." }
  ],
  contactInfo: { phone: "06 48 81 25 78", email: "adbetton32@gmail.com", address: "8 avenue de moka, 35400 Saint-Malo" },
  nearbyAreas: ["Dinard", "La Richardais", "Dinan", "Saint-Malo", "Saint-Lunaire", "Lanvallay"]
};

export const metadata: Metadata = generateSectorMetadata("Maçonnerie " + maconneriePleurtuiConfig.sectorName, maconneriePleurtuiConfig.location, maconneriePleurtuiConfig.description, maconneriePleurtuiConfig.keywords);
export default function MaconneriePleurtuiPage() { return <SectorPage {...maconneriePleurtuiConfig} />; }
