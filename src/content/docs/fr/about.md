---
title: À propos de la recherche de doublons
---

L'**outil de recherche de doublons et de saisie de spécimens d'herbier** (Herbarium Specimen
Duplicate Finder and Capture Tool) est une application de bureau multiplateforme conçue pour
simplifier la numérisation des spécimens et la saisie de données botaniques. Les conservateurs et
les chercheurs en botanique peuvent l'utiliser pour saisir efficacement les enregistrements
d'herbier, standardiser les données taxonomiques et identifier automatiquement les doublons.

![Capture d'écran de l'espace de travail principal de la recherche de doublons](/wioi-duplicate-finder-docs/screenshot.png)
L'espace de travail principal de saisie des données de la recherche de doublons

## Fonctionnalités clés

- **Identification des doublons** : Recherche automatique dans un ensemble de données de référence
  local de spécimens (par exemple, d'autres données de collection téléchargées à partir du GBIF)
  pour trouver des doublons. Cela permet aux utilisateurs de réutiliser rapidement des données déjà
  numérisées plutôt que de saisir les enregistrements à partir de zéro.
- **Standardisation taxonomique** : S'intègre avec une copie locale de la base de données de
  référence **World Checklist of Vascular Plants (WCVP)** des Jardins botaniques royaux de Kew. Cela
  fournit des suggestions d'auto-complétion pour les noms scientifiques, évitant ainsi les fautes
  d'orthographe et liant automatiquement les spécimens aux identifiants officiels des taxons.
- **Hors ligne d'abord** : Conçu pour fonctionner entièrement hors ligne, en stockant
  l'authentification des utilisateurs, les paramètres, les sessions de saisie et les enregistrements
  de spécimens dans une base de données SQLite locale sécurisée. Pas besoin d'Internet après le
  téléchargement initial.

## Informations sur le financeur

Cet outil a été développé pour le Réseau d'herbiers de l'océan Indien occidental (RHOIO) dans le
cadre du programme de biodiversité [**VARUNA**](https://varuna-biodiversite.org/) :

- **Financé par** : L'Agence Française de Développement (AFD).
- **Mis en œuvre par** : Expertise France.
- **Objectif** : VARUNA vise à préserver la biodiversité riche et unique des îles du sud-ouest de
  l'océan Indien grâce au renforcement des capacités, au partage de données et à la modernisation
  des collections d'herbiers.

![Logo du financeur VARUNA](/wioi-duplicate-finder-docs/funders.png)

## Signalement de bogues et retours

L'application est open-source et activement maintenue.

- Si vous rencontrez des bogues, avez des suggestions de fonctionnalités ou souhaitez soumettre des
  corrections de traduction, veuillez ouvrir un ticket sur notre
  [dépôt GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues).
