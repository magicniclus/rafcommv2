// Script de test pour vérifier la configuration SendGrid
const sgMail = require('@sendgrid/mail');
const fs = require('fs');

// Lecture manuelle du fichier .env.local
function loadEnvFile() {
  try {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        process.env[key.trim()] = value;
      }
    });
  } catch (error) {
    console.error('❌ Impossible de lire .env.local:', error.message);
  }
}

// Chargement des variables d'environnement
loadEnvFile();

async function testSendGrid() {
  console.log('🔍 Test de configuration SendGrid...\n');
  
  // Vérification de la clé API
  const apiKey = process.env.SENDGRID_API_KEY;
  
  if (!apiKey) {
    console.error('❌ SENDGRID_API_KEY non trouvée dans .env.local');
    return;
  }
  
  if (!apiKey.startsWith('SG.')) {
    console.error('❌ Format de clé API invalide (doit commencer par "SG.")');
    return;
  }
  
  console.log('✅ Clé API trouvée:', apiKey.substring(0, 10) + '...');
  
  // Configuration SendGrid
  sgMail.setApiKey(apiKey);
  
  // Test d'envoi simple
  const testEmail = {
    to: 'test@example.com', // Email de test (ne sera pas envoyé)
    from: {
      email: 'service@trouver-mon-chantier.fr',
      name: 'Test Trouver Mon Chantier'
    },
    subject: 'Test de configuration SendGrid',
    text: 'Ceci est un test de configuration.',
    html: '<p>Ceci est un test de configuration.</p>',
    mail_settings: {
      sandbox_mode: {
        enable: true // Mode sandbox pour ne pas envoyer réellement
      }
    }
  };
  
  try {
    console.log('📧 Test d\'envoi en mode sandbox...');
    const response = await sgMail.send(testEmail);
    console.log('✅ Test réussi! SendGrid est correctement configuré.');
    console.log('📊 Statut:', response[0].statusCode);
  } catch (error) {
    console.error('❌ Erreur SendGrid:');
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    
    if (error.response && error.response.body) {
      console.error('Détails:', JSON.stringify(error.response.body, null, 2));
    }
    
    // Suggestions basées sur le code d'erreur
    if (error.code === 401) {
      console.log('\n💡 Suggestions pour l\'erreur 401:');
      console.log('1. Vérifiez que votre clé API est correcte');
      console.log('2. Créez une nouvelle clé API avec les bonnes permissions');
      console.log('3. Vérifiez que la clé n\'est pas expirée');
    } else if (error.code === 403) {
      console.log('\n💡 Suggestions pour l\'erreur 403:');
      console.log('1. Vérifiez les permissions de votre clé API');
      console.log('2. Vérifiez que votre domaine est authentifié dans SendGrid');
    }
  }
}

// Exécution du test
testSendGrid().catch(console.error);
