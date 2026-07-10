---
title: Exporter les données
description:
  Apprenez à exporter les enregistrements saisis au format CSV et à faire correspondre les en-têtes
  aux formats Darwin Core ou BRAHMS.
---

Une fois que vous avez terminé de saisir les spécimens d'une session, vous pouvez exporter vos
données vers un fichier standard de valeurs séparées par des virgules (CSV). Ce fichier CSV est
structuré pour être importé directement dans votre système principal de gestion d'herbier, tel que
BRAHMS ou Excel.

---

## Comment exporter

1. Sélectionnez une session de saisie pour ouvrir l'espace de travail de saisie.
2. En haut à droite, cliquez sur le bouton vert **Exporter en CSV**.

![Bouton Exporter en CSV dans l'espace de travail](/wioi-duplicate-finder-docs/export-button.png)

3. Une boîte de dialogue de sauvegarde de fichier s'ouvre sur votre ordinateur.
4. Choisissez le répertoire dans lequel vous souhaitez enregistrer le fichier CSV.
5. Cliquez sur **Enregistrer**.

### Nom de fichier suggéré

L'application génère automatiquement un nom par défaut en utilisant le nom de la session active et
un horodatage local pour éviter d'écraser les exportations précédentes (par exemple,
`Malvaceae_Armoire_2_20260620_160000.csv`). Modifiez ce nom de fichier si nécessaire.

---

## Formats CSV & Mappage des champs

Les en-têtes de colonnes dans le fichier CSV exporté diffèrent selon le **Format d'exportation**
sélectionné dans vos [Paramètres de l'application](settings).

### 1. Format Darwin Core (DwC)

Le format Darwin Core associe les champs saisis aux en-têtes DwC standard. Voici le guide de mappage
:

| En-tête CSV Darwin Core            | Source du champ du formulaire       | Détails du mappage                                             |
| :--------------------------------- | :---------------------------------- | :------------------------------------------------------------- |
| `dwc:collectionCode`               | Herbier d'accueil                   | Pré-rempli à partir des paramètres.                            |
| `dwc:catalogNumber`                | Code-barres                         | Code-barres unique de la planche.                              |
| `duplicates`                       | Doublons                            | Liste séparée par des virgules.                                |
| `dwc:recordNumber`                 | Numéro                              | Numéro de collecteur textuel.                                  |
| `dwc:recordedBy`                   | Collecteur principal & additionnels | Liés par un point-virgule (par ex. `Principal; Sup 1; Sup 2`). |
| `dwc:verbatimEventDate`            | Date textuelle                      | Chaîne de date brute de l'étiquette.                           |
| `dwc:year`, `dwc:month`, `dwc:day` | Année, Mois, Jour                   | Parties numériques de la date.                                 |
| `dwc:country`                      | Pays                                | Nom de pays standardisé.                                       |
| `dwc:stateProvince`                | L'Admin 2 (état/prov)               | Région principale.                                             |
| `dwc:county`                       | L'Admin 3 (comté)                   | Région secondaire.                                             |
| `dwc:municipality`                 | L'Admin 4 (municipalité)            | Sous-région locale.                                            |
| `dwc:locality`                     | Localité                            | Description spécifique du site.                                |
| `dwc:locationRemarks`              | Notes sur la localité               | Notes ; ajoute `; cultivated` si coché.                        |
| `dwc:verbatimCoordinates`          | Coordonnées textuelles              | Chaîne de coordonnées GPS brute.                               |
| `dwc:decimalLatitude`              | Latitude décimale                   | Latitude décimale calculée.                                    |
| `dwc:decimalLongitude`             | Longitude décimale                  | Longitude décimale calculée.                                   |
| `dwc:verbatimElevation`            | Altitude textuelle                  | Texte d'altitude brut.                                         |
| `minElevation`, `maxElevation`     | Altitude textuelle                  | Limites calculées extraites de l'altitude.                     |
| `elevation`                        | Altitude textuelle                  | Valeur d'altitude standard en mètres.                          |
| `elevationUncertainty`             | Altitude textuelle                  | Marge d'incertitude extraite (si analysée).                    |
| `dwc:habitat`                      | Habitat                             | Texte écologique.                                              |
| `dwc:occurrenceRemarks`            | Remarques générales                 | Notes de terrain générales.                                    |
| `dwc:fieldNotes`                   | Description de la plante            | Description de la plante.                                      |
| `dwc:typeStatus`                   | Statut du type                      | Holotype, isotype, syntype, etc.                               |
| `dwc:identificationQualifier`      | Qualificateur                       | Qualificateur d'identification (cf., aff., nr.).               |
| `dwc:family`                       | Famille                             | Famille taxonomique résolue.                                   |
| `dwc:scientificName`               | Nom scientifique                    | Nom du taxon.                                                  |
| `dwc:identifiedBy`                 | Dét. par                            | Noms des spécialistes séparés par des points-virgules.         |
| `dwc:dateIdentified`               | Année/Mois/Jour d'identification    | Chaîne de date formatée (AAAA-MM-JJ).                          |
| `dwc:identificationRemarks`        | Dét. Remarques                      | Notes concernant l'identification.                             |
| `dwc:taxonID`                      | ID du taxon                         | Identifiant lié à partir de la liste WCVP.                     |
| `cultivated`                       | cultivé                             | Exporte `true` ou `false`.                                     |

---

### 2. Format BRAHMS

Le format BRAHMS divise et associe les valeurs pour correspondre aux tables BRAHMS standard (telles
que RND, LATDEC, gazetteer, alt et les composants taxonomiques analysés).

| En-tête CSV BRAHMS                                   | Source du champ du formulaire       | Détails du mappage                                                                                           |
| :--------------------------------------------------- | :---------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| `tag`                                                | _Aucun_                             | Laissé vide.                                                                                                 |
| `del`                                                | _Aucun_                             | Laissé vide.                                                                                                 |
| `barcode`                                            | Code-barres                         | Code-barres unique de la planche.                                                                            |
| `dups`                                               | Herbier d'accueil & Doublons        | Combinés (par ex. `TAN, P, K`).                                                                              |
| `collector`                                          | Collecteur principal                | Premier nom de collecteur uniquement.                                                                        |
| `addcol`                                             | Collecteurs additionnels            | Noms additionnels séparés par des points-virgules.                                                           |
| `prefix`, `number`, `suffix`                         | Numéro                              | Divisé à partir du numéro de collecteur (par ex., `Raza 124a` -> préfixe `Raza`, numéro `124`, suffixe `a`). |
| `dd`, `mm`, `yy`                                     | Jour, Mois, Année                   | Date de collecte numérique.                                                                                  |
| `family`                                             | Famille                             | Famille taxonomique résolue.                                                                                 |
| `type category`                                      | Statut du type                      | Désignation du type.                                                                                         |
| `genus`, `sp1`, `author1`, `rank1`, `sp2`, `author2` | Nom scientifique                    | Composants analysés à partir du nom scientifique.                                                            |
| `detby`                                              | Dét. par                            | Premier nom dans identifiedBy.                                                                               |
| `detdd`, `detmm`, `detyy`                            | Jour/Mois/Année d'identification    | Parties de la date d'identification numérique.                                                               |
| `detstatus`                                          | Qualificateur                       | Qualificateur d'identification (cf., aff., nr.).                                                             |
| `country`                                            | Pays                                | Nom du pays.                                                                                                 |
| `majorarea`                                          | L'Admin 2 (état/prov)               | Région principale.                                                                                           |
| `minorarea`                                          | L'Admin 3 (comté)                   | Région secondaire.                                                                                           |
| `gazetteer`                                          | L'Admin 4 & Localité                | Combine la municipalité et la localité.                                                                      |
| `lat`, `long`                                        | Latitude / Longitude décimale       | Latitude et longitude numériques absolues.                                                                   |
| `ns`, `ew`                                           | Latitude / Longitude décimale       | Indicateur de direction du signe (`N`, `S`, `E`, `W`).                                                       |
| `llunit`                                             | _Aucun_                             | Défini sur `DD` (Degrés Décimaux).                                                                           |
| `qds`                                                | _Calculé_                           | **Inclus uniquement si coché dans les paramètres.** Calcule le code de grille Quarter Degree Square (QDS).   |
| `alt`                                                | Altitude textuelle                  | Valeur d'altitude calculée en mètres.                                                                        |
| `altunit`                                            | _Aucun_                             | Laissé vide.                                                                                                 |
| `locality notes`                                     | Notes sur la localité & indicateurs | Combine les notes, l'indicateur cultivé, les coordonnées textuelles et les détails d'altitude textuelle.     |
| `habitat/site description`                           | Habitat                             | Texte écologique.                                                                                            |
| `plant description`                                  | Description de la plante            | Texte de description de la plante.                                                                           |
| `cultivated`                                         | cultivé                             | Exporte `true` ou `false`.                                                                                   |
| `general notes`                                      | Remarques                           | Combine les remarques d'occurrence (Remarques générales) et les remarques d'identification.                  |

### Autres formats

Si vous souhaitez exporter vos données vers un format différent, veuillez créer un
[ticket sur GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues) pour nous le
faire savoir et nous pourrons travailler ensemble à répondre à votre besoin.

## Ouverture des données exportées dans Excel

Si vous souhaitez ouvrir un fichier CSV exporté dans Excel pour affichage ou modification, vous
devez passer par le processus d'importation de données au lieu de double-cliquer simplement sur le
fichier. En effet, le jeu de données contiendra probablement des **caractères spéciaux** tels que
des symboles de degré et des lettres accentuées dans les noms de collecteurs. Si un fichier CSV est
ouvert directement en double-cliquant dessus, ces caractères seront altérés car Excel utilise un
système d'encodage de caractères particulier par défaut.

Pour vous assurer que tous les caractères sont importés correctement :

- Ouvrez Microsoft Excel.
- Sélectionnez l'onglet Données.
  ![Onglet Données d'Excel](/wioi-duplicate-finder-docs/excel-import-data-tab.png)
- Cliquez sur À partir de texte/CSV.
- Recherchez et sélectionnez le fichier CSV exporté.
- Dans la fenêtre d'aperçu de l'importation, définissez l'Origine du fichier (ou l'encodage) sur
  65001 : Unicode (UTF-8) si ce n'est pas déjà fait.
  ![Sélectionner UTF8](/wioi-duplicate-finder-docs/excel-import-origin.png)
- Vérifiez que les caractères spéciaux s'affichent correctement dans l'aperçu.
- Cliquez sur Charger.

Cela garantit que tout le texte est importé en utilisant le bon encodage UTF-8 et évite la
corruption des caractères. Votre jeu de données va maintenant apparaître dans Excel, généralement
avec un format coloré. Vous pouvez supprimer ce format en cliquant sur le menu déroulant Style de
tableau en haut à droite et en sélectionnant le tableau sans style. Il est également recommandé de
figer la première ligne (les en-têtes de colonnes) sous l'onglet Affichage lorsque vous travaillez
avec les données afin de pouvoir toujours voir les en-têtes de champs.

![Formatage de tableau](/wioi-duplicate-finder-docs/excel-import-table.png)
