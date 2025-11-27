#!/usr/bin/env node

/**
 * Script de test pour vérifier la génération du sitemap
 * Usage: node scripts/test-sitemap.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Test de génération du sitemap...\n');

try {
  // Build du projet pour générer le sitemap
  console.log('📦 Build du projet...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Vérification de l'existence du sitemap
  const sitemapPath = path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml', 'route.js');
  const robotsPath = path.join(process.cwd(), '.next', 'server', 'app', 'robots.txt', 'route.js');
  
  console.log('\n✅ Vérifications:');
  
  if (fs.existsSync(sitemapPath)) {
    console.log('✓ Sitemap généré avec succès');
  } else {
    console.log('✗ Sitemap non trouvé');
  }
  
  if (fs.existsSync(robotsPath)) {
    console.log('✓ Robots.txt généré avec succès');
  } else {
    console.log('✗ Robots.txt non trouvé');
  }
  
  console.log('\n🌐 URLs disponibles après déploiement:');
  console.log('- Sitemap: https://rafcomm.fr/sitemap.xml');
  console.log('- Robots: https://rafcomm.fr/robots.txt');
  
  console.log('\n✅ Test terminé avec succès!');
  
} catch (error) {
  console.error('❌ Erreur lors du test:', error.message);
  process.exit(1);
}
