import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - Adbetton Maçonnerie | Demande Reçue",
  description: "Merci pour votre demande de devis ! Adbetton Maçonnerie vous recontactera rapidement pour votre projet de maçonnerie générale, joints de pierres, extensions ou assainissement autour de Saint-Malo.",
  keywords: "merci demande devis, confirmation contact Adbetton, demande reçue maçonnerie, suivi projet Saint-Malo",
  authors: [{ name: "Adbetton Maçonnerie" }],
  creator: "Adbetton Maçonnerie",
  publisher: "Adbetton Maçonnerie",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
