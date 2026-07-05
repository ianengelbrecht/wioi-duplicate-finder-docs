---
title: Préparation des données
description: Étapes pour la préparation des jeux de données de référence à partir des données du GBIF
pagination: false
---

La recherche de doublons (Duplicate Finder) utilise un jeu de données de référence contenant les fiches de spécimens d'autres herbiers, obtenues auprès du GBIF. Les données du GBIF ne sont pas parfaites : les herbiers publient souvent leurs données en l'état, sans nettoyage préalable (ce qui est tout à fait normal), et n'utilisent parfois pas le standard Darwin Core de manière cohérente (par exemple, les numéros de récolte peuvent être stockés dans `dwc:recordedBy` plutôt que dans `dwc:recordNumber` ou `dwc:fieldNumber`). C'est pourquoi certaines étapes de préparation des données sont nécessaires avant de pouvoir importer un nouveau jeu de données dans l'application. Les étapes ci-dessous décrivent le processus à suivre, et nous avons fourni quelques scripts et conseils pour vous aider tout au long du parcours.

### Téléchargement des données depuis le GBIF

Vous devez d'abord extraire du GBIF les données qui vous intéressent. Allez sur le [site internet du GBIF](https://www.gbif.org/), cliquez sur le bouton `Get data` (Obtenir des données) en haut de la page, et sélectionnez `Occurrences`. Sur la page qui s'ouvre, vous pouvez appliquer des filtres au jeu de données du GBIF afin de configurer votre téléchargement. 

Tout d'abord, cliquez sur `Scientific name` (Nom scientifique), saisissez 'Tracheo' et sélectionnez l'option pour `Tracheophyta` (les plantes vasculaires — vous pouvez toutefois sélectionner un autre taxon si cela convient mieux à votre collection).

![Scientific name](/wioi-duplicate-finder-docs/gbif-scientific-name.png)

Cliquez ensuite sur `Country or area` (Pays ou zone), puis saisissez et sélectionnez les pays pour lesquels vous souhaitez obtenir des fiches. 

![Country](/wioi-duplicate-finder-docs/gbif-country.png)

Ensuite, allez dans `More` (Plus), cliquez sur `Basis of record` (Type de fiche), sélectionnez `Preserved Specimen` (Spécimen préservé) et cliquez sur `Apply` (Appliquer). Cela permet de filtrer et d'exclure les autres types d'observations, comme les fiches de plantes vivantes provenant d'iNaturalist.

![Basis of Record](/wioi-duplicate-finder-docs/gbif-basis-of-record.png)

Vous avez ensuite la possibilité de filtrer par collections sources spécifiques. Évitez d'utiliser les options `Collection`, `Collection code` ou `dwc:datasetName` sous la section `Record` (Fiche) du filtre `More` — ce ne sont pas les bons champs à utiliser ici. Faites plutôt défiler la page jusqu'à la section `Provenance`, où vous verrez l'option `Dataset` (Jeu de données) que vous pouvez utiliser pour choisir les jeux de données pertinents publiés sur le GBIF, tels que Kew, Paris ou Missouri (Tropicos). C'est une bonne idée de parcourir les jeux de données disponibles sur le GBIF avant de lancer votre téléchargement, afin de voir exactement comment ils sont nommés. Nous recommandons de filtrer par jeu de données de cette manière afin de ne recevoir que les fiches des herbiers susceptibles d'avoir des spécimens en double (doublons) avec votre collection. Si vous ne le faites pas, vous obtiendrez des fiches provenant d'un grand nombre de sources inutiles (vous en verrez les effets lors de l'étape sur les codes d'institution/collection ci-dessous). Si vous ne les connaissez pas déjà, essayez de savoir avec quelles collections d'autres régions du monde votre herbier échangeait traditionnellement des spécimens par le passé — ce sont celles que vous voudrez inclure dans le filtre `Dataset`. 

![Dataset](/wioi-duplicate-finder-docs/gbif-dataset.png)

Une fois que vous avez sélectionné les données souhaitées, cliquez sur le bouton `Download` (Télécharger) sur la page (enregistrez-vous ou connectez-vous si nécessaire). Dans la section `Darwin Core Archive`, cliquez sur `Configure`, puis sur `Continue to Terms` (Continuer vers les conditions) — vous n'avez pas besoin de modifier les options. Cochez les cases pour `Data Use Agreement` (Accord d'utilisation des données) et `Data Citation` (Citation des données) après en avoir pris connaissance, puis cliquez sur `Create Download` (Créer le téléchargement). Si le nombre de fiches est relativement faible, vous pouvez attendre quelques minutes pendant que le GBIF prépare votre téléchargement (le moment idéal pour prendre une tasse de thé !). S'il s'agit d'un jeu de données plus volumineux, n'hésitez pas à faire autre chose — le GBIF vous enverra un e-mail avec le lien de téléchargement lorsqu'il sera prêt.

![Dataset](/wioi-duplicate-finder-docs/gbif-configure-continue.png)

Téléchargez le fichier dans un dossier sur votre ordinateur, décompressez-le, et vous êtes prêt à commencer les étapes de préparation des données. 

### Scripts de préparation des données

Certaines étapes de ce processus utilisent des scripts Python pour nettoyer et mettre à jour les données téléchargées depuis le GBIF. Ces scripts sont situés dans le dossier `data-prep` du dépôt de l'application Duplicate Finder, qui est [disponible sur GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder). Vous devrez cloner ce dépôt sur votre ordinateur pour pouvoir les exécuter. N'hésitez pas à demander de l'aide à votre assistant IA préféré si vous avez besoin d'aide pour cloner un dépôt GitHub ! Vous aurez également besoin d'installer Python sur votre ordinateur.

### Formatage du jeu de données

Votre archive Darwin Core téléchargée contient un fichier nommé `occurrence.txt`. Il s'agit d'un fichier séparé par des tabulations contenant toutes les fiches de spécimens avec lesquelles vous allez travailler. Les jeux de données du GBIF étant très volumineux et compilés à partir de nombreuses sources, de légers problèmes de formatage ou des erreurs peuvent parfois s'y glisser. La première étape consiste donc à formater les données pour s'assurer que l'application Duplicate Finder puisse les lire correctement, et à filtrer les fiches problématiques. 

Dans le dossier `data-prep` du dépôt que vous avez cloné, il y a un script appelé `stream_clean.py`. Ce script extrait en continu (stream) les fiches de `occurrence.txt` vers un nouveau fichier appelé `occurrence_formatted.csv`. Il s'agit maintenant d'un fichier CSV correctement formaté que vous utiliserez pour les étapes suivantes. 

Pour exécuter le script, ouvrez un terminal ou une invite de commandes dans votre dossier Darwin Core Archive décompressé et lancez :
`python "[chemin du dépôt]/data-prep/stream_clean.py" .`
Assurez-vous de remplacer `[chemin du dépôt]` par le chemin d'accès réel du dossier contenant le dépôt que vous avez cloné (par exemple, `C:/projects/duplicate-finder` sous Windows), en le laissant bien entre guillemets.
Si vous avez besoin d'un rappel rapide sur les options de l'un de ces scripts, vous pouvez les exécuter avec `-h` au lieu du point `.` à la fin. Et si vous êtes bloqué, n'hésitez pas à demander de l'aide à votre assistant IA préféré !

Le script affichera sa progression à l'écran pendant son exécution. Il crée également quelques autres fichiers contenant des détails sur les fiches problématiques rencontrées. L'écran affichera le nombre de fiches qui ont été mises en quarantaine (supprimées). Il s'agit généralement d'un nombre infime de fiches, et vous n'avez rien d'autre à faire avec elles. 

![Data prep formatting output](/wioi-duplicate-finder-docs/data-prep-formatting.png)

### Filtrage et correction des codes d'herbiers

L'utilisation de codes d'herbiers standardisés et officiellement acceptés dans l'application Duplicate Finder is importante : cela permet de voir facilement d'où proviennent les fiches et garantit que le champ des doublons est mis à jour correctement. Malheureusement, de nombreuses fiches du GBIF ne disposent pas de codes de collection propres (certaines incluent même des numéros de code-barres dans le champ du code de collection !), vous devrez donc les nettoyer dans votre jeu de données. Vous constaterez peut-être aussi que votre téléchargement contient des fiches que vous ne souhaitez pas conserver. Le nettoyage et la standardisation des codes de collection vous aident à les filtrer. Il s'agit d'un processus simple en trois étapes : extraire les combinaisons uniques de codes d'institution/collection, corriger ou supprimer celles que vous ne voulez pas, et appliquer ces changements dans le jeu de données principal. 

#### Extraction des combinaisons uniques de codes d'institution/collection

Tout d'abord, extrayez toutes les combinaisons uniques de codes d'institution/collection afin de voir ce qui doit être mis à jour. Nous avons fourni un script appelé `unique_inst_coll_codes.py` à cet effet. Exécutez-le comme précédemment :
`python "[chemin du dépôt]/data-prep/unique_inst_coll_codes.py" .`
Il affichera sa progression et enregistrera les résultats dans `occurrence_formatted_inst_coll_codes.csv` une fois terminé. Si vous voyez des milliers de combinaisons uniques, il est probable que des numéros de code-barres aient été accidentellement stockés dans le champ du code de collection. Ne vous inquiétez pas — vous corrigerez cela à l'étape suivante. 

#### Correction des codes incorrects et inutiles

Ouvrez le fichier `occurrence_formatted_inst_coll_codes.csv` fraîchement créé dans Excel (ou dans un éditeur de texte comme Notepad si vous préférez). La liste est triée par le nombre de spécimens pour chaque combinaison. Vous remarquerez probablement tout de suite que certains codes d'herbiers sont stockés dans le champ `institutionCode`, ou que certains champs sont vides. 

Tout d'abord, supprimez les lignes dont vous n'aurez pas besoin dans votre jeu de données de référence. Vous pouvez supprimer en toute sécurité les lignes contenant très peu de fiches ou provenant d'institutions peu susceptibles de partager des doublons avec votre herbier. Prenez votre temps pour parcourir la liste. Si vous ne reconnaissez pas un code, vous pouvez le rechercher sur internet ou utiliser [Index Herbariorum](https://sweetgum.nybg.org/science/ih/).  

Ensuite, vérifiez si le code de collection est correct. S'il ne l'est pas, indiquez le code correct dans la última colonne, `corrected`. (Veillez à ne pas modifier les colonnes d'origine des codes d'institution et de collection — les scripts en ont besoin exactement telles quelles pour faire correspondre les modifications avec le jeu de données principal). Les corrections courantes consistent à copier le code de collection dans la colonne `corrected` lorsqu'il a été placé par erreur dans la colonne de l'institution. Assurez-se d'utiliser les codes d'herbiers officiels en majuscules pour qu'ils s'affichent correctement dans l'application (par exemple, `NHMUK` pour le Natural History Museum de Londres doit être corrigé en `BM`). 

Une fois terminé, sauvegardez le fichier. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-codes.png)
<span style="font-size: 80%;">Fichier des codes d'institution et de collection ouvert dans Notepad, après suppression des codes indésirables et ajouts des corrections.</span>

#### Mise à jour des codes de collection dans le jeu de données principal

Maintenant, appliquez ces modifications au jeu de données principal à l'aide du script `filter_collections.py`. Exécutez-le avec :
`python "[chemin du dépôt]/data-prep/filter_collections.py" .`
Si vous avez renommé certains fichiers, vous pouvez exécuter le script avec `-h` au lieu du point `.` pour voir comment spécifier des noms de fichiers personnalisés, ou demander un coup de main à un assistant IA. Ce script génère un jeu de données filtré appelé `occurrence_formatted_filtered.csv`. Étape suivante : la standardisation des collecteurs. 

### Standardisation des collecteurs

La standardisation des noms de collecteurs est essentielle, car vous rechercherez généralement les doublons à l'aide du nom et du numéro du collecteur. Les données du GBIF contiennent souvent des variations et des erreurs de transcription (comme des fautes de frappe issues des étiquettes d'herbiers) ; nettoyer ces informations rend les recherches beaucoup mais fiables. 

Pour commencer, vous aurez besoin d'une liste de toutes les combinaisons uniques de collecteurs du jeu de données. Le script identifiera le collecteur principal (le premier nom dans une liste de collecteurs) pour chaque fiche. Nous avons fourni le script `generate_collectors.py` pour compiler cette liste. Exécutez-le avec :
`python "[chemin du dépôt]/data-prep/generate_collectors.py" .`
Cela enregistre la liste des collecteurs uniques dans `occurrence_unique_recorded_by.csv`.

Ouvrez le fichier dans Excel, en veillant à préserver les caractères spéciaux (vous pouvez suivre le guide de la [page d'exportation des données](./docs/exporting#opening-exported-data-in-excel)). Triez les lignes dans Excel par `primary_collector_lastname` (nom de famille du collecteur principal) puis par `record_count` (nombre de fiches). Cela permet de regrouper les variantes du nom d'un collecteur et d'afficher les orthographes les plus fréquentes en premier. Parcourez cette liste pour standardiser les noms dans la colonne `primary_collector_lastname`. Veuillez éviter d'inclure des initiales, des accents ou des caractères spéciaux — l'application a besoin d'un nom de famille propre et en majuscules pour effectuer les correspondances. Si le script d'analyse s'est trompé (par exemple en plaçant des initiales dans le champ du nom de famille), corrigez-le simplement manuellement. Vous pouvez vous référer à un index ou répertoire de collecteurs botaniques locaux pour vous guider. Pour les jeux de données très volumineux, le nettoyage des noms peut prendre un certain temps, mais cela améliore grandement la précision de la recherche de doublons. Veillez à ne pas modifier la colonne `recordedBy` d'origine — le script en a besoin intacte pour appliquer vos corrections au jeu de données principal. Une fois terminé, sauvegardez le fichier. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-collectors-excel.png)
<span style="font-size: 80%;">Ouvrez le fichier de sortie dans Excel, allez dans l'onglet Données, sélectionnez Trier et triez sur primary_collector_lastname et record_count, comme sur cette image.</span>

### Mise à jour du jeu de données principal

Une fois votre liste de collecteurs nettoyée prête, vous pouvez générer le fichier final pour l'importation. Nous avons fourni `stream_finalize.py` à cet effet, qui effectue plusieurs opérations :

- Associe vos noms de collecteurs standardisés aux fiches pour créer un champ de recherche fiable.
- Standardise les numéros de récolte, en éliminant le texte superflu afin de pouvoir rechercher des numéros exacts (comme `1234` ou `2025/1234`). 
- Traduit les codes de pays à deux lettres en noms complets de pays à l'aide du fichier `countryCodes.csv` du dépôt. Vous pouvez personnaliser les noms de pays dans ce fichier si vous le souhaitez, mas laissez les codes eux-mêmes inchangés.
- Nettoie les dates de récolte et de détermination (par exemple, en convertissant les dates partielles ou incorrectes comme « 1er janvier » uniquement en année).
- Effectue plusieurs autres petites corrections de formatage de la base de données.

Exécutez le script avec :
`python "[chemin du dépôt]/data-prep/stream_finalize.py" .`
Cela crée le fichier `occurrence_final.csv`. C'est le fichier que vous importerez dans l'application, mais d'abord, effectuons une vérification rapide.

### Validation

Avant d'importer le fichier, exécutez le script `validate.py` pour vérifier s'il manque des champs ou s'il y a des problèmes de formatage :
`python "[chemin du dépôt]/data-prep/validate.py" .`
Le script affichera un rapport à l'écran. Si vous avez suivi toutes les étapes ci-dessus, tout devrait être correct ! Si vous avez modifié des fichiers manuellement, utilisé un outil externe (comme OpenRefine) ou manqué une étape, ce validateur signalera ce qui doit être corrigé avant l'importation. 

### Importation des données

Une fois la validation réussie, rendez-vous sur la [page des paramètres](./docs/settings#duplicate-records) et suivez les instructions d'importation. Vous pouvez choisir d'ajouter ces nouvelles fiches à votre base de données existante ou de les remplacer entièrement. Soyez assuré que cela n'affectera jamais les fiches de spécimens que vous avez saisies dans l'application.

Bonne chance, et bonne recherche de doublons !
