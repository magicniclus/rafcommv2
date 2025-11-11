import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintLunaireConfig = {
  title: "Maçonnerie Saint-Lunaire – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Lunaire. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: ["maçonnerie Saint-Lunaire", "maçon Saint-Lunaire", "entreprise maçonnerie Saint-Lunaire", "joints pierres Saint-Lunaire", "extension maison Saint-Lunaire", "devis maçonnerie Saint-Lunaire"],
  sectorName: "Saint-Lunaire",
  heroImage: "/assainissement.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Lunaire",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Lunaire. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Saint-Lunaire",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Lunaire. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale pour villas balnéaires." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de villas et maisons de caractère avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions pour optimiser la vue mer et les espaces de vie." },
    { title: "Enduits de façade", description: "Application d'enduits résistants aux embruns pour protéger vos façades face à la mer." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement adaptés aux résidences balnéaires." },
    { title: "Aménagements côtiers", description: "Terrasses et murets pour profiter pleinement de votre cadre de vie exceptionnel." }
  ],
  advantages: ["Entrepreneur du bâtiment avec garantie décennale", "Devis gratuit et personnalisé", "Savoir-faire familial depuis 2 générations", "Expertise en construction balnéaire", "Matériaux résistants aux embruns", "Travail soigné, durable et de qualité"],
  projectExamples: [
    { title: "Rénovation villa balnéaire Saint-Lunaire", type: "Villa années 20 - 130m²", description: "Restauration façade, joints pierre et création baie vitrée vue mer." },
    { title: "Extension résidence Saint-Lunaire", type: "Extension 25m² + terrasse", description: "Agrandissement avec vue panoramique et finitions haut de gamme." }
  ],
  contactInfo: { phone: "06 48 81 25 78", email: "adbetton32@gmail.com", address: "8 avenue de moka, 35400 Saint-Malo" },
  nearbyAreas: ["Dinard", "Saint-Briac-sur-Mer", "Saint-Malo", "Pleurtuit", "La Richardais", "Lancieux"]
};

export const metadata: Metadata = generateSectorMetadata("Maçonnerie " + maconnerieSaintLunaireConfig.sectorName, maconnerieSaintLunaireConfig.location, maconnerieSaintLunaireConfig.description, maconnerieSaintLunaireConfig.keywords);
export default function MaconnerieSaintLunairePage() { return <SectorPage {...maconnerieSaintLunaireConfig} />; }
