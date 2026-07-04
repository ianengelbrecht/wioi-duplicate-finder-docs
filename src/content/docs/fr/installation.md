---
title: Installation
description: Instructions de téléchargement et d'installation
---

Pour commencer à utiliser la recherche de doublons (Duplicate Finder), vous devez télécharger trois éléments : l'installateur de l'application, une copie de la taxonomie du World Checklist of Vascular Plants (WCVP) et un jeu de données de référence des spécimens pour votre région. Vous trouverez les liens de téléchargement de chacun de ces éléments ci-dessous. 

#### Étape 1 : Télécharger l'installateur de l'application

[Installateur de l'application](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.3/duplicate-finder_0.6.3_x64-setup.exe)

Nous avons inclus des instructions étape par étape ci-dessous sur la façon d'exécuter cet installateur une fois votre téléchargement terminé.

#### Étape 2 : Télécharger les dernières données du WCVP

Les dernières données du WCVP sont <a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">disponibles ici</a>. Cliquez sur le lien `wcvp.zip` pour le télécharger, puis décompressez l'archive sur votre ordinateur. Le WCVP est la base taxonomique officielle derrière le site internet <a href="https://powo.science.kew.org/" target="_blank">Plants of the World Online (POWO)</a>.  

#### Étape 3 : Sélectionner et télécharger un jeu de données de référence (fichier CSV) pour votre région

TODO: update these links
Sélectionnez et téléchargez le jeu de données de référence pour votre région dans la liste ci-dessous. (Vous pouvez télécharger plusieurs régions si votre collection le nécessite). Ces jeux de données sont zippés, vous devrez donc également les décompresser après le téléchargement. 
- [Îles de l'océan Indien occidental](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.0/wioi-reference-db-wioi-v0.6.0.zip)
- Afrique australe (bientôt disponible...)

---

### Installer l'application

Une fois les fichiers téléchargés, double-cliquez sur l'installateur de l'application (`.exe`) pour lancer l'installation.

Comme l'application n'est pas signée avec un certificat commercial, Windows SmartScreen affichera un écran d'avertissement bleu indiquant **Windows a protégé votre ordinateur**. Ne vous inquiétez pas ! Cliquez sur **Informations complémentaires** (More info), puis sur **Exécuter quand même** (Run anyway) pour continuer.

![Écran bleu d'installation](/wioi-duplicate-finder-docs/blue-screen.png)
<span style="font-size: 80%;">Cliquez sur Informations complémentaires (More info), puis sur Exécuter quand même (Run anyway).</span>

L'installateur s'exécutera et vous pourrez simplement accepter les options par défaut pour terminer l'installation.

![Installateur](/wioi-duplicate-finder-docs/installer.png)
<span style="font-size: 80%;">Cliquez sur Suivant (Next) tout au long de l'installateur pour sélectionner les options par défaut.</span>

La première fois que vous lancerez l'application, elle vous dirigera automatiquement vers l'écran des paramètres. Vous devrez importer le fichier WCVP (`wcvp_names.csv`) et le jeu de données de référence de votre région (`occurrence_final.csv`) avant de pouvoir rechercher des doublons ou saisir des fiches. Si vous avez besoin d'aide pour cette étape, consultez la [page des paramètres](./docs/settings).

### Mises à jour de l'application

Une fois installée, l'application vérifie automatiquement les mises à jour à chaque démarrage (tant que vous disposez d'une connexion Internet active). Si une nouvelle mise à jour est disponible, un bouton de notification s'affichera dans l'en-tête à côté du sélecteur de langue.

En cliquant sur ce bouton, la mise à jour sera téléchargée et installée en arrière-plan, et l'application redémarrera automatiquement une fois l'installation terminée.
