---
title: Exporting Data
description: Learn how to export captured records to CSV and map headers to Darwin Core or BRAHMS formats.
---

Once you have finished capturing specimen records for a session, you can export your data to a standard Comma Separated Values (CSV) file. This CSV file is structured to be imported directly into your main herbarium management system, such as BRAHMS or Excel.

---

## How to Export

1. Select a capture session to open the capturing workspace.
2. At the top right, click the green **Export CSV** button.

![Export CSV Button in Workspace](/export-button.png)

3. A file save dialog will open on your computer.
4. Choose the directory where you want to save the CSV file.
5. Click **Save**.

### Suggested Filename
The application automatically generates a default name using the active session name and a local timestamp to prevent overwriting previous exports (for example, `Malvaceae_Cupboard_2_20260620_160000.csv`). Change that file name as needed.

---

## CSV Formats & Field Mappings

The column headers in the exported CSV differ depending on the **Export Format** selected in your [Application Settings](settings).

### 1. Darwin Core (DwC) Format
The Darwin Core format maps captured fields to standard DwC headers. Below is the mapping guide:

| Darwin Core CSV Header | UI Form Field Source | Mapping Details |
| :--- | :--- | :--- |
| `dwc:collectionCode` | Home Herbarium | Prefilled from settings. |
| `dwc:catalogNumber` | Barcode Number | Unique sheet barcode. |
| `duplicates` | Duplicates | Comma-separated list. |
| `dwc:recordNumber` | Collector No. | Verbatim collector number. |
| `dwc:recordedBy` | Primary & Add. Collectors | Joined by semicolon (e.g. `Primary; Add 1; Add 2`). |
| `dwc:verbatimEventDate` | Verbatim Date | Raw date string from label. |
| `dwc:year`, `dwc:month`, `dwc:day` | Year, Month, Day | Numeric date parts. |
| `dwc:country` | Country | Standardized country name. |
| `dwc:stateProvince` | Admin 2 (state/prov) | Primary region. |
| `dwc:county` | Admin 3 (county) | Secondary region. |
| `dwc:municipality` | Admin 4 (municipality) | Local subregion. |
| `dwc:locality` | Locality | Specific site description. |
| `dwc:locationRemarks` | Locality Notes | Notes; appends `; cultivated` if checked. |
| `dwc:verbatimCoordinates` | Verbatim Coordinates | Raw GPS coordinate string. |
| `dwc:decimalLatitude` | Decimal Latitude | Calculated decimal latitude. |
| `dwc:decimalLongitude` | Decimal Longitude | Calculated decimal longitude. |
| `dwc:verbatimElevation` | Verbatim Elevation | Raw elevation text. |
| `minElevation`, `maxElevation` | Verbatim Elevation | Calculated bounds extracted from elevation. |
| `elevation` | Verbatim Elevation | Standard elevation value in meters. |
| `elevationUncertainty`| Verbatim Elevation | Extracted uncertainty margin (if parsed). |
| `dwc:habitat` | Habitat | Ecology text. |
| `dwc:occurrenceRemarks` | Occurrence Remarks | General field notes. |
| `dwc:fieldNotes` | Field Notes | Description of plant. |
| `dwc:typeStatus` | Type Status | Holotype, isotype, syntype, etc. |
| `dwc:identificationQualifier` | Qualifier | Identification qualifier (cf., aff., nr.). |
| `dwc:family` | Family | Resolved taxonomic family. |
| `dwc:scientificName` | Scientific Name | Taxon name. |
| `dwc:identifiedBy` | Det By | Specialist names joined by semicolons. |
| `dwc:dateIdentified` | Year/Month/Day Ident. | Formatted date string (YYYY-MM-DD). |
| `dwc:identificationRemarks` | Identification Notes | Notes regarding identification. |
| `dwc:taxonID` | Taxon ID | Linked identifier from WCVP checklist. |
| `cultivated` | Cultivated Specimen | Exports `true` or `false`. |

---

### 2. BRAHMS Format
The BRAHMS format splits and maps values to fit the standard BRAHMS tables (such as RND, LATDEC, gazetteer, alt, and parsed taxonomy components).

| BRAHMS CSV Header | UI Form Field Source | Mapping Details |
| :--- | :--- | :--- |
| `tag` | *None* | Left blank. |
| `del` | *None* | Left blank. |
| `barcode` | Barcode Number | Unique sheet barcode. |
| `dups` | Home Herb & Duplicates | Combined (e.g. `TAN, P, K`). |
| `collector` | Primary Collector | First collector name only. |
| `addcol` | Additional Collectors | Additional names joined by semicolons. |
| `prefix`, `number`, `suffix` | Collector No. | Split from collector number (e.g., `Raza 124a` -> prefix `Raza`, number `124`, suffix `a`). |
| `dd`, `mm`, `yy` | Day, Month, Year | Numeric collection date. |
| `family` | Family | Resolved taxonomic family. |
| `type category` | Type Status | Type designation. |
| `genus`, `sp1`, `author1`, `rank1`, `sp2`, `author2` | Scientific Name | Parsed components from scientific name. |
| `detby` | Det By | First identifiedBy name. |
| `detdd`, `detmm`, `detyy` | Day/Month/Year Ident. | Numeric identification date parts. |
| `detstatus` | Qualifier | Identification qualifier (cf., aff., nr.). |
| `country` | Country | Country name. |
| `majorarea` | Admin 2 (state/prov) | Primary region. |
| `minorarea` | Admin 3 (county) | Secondary region. |
| `gazetteer` | Admin 4 & Locality | Combines municipality and locality. |
| `lat`, `long` | Decimal Lat / Long | Absolute numeric latitude and longitude. |
| `ns`, `ew` | Decimal Lat / Long | Sign indicator direction (`N`, `S`, `E`, `W`). |
| `llunit` | *None* | Set to `DD` (Decimal Degrees). |
| `qds` | *Calculated* | **Only included if checked in settings.** Calculates the Quarter Degree Square grid code. |
| `alt` | Verbatim Elevation | Calculated elevation value in meters. |
| `altunit` | *None* | Left blank. |
| `locality notes` | Locality Notes & Flags | Combines notes, cultivated label, verbatim coordinates, and verbatim elevation details. |
| `habitat/site description` | Habitat | Ecology text. |
| `plant description` | Field Notes | Plant description text. |
| `cultivated` | Cultivated Specimen | Exports `true` or `false`. |
| `general notes` | Remarks | Combines occurrence remarks and identification remarks. |

### Other formats

If you would like to export your data to a different format please create a [GitHub issue](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues) to let us know and we can work together to give you what you need. 

## Opening exported data in Excel

If you want to open an exported CSV file in Excel for viewing or editing, you need to go through the data import process instead of just double clicking the file to open it. This is because the dataset will likely contain **special characters** such as degree symbols and accented letters in collector names. If a CSV file is opened directly by double-clicking it those characters will be get scrambled because Excel uses a unique character system.

To ensure all characters are imported correctly:

- Open Microsoft Excel.
- Select the Data tab.
![Excel Data Tab](/excel-import-data-tab.png)
- Click From Text/CSV.
- Browse to and select the exported CSV file.
- In the import preview window, set File Origin (or Encoding) to 65001: Unicode (UTF-8) if it is not already selected.
![Select UTF8](/excel-import-origin.png)
- Verify that special characters appear correctly in the preview.
- Click Load.

This ensures that all text is imported using the correct UTF-8 encoding and prevents character corruption. Your dataset will now appear in Excel, usually with colourful format. You can remove that formatting by clicking the Table Style dropdown at the top right and selecting the unstyled table. It is also recommended to freeze the first row (the field headers) under the View tab while working with the data so that you can always see the field headers. 

![Table formatting](/excel-import-table.png)
