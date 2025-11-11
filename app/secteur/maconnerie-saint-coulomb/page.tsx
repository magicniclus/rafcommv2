import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintCoulombConfig = {
  title: "Maçonnerie Saint-Coulomb – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Coulomb. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: ["maçonnerie Saint-Coulomb", "maçon Saint-Coulomb", "entreprise maçonnerie Saint-Coulomb", "joints pierres Saint-Coulomb", "extension maison Saint-Coulomb", "devis maçonnerie Saint-Coulomb"],
  sectorName: "Saint-Coulomb",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Coulomb",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Coulomb. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Saint-Coulomb",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Coulomb. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions en harmonie avec l'architecture côtière." },
    { title: "Enduits de façade", description: "Application d'enduits résistants aux embruns marins." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement adaptés aux terrains côtiers." },
    { title: "Murs de soutènement", description: "Construction de murs pour stabiliser les terrains en pente." }
  ],
  advantages: ["Entrepreneur du bâtiment avec garantie décennale", "Devis gratuit et personnalisé", "Savoir-faire familial depuis 2 générations", "Expertise en construction côtière", "Matériaux résistants aux embruns", "Travail soigné, durable et de qualité"],
  projectExamples: [
    { title: "Rénovation maison côtière Saint-Coulomb", type: "Maison traditionnelle - 120m²", description: "Restauration avec matériaux résistants aux embruns." },
    { title: "Extension vue mer Saint-Coulomb", type: "Extension 30m²", description: "Agrandissement avec ouvertures panoramiques." }
  ],
  contactInfo: { phone: "06 48 81 25 78", email: "adbetton32@gmail.com", address: "8 avenue de moka, 35400 Saint-Malo" },
  nearbyAreas: ["Saint-Malo", "Cancale", "La Gouesnière", "Baguer-Morvan", "Hirel", "Cherrueix"]
};

export const metadata: Metadata = generateSectorMetadata("Maçonnerie " + maconnerieSaintCoulombConfig.sectorName, maconnerieSaintCoulombConfig.location, maconnerieSaintCoulombConfig.description, maconnerieSaintCoulombConfig.keywords);
export default function MaconnerieSaintCoulombPage() { return <SectorPage {...maconnerieSaintCoulombConfig} />; }
