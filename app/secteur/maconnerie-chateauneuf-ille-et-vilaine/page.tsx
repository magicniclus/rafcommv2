import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieChateauneufConfig = {
  title: "Maçonnerie Châteauneuf-d'Ille-et-Vilaine – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Châteauneuf-d'Ille-et-Vilaine. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Châteauneuf-d'Ille-et-Vilaine",
    "maçon Châteauneuf",
    "entreprise maçonnerie Châteauneuf",
    "joints pierres Châteauneuf",
    "extension maison Châteauneuf",
    "devis maçonnerie Châteauneuf",
    "entrepreneur bâtiment Châteauneuf",
    "assainissement Châteauneuf",
    "travaux maçonnerie Châteauneuf"
  ],
  sectorName: "Châteauneuf-d'Ille-et-Vilaine",
  heroImage: "/macon.png",
  heroTitle: "Entreprise de maçonnerie à Châteauneuf-d'Ille-et-Vilaine",
  heroSubtitle: "Spécialiste maçonnerie générale à Châteauneuf-d'Ille-et-Vilaine. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Châteauneuf-d'Ille-et-Vilaine",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Châteauneuf-d'Ille-et-Vilaine. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette commune proche de Saint-Malo.",
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
    "Expertise locale Châteauneuf",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide secteur Saint-Malo",
    "Conseil technique personnalisé",
    "Respect de l'environnement",
    "Matériaux de qualité"
  ],
  projectExamples: [
    {
      title: "Rénovation maison Châteauneuf",
      type: "Maison traditionnelle - 115m²",
      description: "Restauration complète avec modernisation et respect du cachet local."
    },
    {
      title: "Extension Châteauneuf-d'Ille-et-Vilaine",
      type: "Extension 28m² + terrasse",
      description: "Agrandissement avec finitions soignées et intégration paysagère."
    },
    {
      title: "Construction neuve Châteauneuf",
      type: "Maison individuelle - 100m²",
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
    "La Gouesnière",
    "Baguer-Morvan",
    "Cancale",
    "Saint-Coulomb",
    "Dol-de-Bretagne",
    "Mont-Dol",
    "Lillemer",
    "Cherrueix",
    "Hirel"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieChateauneufConfig.sectorName,
  maconnerieChateauneufConfig.location,
  maconnerieChateauneufConfig.description,
  maconnerieChateauneufConfig.keywords
);

export default function MaconnerieChateauneufPage() {
  return <SectorPage {...maconnerieChateauneufConfig} />;
}
