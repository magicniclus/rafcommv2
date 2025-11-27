# Sitemap et SEO - RAFCOMM

## 📋 Vue d'ensemble

Ce projet utilise Next.js 13+ avec App Router pour générer automatiquement le sitemap.xml et robots.txt lors du build.

## 🗺️ Sitemap

### Configuration
- **Domaine**: `https://rafcomm.fr`
- **Fichier source**: `app/sitemap.ts`
- **URL publique**: `https://rafcomm.fr/sitemap.xml`

### Pages incluses (33 URLs)

#### Pages principales (3)
- **Accueil** - `https://rafcomm.fr` (priorité: 1.0)
- **Contact** - `https://rafcomm.fr/contact` (priorité: 0.8)
- **Secteurs** - `https://rafcomm.fr/secteur` (priorité: 0.9)

#### Pages secteurs fibre (22)
Toutes avec priorité 0.85 et fréquence de mise à jour mensuelle :
- fibre-cergy, fibre-chelles, fibre-essonne-91, fibre-eure-27
- fibre-eure-et-loir-28, fibre-evry-courcouronnes, fibre-hauts-de-seine-92
- fibre-loiret-45, fibre-meaux, fibre-nord-59, fibre-oise-60
- fibre-paris-14, fibre-paris-15, fibre-paris-75, fibre-pas-de-calais-62
- fibre-poissy, fibre-seine-et-marne-77, fibre-seine-maritime-76
- fibre-seine-saint-denis-93, fibre-val-d-oise-95, fibre-val-de-marne-94
- fibre-yvelines-78

#### Pages services (5)
Toutes avec priorité 0.9 et fréquence de mise à jour mensuelle :
- detection-blocage
- fourreau-bouche
- raccordement-complexe
- travaux-fibre
- urgence-fibre

#### Pages légales (3)
- **Mentions légales** - `https://rafcomm.fr/mentions-legales` (priorité: 0.3)
- **CGV** - `https://rafcomm.fr/cgv` (priorité: 0.3)
- **Merci** - `https://rafcomm.fr/merci` (priorité: 0.2)

## 🤖 Robots.txt

### Configuration
- **Fichier source**: `app/robots.ts`
- **URL publique**: `https://rafcomm.fr/robots.txt`

### Règles
- **Autorisé**: Toutes les pages (`/`)
- **Interdit**: `/private/`, `/admin/`, `/_next/`, `/api/`
- **Sitemap**: `https://rafcomm.fr/sitemap.xml`

## 🔧 Scripts de test

### Vérification du contenu
```bash
node scripts/check-sitemap-content.js
```

### Test de génération au build
```bash
node scripts/test-sitemap.js
```

## 🚀 Déploiement

Le sitemap et robots.txt sont générés automatiquement lors du build Next.js :

```bash
npm run build
```

Les fichiers seront disponibles aux URLs :
- `https://rafcomm.fr/sitemap.xml`
- `https://rafcomm.fr/robots.txt`

## 📝 Maintenance

### Ajouter une nouvelle page secteur
1. Créer le fichier `app/secteur/nouveau-secteur/page.tsx`
2. Ajouter `'nouveau-secteur'` dans le tableau `fiberSectors` de `app/sitemap.ts`

### Ajouter un nouveau service
1. Créer le fichier `app/services/nouveau-service/page.tsx`
2. Ajouter `'nouveau-service'` dans le tableau `services` de `app/sitemap.ts`

### Modifier les priorités
Éditer le fichier `app/sitemap.ts` et ajuster les valeurs de `priority` :
- **1.0** : Page d'accueil
- **0.9** : Pages services et secteurs principaux
- **0.85** : Pages secteurs spécifiques
- **0.8** : Page contact
- **0.3** : Pages légales
- **0.2** : Pages de remerciement

## 🔍 Vérification SEO

### Google Search Console
1. Soumettre le sitemap : `https://rafcomm.fr/sitemap.xml`
2. Vérifier l'indexation des pages
3. Surveiller les erreurs d'exploration

### Outils de test
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## 📊 Statistiques actuelles

- **Total URLs**: 33
- **Pages principales**: 3
- **Pages secteurs**: 22
- **Pages services**: 5
- **Pages légales**: 3
- **Domaine**: https://rafcomm.fr ✅
