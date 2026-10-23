# Aura sur iPhone

Aura est une page web installable (PWA). Elle doit être **hébergée en HTTPS** pour que la caméra fonctionne sur iPhone :
un fichier ouvert directement depuis le téléphone ne peut pas accéder à la caméra.

## 1. Mettre le dossier en ligne (5 minutes, gratuit)

Choisis une des trois options. Dans tous les cas, envoie **tout le contenu de ce dossier** (`index.html`, `sw.js`,
`manifest.webmanifest`, dossier `icons`).

- **Netlify Drop** : va sur <https://app.netlify.com/drop>, glisse le dossier `aura-app` dans la page. Tu obtiens une adresse `https://…netlify.app`.
  Crée un compte gratuit pour que le site reste en ligne.
- **GitHub Pages** : dépôt public contenant ces fichiers à la racine, puis *Settings › Pages › Deploy from a branch › main / (root)*. L'adresse est `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/`.
- **Cloudflare Pages / Vercel** : « Upload » du dossier, même principe.

## 2. Sur l'iPhone

1. Ouvre l'adresse dans **Safari** (iOS 16.4 ou plus récent conseillé).
2. Touche **Partager** puis **Sur l'écran d'accueil**. Ouvre ensuite Aura depuis son icône : l'app passe en plein écran, sans barre Safari.
3. Touche **Activer la caméra** et autorise l'accès.
4. Le premier lancement télécharge environ 20 Mo (modèles de suivi). Ils sont ensuite gardés en cache, l'app démarre vite et fonctionne même sans réseau.

## Conseils

- Tiens ou pose l'iPhone à **40–60 cm**, visage bien éclairé de face, puis reste neutre **10 secondes** pour le calibrage de l'aura.
- Pour que le buste suive aussi tes épaules, recule assez pour les voir dans l'aperçu caméra.
- **Son** : touche l'écran une fois pour le lancer. Le commutateur silencieux de l'iPhone est ignoré par l'app.
- Si l'image saccade, l'app baisse toute seule la résolution. Tu peux aussi réduire la luminosité dans **Réglages** (icône à droite en bas).
- L'aura (stress, plénitude, concentration) est une estimation visuelle, non médicale. Rien ne quitte le téléphone.

Buste : scan « Lee Perry-Smith » par Infinite-Realities, licence CC BY 3.0.
