---
title: Sélection & Modification des données de spécimens
description: Apprenez à charger des enregistrements, à capturer de nouveaux spécimens, à utiliser des accélérateurs de saisie rapide et à réviser les champs du formulaire.
---

Le volet droit de l'espace de travail affiche le **Formulaire de saisie de spécimen**. Ce formulaire vous permet d'enregistrer les détails d'un nouveau spécimen ou de modifier les enregistrements sauvegardés dans la session de saisie active.

![Panneaux du formulaire de saisie principal](/wioi-duplicate-finder-docs/capture-form.png)

---

## Flux de travail du formulaire

### Charger un enregistrement de spécimen existant
- **À partir des données de référence (doublons)** : Sélectionnez n'importe quelle ligne dans le tableau des **Résultats de recherche** à gauche après avoir effectué une recherche. Tous les champs géographiques, taxonomiques et d'événements sont immédiatement copiés dans le formulaire de saisie/modification de données.

### Vérification et modification
- Une fois que vous avez sélectionné un enregistrement pour travailler, vérifiez tous les champs et comparez-les au spécimen physique devant vous pour vous assurer que toutes les données sont correctes.
- Vous pourriez disposer de données supplémentaires ou plus précises sur le spécimen physique devant vous par rapport à ce qui figure dans l'enregistrement existant, assurez-vous donc de les saisir également.
- Consultez la section *Référence champ par champ* ci-dessous pour plus de détails sur les informations à saisir dans chaque champ.

### Enregistrer les enregistrements
- Pour enregistrer, cliquez sur **Enregistrer le spécimen** au bas du formulaire ou utilisez le raccourci clavier **Ctrl+S** à tout moment.
- L'enregistrement est validé et sauvegardé dans la base de données locale, et il est placé dans le tableau des spécimens enregistrés au bas de l'écran (vous devrez faire défiler l'écran vers le bas pour les voir). Le formulaire se réinitialise automatiquement, plaçant votre curseur dans le champ du code-barres pour le spécimen suivant.

### Modifier les enregistrements sauvegardés
- Cliquez sur n'importe quelle ligne du tableau **Spécimens saisis** au bas de l'espace de travail. Cela charge l'enregistrement sauvegardé dans le formulaire de saisie pour modification, en changeant le badge d'en-tête du formulaire en **SAISIE SAUVEGARDÉE** afin que vous sachiez que vous travaillez sur un enregistrement existant.
- De manière importante, cette fonctionnalité vous permet de basculer entre un enregistrement que vous avez saisi et d'autres enregistrements en double à partir des résultats de recherche pour le même spécimen. Vous pouvez ainsi copier/coller des données d'autres spécimens dans l'enregistrement que vous avez saisi, en utilisant les données de tous les doublons pour obtenir l'enregistrement le plus complet possible pour votre spécimen.
- Vous pouvez également utiliser le bouton **Afficher le précédent** dans le même but de basculer rapidement entre les enregistrements.

### Réinitialiser le formulaire
- Si nécessaire, cliquez sur **Réinitialiser le formulaire** en bas à gauche pour effacer tous les champs et ramener le formulaire à l'état de **NOUVEAU FORMULAIRE** (badge vert).

---

## Accélérateurs de saisie rapide de données

Le formulaire est optimisé pour une saisie rapide des données, réduisant le passage du clavier à la souris et offrant des assistants pour nettoyer les étiquettes textuelles brutes.

### 1. Assistant de casse des titres (Boutons `Aa` et Annuler)
Plusieurs champs de texte et zones de texte (tels que la *Description de la plante*, la *Localité*, les *Notes sur la localité*, l'*Habitat* et les champs géographiques) disposent d'outils de formatage intégrés :
- **Casse appropriée (`Aa`)** : Cliquez sur cette icône pour automatiquement convertir tous les mots en majuscules en casse de titre (capitalisation des noms, des noms propres principaux et ajustement de la capitalisation standard des descriptions botaniques).
- **Annuler la casse** : Si le formatage se comporte de manière inattendue, une icône de flèche Annuler apparaît à la place du bouton `Aa`. Cliquez dessus pour restaurer votre texte brut saisi.

### 2. Copier et coller des champs
Les champs **Localité** et **Notes sur la localité** contiennent des boutons personnalisés pour copier et coller :
- **Copier** : Copie l'intégralité du contenu du champ (ou le texte sélectionné) dans le presse-papiers de votre ordinateur.
- **Coller** : Colle le contenu de votre presse-papiers directement à la position actuelle du curseur dans le champ, vous évitant ainsi d'avoir à sélectionner tout le texte.

### 3. Analyseur automatique de date textuelle
- Lorsque vous saisissez ou collez une date dans le champ **Date textuelle** (par exemple, `20 mai 1984` ou `May 20, '84`), l'application l'analyse automatiquement et répartit les valeurs dans les champs **Année**, **Mois** et **Jour**.
- **Bouton de langue** : Le champ de date textuelle dispose également d'un bouton de langue qui définit la façon dont la valeur de la date est analysée (les formats de date varient selon les langues). Basculer ce bouton recalculera l'**Année**, le **Mois** et le **Jour** en conséquence.

![Bouton de langue de date textuelle EN/FR](/wioi-duplicate-finder-docs/date-language-toggle.png)

### 4. Coordonnées textuelles
- C'est toujours une bonne pratique d'enregistrer les coordonnées sur les étiquettes de spécimens exactement telles qu'elles sont écrites, sans les convertir dans un autre format.
- Le champ **Coordonnées textuelles** vous permet de le faire et analysera et convertira ces coordonnées en degrés décimaux pour vous en arrière-plan.
- Les coordonnées peuvent être saisies dans n'importe quel format, comme DMS `20° 30' 15" S, 47° 25' 10" E` ou Degrés Décimaux `20.5042S, 47.4194E`.
- The field has a degree symbol (°) button you can click to add a degree symbol at the current cursor position in the field. 
- Lorsque vous quittez le champ, il vérifie le format des coordonnées et vous affiche les valeurs de **Latitude décimale** et de **Longitude décimale** si les coordonnées sont valides.
- Si les coordonnées sont malformées, un badge rouge **(Invalide)** s'affiche. Vous pouvez toujours enregistrer les coordonnées telles qu'elles sont écrites, mais vous devez vérifier à deux reprises que le format est correct.
- La règle de base pour le format des coordonnées est que la latitude et la longitude doivent avoir des formats correspondants. Vous ne pouvez pas avoir une latitude décimale et une longitude DMS, par exemple. Les exemples courants de problèmes incluent des indicateurs de degré, de minute ou de seconde manquants dans l'une ou l'autre valeur.

---

## Autocomplétions basées sur des références & Valeurs personnalisées

Plusieurs champs du formulaire utilisent la base de données de référence locale pour suggérer des valeurs pendant la saisie.

### Recherche rapide de noms scientifiques
- Le champ **Nom scientifique** s'auto-complète en utilisant la liste mondiale des plantes vasculaires de Kew (WCVP v12).
- Vous pouvez utiliser la recherche partielle (par exemple, taper `ab man` pour suggérer `Abelmoschus manihot`).
- Ne vous inquiétez pas de mettre à jour les noms obsolètes ou les synonymes ; saisissez l’identification la plus récente indiquée sur le spécimen.
- Il arrive que le nom figurant sur le spécimen ne corresponde à aucun nom dans WCVP, par exemple les noms « ined. ». Vous pouvez simplement saisir le nom tel qu’il apparaît sur le spécimen ; un avertissement discret indiquera qu’il ne s’agit pas d’un nom WCVP.


### Ajout de nouvelles valeurs partout
- **Ajout de nouveaux collecteurs (agents)** :
  Lorsque vous saisissez un nom de collecteur principal dans le champ d'auto-complétion et que vous changez de champ, l'application vérifie le registre de la base de données. Si le collecteur n'existe pas, une boîte de dialogue vous demande : *"Êtes-vous sûr de vouloir enregistrer ce nouveau nom ?"*. La confirmation l'ajoute, rendant son nom disponible pour les futures auto-complétions.

  ![Invite d'enregistrement de nouveau nom](/wioi-duplicate-finder-docs/new-name-prompt.png)

- **Saisie de taxons personnalisés** :
  Si un spécimen représente une espèce introuvable dans la base de données de référence WCVP (comme une nouvelle espèce, un cultivar ou un nom de manuscrit), vous n'êtes **pas bloqué**. Vous pouvez simplement saisir le nouveau nom et enregistrer l'enregistrement. En arrière-plan, la base de données stocke le taxonID WCVP pour les noms existants (et l'exporte si nécessaire). Les nouveaux noms auront le `taxonID` vide.

---

## Référence champ par champ

Voici un guide détaillé des 35 champs du formulaire de saisie. Les noms des champs sont les noms de champs internes Darwin Core que l'application utilise, et ils peuvent être différents dans votre format d'exportation de données pour correspondre aux noms de champs de votre propre base de données (c'est l'objectif d'une norme de données comme Darwin Core).

| Nom du champ | Libellé dans le formulaire | Type | Description / Règles d'auto-complétion |
| :--- | :--- | :--- | :--- |
| **collectionCode** | Herbier d'accueil | Lecture seule | Pré-rempli à partir des [Paramètres de l'application](settings) actifs. Représente l'institution d'origine. Est lié aux doublons pour les exportations BRAHMS7. |
| **catalogNumber** | Code-barres | Texte | Identifiant de code-barres unique pour la planche de spécimen (par ex., `TAN001234`). |
| **duplicates** | Doublons | Auto-complétion | Liste d'herbiers contenant des doublons séparés par des virgules (par ex., `P, K, MO`). Auto-complète les acronymes standard. Ce n'est pas un champ Darwin Core. |
| **recordedBy** | Collecteur principal | Auto-complétion | Le nom du premier/principal collecteur. Interroge le registre local des agents ; invite à enregistrer s'il est nouveau. |
| **additionalCollectors** | Collecteurs additionnels | Sélection multiple | Recherche par auto-complétion pour les membres de l'équipe. Appuyez sur Entrée sur les suggestions pour ajouter les noms sous forme d'étiquettes. Ce n'est pas un champ Darwin Core, il est ajouté à recordedBy dans la base de données. |
| **recordNumber** | Numéro | Texte | Le numéro de séquence attribué par le collecteur (par ex. `1042`). |
| **verbatimEventDate** | Date textuelle | Texte | Date telle qu'écrite sur l'étiquette. Automatiquement analysée dans les champs de date numériques ci-dessous. Dispose de commutateurs de langue pour prendre en charge l'analyse de différents formats locaux de date. |
| **year** | Année | Numérique | Année de collecte. Remplie automatiquement par l'analyseur de date ou saisie manuellement. |
| **month** | Mois | Numérique | Mois de collecte (1-12). Rempli automatiquement par l'analyseur de date ou saisi manuellement. |
| **day** | Jour | Numérique | Jour de collecte (1-31). Rempli automatiquement par l'analyseur de date ou saisi manuellement. |
| **fieldNotes** | Description de la plante | Zone de texte | Descriptions morphologiques (hauteur, couleur des fleurs, odeur). Prend en charge la casse des titres. Ce champ Darwin Core est généralement utilisé pour les informations de description des plantes dans les spécimens d'herbier. |
| **occurrenceRemarks** | Remarques générales | Zone de texte | Toutes autres notes sur le spécimen indiquées sur l'étiquette. Prend en charge la casse des titres. |
| **country** | Pays | Auto-complétion | Nom du pays. Efface les sous-régions s'il est modifié. |
| **stateProvince** | L'Admin 2 | Auto-complétion | Sous-région principale du pays (état/province/région). Réutilise les valeurs de la base de données et est filtrée par le pays choisi. Prend en charge la casse des titres. |
| **county** | L'Admin 3 | Auto-complétion | Sous-région secondaire (comté/district). Filtrée par pays et Admin 2. Prend en charge la casse des titres. |
| **municipality** | L'Admin 4 | Auto-complétion | Troisième sous-région, filtrée par pays, Admin 2 et Admin 3. Prend en charge la casse des titres. |
| **islandGroup** | Archipel/Groupe d'îles | Auto-complétion | Le groupe d'îles ou l'archipel où le spécimen a été collecté (par ex. `Mascareignes`). Filtré par pays. Prend en charge le collage et les assistants de casse des titres. |
| **island** | Île | Auto-complétion | Nom de l'île spécifique (par ex. `Maurice`). Filtré par pays et Groupe d'îles. Prend en charge le collage et les assistants de casse des titres. |
| **locality** | Localité | Zone de texte | Nom du lieu de collecte. Prend en charge la copie, le coller et les assistants de casse des titres. La recherche partielle recherche les valeurs existantes dans la base de données. |
| **cultivated** | cultivé | Case à cocher | Cochez cette case si le spécimen a été collecté à partir de cultures, comme dans un jardin botanique. Ce n'est pas un champ Darwin Core mais il est important pour les spécimens d'herbier. |
| **verbatimCoordinates** | Coordonnées textuelles | Texte | Coordonnées telles qu'écrites sur l'étiquette. Analysées en coordonnées décimales par l'application et affichent un badge d'erreur si elles sont invalides. |
| **decimalLatitude** | Non indiqué | Texte | Latitude calculée. Remplie automatiquement par l'analyseur de coordonnées à partir de verbatimCoordinates. |
| **decimalLongitude** | Non indiqué | Texte | Longitude calculée. Remplie automatiquement par l'analyseur de coordonnées à partir de verbatimCoordinates. |
| **locationNotes** | Notes sur la localité | Zone de texte | Remarques de localisation supplémentaires, indications. Complète généralement la valeur de la localité. Prend en charge la copie, le coller et les assistants de casse. |
| **verbatimLocality** | Localité textuelle | Zone de texte | Texte en lecture seule pour afficher les informations de la base de données. Copiez et collez dans les champs de localité appropriés ci-dessus. |
| **verbatimElevation** | Altitude textuelle | Texte | Altitude telle qu'écrite sur l'étiquette (par ex., `1200 m` ou `approx. 4000 ft`). Convertie en mètres en arrière-plan. |
| **habitat** | Habitat | Zone de texte | Description de l'environnement (par ex. `sol sableux, forêt sempervirente`). Prend en charge la casse des titres. |
| **identificationQualifier** | Qualificateur | Liste déroulante | Préfixe du qualificateur taxonomique, par ex. `cf.`, `aff.`, `nr.`. |
| **scientificName** | Nom scientifique | Auto-complétion | Nom scientifique identifié. Interroge la taxonomie WCVP à l'aide de recherches partielles. Noms personnalisés autorisés. |
| **typeStatus** | Statut du type | Auto-complétion | Statut de désignation du type. Auto-complète les options standard comme `holotype`, `isotype`, `syntype`. Des valeurs personnalisées peuvent être ajoutées. |
| **identifiedBy** | Dét. par | Sélection multiple | Noms des spécialistes qui ont identifié le spécimen. Auto-complète les noms d'agents. Plusieurs noms peuvent être ajoutés. |
| **yearIdentified** | Dét. Année | Numérique | Année d'identification. Validée pour s'assurer qu'elle n'est pas antérieure à l'année de collecte. Ce n'est pas un champ Darwin Core mais il est utilisé pour compiler dwc:dateIdentified. |
| **monthIdentified** | Dét. Mois | Numérique | Mois d'identification (1-12). Ce n'est pas un champ Darwin Core mais il est utilisé pour compiler dwc:dateIdentified. |
| **dayIdentified** | Dét. Jour | Numérique | Jour d'identification (1-31). Ce n'est pas un champ Darwin Core mais il est utilisé pour compiler dwc:dateIdentified. |
| **identificationRemarks** | Dét. Remarques | Texte | Notes sur l'identification fournies par le déterminateur. |
