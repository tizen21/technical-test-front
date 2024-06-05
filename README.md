# Projet de Listing de Films

## Introduction

Ce projet a été réalisé dans le cadre d’un test technique pour un poste de Développeur Front-End en alternance chez StadiumGO. L’objectif est de créer une page de listing de films en utilisant Next.js et TailwindCSS. Les données des films sont récupérées depuis une API fictive.

## Instructions pour Lancer le Projet

### Prérequis

    •	Node.js installé (version 14 ou plus)

### Étapes

1. Cloner le repository :

- git clone https://github.com/tizen21/technical-test-front.git
- cd technical-test-front

2. Installer les dépendances :

- npm install

3. Lancer l’application :

• Avec npm :

- npm run dev

4. Accéder à l’application :

Ouvrez votre navigateur et allez sur http://localhost:3000 pour voir l’application en action.

## Détails techniques

### API

Les données des films sont récupérées depuis l’API située dans:

- src/app/api/movies/movies.json.

### Structure du projet

    •	src/app/movies/page.tsx : Composant pour la recupération des données des films.
    •	src/components/MovieCard.tsx : Composant pour afficher les informations d’un film.
    • src/app/page.tsx Composant principal pour l'affichage de l'application.
    •	src/components/Header.tsx : Composant pour le Header.

### Récupération des Données

La récupération des données se fait à l’aide de la fonction fetch dans le composant page.tsx. Les données sont ensuite affichées à l’aide de composants React.

### Style

La page utilise TailwindCSS pour la stylisation. Les classes TailwindCSS sont utilisées pour assurer une mise en page propre et responsive selon les maquettes Figma fournies.

## Problèmes Rencontrés

    •	Problème : Difficulté à styliser certaines parties de la page pour qu’elles soient parfaitement responsives.
    •	Solution : Utilisation de TailwindCSS et ajustements manuels des classes utilitaires pour assurer la responsivité.

    •	Problème : Je me suis trompé dans le schéma de base que j'aurais du suivre.
    •	Solution : Préparer la structure avant de me lancer dans le code 😣

## Conclusion

Le projet fonctionne et ressemble à la maquette mais il n'est pas au niveau que je l'éspérais. J'ai essayé de rester sur un temps raisonnable et ne pas trop dépasser. C'était mon 1er test technique. J'aimerais beaucoup échanger avec vous et avoir des conseils qui me seraient précieux. N'hésitez pas à me contacter.

Anthony - rey.anthony1@gmail.com
