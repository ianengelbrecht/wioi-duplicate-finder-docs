---
title: S'inscrire/Se connecter
---

L'application utilise un **système de base de données locale** pour stocker les enregistrements de spécimens et les comptes d'utilisateurs. Toutes les données de connexion et les enregistrements saisis restent entièrement hors ligne sur votre ordinateur local.

## Initialisation de la base de données

Lors du lancement de l'application pour la première fois, elle configure automatiquement l'environnement de la base de données SQLite. Vous verrez un écran de chargement temporaire d'initialisation de la base de données.

![Écran de chargement d'initialisation de la base de données](/wioi-duplicate-finder-docs/loading-db.png)

Si la base de données est préparée avec succès :
- Si un utilisateur était déjà connecté sur l'appareil, l'application ouvre automatiquement le tableau de bord.
- Si aucun utilisateur n'est connecté, vous serez redirigé vers l'écran de connexion du compte.

---

## Comptes locaux

Puisque la base de données est stockée entièrement sur votre ordinateur, la création d'un compte ne vous enregistre pas sur un site Web distant. Au lieu de cela, elle crée un profil d'utilisateur local dans votre base de données hors ligne. Cela permet à plusieurs chercheurs utilisant la même machine de gérer des collections distinctes.

![Formulaire de connexion et d'inscription](/wioi-duplicate-finder-docs/auth-screen.png)

### Créer un compte (S'inscrire)
1. Sur l'écran de connexion, cliquez sur **Besoin d'un compte ? S'inscrire** au bas de la carte.
2. Entrez le **Nom d'utilisateur** et le **Mot de passe** de votre choix.
3. Cliquez sur **Créer le compte**.
4. Une fois enregistré, le système vous ramène à l'état de connexion pour vous connecter.

### Se connecter
1. Entrez votre **Nom d'utilisateur** local et votre **Mot de passe**.
2. Cliquez sur **Se connecter**.
3. En cas de succès, vous êtes connecté et redirigé vers le tableau de bord principal de gestion des sessions.

### Se déconnecter
Pour sécuriser vos données ou changer de compte d'utilisateur :
1. Cliquez sur le bouton **Se déconnecter** situé dans le coin supérieur droit de l'en-tête.
2. Vous serez déconnecté et ramené immédiatement à l'écran de connexion.

---

## Écran de récupération de la base de données

Dans les rares cas où la base de données SQLite locale ne s'ouvre pas ou est corrompue (par exemple, à cause d'un arrêt inattendu de l'ordinateur), l'application affiche une page de **Récupération de la base de données**.

Cette interface propose deux options :
- **Réessayer la connexion** : tente de réinitialiser et de réparer la connexion à la base de données.
- **Restaurer la sauvegarde** : vous permet de parcourir votre ordinateur local et de restaurer l'état de la base de données à partir d'un fichier de sauvegarde de base de données précédemment exporté (`.db`).
