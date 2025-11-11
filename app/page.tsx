import { Metadata } from 'next';
import HomeClient from './home-client';

// Métadonnées SEO pour la page d'accueil
export const metadata: Metadata = {
  title: "Adbetton Maçonnerie - Savoir-faire familial Saint-Malo | Devis Gratuit",
  description: "Adbetton Maçonnerie, spécialistes en maçonnerie générale, joints de pierres, extensions, ouvertures, enduits de façade et assainissement. Entrepreneur du bâtiment avec garantie décennale dans un rayon de 50 km autour de Saint-Malo.",
  keywords: "maçonnerie Saint-Malo, joints pierres Bretagne, extension maison Saint-Malo, entrepreneur bâtiment 35400, maçonnerie générale Bretagne, Adbetton, assainissement Saint-Malo, enduits façade, terrassement, devis gratuit",
  authors: [{ name: "Adbetton Maçonnerie" }],
  creator: "Adbetton Maçonnerie",
  publisher: "Adbetton Maçonnerie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adbetton Maçonnerie - Savoir-faire familial Saint-Malo",
    description: "Spécialistes en maçonnerie générale, joints de pierres, extensions, ouvertures, enduits de façade et assainissement. Entrepreneur du bâtiment avec garantie décennale autour de Saint-Malo.",
    type: "website",
    locale: "fr_FR",
    siteName: "Adbetton Maçonnerie - Savoir-faire familial",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adbetton Maçonnerie - Savoir-faire familial Saint-Malo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adbetton Maçonnerie - Savoir-faire familial",
    description: "Spécialistes en maçonnerie générale, joints de pierres, extensions, ouvertures, enduits de façade et assainissement autour de Saint-Malo.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
