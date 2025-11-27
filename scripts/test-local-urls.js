#!/usr/bin/env node

/**
 * Script pour tester les URLs du sitemap et robots en local
 * Usage: node scripts/test-local-urls.js
 */

const http = require('http');

function testUrl(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          contentLength: data.length,
          preview: data.substring(0, 200) + (data.length > 200 ? '...' : '')
        });
      });
    });
    
    req.on('error', (err) => {
      reject({ url, error: err.message });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      reject({ url, error: 'Timeout' });
    });
  });
}

async function testLocalUrls() {
  console.log('🔍 Test des URLs en local...\n');
  
  const urlsToTest = [
    'http://localhost:3000/sitemap.xml',
    'http://localhost:3000/robots.txt'
  ];
  
  for (const url of urlsToTest) {
    try {
      console.log(`📡 Test: ${url}`);
      const result = await testUrl(url);
      
      console.log(`✅ Status: ${result.status}`);
      console.log(`📄 Content-Type: ${result.contentType}`);
      console.log(`📏 Taille: ${result.contentLength} caractères`);
      console.log(`👀 Aperçu:\n${result.preview}`);
      console.log('─'.repeat(60));
      
    } catch (error) {
      console.log(`❌ Erreur: ${error.error}`);
      console.log('─'.repeat(60));
    }
  }
  
  console.log('\n✅ Test terminé!');
  console.log('\n🌐 URLs de production:');
  console.log('- Sitemap: https://rafcomm.fr/sitemap.xml');
  console.log('- Robots: https://rafcomm.fr/robots.txt');
}

testLocalUrls().catch(console.error);
