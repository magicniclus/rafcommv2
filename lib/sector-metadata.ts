import { Metadata } from 'next';

export function generateSectorMetadata(
  sectorName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  return {
    title: `Maçonnerie ${location} – Adbetton Maçonnerie | Devis Gratuit`,
    description: description,
    keywords: keywords.join(', '),
    openGraph: {
      title: `Maçonnerie ${location} – Adbetton Maçonnerie`,
      description: description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Adbetton Maçonnerie - Savoir-faire familial',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Maçonnerie ${location} – Adbetton Maçonnerie`,
      description: description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://batifrance.fr/secteur/${location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    },
  };
}
