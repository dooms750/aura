# Tableau Vivant : réalité augmentée sur un tableau

Une page web qui reconnaît **un tableau** avec la caméra du téléphone. Quand elle l'a reconnu, elle superpose une animation 3D calée sur la toile :

- la toile ondule légèrement, avec des reflets dorés ;
- un cadre lumineux pulse autour de l'œuvre ;
- des particules dorées s'échappent du tableau ;
- des formes 3D flottent devant l'œuvre.

## Mettre en ligne (5 minutes)

La caméra ne fonctionne qu'en **https**. Le plus simple est Netlify Drop :

1. Va sur https://app.netlify.com/drop
2. Glisse le dossier `tableau-vivant` dans la page.
3. Netlify te donne une adresse en `https://…netlify.app`. Ouvre-la sur ton téléphone.

GitHub Pages ou tout autre hébergeur en https fonctionne aussi.

## Utilisation

1. Sur le téléphone, prends le tableau en photo **bien de face**, recadrée sur la toile seule.
2. L'appli « apprend » l'œuvre, ce qui prend 10 à 40 secondes.
3. Touche **Lancer la caméra** et vise le tableau en entier.

Pour tester sans le vrai tableau, affiche la photo en grand sur l'écran de ton ordinateur et vise l'écran.

## Rendre l'œuvre permanente

Pour que les visiteurs n'aient pas à préparer le tableau eux-mêmes :

1. Après l'étape 2, touche **Télécharger targets.mind**.
2. Ajoute dans le dossier, à côté de `index.html` :
   - `targets.mind` ;
   - ta photo du tableau, renommée `tableau.jpg`, qui sert à faire onduler la toile.
3. Remets le dossier en ligne. L'appli affichera « Œuvre prête » et ira directement à la caméra.

## Ajouter ta propre animation 3D

Crée une animation dans Blender et exporte-la au format **glTF binaire** (`.glb`). Ensuite, nomme le fichier `animation.glb` et dépose-le dans le dossier.

L'appli le charge automatiquement, le met à l'échelle du tableau, le place juste devant et joue ses animations.

Garde le fichier léger, idéalement sous 5 Mo, pour que l'animation reste fluide sur les téléphones.

## Conseils

- **Tableaux faciles à reconnaître** : beaucoup de détails et de contrastes.
- **Tableaux difficiles** : les aplats et les surfaces uniformes, les reflets, une vitre.
- **Droits d'auteur** : une œuvre encore protégée demande l'accord des ayants droit.
