# Exercice de Test Technique pour Développeur Front-End en Alternance
## Contexte
Vous avez rejoint une équipe de développement travaillant sur une application web Next.js utilisant TailwindCSS. 
Votre tâche est de compléter et améliorer une fonctionnalité existante en suivant les spécifications ci-dessous. 
Vous devez créer une page de profil utilisateur avec des informations dynamiques récupérées depuis une API fictive.

## Objectif
Créer une page de profil utilisateur en utilisant Next.js 14 et TailwindCSS. 
Vous devez récupérer les données utilisateur depuis une API et les afficher.

## Durée estimée
3 heures

## Étapes à suivre

### Setup
1. Cloner le Repository
2. Installer les dépendances 
3. Lancer NextJS 
   * avec npm : `npm run dev` 
   * avec docker : `docker compose up -d`

### Récupérer les Données Utilisateur:
Créez un fichier `route.js` dans le dossier `src/app/api/user` avec le contenu suivant pour simuler une API :

```javascript
export async function GET(request) {
    return new Response(JSON.stringify({
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Développeur passionné par les technologies web modernes.",
        avatar: "https://via.placeholder.com/150",
        location: "Paris, France"
    }), {
        status: 200,
        headers: {
        'Content-Type': 'application/json'
        }
    });
}
```
### Créer la Page de Profil:
Créez un fichier `profile.js` dans le dossier app. 
Utilisez la méthode fetch pour récupérer les données de l'utilisateur depuis l'API et les passer à la page.

```javascript
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const fetchUser = async () => {
        const res = await fetch('/api/user');
        const data = await res.json();
        setUser(data);
    };
        fetchUser();
    }, []);
    
    if (!user) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex items-center p-6">
                    <Image src={user.avatar} alt="User Avatar" width={150} height={150} className="rounded-full"/>
                    <div className="ml-6">
                        <h2 className="text-2xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.location}</p>
                        <p className="text-gray-800 mt-4">{user.bio}</p>
                        <p className="text-blue-600 mt-2">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
```

### Styliser avec TailwindCSS:
Utilisez les classes TailwindCSS pour améliorer l'apparence de la page de profil. 
Assurez-vous que la page est responsive et agréable visuellement.

### Bonus:

- Ajouter une section "Recent Posts" sous le profil utilisateur en créant une structure de données fictive et en affichant quelques articles récents.
- Implémenter un thème sombre en utilisant TailwindCSS.

## Critères de Réussite
- La page de profil doit afficher correctement les informations utilisateur (nom, email, bio, avatar, location).
- Le design doit être propre, responsive, et utiliser TailwindCSS efficacement.
- Le code doit être clair, bien structuré et suivre les bonnes pratiques de développement.

## Livrables
- URL du repository GitHub avec votre solution.
- Un fichier README décrivant les étapes pour lancer l'application et toute autre information pertinente.

Bonne chance !