import { Metadata } from 'next';
import ContactClient from './contact-client';

// Métadonnées SEO pour la page contact
export const metadata: Metadata = {
  title: "Contact - Adbetton Maçonnerie | Devis Gratuit Saint-Malo",
  description: "Contactez Adbetton Maçonnerie pour votre projet : maçonnerie générale, joints de pierres, extensions, assainissement autour de Saint-Malo. Devis gratuit et personnalisé. Entrepreneur du bâtiment avec garantie décennale.",
  keywords: "contact Adbetton, devis gratuit maçonnerie, contact maçon Saint-Malo, devis joints pierres, contact artisan 35400, maçonnerie contact",
  authors: [{ name: "Adbetton Maçonnerie" }],
  creator: "Adbetton Maçonnerie",
  publisher: "Adbetton Maçonnerie",
  openGraph: {
    title: "Contact Adbetton Maçonnerie - Devis Gratuit Saint-Malo",
    description: "Contactez nos experts en maçonnerie pour votre projet. Devis gratuit et personnalisé autour de Saint-Malo.",
    type: "website",
    locale: "fr_FR",
    siteName: "Adbetton Maçonnerie - Savoir-faire familial",
  },
  twitter: {
    card: "summary",
    title: "Contact Adbetton Maçonnerie - Devis Gratuit",
    description: "Contactez nos experts en maçonnerie pour votre projet autour de Saint-Malo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}