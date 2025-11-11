import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieSaintBenoitConfig = {
  title: "Maçonnerie Saint-Benoît-des-Ondes – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Saint-Benoît-des-Ondes. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Saint-Benoît-des-Ondes",
    "maçon Saint-Benoît",
    "entreprise maçonnerie Saint-Benoît",
    "joints pierres Saint-Benoît",
    "extension maison Saint-Benoît",
    "devis maçonnerie Saint-Benoît",
    "entrepreneur bâtiment Saint-Benoît",
    "assainissement Saint-Benoît",
    "travaux maçonnerie Saint-Benoît"
  ],
  sectorName: "Saint-Benoît-des-Ondes",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Entreprise de maçonnerie à Saint-Benoît-des-Ondes",
  heroSubtitle: "Spécialiste maçonnerie générale à Saint-Benoît-des-Ondes. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Saint-Benoît-des-Ondes",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Saint-Benoît-des-Ondes. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune côtière de la baie du Mont-Saint-Michel.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton avec garantie décennale." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de maisons anciennes avec techniques traditionnelles bretonnes." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures et extensions adaptées au climat côtier." },
    { title: "Enduits de façade", description: "Application d'enduits résistants aux embruns et aux intempéries." },
    { title: "Assainissement", description: "Installation de systèmes d'assainissement adaptés aux terrains côtiers." },
    { title: "Murs de soutènement", description: "Construction de murs pour stabiliser les terrains et protéger des marées." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en construction côtière",
    "Matériaux résistants aux embruns",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide baie Mont-Saint-Michel",
    "Conseil technique spécialisé",
    "Respect de l'environnement maritime"
  ],
  projectExamples: [
    {
      title: "Rénovation maison côtière Saint-Benoît",
      type: "Maison traditionnelle - 90m²",
      description: "Restauration avec matériaux résistants aux embruns et vue sur la baie."
    },
    {
      title: "Extension Saint-Benoît-des-Ondes",
      type: "Extension 20m² + terrasse",
      description: "Agrandissement avec protection contre les intempéries côtières."
    },
    {
      title: "Assainissement Saint-Benoît",
      type: "Installation complète",
      description: "Système d'assainissement adapté aux contraintes du terrain côtier."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Cancale",
    "Saint-Coulomb",
    "La Gouesnière",
    "Baguer-Morvan",
    "Hirel",
    "Cherrueix",
    "Dol-de-Bretagne",
    "Mont-Dol",
    "Lillemer",
    "Saint-Malo"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieSaintBenoitConfig.sectorName,
  maconnerieSaintBenoitConfig.location,
  maconnerieSaintBenoitConfig.description,
  maconnerieSaintBenoitConfig.keywords
);

export default function MaconnerieSaintBenoitPage() {
  return <SectorPage {...maconnerieSaintBenoitConfig} />;
}
