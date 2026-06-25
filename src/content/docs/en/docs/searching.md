---
title: Searching Reference Records
description: Find duplicate specimens and taxonomic references to accelerate data entry.
---

The left pane of the data capture workspace is dedicated to searching for duplicate specimen records. By searching for existing specimens from other herbaria published on GBIF, you can reuse those details instantly instead of typing all that data in again manually.

The header of the search panel displays the numbers of local database records:
- **Reference Data**: Total duplicate reference records loaded from GBIF for your area of interest.
- **WCVP**: Total taxonomic names loaded from Kew's World Checklist of Vascular Plants as well as the current checklist version.

![Search Pane UI with Valid Filters](/wioi-duplicate-finder-docs/search-pane.png)

---

## Search Filters

You can filter reference specimens using the following fields:
- **Collector**: The name of the primary collector (partial search, e.g. typing `Raza` matches `Razafindratsita`). Enter names without initials.
- **Number**: The collector's sequence number (e.g. `1042`). Enter numbers only, excluding any prefixes. The search matches these numbers exactly, unlike the other fields on the form (otherwise searching for number 123 would return 1234, etc.).
- **Date (Year, Month, Day)**: Separate numeric fields for the collection date.
- **Family**: The botanical family (partial search, e.g. `mal` matches `Malvaceae`).
- **Scientific Name**: The taxon name (partial search, e.g. `ab man` matches `Abelmoschus manihot`).
- **Country**: Autocomplete dropdown for country names.
- **Admin 2 (state/prov/etc)**: Autocomplete dropdown for state, province, or region. This field is automatically filtered by the selected **Country** (changing the Country resets this field).
- **Locality**: Also a partial search, e.g. `Anta ré` matches `Antanambao-Manampotsy, Réserve de...`.

Typically you will use the collector name and number to find duplicate records, but if duplicates don't exist for the specimen you are capturing you might want to search for other specimens collected at the same time and reuse those records with the necessary edits, which is why we have the additional search options available. 

---

## Search Validation Rules

To prevent very slow database queries on broad terms and to ensure searches yield high-quality potential duplicates, the application enforces the following constraints:

1. **Collector Name Constraint**:
   - If you fill out the **Collector** field, you must *also* provide a **Collector Number** OR, if searching with a **Date** (Year/Month/Day), you must provide at least one additional filter (Family, Scientific Name, Country, Admin 2, or Locality).
2. **Collector Number Constraint**:
   - You cannot search for a **Number** alone. A **Collector** name must always be provided alongside the number.
3. **Date Fields Constraint**:
   - If any **Date** field (Year, Month, or Day) is filled, you must also fill in at least **two** other non-date fields.
4. **General Filters Constraint**:
   - Searching on Family, Scientific Name, Country, Admin 2, or Locality requires filling in at least **three fields in total** (e.g., Scientific Name + Country + Admin 2).

> [!TIP]
> The **Search Database** button will remain disabled, and visual warnings (amber banners) will explain what combination is required until your search criteria are valid.

---

## Executing & Clearing Searches

- **Submit**: Click **Search Database** or use the keyboard shortcut **Ctrl+Enter** when your focus is within the search filters.
- **Clear**: Click **Clear** to wipe all search filters, clear the results, and reset warnings.

---

## Reviewing Search Results

Matching records are displayed in the results table below the filters.

![Search Results Table List](/wioi-duplicate-finder-docs/search-results.png)

### Results Table Columns:
1. **HERB**: The collection code acronym of the herbarium where the reference specimen is stored.
2. **Collector**: The primary collector name, collector number (e.g. `#1042`), and field number in parentheses (sometimes the collector number is stored in the field number in GBIF datasets).
3. **Taxon Name**: The scientific name (in italics), taxonomic family (in uppercase small font), and identification qualifier (e.g. `cf.`) if recorded.
4. **Locality**: The text description of the locality and optional location remarks.
5. **Geo**: Country and state/province subregion.
6. **Date**: The formatted ISO-8601 date.
7. **Coords**: Verbatim coordinates or decimal latitude and longitude.

### Performance Capping:
- If a search is very broad, results are automatically capped at **250 matches** to maintain  performance. A notification banner will inform you if the results were capped. Typically you want to make sure your search criteria will return only a handful of records though. 
- Clicking on a result row instantly loads all its data fields into the **Specimen Capture Form** on the right.
