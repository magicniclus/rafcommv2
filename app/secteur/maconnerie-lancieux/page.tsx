import SectorPage from '@/components/SectorPage';
import { generateSectorMetadata } from '@/lib/sector-metadata';
import { Metadata } from 'next';

const maconnerieLancieuxConfig = {
  title: "Maçonnerie Lancieux – Adbetton Maçonnerie",
  description: "Entreprise de maçonnerie à Lancieux. Maçonnerie générale, joints de pierres, extensions, assainissement. Devis gratuit.",
  keywords: [
    "maçonnerie Lancieux",
    "maçon Lancieux",
    "entreprise maçonnerie Lancieux",
    "joints pierres Lancieux",
    "extension maison Lancieux",
    "devis maçonnerie Lancieux",
    "entrepreneur bâtiment Lancieux",
    "assainissement Lancieux",
    "travaux maçonnerie Lancieux"
  ],
  sectorName: "Lancieux",
  heroImage: "/facade.png",
  heroTitle: "Entreprise de maçonnerie à Lancieux",
  heroSubtitle: "Spécialiste maçonnerie générale à Lancieux. Joints de pierres, extensions, assainissement avec savoir-faire familial.",
  location: "Lancieux",
  mainDescription: "Adbetton Maçonnerie est votre spécialiste maçonnerie à Lancieux. Notre savoir-faire familial depuis 2 générations nous permet d'intervenir sur tous vos projets de maçonnerie avec un travail soigné et durable. Notre expertise locale nous permet d'adapter nos interventions aux spécificités de cette station balnéaire de la Côte d'Émeraude.",
  mainServices: [
    { title: "Maçonnerie générale", description: "Construction neuve, extensions, fondations et dalles béton pour villas balnéaires." },
    { title: "Joints de pierres à l'ancienne", description: "Restauration de villas et maisons de caractère avec techniques traditionnelles." },
    { title: "Ouvertures et extensions", description: "Création d'ouvertures pour optimiser la vue mer et extensions de qualité." },
    { title: "Enduits de façade", description: "Application d'enduits haute résistance aux embruns marins." },
    { title: "Assainissement", description: "Installation de systèmes adaptés aux résidences balnéaires." },
    { title: "Aménagements côtiers", description: "Terrasses, murets et aménagements pour profiter du cadre maritime." }
  ],
  advantages: [
    "Entrepreneur du bâtiment avec garantie décennale",
    "Devis gratuit et personnalisé",
    "Savoir-faire familial depuis 2 générations",
    "Expertise en construction balnéaire",
    "Matériaux haute résistance marine",
    "Travail soigné, durable et de qualité",
    "Tarification transparente",
    "Intervention rapide Côte d'Émeraude",
    "Conseil architectural balnéaire",
    "Respect de l'environnement côtier"
  ],
  projectExamples: [
    {
      title: "Rénovation villa balnéaire Lancieux",
      type: "Villa années 60 - 120m²",
      description: "Restauration complète avec enduits anti-embruns et ouvertures vue mer."
    },
    {
      title: "Extension résidence Lancieux",
      type: "Extension 30m² + terrasse",
      description: "Agrandissement avec vue panoramique sur la baie de Lancieux."
    },
    {
      title: "Aménagement terrain Lancieux",
      type: "Terrasses et murets",
      description: "Création d'espaces extérieurs avec vue sur la Côte d'Émeraude."
    }
  ],
  contactInfo: {
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    address: "8 avenue de moka, 35400 Saint-Malo"
  },
  nearbyAreas: [
    "Saint-Briac-sur-Mer",
    "Dinard",
    "Saint-Lunaire",
    "Ploubalay",
    "Plancoët",
    "Créhen",
    "Fréhel",
    "Pleurtuit",
    "Dinan",
    "Matignon"
  ]
};

export const metadata: Metadata = generateSectorMetadata(
  "Maçonnerie " + maconnerieLancieuxConfig.sectorName,
  maconnerieLancieuxConfig.location,
  maconnerieLancieuxConfig.description,
  maconnerieLancieuxConfig.keywords
);

export default function MaconnerieLancieuxPage() {
  return <SectorPage {...maconnerieLancieuxConfig} />;
}
