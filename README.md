# Rapport de projet : Application Liste de Tâches React

## Défis que j'ai rencontrés

Durant le développement de cette application, j'ai fait face à plusieurs défis significatifs. Le plus complexe a été de gérer correctement l'état des tâches, particulièrement pour les marquer comme complétées ou archivées. 
J'ai également eu des difficultés avec la mise en place de la modularisation CSS, car c'était la première fois que j'utilisais cette approche. La mise en place des fonctionnalités de filtrage combinant recherche et affichage des archives a aussi représenté un défi technique important.

## Mes solutions

Pour surmonter ces obstacles, j'ai pris le temps d'organiser ma pensée et de structurer mon approche. J'ai décidé de centraliser toute la logique d'état dans le composant App.jsx, ce qui m'a permis de mieux gérer les modifications de données. 
Pour la gestion des styles, j'ai adopté une approche modulaire en utilisant des fichiers .module.css, ce qui m'a permis d'éviter les conflits de nommage et de mieux organiser mon code CSS. 
J'ai également créé des composants réutilisables comme BarreRecherche et ElementTache pour maintenir mon code propre et maintenable.

## Ce que j'ai appris

Ce projet m'a énormément appris sur React et le développement frontend en général. 
J'ai particulièrement approfondi ma compréhension du flux de données unidirectionnel dans React, ainsi que l'utilisation des hooks comme useState. J'ai aussi beaucoup appris sur l'importance de bien structurer son code et de créer des composants réutilisables. La gestion des modules CSS a été une révélation pour moi, me montrant une nouvelle façon d'organiser les styles de manière plus maintenable.

## Améliorations que je pourrais apporter

Si je devais continuer à développer cette application, j'aimerais ajouter plusieurs fonctionnalités pour la rendre encore plus utile. 
Je pense notamment à:

- L'ajout de dates d'échéance pour chaque tâche, ce qui permettrait une meilleure organisation temporelle
- Un système de catégories ou de tags pour mieux classer les tâches
- La persistance des données, peut-être en utilisant localStorage ou en créant un backend simple
- Un système de tri plus avancé (par date, priorité, etc.)

Sur le plan technique, je voudrais également:

- Ajouter des tests unitaires pour rendre l'application plus robuste
- Améliorer la gestion des erreurs
- Optimiser les performances avec React.memo et d'autres techniques d'optimisation
- Rendre l'interface plus responsive pour une meilleure expérience sur mobile

Ce projet m'a permis de mettre en pratique de nombreux concepts de React et de développer mes compétences en programmation frontend. 
Les défis que j'ai rencontrés m'ont poussé à approfondir ma compréhension des bonnes pratiques de développement et à créer une application plus robuste et maintenable.
![Capture d’écran, le 2025-02-23 à 17 53 51](https://github.com/user-attachments/assets/38cb081b-8909-4022-aa8b-226123673db4)

![Capture d’écran, le 2025-02-23 à 17 53 32](https://github.com/user-attachments/assets/0f50cc1e-a071-48ba-8211-8ccd8e794cce)
