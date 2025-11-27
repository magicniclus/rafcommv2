#!/usr/bin/env node

/**
 * Script de validation complète SEO
 * Usage: node scripts/validate-seo.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validation complète SEO - RAFCOMM\n');

// 1. Vérifier la configuration SEO
console.log('📋 1. Configuration SEO');
try {
  const seoConfigPath = path.join(process.cwd(), 'lib', 'seo-config.ts');
  const seoConfig = fs.readFileSync(seoConfigPath, 'utf8');
  
  const correctDomain = seoConfig.includes('siteUrl: "https://rafcomm.fr"');
  console.log(`${correctDomain ? '✅' : '❌'} Domaine correct: https://rafcomm.fr`);
  
  const hasTitle = seoConfig.includes('title:');
  console.log(`${hasTitle ? '✅' : '❌'} Titre configuré`);
  
  const hasDescription = seoConfig.includes('description:');
  console.log(`${hasDescription ? '✅' : '❌'} Description configurée`);
  
} catch (error) {
  console.log('❌ Erreur lecture seo-config.ts:', error.message);
}

console.log('');

// 2. Vérifier le sitemap
console.log('📋 2. Sitemap');
try {
  const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  const hasCorrectImport = sitemap.includes("import { seoConfig } from '@/lib/seo-config'");
  console.log(`${hasCorrectImport ? '✅' : '❌'} Import seo-config correct`);
  
  const hasFiberSectors = sitemap.includes('fiberSectors');
  console.log(`${hasFiberSectors ? '✅' : '❌'} Secteurs fibre définis`);
  
  const hasServices = sitemap.includes('services');
  console.log(`${hasServices ? '✅' : '❌'} Services définis`);
  
  const hasHomepage = sitemap.includes('url: baseUrl,');
  console.log(`${hasHomepage ? '✅' : '❌'} Page d'accueil incluse`);
  
} catch (error) {
  console.log('❌ Erreur lecture sitemap.ts:', error.message);
}

console.log('');

// 3. Vérifier robots.txt
console.log('📋 3. Robots.txt');
try {
  const robotsPath = path.join(process.cwd(), 'app', 'robots.ts');
  const robots = fs.readFileSync(robotsPath, 'utf8');
  
  const hasCorrectImport = robots.includes("import { seoConfig } from '@/lib/seo-config'");
  console.log(`${hasCorrectImport ? '✅' : '❌'} Import seo-config correct`);
  
  const hasSitemapReference = robots.includes('sitemap: `${seoConfig.siteUrl}/sitemap.xml`');
  console.log(`${hasSitemapReference ? '✅' : '❌'} Référence sitemap correcte`);
  
  const hasAllowAll = robots.includes("allow: '/'");
  console.log(`${hasAllowAll ? '✅' : '❌'} Autorisation globale`);
  
  const hasDisallowApi = robots.includes("'/api/'");
  console.log(`${hasDisallowApi ? '✅' : '❌'} Interdiction API`);
  
} catch (error) {
  console.log('❌ Erreur lecture robots.ts:', error.message);
}

console.log('');

// 4. Vérifier les pages existantes
console.log('📋 4. Pages existantes');
const appDir = path.join(process.cwd(), 'app');

// Compter les pages secteurs
const secteurDir = path.join(appDir, 'secteur');
let secteurCount = 0;
if (fs.existsSync(secteurDir)) {
  const secteurPages = fs.readdirSync(secteurDir).filter(item => {
    const itemPath = path.join(secteurDir, item);
    return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx'));
  });
  secteurCount = secteurPages.length;
}
console.log(`✅ Pages secteurs: ${secteurCount}`);

// Compter les pages services
const servicesDir = path.join(appDir, 'services');
let servicesCount = 0;
if (fs.existsSync(servicesDir)) {
  const servicePages = fs.readdirSync(servicesDir).filter(item => {
    const itemPath = path.join(servicesDir, item);
    return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx'));
  });
  servicesCount = servicePages.length;
}
console.log(`✅ Pages services: ${servicesCount}`);

// Vérifier les pages principales
const mainPages = ['page.tsx', 'contact/page.tsx', 'mentions-legales/page.tsx', 'cgv/page.tsx'];
mainPages.forEach(page => {
  const exists = fs.existsSync(path.join(appDir, page));
  const pageName = page.replace('/page.tsx', '').replace('page.tsx', 'accueil');
  console.log(`${exists ? '✅' : '❌'} Page ${pageName}`);
});

console.log('');

// 5. Résumé
console.log('📊 Résumé');
const totalExpectedPages = 3 + secteurCount + servicesCount + 3; // principales + secteurs + services + légales
console.log(`📄 Total pages attendues: ${totalExpectedPages}`);
console.log(`🌐 Domaine: https://rafcomm.fr`);
console.log(`📍 Sitemap: https://rafcomm.fr/sitemap.xml`);
console.log(`🤖 Robots: https://rafcomm.fr/robots.txt`);

console.log('\n✅ Validation terminée!');
console.log('\n🚀 Pour déployer:');
console.log('1. npm run build');
console.log('2. Déployer sur votre hébergeur');
console.log('3. Soumettre le sitemap à Google Search Console');
console.log('4. Vérifier l\'indexation après 24-48h');
