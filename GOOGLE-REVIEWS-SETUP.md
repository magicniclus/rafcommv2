# Configuration du Système d'Avis Google

Ce guide explique comment configurer et utiliser le système d'affichage des avis Google dans votre projet Next.js.

## 📋 Prérequis

1. **Clé API Google Places** : Vous devez avoir une clé API Google Places activée
2. **Place ID** : L'identifiant Google Places de votre établissement

## 🔧 Configuration

### 1. Configuration de l'API Google Places

1. Rendez-vous sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez l'API "Places API"
4. Créez une clé API dans "Identifiants"
5. Configurez les restrictions de la clé API (recommandé)

### 2. Variables d'environnement

Ajoutez la clé API dans votre fichier `.env.local` :

```bash
GOOGLE_PLACE_API_KEY=votre_cle_api_google_places
```

### 3. Trouver votre Place ID

Pour trouver le Place ID de votre établissement :

1. Rendez-vous sur [Google Maps](https://maps.google.com/)
2. Recherchez votre établissement
3. Cliquez sur votre établissement
4. L'URL contiendra le Place ID, ou utilisez l'outil [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

## 🚀 Utilisation

### Intégration dans une page

```tsx
import GoogleReviewsBanner from '@/components/GoogleReviewsBanner';

export default function MaPage() {
  return (
    <div>
      <Hero />
      <GoogleReviewsBanner placeId="VOTRE_PLACE_ID" />
      {/* Autres composants */}
    </div>
  );
}
```

### Exemple avec variable d'environnement

Si vous préférez stocker le Place ID dans une variable d'environnement :

1. Ajoutez dans `.env.local` :
```bash
NEXT_PUBLIC_GOOGLE_PLACE_ID=votre_place_id
```

2. Utilisez-le dans votre composant :
```tsx
<GoogleReviewsBanner placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID!} />
```

## 📁 Structure des fichiers créés

```
├── app/
│   └── api/
│       └── google-reviews/
│           └── route.ts          # Route API pour récupérer les avis
├── components/
│   └── GoogleReviewsBanner.tsx   # Composant d'affichage des avis
└── GOOGLE-REVIEWS-SETUP.md      # Ce guide
```

## 🎨 Personnalisation

Le composant `GoogleReviewsBanner` utilise TailwindCSS et peut être personnalisé :

- **Couleurs** : Modifiez les classes Tailwind dans le composant
- **Nombre d'avis affichés** : Changez `slice(0, 3)` ligne 134
- **Longueur du texte** : Modifiez `maxLength` dans `truncateText`

## 🔒 Sécurité

- ✅ La clé API n'est jamais exposée côté client
- ✅ Toutes les requêtes passent par votre API Next.js
- ✅ Gestion d'erreurs complète
- ✅ Validation des paramètres

## 🐛 Dépannage

### Erreur "Configuration API manquante"
- Vérifiez que `GOOGLE_PLACE_API_KEY` est bien définie dans `.env.local`
- Redémarrez votre serveur de développement

### Erreur "Impossible de récupérer les données"
- Vérifiez que votre Place ID est correct
- Vérifiez que l'API Places est activée dans Google Cloud Console
- Vérifiez les quotas de votre API

### Aucun avis affiché
- Certains établissements peuvent ne pas avoir d'avis publics
- Vérifiez que l'établissement existe bien sur Google Maps

## 📊 Fonctionnalités

- ✅ Affichage de la note globale Google
- ✅ Nombre total d'avis
- ✅ Affichage de 1 à 3 avis récents
- ✅ Lien vers tous les avis sur Google Maps
- ✅ Design responsive avec TailwindCSS
- ✅ États de chargement et d'erreur
- ✅ Gestion des cas d'erreur

## 🔄 API Endpoint

L'endpoint `/api/google-reviews` accepte :

**Paramètres :**
- `placeId` (required) : L'identifiant Google Places

**Réponse :**
```json
{
  "name": "Nom de l'établissement",
  "rating": 4.8,
  "reviewsCount": 123,
  "reviews": [
    {
      "author_name": "Nom de l'auteur",
      "rating": 5,
      "text": "Texte de l'avis"
    }
  ]
}
```
