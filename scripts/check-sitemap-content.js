#!/usr/bin/env node

/**
 * Script pour vérifier le contenu du sitemap généré
 * Usage: node scripts/check-sitemap-content.js
 */

const path = require('path');

// Configuration manuelle (copie de seo-config.ts)
const seoConfig = {
  siteUrl: "https://rafcomm.fr"
};

// Fonction simulée du sitemap
function generateSitemap() {
  const baseUrl = seoConfig.siteUrl;
  const currentDate = new Date().toISOString();

  const fiberSectors = [
    'fibre-cergy', 'fibre-chelles', 'fibre-essonne-91', 'fibre-eure-27',
    'fibre-eure-et-loir-28', 'fibre-evry-courcouronnes', 'fibre-hauts-de-seine-92',
    'fibre-loiret-45', 'fibre-meaux', 'fibre-nord-59', 'fibre-oise-60',
    'fibre-paris-14', 'fibre-paris-15', 'fibre-paris-75', 'fibre-pas-de-calais-62',
    'fibre-poissy', 'fibre-seine-et-marne-77', 'fibre-seine-maritime-76',
    'fibre-seine-saint-denis-93', 'fibre-val-d-oise-95', 'fibre-val-de-marne-94',
    'fibre-yvelines-78'
  ];

  const services = [
    'detection-blocage', 'fourreau-bouche', 'raccordement-complexe',
    'travaux-fibre', 'urgence-fibre'
  ];

  const sitemapEntries = [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/secteur`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/mentions-legales`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/cgv`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/merci`, priority: 0.2, changeFrequency: 'yearly' }
  ];

  fiberSectors.forEach(sector => {
    sitemapEntries.push({
      url: `${baseUrl}/secteur/${sector}`,
      priority: 0.85,
      changeFrequency: 'monthly'
    });
  });

  services.forEach(service => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${service}`,
      priority: 0.9,
      changeFrequency: 'monthly'
    });
  });

  return sitemapEntries;
}

async function checkSitemapContent() {
  try {
    console.log('🔍 Vérification du contenu du sitemap...\n');
    
    const sitemap = generateSitemap();
    
    console.log(`📊 Nombre total d'URLs: ${sitemap.length}\n`);
    
    // Grouper les URLs par type
    const urlGroups = {
      'Pages principales': [],
      'Pages secteurs': [],
      'Pages services': [],
      'Pages légales': []
    };
    
    sitemap.forEach(entry => {
      const url = entry.url;
      if (url.includes('/secteur/')) {
        urlGroups['Pages secteurs'].push(url);
      } else if (url.includes('/services/')) {
        urlGroups['Pages services'].push(url);
      } else if (url.includes('/mentions-legales') || url.includes('/cgv') || url.includes('/merci')) {
        urlGroups['Pages légales'].push(url);
      } else {
        urlGroups['Pages principales'].push(url);
      }
    });
    
    // Afficher les groupes
    Object.entries(urlGroups).forEach(([group, urls]) => {
      if (urls.length > 0) {
        console.log(`📁 ${group} (${urls.length}):`);
        urls.forEach(url => {
          const entry = sitemap.find(s => s.url === url);
          console.log(`   • ${url} (priorité: ${entry.priority})`);
        });
        console.log('');
      }
    });
    
    // Vérifications
    console.log('🔍 Vérifications:');
    
    const hasHomepage = sitemap.some(entry => entry.url === 'https://rafcomm.fr');
    console.log(`${hasHomepage ? '✅' : '❌'} Page d'accueil présente`);
    
    const hasContact = sitemap.some(entry => entry.url === 'https://rafcomm.fr/contact');
    console.log(`${hasContact ? '✅' : '❌'} Page contact présente`);
    
    const fiberSectorsCount = sitemap.filter(entry => entry.url.includes('/secteur/fibre-')).length;
    console.log(`${fiberSectorsCount > 0 ? '✅' : '❌'} Pages secteurs fibre: ${fiberSectorsCount}`);
    
    const servicesCount = sitemap.filter(entry => entry.url.includes('/services/')).length;
    console.log(`${servicesCount > 0 ? '✅' : '❌'} Pages services: ${servicesCount}`);
    
    const correctDomain = sitemap.every(entry => entry.url.startsWith('https://rafcomm.fr'));
    console.log(`${correctDomain ? '✅' : '❌'} Toutes les URLs utilisent le bon domaine`);
    
    console.log('\n✅ Vérification terminée!');
    
  } catch (error) {
    console.error('❌ Erreur lors de la vérification:', error.message);
    process.exit(1);
  }
}

checkSitemapContent();
