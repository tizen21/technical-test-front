# Exercice de Test Technique pour Développeur Front-End en Alternance
## Contexte
Vous avez rejoint une équipe de développement travaillant sur une application web Next.js utilisant TailwindCSS. 
Votre tâche est de compléter et améliorer une fonctionnalité existante en suivant les spécifications ci-dessous. 
Vous devez créer une page de listing de films avec des informations dynamiques récupérées depuis une API fictive.

## Objectif
Créer une page de listing de films en utilisant Next.js 14 (App Router) et TailwindCSS. 
Vous devez récupérer les données depuis une API et les afficher.

## Durée estimée
~ 3 heures

## Étapes à suivre

### Setup
1. Cloner le Repository
2. Installer les dépendances 
3. Lancer NextJS 
   * avec npm : `npm run dev` 
   * avec docker : `docker compose up -d`

### Récupérer les données Movies:
Une API est exposé par le fichier `src/app/api/movies/routes.ts`

### Créer la Page de Listing:
Créez un fichier `page.tsx` dans le dossier `src/app/movies`.
Utilisez la méthode fetch pour récupérer les données de l'utilisateur depuis l'API et mettre en page les éléments.

### Styliser avec TailwindCSS:
Utilisez les classes TailwindCSS pour créer la page de listing. 
Voici 2 liens figma a suivre : 
- Mobile : https://www.figma.com/proto/pCbevQ3QXBn1mGxHNqYPAj/Untitled?node-id=4-4407&t=ArI2wpZfVtqbF6JL-0&scaling=min-zoom&page-id=0:1
- Desktop : https://www.figma.com/proto/pCbevQ3QXBn1mGxHNqYPAj/Untitled?node-id=1-41&t=ArI2wpZfVtqbF6JL-0&scaling=min-zoom&page-id=0:1

### Bonus:

- Implémenter une popin affichant les détails du Film cliqué.

## Critères de Réussite
- La page de listing doit afficher correctement les informations.
- Le design doit être propre, responsive, et utiliser TailwindCSS efficacement.
- Le code doit être clair, bien structuré et suivre les bonnes pratiques de développement (Atomic Design Pattern)

## Livrables
- URL du repository GitHub avec votre solution.
- Un fichier README décrivant les étapes pour lancer l'application et toute autre information pertinente.

Bonne chance !