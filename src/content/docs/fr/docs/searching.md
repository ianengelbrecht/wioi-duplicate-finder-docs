---
title: Recherche d'enregistrements de référence
description: Trouvez des spécimens en double et des références taxonomiques pour accélérer la saisie des données.
---

Le volet gauche de l'espace de travail de saisie de données est dédié à la recherche de doublons de spécimens. En recherchant des spécimens existants provenant d'autres herbiers publiés sur GBIF, vous pouvez réutiliser instantanément ces informations au lieu de saisir à nouveau manuellement toutes ces données.

L'en-tête du panneau de recherche affiche les nombres d'enregistrements de la base de données locale :
- **Données de référence** : Nombre total d'enregistrements de doublons de référence chargés depuis le GBIF pour votre zone d'intérêt.
- **WCVP** : Nombre total de noms taxonomiques chargés depuis la base de données World Checklist of Vascular Plants de Kew ainsi que la version actuelle de la liste.

![Interface utilisateur du panneau de recherche avec filtres valides](/wioi-duplicate-finder-docs/search-pane.png)

---

## Filtres de recherche

Vous pouvez filtrer les spécimens de référence à l'aide des champs suivants :
- **Collecteur** : Le nom du collecteur principal (recherche partielle, par exemple, taper `Raza` correspond à `Razafindratsita`). Saisissez les noms sans initiales.
- **Numéro** : Le numéro de séquence du collecteur (par exemple, `1042`). Saisissez uniquement des chiffres, en excluant tout préfixe. La recherche correspond exactement à ces chiffres, contrairement aux autres champs du formulaire (sinon, la recherche du numéro 123 renverrait 1234, etc.).
- **Date (Année, Mois, Jour)** : Champs numériques distincts pour la date de collecte.
- **Famille** : La famille botanique (recherche partielle, par exemple, `mal` correspond à `Malvaceae`).
- **Nom scientifique** : Le nom du taxon (recherche partielle, par exemple, `ab man` correspond à `Abelmoschus manihot`).
- **Pays** : Liste déroulante d'auto-complétion pour les noms de pays.
- **Admin 2 (état/prov/etc.)** : Liste déroulante d'auto-complétion pour l'état, la province ou la région. Ce champ est automatiquement filtré par le **Pays** sélectionné (changer de pays réinitialise ce champ).
- **Localité** : Recherche partielle également, par exemple, `Anta ré` correspond à `Antanambao-Manampotsy, Réserve de...`.

En général, vous utiliserez le nom du collecteur et le numéro pour trouver des enregistrements en double. Toutefois, si aucun doublon n'existe pour le spécimen que vous saisissez, vous souhaiterez peut-être rechercher d'autres spécimens collectés au même moment et réutiliser ces enregistrements avec les modifications nécessaires. C'est pourquoi nous proposons ces options de recherche supplémentaires.

---

## Règles de validation de recherche

Pour éviter des requêtes de base de données très lentes sur des termes trop larges et pour garantir que les recherches produisent des doublons potentiels de haute qualité, l'application impose les contraintes suivantes :

1. **Contrainte sur le nom du collecteur** :
   - Si vous remplissez le champ **Collecteur**, vous devez *également* fournir un **Numéro de collecteur** OU, si vous effectuez une recherche avec une **Date** (Année/Mois/Jour), vous devez fournir au moins un filtre supplémentaire (Famille, Nom scientifique, Pays, Admin 2 ou Localité).
2. **Contrainte sur le numéro de collecteur** :
   - Vous ne pouvez pas rechercher un **Numéro** seul. Un nom de **Collecteur** doit toujours être fourni aux côtés du numéro.
3. **Contrainte sur les champs de date** :
   - Si un champ de **Date** (Année, Mois ou Jour) est rempli, vous devez également remplir au moins **deux** autres champs qui ne sont pas des dates.
4. **Contrainte sur les filtres généraux** :
   - La recherche sur la Famille, le Nom scientifique, le Pays, l'Admin 2 ou la Localité nécessite de remplir au moins **trois champs au total** (par exemple, Nom scientifique + Pays + Admin 2).

> [!TIP]
> Le bouton **Rechercher dans la base** restera désactivé et des avertissements visuels (bannières orange) expliqueront quelle combinaison est requise jusqu'à ce que vos critères de recherche soient valides.

---

## Exécuter et effacer les recherches

- **Soumettre** : Cliquez sur **Rechercher dans la base** ou utilisez le raccourci clavier **Ctrl+Entrée** lorsque le focus est dans les filtres de recherche.
- **Effacer** : Cliquez sur **Effacer** pour vider tous les filtres de recherche, effacer les résultats et réinitialiser les avertissements.

---

## Examiner les résultats de recherche

Les enregistrements correspondants sont affichés dans le tableau des résultats sous les filtres.

![Liste du tableau des résultats de recherche](/wioi-duplicate-finder-docs/search-results.png)

### Colonnes du tableau des résultats :
1. **HERB** : L'acronyme du code de collection de l'herbier où le spécimen de référence est stocké.
2. **Collecteur** : Le nom du collecteur principal, le numéro de collecteur (par exemple, `#1042`) et le numéro de terrain entre parenthèses (parfois le numéro de collecteur est stocké dans le numéro de terrain dans les jeux de données GBIF).
3. **Nom du taxon** : Le nom scientifique (en italique), la famille taxonomique (en petits caractères majuscules) et le qualificateur d'identification (par exemple, `cf.`) s'il est enregistré.
4. **Localité** : La description textuelle de la localité et les remarques facultatives sur l'emplacement.
5. **Géo** : Pays et sous-région d'état/province.
6. **Date** : La date au format ISO-8601.
7. **Coordonnées** : Coordonnées textuelles ou latitude et longitude décimales.

### Limitation des performances :
- Si une recherche est très large, les résultats sont automatiquement limités à **250 correspondances** pour maintenir les performances. Une bannière de notification vous informera si les résultats ont été limités. En général, vous devez vous assurer que vos critères de recherche ne renverront que quelques enregistrements.
- Cliquer sur une ligne de résultat charge instantanément tous ses champs de données dans le **Formulaire de saisie de spécimen** à droite.
