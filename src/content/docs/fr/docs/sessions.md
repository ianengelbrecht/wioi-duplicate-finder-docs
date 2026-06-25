---
title: Sessions de saisie
description: Apprenez à organiser et à gérer vos groupes de saisie de spécimens.
---

Une **session de saisie** représente un lot distinct d'enregistrements de spécimens. Par exemple, vous pouvez créer une session pour un tiroir, une armoire ou une famille taxonomique spécifique, ou encore pour une plage de dates de saisie (par exemple, *Armoire Malvaceae 2* ou *15-20 juin*).

L'organisation de votre travail en sessions facilite la révision, l'exportation et la conservation des données.

Pour accéder à vos sessions :
1. Ouvrez l'application et connectez-vous.
2. Sélectionnez l'onglet **Sessions de saisie** dans la navigation de gauche du tableau de bord.

![Liste des sessions de saisie](/wioi-duplicate-finder-docs/sessions-tab.png)

---

## Gérer les sessions

### Créer une session de saisie
1. Dans le champ de saisie de texte sous **Sessions de saisie**, tapez un nom descriptif pour votre session (par exemple, `Armoire Malvaceae 2`).
2. Cliquez sur **Créer la session** (ou appuyez sur Entrée).
3. La session est immédiatement créée et l'application ouvre l'espace de travail de saisie à double volet correspondant.

### Basculer entre les sessions
- Sur le tableau de bord, cliquez sur n'importe quelle carte de session dans la liste des sessions.
- Cela ouvrira l'espace de travail de saisie pour cette session, affichant tous les enregistrements précédemment saisis dans le tableau du bas.
- Pour revenir à la liste des sessions, cliquez sur le bouton fléché en haut à gauche de l'écran de saisie de données.

### Renommer une session
1. Survolez le nom d'une session dans la liste. Le texte apparaîtra souligné, indiquant qu'il est modifiable.
2. Cliquez sur le nom de la session. Il se transformera en un champ de saisie de texte actif.
3. Saisissez le nouveau nom.
4. Appuyez sur **Entrée** pour enregistrer les modifications ou sur **Échap** pour annuler le renommage.

### Supprimer une session
1. Cliquez sur le bouton rouge **Supprimer** à côté de la session dans la liste du tableau de bord.
2. Une boîte de dialogue de confirmation apparaîtra. Assurez-vous bien que vous souhaitez supprimer la session avant de continuer, et idéalement, vous ne devriez supprimer les sessions qu'après l'exportation des données.

![Boîte de dialogue de confirmation de suppression de session](/wioi-duplicate-finder-docs/delete-session-modal.png)

> [!CAUTION]
> La suppression d'une session supprime définitivement tous les enregistrements de spécimens saisis dans celle-ci. Cette action est irréversible. Assurez-vous toujours d'avoir exporté vos données avant de supprimer une session.

---

## Statut et statistiques de la session

Pour chaque session dans la liste du tableau de bord, l'application affiche des métadonnées cruciales :

- **Nombre de spécimens** : Un badge gris indiquant le nombre total d'enregistrements saisis (par exemple, `24 spécimens`).
- **Dernier enregistrement** : Affiche la date et l'heure du spécimen le plus récemment enregistré ou modifié dans cette session. Si aucun spécimen n'a été enregistré, il affiche `Aucun enregistrement saisi`.
- **Dernière exportation** : Affiche la date et l'heure auxquelles la session a été exportée pour la dernière fois dans un fichier CSV.
- **Indicateur d'avertissement d'exportation** :
  - Une bordure ou un badge d'avertissement orange (`Jamais exporté` ou date mise en évidence) s'affiche si la session contient des modifications non exportées.
  - Cet avertissement s'affiche si la session n'a jamais été exportée, OU si l'horodatage du dernier enregistrement est *plus récent* que l'horodatage de la dernière exportation (ce qui signifie que des enregistrements ont été ajoutés ou modifiés depuis la dernière exportation).
  - Ces informations supplémentaires vous aident à gérer vos sessions et à vous assurer qu'aucune donnée n'est perdue.
