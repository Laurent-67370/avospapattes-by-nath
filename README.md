# 🐾 À vos papattes by Nath - Site Vitrine de Pet Sitting

Bienvenue sur le code source du site **À vos papattes by Nath**.
Ce projet est une landing page moderne, chaleureuse et responsive, conçue pour présenter une activité de garde d'animaux (Pet Sitting) et de promenade.

🔗 **Site en ligne :** [https://petsitter-avospapattes-by-nath.netlify.app/](https://petsitter-avospapattes-by-nath.netlify.app/)

---

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Design Responsive** : Adapté mobiles, tablettes et ordinateurs (Mobile First)
- **Palette de couleurs** : Vert d'eau, Terracotta, Jaune (douce et rassurante)
- **🌙 Mode sombre** : Basculement clair/sombre avec sauvegarde de la préférence
- **Illustrations SVG** : Chats et chiens animés intégrés au design

### 🎬 Animations
- **Galerie infinie** : Bandeau défilant d'illustrations d'animaux
- **Effets visuels** : Survol des cartes, boutons animés, décorations flottantes
- **Menu Mobile** : Navigation fluide type "burger"

### 📬 Système de Contact
- **Formulaire de réservation** connecté à une base de données
- **Firebase Firestore** : Stockage sécurisé des demandes
- **EmailJS** : Notifications email automatiques à chaque nouvelle demande

### 📜 Conformité
- **Mentions légales** : Page dédiée conforme RGPD
- **Politique de cookies** : Transparente et minimaliste

---

## 🛠 Technologies Utilisées

Le projet est construit en **Vanilla JS** (sans framework lourd) pour garantir légèreté et performance.

| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure sémantique |
| **CSS3** | Variables CSS, Flexbox, Grid, Animations, Mode sombre |
| **JavaScript ES6** | Gestion du DOM, Modules, LocalStorage |
| **Firebase** | Base de données Firestore |
| **EmailJS** | Envoi d'emails via API |
| **FontAwesome** | Icônes |
| **Google Fonts** | Polices Fredoka & Nunito |
| **Netlify** | Hébergement |

---

## 📁 Structure du projet

```
📁 avospapattes-by-nath/
├── 📄 index.html            # Page principale
├── 📄 mentions-legales.html # Mentions légales & RGPD
└── 📄 README.md             # Documentation
```

---

## 🚀 Installation Locale

⚠️ **Note importante :** Le projet utilisant des modules ES6 (`<script type="module">`), il nécessite un serveur local.

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

---

## ⚙️ Configuration

### Firebase
Le projet utilise Firebase Firestore. La configuration se trouve dans `index.html` :
```javascript
const firebaseConfig = {
    apiKey: "...",
    authDomain: "patpatouche-f728f.firebaseapp.com",
    projectId: "patpatouche-f728f",
    // ...
};
```

### EmailJS
Configuration EmailJS pour les notifications :
```javascript
const EMAILJS_PUBLIC_KEY = "...";
const EMAILJS_SERVICE_ID = "service_...";
const EMAILJS_TEMPLATE_ID = "template_...";
```

---

## 📞 Informations de contact

| Info | Valeur |
|------|--------|
| **Responsable** | Nathalie |
| **Email** | info@avospapattes-by-nath.fr |
| **Téléphone** | 06 82 91 16 72 |
| **Adresse** | 7 rue Pierre de Coubertin, Oberhausbergen (67205) |
| **Zone de service** | Rayon de 5 km |
| **Disponibilité** | 7j/7 - 08h à 20h |

---

## 🌟 Fonctionnalités du site

### Services proposés
- 🏠 Garde à domicile
- 🚶 Promenades (30, 45 ou 60 min)
- 🐱 Visites pour chats
- 💊 Soins & administration de médicaments

### Sections du site
1. **Hero** : Présentation principale avec CTA
2. **Services** : 4 cartes détaillant les prestations
3. **Galerie animaux** : Bandeau défilant illustré
4. **À propos** : Présentation de Nathalie
5. **Tarifs** : 3 formules avec prix
6. **Témoignages** : Avis clients
7. **Contact** : Formulaire + coordonnées
8. **Footer** : Liens rapides & horaires

---

## 🎨 Personnalisation

### Couleurs (variables CSS)
```css
:root {
    --primary: #2A9D8F;       /* Vert d'eau */
    --primary-dark: #21867a;
    --secondary: #E9C46A;     /* Jaune doux */
    --accent: #E76F51;        /* Terracotta */
    --bg-light: #F4F9F9;
    --text-dark: #264653;
}
```

### Mode sombre
Le thème sombre est automatiquement géré via l'attribut `data-theme="dark"` sur `<html>`. La préférence est sauvegardée dans le LocalStorage.

---

## 📝 Licence

© 2025 À vos papattes by Nath. Tous droits réservés.

---

## 🙏 Crédits

- **Photos** : [Unsplash](https://unsplash.com) (licence libre)
- **Icônes** : [Font Awesome](https://fontawesome.com)
- **Polices** : [Google Fonts](https://fonts.google.com) (Fredoka, Nunito)
- **Hébergement** : [Netlify](https://netlify.com)
- **Base de données** : [Firebase](https://firebase.google.com)
- **Emails** : [EmailJS](https://emailjs.com)

---

Fait avec ❤️ pour les animaux 🐕🐈
