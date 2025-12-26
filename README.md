# 🐾 À vos papattes by Nath - Site Vitrine de Pet Sitting

Bienvenue sur le code source du site **À vos papattes by Nath**.
Ce projet est une **Progressive Web App (PWA)** moderne, performante et accessible, conçue pour présenter un service professionnel de garde d'animaux et de promenade.

🔗 **Site en ligne :** [https://petsitter-avospapattes-by-nath.netlify.app/](https://petsitter-avospapattes-by-nath.netlify.app/)

---

## ✨ Fonctionnalités

### 🎨 Design & Interface
- ✅ **Design Responsive** : Mobile First, optimisé tablettes et ordinateurs
- ✅ **Palette harmonieuse** : Vert d'eau (#2A9D8F), Terracotta (#E76F51), Jaune doux (#E9C46A)
- ✅ **🌙 Mode sombre/clair** : Basculement avec sauvegarde de la préférence (LocalStorage)
- ✅ **Illustrations SVG** : Décorations de chats et chiens intégrées
- ✅ **Animations fluides** : Effets hover, transitions CSS, décorations flottantes

### 📱 Progressive Web App (PWA)
- ✅ **Installable** : Sur mobile (Android/iOS) et desktop
- ✅ **Fonctionne offline** : Service Worker avec stratégie de cache intelligente
- ✅ **Mode standalone** : S'ouvre comme une application native
- ✅ **Icône personnalisée** : Logo patte SVG optimisé
- ✅ **Optimisé performance** : CSS/JS externes, lazy loading, mise en cache

### 📍 Carte Interactive
- ✅ **Leaflet (OpenStreetMap)** : Carte de la zone de service
- ✅ **Rayon de 5 km** : Cercle visualisant la zone d'intervention
- ✅ **Marqueur personnalisé** : Localisation exacte à Oberhausbergen
- ✅ **Liste des villes** : 7 communes couvertes
- ✅ **Design responsive** : Adaptation mobile/desktop

### 📸 Galerie Photos
- ✅ **6 photos d'animaux** : Portfolio des compagnons gardés
- ✅ **Lightbox interactive** : Visualisation en plein écran
- ✅ **Navigation clavier** : Enter, Escape, Tab
- ✅ **Overlay animé** : Informations au survol
- ✅ **Lazy loading** : Chargement optimisé des images

### ❓ FAQ Interactive
- ✅ **8 questions fréquentes** : Animaux acceptés, zone, horaires, paiement, etc.
- ✅ **Accordéons natifs** : HTML5 `<details>` / `<summary>`
- ✅ **Animations smooth** : Ouverture/fermeture fluides
- ✅ **Design cohérent** : Icônes, couleurs, typographie

### 📬 Système de Contact
- ✅ **Formulaire intelligent** : Validation côté client
- ✅ **Firebase Firestore** : Stockage sécurisé des demandes
- ✅ **EmailJS** : Notifications email automatiques
- ✅ **Feedback utilisateur** : Messages de succès/erreur

### ♿ Accessibilité (WCAG 2.1)
- ✅ **ARIA labels** : Navigation, boutons, formulaires
- ✅ **Navigation clavier** : Focus visible, tabindex optimisés
- ✅ **Alt textes descriptifs** : Toutes les images documentées
- ✅ **Contrast ratio** : Couleurs conformes AA
- ✅ **Screen readers** : Compatible NVDA, JAWS, VoiceOver

### 🔍 SEO Optimisé
- ✅ **Meta tags complets** : Description, keywords, author
- ✅ **Open Graph** : Partages Facebook/LinkedIn
- ✅ **Twitter Card** : Aperçus Twitter
- ✅ **Données structurées** : Schema.org (recommandé)
- ✅ **URLs sémantiques** : Ancres descriptives

### 📜 Conformité
- ✅ **Mentions légales** : Page dédiée conforme RGPD
- ✅ **Politique de cookies** : Transparente et minimaliste
- ✅ **Protection des données** : Informations détaillées

---

## 🛠 Technologies Utilisées

Le projet est construit avec des technologies web modernes, sans framework JavaScript lourd.

| Technologie | Utilisation | Version |
|-------------|-------------|---------|
| **HTML5** | Structure sémantique | - |
| **CSS3** | Variables CSS, Flexbox, Grid, Animations | - |
| **JavaScript ES6** | Modules, Async/Await, LocalStorage | - |
| **Leaflet** | Carte interactive OpenStreetMap | 1.9.4 |
| **Firebase** | Base de données Firestore | 10.7.1 |
| **EmailJS** | Envoi d'emails via API | 3.x |
| **Font Awesome** | Bibliothèque d'icônes | 6.4.0 |
| **Google Fonts** | Polices Fredoka & Nunito | - |
| **Netlify** | Hébergement et déploiement | - |

---

## 📁 Structure du Projet

```
📁 avospapattes-by-nath/
├── 📁 css/
│   └── main.css                 # Styles externalisés (37 KB)
├── 📁 js/
│   ├── app.js                   # Point d'entrée principal
│   ├── theme.js                 # Gestion du thème clair/sombre
│   ├── menu.js                  # Navigation mobile
│   ├── firebase-handler.js      # Formulaire + Firebase
│   ├── map.js                   # Carte Leaflet
│   └── gallery.js               # Galerie + Lightbox
├── 📄 index.html                # Page principale (57 KB)
├── 📄 mentions-legales.html     # Mentions légales & RGPD
├── 📄 manifest.json             # Configuration PWA
├── 📄 sw.js                     # Service Worker (cache)
├── 📄 icon.svg                  # Icône de l'application
└── 📄 README.md                 # Documentation
```

---

## 🚀 Installation Locale

⚠️ **Note importante :** Le projet utilise des modules ES6 (`<script type="module">`), il nécessite un serveur local.

### Option 1 : Avec VS Code (Recommandé)
1. Ouvrez le dossier du projet dans **VS Code**
2. Installez l'extension **Live Server**
3. Clic droit sur `index.html` → **Open with Live Server**

### Option 2 : Avec Python
```bash
cd avospapattes-by-nath
python -m http.server 8000
```
Puis ouvrir : `http://localhost:8000`

### Option 3 : Avec Node.js
```bash
npx serve .
```

### Option 4 : Avec PHP
```bash
php -S localhost:8000
```

---

## ⚙️ Configuration

### Firebase
Le projet utilise Firebase Firestore. La configuration se trouve dans `js/firebase-handler.js` :

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCXS5iv36-mu-qsKeU8R1lLkeutqI9qPgo",
    authDomain: "patpatouche-f728f.firebaseapp.com",
    projectId: "patpatouche-f728f",
    // ...
};
```

⚠️ **Recommandation sécurité :** Déplacer ces credentials vers des variables d'environnement via Netlify Functions.

### EmailJS
Configuration EmailJS pour les notifications :
```javascript
const EMAILJS_PUBLIC_KEY = "7qFu3BHzgXhlsbSaZ";
const EMAILJS_SERVICE_ID = "service_8ysygbo";
const EMAILJS_TEMPLATE_ID = "template_imm34hv";
```

### Service Worker
Le Service Worker (`sw.js`) met en cache les ressources pour un fonctionnement offline :
- Stratégie : **Network First** (réseau prioritaire, cache en fallback)
- Cache name : `avospapattes-v1`
- Fichiers cachés : HTML, CSS, JS, manifest

---

## 📞 Informations de Contact

| Info | Valeur |
|------|--------|
| **Responsable** | Nathalie |
| **Email** | info@avospapattes-by-nath.fr |
| **Téléphone** | 06 82 91 16 72 |
| **Adresse** | 7 rue Pierre de Coubertin, Oberhausbergen (67205) |
| **Zone de service** | Rayon de 5 km autour d'Oberhausbergen |
| **Villes couvertes** | Strasbourg, Schiltigheim, Bischheim, Hoenheim, Mittelhausbergen, Niederhausbergen |
| **Disponibilité** | 7j/7 - 08h à 20h |

---

## 🌟 Sections du Site

### 1️⃣ **Hero** - Accueil
Présentation principale avec :
- Titre accrocheur
- Sous-titre descriptif
- 2 CTA (Call-to-Action)
- Image morphing animée

### 2️⃣ **Services** - Prestations
4 services détaillés :
- 🏠 Garde à domicile
- 🚶 Promenades (30/45/60 min)
- 🐱 Visites pour chats
- 💊 Soins & médicaments

### 3️⃣ **Galerie Animaux** - Bandeau Défilant
Carrousel infini d'illustrations SVG d'animaux

### 4️⃣ **Galerie Photos** - Portfolio
6 photos d'animaux gardés avec lightbox interactive

### 5️⃣ **À Propos** - Présentation
- Bio de Nathalie
- Certifications
- Statistiques
- Photo professionnelle

### 6️⃣ **Tarifs** - Formules
3 formules de prix :
- 💚 Découverte (1 visite)
- ⭐ Régulier (Pack 5 visites)
- 🏆 Premium (Pack 10 visites)

### 7️⃣ **Témoignages** - Avis Clients
3 témoignages authentiques avec avatars

### 8️⃣ **Carte** - Zone de Service
Carte Leaflet interactive montrant la zone de 5 km

### 9️⃣ **FAQ** - Questions Fréquentes
8 questions/réponses avec accordéons animés

### 🔟 **Contact** - Formulaire
- Formulaire de réservation
- Coordonnées complètes
- Liens réseaux sociaux

### 1️⃣1️⃣ **Footer** - Pied de Page
- Navigation rapide
- Horaires d'ouverture
- Copyright

---

## 🎨 Personnalisation

### Palette de Couleurs (Variables CSS)
```css
:root {
    --primary: #2A9D8F;       /* Vert d'eau rassurant */
    --primary-dark: #21867a;
    --secondary: #E9C46A;     /* Jaune doux chaleureux */
    --accent: #E76F51;        /* Terracotta énergique */
    --bg-light: #F4F9F9;      /* Fond très clair */
    --bg-white: #FFFFFF;
    --text-dark: #264653;     /* Texte principal */
    --text-gray: #666666;
    --radius: 16px;           /* Coins arrondis */
    --shadow: 0 10px 30px rgba(0,0,0,0.08);
}
```

### Mode Sombre
```css
[data-theme="dark"] {
    --bg-light: #1a1a2e;
    --bg-white: #16213e;
    --text-dark: #eaeaea;
    --text-gray: #b0b0b0;
    --shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

La préférence est sauvegardée automatiquement dans le LocalStorage.

---

## 📱 Installation de la PWA

### Android (Chrome)
1. Ouvrez le site dans Chrome mobile
2. Menu (⋮) → **"Installer l'application"**
3. L'icône "Papattes" apparaît sur l'écran d'accueil
4. Lancez-la comme une app native !

### iOS (Safari)
1. Ouvrez le site dans Safari
2. Bouton **Partager** → **"Sur l'écran d'accueil"**
3. Confirmez l'ajout
4. L'icône "Papattes" est créée

### Desktop (Chrome/Edge)
1. Ouvrez le site dans Chrome ou Edge
2. Cliquez sur l'icône **⊕ Installer** dans la barre d'adresse
3. Confirmez l'installation
4. L'app s'ouvre dans une fenêtre dédiée

---

## 🧪 Tests

### Test du Mode Offline
1. Visitez le site une première fois (pour initialiser le cache)
2. Ouvrez DevTools → **Application** → **Service Workers**
3. Cochez **"Offline"**
4. Rechargez la page → Le site fonctionne ! ✅

### Test de la Carte
- Zoomez/dézoomez sur la carte
- Cliquez sur le marqueur pour voir l'adresse
- Le cercle de 5 km doit être visible

### Test de la Galerie
- Cliquez sur une photo → lightbox s'ouvre
- Appuyez sur **Échap** → lightbox se ferme
- Testez la navigation au clavier

### Test de la FAQ
- Cliquez sur une question → elle s'ouvre
- Vérifiez l'animation du chevron
- Testez plusieurs questions simultanément

---

## 🚀 Déploiement

### Netlify (Recommandé)
1. Connectez votre repo GitHub à Netlify
2. Build command : (aucune)
3. Publish directory : `/`
4. Déploiement automatique à chaque push sur `main`

### Autres hébergeurs
Le site est 100% statique, compatible avec :
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**
- **Firebase Hosting**

---

## 🔒 Sécurité & Recommandations

### ⚠️ Clés API Exposées
Les credentials Firebase et EmailJS sont actuellement visibles dans le code source.

**Solutions recommandées :**
1. Utiliser Netlify Functions pour gérer Firebase/EmailJS côté serveur
2. Configurer des variables d'environnement
3. Ajouter des restrictions de domaine dans Firebase Console

### 🛡️ Headers de Sécurité
Ajouter dans `netlify.toml` :
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

---

## 📊 Performance

### Optimisations Appliquées
- ✅ CSS et JS externalisés
- ✅ Lazy loading sur toutes les images
- ✅ Service Worker pour cache intelligent
- ✅ Compression des ressources
- ✅ Minification (à venir)

### Lighthouse Score (cible)
- 🟢 Performance : 90+
- 🟢 Accessibility : 95+
- 🟢 Best Practices : 90+
- 🟢 SEO : 95+
- 🟢 PWA : 100

---

## 🗺️ Roadmap

### Priorité Haute 🔴
- [ ] Sécuriser les clés API (Netlify Functions)
- [ ] Ajouter le numéro SIRET dans les mentions légales
- [ ] Ajouter Google Analytics 4 (avec consentement RGPD)

### Priorité Moyenne 🟠
- [ ] Minifier CSS/JS avec un build process (Vite/Webpack)
- [ ] Convertir les images Unsplash en WebP
- [ ] Ajouter des icônes PNG 192x192 et 512x512 pour la PWA
- [ ] Implémenter des données structurées Schema.org

### Priorité Basse 🟢
- [ ] Créer une section Blog pour conseils animaux
- [ ] Intégrer un système de réservation de créneaux
- [ ] Ajouter une galerie d'avis Google automatique
- [ ] Chat en direct (WhatsApp Business)

---

## 🙏 Crédits

- **Photos** : [Unsplash](https://unsplash.com) (licence libre)
- **Icônes** : [Font Awesome](https://fontawesome.com)
- **Polices** : [Google Fonts](https://fonts.google.com) - Fredoka & Nunito
- **Carte** : [Leaflet](https://leafletjs.com) + [OpenStreetMap](https://www.openstreetmap.org)
- **Hébergement** : [Netlify](https://netlify.com)
- **Base de données** : [Firebase](https://firebase.google.com)
- **Emails** : [EmailJS](https://emailjs.com)

---

## 📝 Licence

© 2025 À vos papattes by Nath. Tous droits réservés.

Le code source est fourni à titre d'exemple éducatif.
Toute utilisation commerciale nécessite l'autorisation de l'auteur.

---

## 📞 Support & Contact

Pour toute question technique ou suggestion :
- 📧 Email : info@avospapattes-by-nath.fr
- 📱 Téléphone : 06 82 91 16 72

---

**Fait avec ❤️ pour les animaux** 🐕 🐈

*Version 2.0 - Décembre 2025*
