import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // Toutes les pages secteurs fibre existantes
  const fiberSectors = [
    'fibre-cergy',
    'fibre-chelles', 
    'fibre-essonne-91',
    'fibre-eure-27',
    'fibre-eure-et-loir-28',
    'fibre-evry-courcouronnes',
    'fibre-hauts-de-seine-92',
    'fibre-loiret-45',
    'fibre-meaux',
    'fibre-nord-59',
    'fibre-oise-60',
    'fibre-paris-14',
    'fibre-paris-15',
    'fibre-paris-75',
    'fibre-pas-de-calais-62',
    'fibre-poissy',
    'fibre-seine-et-marne-77',
    'fibre-seine-maritime-76',
    'fibre-seine-saint-denis-93',
    'fibre-val-d-oise-95',
    'fibre-val-de-marne-94',
    'fibre-yvelines-78'
  ];

  // Tous les services existants
  const services = [
    'detection-blocage',
    'fourreau-bouche',
    'raccordement-complexe',
    'travaux-fibre',
    'urgence-fibre'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Page d'accueil
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Page contact
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Page secteurs principale
    {
      url: `${baseUrl}/secteur`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Page services principale
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Pages légales
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/merci`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Ajouter toutes les pages secteurs fibre
  fiberSectors.forEach(sector => {
    sitemapEntries.push({
      url: `${baseUrl}/secteur/${sector}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Ajouter toutes les pages services
  services.forEach(service => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  return sitemapEntries;
}
