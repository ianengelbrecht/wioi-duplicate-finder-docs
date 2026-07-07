---
title: Paramètres de l'application
description: Configurez le code de collection, les formats d'exportation et les emplacements de sauvegarde de la base de données.
---

L'onglet des paramètres vous permet de voir les détails de votre base de données de référence actuelle et de configurer vos valeurs par défaut de travail locales, les formats d'exportation et vos préférences de sauvegarde de la base de données.

Pour accéder aux paramètres :
1. Connectez-vous à l'application.
2. Sur le tableau de bord, cliquez sur le bouton **Paramètres de l'application** dans le panneau de navigation de gauche.

![Panneau des paramètres de l'application](/wioi-duplicate-finder-docs/settings-tab.png)

---

## Jeux de données de référence

### Enregistrements de doublons

Le Duplicate Finder utilise un jeu de données de référence d'enregistrements de spécimens préparé à partir du GBIF, pour une région et des herbiers sources particuliers. Par exemple, si vous savez que votre collection possède de nombreux doublons à Kew, vous travailleriez avec des données GBIF de Kew pour votre pays ou région. 

Les jeux de données disponibles sont répertoriés sur la page [Installation](./installation). Si vous souhaitez obtenir un jeu de données pour votre région/pays, veuillez signaler un problème sur le dépôt GitHub de l'outil. La préparation d'un jeu de données demande beaucoup de travail car les données du GBIF ne sont pas parfaites (les collecteurs et les codes de collection doivent être standardisés, par exemple). Les scripts de préparation des jeux de données sont également disponibles sur le dépôt GitHub si vous souhaitez préparer un jeu de données vous-même. 

Une fois que vous avez un jeu de données prêt à être importé, vous pouvez cliquer sur le bouton Charger un nouveau jeu de données (Load New Dataset), et vous aurez la possibilité de sélectionner le fichier à importer. Notez que l'importation supprimera les enregistrements de référence existants de votre base de données et les remplacera par les nouvelles données. L'importation prendra quelques minutes, puis vous pourrez utiliser le nouveau jeu de données pour saisir vos spécimens. 

### Enregistrements taxonomiques du WCVP

Le Duplicate Finder utilise le World Checklist of Vascular Plants (WCVP) comme base taxonomique. Le WCVP est mis à jour deux fois par an et la dernière version est disponible en <a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">téléchargement à ce lien</a>. Si vous souhaitez mettre à jour le jeu de données WCVP dans votre application, téléchargez le dernier fichier à partir de ce lien (`wcvp.zip`), décompressez le contenu, puis, dans le Duplicate Finder, cliquez sur le bouton Importer/Mettre à jour le WCVP (Import/Update WCVP) et sélectionnez le fichier `wcvp_names.csv`. Veillez à mettre à jour correctement le numéro de version du WCVP, qui figure dans le fichier de métadonnées inclus avec votre téléchargement.


## Paramètres de configuration

### Code de collection de travail
- **Qu'est-ce que c'est** : L'acronyme standard internationalement reconnu de votre herbier d'accueil (c'est-à-dire l'herbier dans lequel vous saisissez les enregistrements, par exemple, `TAN` pour l'Herbier de Tsimbazaza, `NU` pour l'Herbier de l'Université du KwaZulu-Natal, `PRE` pour l'Herbier National de Pretoria).
- **Comment ça fonctionne** : Entrer un code ici l'enregistre comme code de collection par défaut. Chaque fois que vous saisissez ou sélectionnez un spécimen, cette valeur est enregistrée pour l'institution d'origine du spécimen.
- Vous n'avez besoin de saisir cette valeur qu'une seule fois, lorsque vous commencez à utiliser l'application.

### Format d'exportation
- **Qu'est-ce que c'est** : Le format du fichier de valeurs séparées par des virgules (CSV) généré lorsque vous exportez vos sessions.
- **Options** :
  - **Darwin Core (DwC)** : Associe les données aux en-têtes DwC standard comme `catalogNumber`, `recordedBy`, `decimalLatitude`, etc.
  - **BRAHMS** : Associe les données aux en-têtes BRAHMS7 standard comme `BARCODE`, `COLLECTOR`, `DAY`, `MONTH`, `YEAR`, etc. (idéal pour importer directement dans une base de données BRAHMS7).
- Si vous souhaitez exporter vers un autre format de données, tel que Microsoft Excel, veuillez visiter la [page GitHub]() du projet et y créer un nouveau ticket avec votre demande.

### Inclure la référence de grille (QDS)
- **Qu'est-ce que c'est** : Une case à cocher pour calculer le code Quarter Degree Square (QDS).
- **Comment ça fonctionne** : Si cette case est cochée, lorsque vous exportez vos enregistrements saisis, le système calcule le code QDS (cellule de grille d'un quart de degré) à partir des coordonnées GPS (`decimalLatitude` et `decimalLongitude`) et l'inclut dans le jeu de données exporté. Les QDS sont principalement utilisés dans les herbiers d'Afrique australe et orientale, mais si vous souhaitez utiliser un autre système de référence de grille, veuillez également créer un ticket sur GitHub.

---

## Sauvegardes de la base de données

Étant donné que tous les spécimens et sessions saisis sont stockés dans un fichier SQLite hors ligne sur votre disque dur local, des sauvegardes régulières sont essentielles pour protéger votre travail contre la perte de données ou une panne de disque dur. Les sauvegardes sont créées automatiquement à chaque fois que vous fermez l'application, et sont enregistrées pour le jour en cours, une par jour pour la dernière semaine, une par semaine pour le dernier mois et une par mois pour les six derniers mois. Les sauvegardes inutiles sont purgées automatiquement par l'application.

![Sauvegardes de la base de données](/wioi-duplicate-finder-docs/backups.png)

### Emplacement de la sauvegarde de la base de données
- **Champ** : Affiche le chemin d'accès au dossier où les sauvegardes sont enregistrées.
- **Choisir le dossier** : Ouvre une boîte de dialogue de l'explorateur de fichiers vous permettant de sélectionner un répertoire sur votre ordinateur (ou un lecteur externe / dossier cloud).

### Sauvegardes manuelles
- **Sauvegarder maintenant** : Cliquez sur ce bouton pour effectuer une sauvegarde instantanée de votre base de données. Un fichier `.db` horodaté contenant tous les utilisateurs, sessions et enregistrements saisis sera créé dans votre dossier de sauvegarde. Une notification de succès affichera le chemin de la sauvegarde enregistrée. Les sauvegardes manuelles ne sont pas purgées de l'historique des sauvegardes comme le sont les sauvegardes automatiques.

### Restaurer une sauvegarde
- **Restaurer la sauvegarde** : Cliquez sur ce bouton si vous devez restaurer votre application à un état antérieur.
- Vous serez invité à sélectionner un fichier `.db` de sauvegarde.
- **AVERTISSEMENT** : La restauration d'une sauvegarde écrasera votre base de données locale actuelle. Assurez-vous d'avoir sauvegardé toutes les nouvelles données avant de continuer.
- Une boîte de dialogue de confirmation apparaîtra pour éviter les écrasements accidentels.

### Gérer vos sauvegardes
C'est une bonne idée de faire des copies de vos fichiers de sauvegarde et de les conserver sur un disque dur séparé ou de les copier sur un autre ordinateur, au cas où l'ordinateur actuel tomberait en panne, serait volé ou serait victime d'une catastrophe quelconque. C'est également une bonne pratique de conserver une deuxième copie de vos sauvegardes hors site. Les sauvegardes de base de données ne sont qu'une copie du fichier de base de données, donc faire de telles copies est facile.
