import { Metadata } from 'next';
import MerciClient from './merci-client';

// Métadonnées SEO pour la page merci
export const metadata: Metadata = {
  title: "Merci - RAFCOM | Demande Reçue",
  description: "Merci pour votre demande de devis ! RAFCOM vous recontactera rapidement pour votre projet de travaux fibre, débouchage fourreaux, détection blocages ou urgences fibre en Île-de-France.",
  keywords: "merci demande devis, confirmation contact RAFCOM, demande reçue fibre optique, suivi projet Paris",
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciPage() {
  return <MerciClient />;
}
