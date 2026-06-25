---
title: About the Duplicate Finder
---

The **Herbarium Specimen Duplicate Finder and Capture Tool** is a cross-platform desktop application designed to streamline specimen digitisation and botanical data capture. Curators and botanical researchers can use it to enter herbarium records efficiently, standardise taxonomic data, and automatically identify duplicates.

![Screenshot of the Duplicate Finder main workspace](/wioi-duplicate-finder-docs/screenshot.png)
The main data capture workspace of the Duplicate Finder

## Key Features

- **Duplicate Identification**: Automatically search a local reference specimen dataset (e.g. other collection data downloaded from GBIF) to find duplicates. This allows users to quickly reuse already digitised data rather than typing in records from scratch.
- **Taxonomic Standardisation**: Integrates with a local copy of Kew's **World Checklist of Vascular Plants (WCVP)** reference database. This provides auto-complete suggestions for scientific names, preventing spelling mistakes and automatically linking specimens to official taxon identifiers.
- **Offline First**: Built to work completely offline, storing user authentication, settings, capturing sessions, and specimen records in a secure local SQLite database. No need for internet after the initial download. 

## Funder Information

This tool was developed under the [**VARUNA**](https://varuna-biodiversite.org/) biodiversity program:
- **Financed by**: The French Development Agency (AFD - Agence Française de Développement).
- **Implemented by**: Expertise France.
- **Goal**: VARUNA aims to preserve the rich, unique biodiversity of the Western Indian Ocean islands (WIOI) through capacity building, data sharing, and the modernisation of herbarium collections.

![VARUNA Funder Logo](/wioi-duplicate-finder-docs/funders.png)

## Reporting Bugs & Feedback

The application is open-source and actively maintained. 
- If you encounter bugs, have feature requests, or want to submit translation corrections, please file an issue on our [GitHub repository](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues). You will need to sign in to Github to be able to do so. 
