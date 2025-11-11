import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieLaRichardaisConfig = {
  title: "Maçonnerie La Richardais – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à La Richardais. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: ["maçonnerie La Richardais", "maçon La Richardais", "entreprise maçonnerie La Richardais", "joints pierres La Richardais", "extension maison La Richardais", "devis maçonnerie La Richardais"],
  sectorName: "La Richardais",
  heroImage: "/terrassementee.png",
  heroTitle: "Entreprise de maçonnerie à La Richardais",
  heroSubtitle: "Spécialiste maçonnerie générale à La Richardais. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "La Richardais",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à La Richardais. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable.",
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
    { title: "Rénovation maison La Richardais", type: "Maison traditionnelle - 110m²", description: "Restauration façade et création d'extension moderne." },
    { title: "Construction neuve La Richardais", type: "Maison individuelle - 90m²", description: "Construction complète avec finitions soignées." }
  ],
  contactInfo: { phone: "06 48 81 25 78", email: "adbetton32@gmail.com", address: "8 avenue de moka, 35400 Saint-Malo" },
  nearbyAreas: ["Dinard", "Pleurtuit", "Saint-Malo", "Saint-Lunaire", "Dinan", "Lanvallay"]
};

export const metadata: Metadata = generateSectorMetadata("Maçonnerie " + maconnerieLaRichardaisConfig.sectorName, maconnerieLaRichardaisConfig.location, maconnerieLaRichardaisConfig.description, maconnerieLaRichardaisConfig.keywords);
export default function MaconnerieLaRichardaisPage() { return <SectorPage {...maconnerieLaRichardaisConfig} />; }
