---
title: Selecting & Editing Specimen Data
description: Learn how to load records, capture new specimens, use fast-entry accelerators, and review form fields.
---

The right pane of the workspace displays the **Specimen Capture Form**. This form allows you to record new specimen details or edit records saved in the active capturing session.

![Main Capture Form Panels](/wioi-duplicate-finder-docs/capture-form.png)

---

## Form Workflow

### Loading an existing specimen record
- **From reference data (duplicates)**: Select any row in the **Search Results** table on the left after conducting a search. All geographical, taxonomic, and event fields are copied into the data capture/editing form immediately.

### Checking and editing
- Once you've selected a record to work with, review all the fields and compare them to the specimen in front of you to make sure all the data are correct. 
- You might have additional or more accurate data on the specimen in front of you than what is in the existing record, so make sure to capture that also. 
- See the Field by Field Reference below for details on what information goes into what fields.

### Saving Records
- To save, click **Save Specimen** at the bottom of the form or press the keyboard shortcut **Ctrl+S** at any time.
- The record is validated and saved to the local database, and is placed in the table of saved specimens at the bottom of the screen (you will need to scroll down to see them). The form resets automatically, placing your cursor at the barcode field for the next specimen.

### Editing saved records
- Click any row in the **Captured Specimens** table at the bottom of the workspace. This loads the saved record back into the capture form for editing, changing the form header badge to **SAVE CAPTURED** so that you know you're working with an existing record.
- Importantly, this feature allows you to switch between a record you've captured and other duplicate records from the search results for the same specimen. You can thus copy/paste data from other specimens into the record you captured, using data from all duplicates to get the most comprehensive record for your specimen.
- You can also use the **Load Previous** button for the same purpose of switching quickly between records. 

### Resetting the Form
- If you need to, click **Reset Form** at the bottom left to clear all fields and return the form to a **NEW FORM** (green badge) state.

---

## Fast Data Entry Accelerators

The form is optimized for rapid data entry, reducing keyboard-to-mouse switching and offering helpers to clean up verbatim labels.

### 1. Title Casing Helper (`Aa` and Undo Buttons)
Many text inputs and textareas (such as *Field Notes*, *Locality*, *Locality Notes*, *Habitat*, and geographical fields) feature inline formatting tools:
- **Proper Case (`Aa`)**: Click this icon to automatically convert all caps text to Title Case (capitalizing names, major nouns, and adjusting standard botanical description capitalization).
- **Undo Casing**: If the formatting behaves unexpectedly, an Undo arrow icon appears in place of the `Aa` button. Click it to restore your raw typed text.

### 2. Field Copy & Paste
The **Locality** and **Locality Notes** fields contain custom copy and paste buttons:
- **Copy**: Copies the entire field content (or selected text) to your computer's clipboard.
- **Paste**: Pastes text from your clipboard directly at the current cursor position within the field, preventing you from having to select all text.

### 3. Automated Verbatim Date Parser
- When you type or paste a date into the **Verbatim Date** field (e.g. `20 mai 1984` or `May 20, '84`), the application automatically parses it and splits the values into the **Year**, **Month**, and **Day** fields.
- **Language Toggle**: The verbatim date field also has a language toggle that sets how the date value is parsed (date formats vary between languages). Switching the toggle will recalculate **Year**, **Month**, and **Day** accordingly.

![Verbatim Date EN/FR Toggle](/wioi-duplicate-finder-docs/date-language-toggle.png)

### 4. Verbatim Coordinates
- It is always good practice to record coordinates on specimen labels exactly as they are written, without converting them to another form. 
- The **Verbatim Coordinates** field allows you to do that and will parse and convert those coordinates to decimal degrees for you in the background.
- Coordinates can be entered in any format, such as DMS `20° 30' 15" S, 47° 25' 10" E` or Decimal Degrees `20.5042S, 47.4194E`.
- The field has a degree symbol (°) button you can click to add a degree symbol at the current cursor position in the field. 
- When you exit the field it checks the coordinates format and shows you the **Decimal Latitude** and **Decimal Longitude** values if the coordinates are valid.
- If the coordinates are malformed, a red **(Invalid)** badge is shown. You can still save the coordinates as they are written, but you should double check the format is correct.
- The basic rule for the coordinates format is that the latitude and longitude should have matching formats. You can't have decimal latitude and DMS longitude, for example. Common examples of problems are missing degree, minute, or second indicators in one or other value. 

---

## Reference-Backed Autocompletes & Custom Values

Several of the form fields use the local reference database to suggest values while typing. 

### Quick Scientific Name Lookups
- The **Scientific Name** field autocompletes using Kew's World Checklist of Vascular Plants (WCVP).
- You can use partial searching (e.g., typing `ab man` to suggest `Abelmoschus manihot`).
- Don't worry about updating outdated names or synonyms, capture the most recent identification on the specimen.
- Sometimes the name on the specimen won't match a name in WCVP, e.g. 'ined' names. You can just type the name in as it is on the specimen (you will see a gentle warning that this is not a WCVP name).

### Adding New Values Throughout
- **Adding New Collectors (Agents)**: 
  When you type a primary collector name in the autocomplete field and tab away, the app checks the database registry. If the collector does not exist, a dialog prompts you: *"Would you like to add this collector to the registry?"* Confirming adds them, making their name available for future autocompletes.
  
  ![New Name Registration Prompt Modal](/wioi-duplicate-finder-docs/new-name-prompt.png)

- **Entering Custom Taxa**: 
  If a specimen represents a species not found in the WCVP reference database (such as a new species, cultivar, or manuscript name), you are **not blocked**. You can simply type the new name and save the record. In the background, the database stored the WCVP taxonID for existing names (and exported if needed). New names will have the `taxonID` blank.

---

## Field-by-Field Reference

Below is a detailed guide to all 35 fields on the capture form. The field names are the internal Darwin Core field names that the application uses, and are likely to be different in your export data format to match your own database field names (this is the purpose of a data standard like Darwin Core).

| Field Name | Labeled As | Type | Description / Autocomplete Rules |
| :--- | :--- | :--- | :--- |
| **collectionCode** | Home Herbarium | Read-only | Prefilled from the active [Application Settings](settings). Represents the home institution. Is joined to Duplicates for BRAHMS7 exports. |
| **catalogNumber** | Barcode Number | Text | Unique barcode identifier for the specimen sheet (e.g., `TAN001234`). |
| **duplicates** | Duplicates | Autocomplete | Comma-separated list of herbaria holding duplicates (e.g., `P, K, MO`). Autocompletes standard acronyms. Not a Darwin Core field. |
| **recordedBy** | Primary Collector | Autocomplete | The first/primary collector's name. Queries the local agent registry; prompts to save if new. |
| **additionalCollectors** | Additional Collectors | Multi-select | Autocomplete search for team members. Press Enter on suggestions to add names as tags. Not a Darwin Core field, appended to recordedBy in the database. |
| **recordNumber** | Collector No. | Text | The sequence number assigned by the collector (e.g. `1042`). |
| **verbatimEventDate** | Verbatim Date | Text | Date as written on label. Automatically parsed to numeric date fields below. Has language toggles to support parsing different date locales. |
| **year** | Year | Numeric | Year of collection. Automatically filled by date parser or entered manually. |
| **month** | Month | Numeric | Month of collection (1-12). Automatically filled by date parser or entered manually. |
| **day** | Day | Numeric | Day of collection (1-31). Automatically filled by date parser or entered manually. |
| **fieldNotes** | Plant Description | Textarea | Morphological descriptions (height, flower color, smell). Supports title-casing. This Darwin Core field is typically used for plant description in formation in herbarium specimens. |
| **occurrenceRemarks** | General Notes | Textarea | Any other notes about the specimen indicated on the label. Supports title-casing. |
| **country** | Country | Autocomplete | Name of country. Clears sub-regions if changed. |
| **stateProvince** | Admin 2 | Autocomplete | Primary country subregion (state/province/region). Reuses database values and filtered by chosen country. Supports title-casing. |
| **county** | Admin 3 | Autocomplete | Secondary subregion (county/district). Filtered by country and Admin 2. Supports title-casing. |
| **municipality** | Admin 4 | Autocomplete | Third subregion, filtered by country, Admin 2, and Admin 3. Supports title-casing. |
| **islandGroup** | Island Group | Autocomplete | The group of islands where the specimen was collected (e.g., `Mascarenes`). Filtered by country. Supports paste and title-casing helpers. |
| **island** | Island | Autocomplete | Name of the specific island (e.g., `Mauritius`). Filtered by country and Island Group. Supports paste and title-casing helpers. |
| **locality** | Locality | Textarea | Collection place name. Supports copy, paste, and title-casing helpers. Partial search looks up existing values from the database. |
| **cultivated** | Cultivated | Checkbox | Check this if the specimen was collected from cultivation, such as botanic garden. Not a Darwin Core field but important for herbarium specimens. |
| **verbatimCoordinates** | Verbatim Coordinates | Text | Coordinates as written on label. Parsed to decimal coordinates by application and displays error badge if invalid. |
| **decimalLatitude** | Not indicated | Text | Calculated latitude. Automatically filled by coordinates parser from verbatimCoordinates. |
| **decimalLongitude** | Not indicated | Text | Calculated longitude. Automatically filled by coordinates parser from verbatimCoordinates. |
| **locationNotes** | Locality Notes | Textarea | Additional location remarks, directions. Typically compliments the locality value. Supports copy, paste, and casing helpers. |
| **verbatimLocality** | Verbatim Locality | Textarea | Read only text to display information from the database. Copy and paste to the relevant locality fields above. |
| **verbatimElevation** | Verbatim Elevation | Text | Elevation as written on label (e.g., `1200 m` or `approx. 4000 ft`). Converted to meters in the background. |
| **habitat** | Habitat | Textarea | Environmental description (e.g. `sandy soil, evergreen forest`). Supports title-casing. |
| **identificationQualifier** | Qualifier | Select dropdown | Taxonomy qualifier prefix e.g. `cf.`, `aff.`, `nr.`. |
| **scientificName** | Scientific Name | Autocomplete | Identified scientific name. Queries WCVP taxonomy using partial searches. Custom names allowed. |
| **typeStatus** | Type Status | Autocomplete | Type designation status. Autocompletes standard options like `holotype`, `isotype`, `syntype`. Custom values can be added. |
| **identifiedBy** | Det By | Multi-select | Names of specialists who identified the specimen. Autocompletes agent names. Multiple names can be added. |
| **yearIdentified** | Year Ident. | Numeric | Year of identification. Validated to ensure it is not before collection year. Not a Darwin Core field but used to compile dwc:dateIdentified. |
| **monthIdentified** | Month Ident. | Numeric | Month of identification (1-12). Not a Darwin Core field but used to compile dwc:dateIdentified. |
| **dayIdentified** | Day Ident. | Numeric | Day of identification (1-31). Not a Darwin Core field but used to compile dwc:dateIdentified.|
| **identificationRemarks** | Identification Notes | Text | Notes about the identification provided by the identifier. |
