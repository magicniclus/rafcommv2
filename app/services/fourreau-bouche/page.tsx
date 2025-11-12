import ServicePage from '@/components/ServicePage';
import { Metadata } from 'next';

const fourreauBoucheConfig = {
  // SEO et métadonnées
  title: "Fourreau Bouché Paris - RAFCOM",
  description: "Spécialiste du débouchage de fourreaux télécommunications en Île-de-France. Techniques professionnelles pour libérer les conduits obstrués. Devis gratuit et intervention rapide.",
  keywords: ["fourreau bouché Paris", "débouchage fourreau télécom", "conduit obstrué fibre", "débouchage gaine télécom", "devis gratuit débouchage", "RAFCOM", "fourreau télécom 75015", "débouchage conduit"],
  
  // Contenu principal
  serviceName: "Fourreau Bouché",
  heroImage: "/joint-de-pierre.png",
  heroTitle: "Débouchage de Fourreaux Télécommunications",
  heroSubtitle: "Spécialiste du débouchage de fourreaux et gaines télécommunications. Techniques professionnelles pour libérer les conduits obstrués et permettre le passage de la fibre optique.",
  
  // Localisation
  sector: "Télécommunications - Débouchage",
  location: "Paris et Île-de-France",
  
  // Description détaillée
  mainDescription: "RAFCOM intervient pour le débouchage professionnel de fourreaux et gaines télécommunications obstrués. Nos techniques spécialisées permettent de libérer efficacement les conduits pour permettre le passage de nouveaux câbles fibre optique. Nous utilisons des équipements professionnels adaptés à chaque situation : aiguillage, soufflage, hydrocurage. Notre expertise nous permet de résoudre les obstructions les plus complexes avec un devis gratuit et personnalisé.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Diagnostic d'Obstruction",
      description: "Diagnostic précis de l'obstruction par caméra d'inspection. Localisation exacte du blocage et évaluation de la faisabilité du débouchage."
    },
    {
      title: "Aiguillage Professionnel",
      description: "Aiguillage manuel et mécanique des fourreaux obstrués. Techniques adaptées selon le type d'obstruction et la configuration du conduit."
    },
    {
      title: "Soufflage Haute Pression",
      description: "Débouchage par soufflage haute pression pour évacuer les obstructions. Technique efficace pour les bouchons de terre ou débris."
    },
    {
      title: "Hydrocurage Spécialisé",
      description: "Nettoyage par hydrocurage pour les obstructions importantes. Évacuation des boues, sédiments et débris accumulés dans les conduits."
    },
    {
      title: "Aspiration de Débris",
      description: "Aspiration puissante des débris et obstructions évacués. Nettoyage complet du fourreau pour garantir un passage libre."
    },
    {
      title: "Test de Continuité",
      description: "Vérification de la continuité du fourreau après débouchage. Test de passage avec aiguille de tirage pour valider l'intervention."
    },
    {
      title: "Tirage de Câble",
      description: "Tirage immédiat du câble fibre optique après débouchage. Service complet pour finaliser l'installation en une seule intervention."
    },
    {
      title: "Rapport d'Intervention",
      description: "Rapport détaillé de l'intervention avec photos avant/après et recommandations pour éviter les futures obstructions."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Diagnostic précis par caméra",
    "Techniques professionnelles adaptées",
    "Équipements haute performance",
    "Intervention rapide et efficace",
    "Garantie de résultat",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Service d'urgence disponible",
    "Expertise technique reconnue",
    "Rapport d'intervention détaillé",
    "Solutions durables"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "Paris 15ème",
    "Paris 14ème", 
    "Paris 16ème",
    "Paris 7ème",
    "Paris 6ème",
    "Issy-les-Moulineaux",
    "Boulogne-Billancourt",
    "Vanves",
    "Malakoff",
    "Montrouge",
    "Île-de-France"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 83 49 01 36",
    email: "contact@rafcom.net",
    address: "Paris (75015), Île-de-France"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = {
  title: "Fourreau Bouché Paris - RAFCOM | Débouchage Télécom | Devis Gratuit",
  description: fourreauBoucheConfig.description,
  keywords: fourreauBoucheConfig.keywords.join(", "),
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  openGraph: {
    title: "Fourreau Bouché Paris - RAFCOM | Débouchage Télécom",
    description: fourreauBoucheConfig.description,
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FourreauBouchePage() {
  return <ServicePage {...fourreauBoucheConfig} />;
}
