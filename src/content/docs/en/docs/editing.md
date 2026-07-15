---
title: Selecting & Editing Specimen Data
description:
  Learn how to load records, capture new specimens, use fast-entry accelerators, and review form
  fields.
---

The right pane of the workspace displays the **Specimen Capture Form**. This form allows you to
record new specimen details or edit records saved in the active capturing session.

![Main Capture Form Panels](/wioi-duplicate-finder-docs/capture-form.png)

---

## Form Workflow

### Loading an existing specimen record

- **From reference data (duplicates)**: Select any row in the **Search Results** table on the left
  after conducting a search. All geographical, taxonomic, and event fields are copied into the data
  capture/editing form immediately.

### Checking and editing

- Once you've selected a record to work with, review all the fields and compare them to the specimen
  in front of you to make sure all the data are correct.
- You might have additional or more accurate data on the specimen in front of you than what is in
  the existing record, so make sure to capture that also.
- See the Field by Field Reference below for details on what information goes into what fields.

### Saving Records

- To save, click **Save Specimen** at the bottom of the form or press the keyboard shortcut
  **Ctrl+S** at any time.
- The record is validated and saved to the local database, and is placed in the table of saved
  specimens at the bottom of the screen (you will need to scroll down to see them). The form resets
  automatically, placing your cursor at the barcode field for the next specimen.

### Editing saved records

- Click any row in the **Captured Specimens** table at the bottom of the workspace. This loads the
  saved record back into the capture form for editing, changing the form header badge to **SAVE
  CAPTURED** so that you know you're working with an existing record.
- Importantly, this feature allows you to switch between a record you've captured and other
  duplicate records from the search results for the same specimen. You can thus copy/paste data from
  other specimens into the record you captured, using data from all duplicates to get the most
  comprehensive record for your specimen.
- You can also use the **Load Previous** button for the same purpose of switching quickly between
  records.

### Resetting the Form

- If you need to, click **Reset Form** at the bottom left to clear all fields and return the form to
  a **NEW FORM** (green badge) state.

---

## Fast Data Entry Accelerators

The form is optimized for rapid data entry, reducing keyboard-to-mouse switching and offering
helpers to clean up verbatim labels.

### 1. Title Casing Helper (`Aa` and Undo Buttons)

Many text inputs and textareas (such as _Field Notes_, _Locality_, _Locality Notes_, _Habitat_, and
geographical fields) feature inline formatting tools:

- **Proper Case (`Aa`)**: Click this icon to automatically convert all caps text to Title Case
  (capitalizing names, major nouns, and adjusting standard botanical description capitalization).
- **Undo Casing**: If the formatting behaves unexpectedly, an Undo arrow icon appears in place of
  the `Aa` button. Click it to restore your raw typed text.

### 2. Field Copy & Paste

The **Locality** and **Locality Notes** fields contain custom copy and paste buttons:

- **Copy**: Copies the entire field content (or selected text) to your computer's clipboard.
- **Paste**: Pastes text from your clipboard directly at the current cursor position within the
  field, preventing you from having to select all text.

### 3. Automated Verbatim Date Parser

- When you type or paste a date into the **Verbatim Date** field (e.g. `20 mai 1984` or
  `May 20, '84`), the application automatically parses it and splits the values into the **Year**,
  **Month**, and **Day** fields.
- **Language Toggle**: The verbatim date field also has a language toggle that sets how the date
  value is parsed (date formats vary between languages). Switching the toggle will recalculate
  **Year**, **Month**, and **Day** accordingly.

![Verbatim Date EN/FR Toggle](/wioi-duplicate-finder-docs/date-language-toggle.png)

### 4. Verbatim Coordinates

- It is always good practice to record coordinates on specimen labels exactly as they are written,
  without converting them to another form.
- The **Verbatim Coordinates** field allows you to do that and will parse and convert those
  coordinates to decimal degrees for you in the background.
- Coordinates can be entered in any format, such as DMS `20° 30' 15" S, 47° 25' 10" E` or Decimal
  Degrees `20.5042S, 47.4194E`.
- The field has a degree symbol (°) button you can click to add a degree symbol at the current
  cursor position in the field.
- When you exit the field it checks the coordinates format and shows you the **Decimal Latitude**
  and **Decimal Longitude** values if the coordinates are valid.
- If the coordinates are malformed, a red **(Invalid)** badge is shown. You can still save the
  coordinates as they are written, but you should double check the format is correct.
- The basic rule for the coordinates format is that the latitude and longitude should have matching
  formats. You can't have decimal latitude and DMS longitude, for example. Common examples of
  problems are missing degree, minute, or second indicators in one or other value.

---

## Reference-Backed Autocompletes & Custom Values

Several of the form fields use the local reference database to suggest values while typing.

### Quick Scientific Name Lookups

- The **Scientific Name** field autocompletes using Kew's World Checklist of Vascular Plants (WCVP).
- You can use partial searching (e.g., typing `ab man` to suggest `Abelmoschus manihot`).
- Don't worry about updating outdated names or synonyms, capture the most recent identification on
  the specimen.
- Sometimes the name on the specimen won't match a name in WCVP, e.g. 'ined' names. You can just
  type the name in as it is on the specimen (you will see a gentle warning that this is not a WCVP
  name).

### Smart Locality Lookups

- The **Locality** field autocompletes using a query of previously captured records and reference
  records from GBIF.
- Suggestions in the dropdown show the locality text and any associated notes, alongside their
  country, state/province, county, and coordinates.
- Selecting a suggestion will automatically populate the form's **Country**, **Admin 2**
  (state/province), **Admin 3** (county), **Verbatim Coordinates**, and **Locality Notes** fields
  using the details from that record.

### Adding New Values Throughout

- **Adding New Collectors (Agents)**: When you type a primary collector name in the autocomplete
  field and tab away, the app checks the database registry. If the collector does not exist, a
  dialog prompts you: _"Would you like to add this collector to the registry?"_ Confirming adds
  them, making their name available for future autocompletes.

  ![New Name Registration Prompt Modal](/wioi-duplicate-finder-docs/new-name-prompt.png)

- **Entering Custom Taxa**: If a specimen represents a species not found in the WCVP reference
  database (such as a new species, cultivar, or manuscript name), you are **not blocked**. You can
  simply type the new name and save the record. In the background, the database stored the WCVP
  taxonID for existing names (and exported if needed). New names will have the `taxonID` blank.

---

## AI assisted Data Capture

![JSON button and specimen image](/wioi-duplicate-finder-docs/JSON-button.png)
<span style="font-size: 80%;">Use your favourite AI model to read the specimen data from the label,
and paste it into the form with the JSON button</span>

AI is now being used extensively to speed up the process of data capture in herbaria. The Duplicate
Finder tool facilitates the use of AI by allowing you to paste a Darwin Core JSON object directly
into the form using the JSON button at the top right.

All you need to do is paste the image of your specimen label data into your favourite AI model (it
is best to screenshot the label in the specimen image, zoomed in -- use multiple screenshots if
there are multiple labels), and use the prompt below to request the necessary data. Copy the result
when it is ready and click the JSON button in the tool to add all the data there. Make sure to check
it all and edit as needed, especially for hand-written labels.

You only need to add the prompt to your first request to the AI, for every subsequent request just
post the images and it will reuse the prompt.

<div class="ai-prompt-container">
  <span id="ai-prompt">Please read and translate this label into a Darwin Core JSON object (no field prefixes), with the following fields: catalogNumber (use the barcode number), recordedBy, recordNumber, verbatimEventDate, country, stateProvince, islandGroup, island (if they exist), locality, locationRemarks, verbatimCoordinates, verbatimElevation, habitat, identificationQualifier, scientificName, typeStatus, identifiedBy, dateIdentified, identificationRemarks, occurrenceRemarks, and fieldNotes (use this for plant description information). Also include a boolean property, cultivated (which is not Darwin Core), for whether the specimen is indicated as being cultivated or not (do not also include this in any other fields).</span>
  <button id="copy-prompt" type="button" aria-label="Copy prompt">
    <svg id="copy-icon" class="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg>
    <svg id="check-icon" class="icon-hidden" style="position:relative; top:-.5em;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
  </button>
</div>

If you need to capture the identification from a determination slip that is not included near the
main label, you can add a second image of that, and add this to your prompt:

```
Use the determination slip for the identification information.
```

<style>
  .ai-prompt-container {
    position: relative;
    margin: 1.5rem 0;
    padding: 1.25rem 3.5rem 1.25rem 1.25rem;
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 0.5rem;
    background-color: var(--sl-color-bg-nav);
    font-family: var(--sl-font-mono, monospace);
    font-size: 0.9em;
    line-height: 1.6;
  }
  .ai-prompt-container span {
    color: var(--sl-color-text);
    word-break: break-word;
  }
  .ai-prompt-container button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 2.25rem;
    height: 2.25rem;
    padding: 0;
    border: 1px solid var(--sl-color-gray-4);
    border-radius: 0.375rem;
    background-color: var(--sl-color-bg);
    color: var(--sl-color-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, border-color 0.2s;
  }
  .ai-prompt-container button:hover {
    background-color: var(--sl-color-gray-5);
    border-color: var(--sl-color-gray-3);
  }
  .ai-prompt-container button:active {
    background-color: var(--sl-color-gray-4);
  }
  .ai-prompt-container #check-icon {
    color: var(--sl-color-text-accent);
  }
  .ai-prompt-container .icon-hidden {
    display: none !important;
  }
</style>

<script>
  (function() {
    const copyButton = document.getElementById('copy-prompt');
    const copyIcon = document.getElementById('copy-icon');
    const checkIcon = document.getElementById('check-icon');
    const promptElement = document.getElementById('ai-prompt');

    let resetIconTimeout;

    if (copyButton && promptElement) {
      copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(
            promptElement.textContent.replace(/\s+/g, ' ').trim()
          );

          copyIcon.classList.add('icon-hidden');
          checkIcon.classList.remove('icon-hidden');
          copyButton.setAttribute('aria-label', 'Prompt copied');

          clearTimeout(resetIconTimeout);

          resetIconTimeout = setTimeout(() => {
            checkIcon.classList.add('icon-hidden');
            copyIcon.classList.remove('icon-hidden');
            copyButton.setAttribute('aria-label', 'Copy prompt');
          }, 3000);
        } catch (error) {
          console.error('Could not copy prompt:', error);
        }
      });
    }
  })();
</script>

---

## Field-by-Field Reference

Below is a detailed guide to all 35 fields on the capture form. The field names are the internal
Darwin Core field names that the application uses, and are likely to be different in your export
data format to match your own database field names (this is the purpose of a data standard like
Darwin Core).

| Field Name                  | Labeled As            | Type            | Description / Autocomplete Rules                                                                                                                                                     |
| :-------------------------- | :-------------------- | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **collectionCode**          | Home Herbarium        | Read-only       | Prefilled from the active [Application Settings](settings). Represents the home institution. Is joined to Duplicates for BRAHMS7 exports.                                            |
| **catalogNumber**           | Barcode Number        | Text            | Unique barcode identifier for the specimen sheet (e.g., `TAN001234`).                                                                                                                |
| **duplicates**              | Duplicates            | Autocomplete    | Comma-separated list of herbaria holding duplicates (e.g., `P, K, MO`). Autocompletes standard acronyms. Not a Darwin Core field.                                                    |
| **recordedBy**              | Primary Collector     | Autocomplete    | The first/primary collector's name. Queries the local agent registry; prompts to save if new.                                                                                        |
| **additionalCollectors**    | Additional Collectors | Multi-select    | Autocomplete search for team members. Press Enter on suggestions to add names as tags. Not a Darwin Core field, appended to recordedBy in the database.                              |
| **recordNumber**            | Collector No.         | Text            | The sequence number assigned by the collector (e.g. `1042`).                                                                                                                         |
| **verbatimEventDate**       | Verbatim Date         | Text            | Date as written on label. Automatically parsed to numeric date fields below. Has language toggles to support parsing different date locales.                                         |
| **year**                    | Year                  | Numeric         | Year of collection. Automatically filled by date parser or entered manually.                                                                                                         |
| **month**                   | Month                 | Numeric         | Month of collection (1-12). Automatically filled by date parser or entered manually.                                                                                                 |
| **day**                     | Day                   | Numeric         | Day of collection (1-31). Automatically filled by date parser or entered manually.                                                                                                   |
| **fieldNotes**              | Plant Description     | Textarea        | Morphological descriptions (height, flower color, smell). Supports title-casing. This Darwin Core field is typically used for plant description in formation in herbarium specimens. |
| **occurrenceRemarks**       | General Notes         | Textarea        | Any other notes about the specimen indicated on the label. Supports title-casing.                                                                                                    |
| **country**                 | Country               | Autocomplete    | Name of country. Clears sub-regions if changed.                                                                                                                                      |
| **stateProvince**           | Admin 2               | Autocomplete    | Primary country subregion (state/province/region). Reuses database values and filtered by chosen country. Supports title-casing.                                                     |
| **county**                  | Admin 3               | Autocomplete    | Secondary subregion (county/district). Filtered by country and Admin 2. Supports title-casing.                                                                                       |
| **municipality**            | Admin 4               | Autocomplete    | Third subregion, filtered by country, Admin 2, and Admin 3. Supports title-casing.                                                                                                   |
| **islandGroup**             | Island Group          | Autocomplete    | The group of islands where the specimen was collected (e.g., `Mascarenes`). Filtered by country. Supports paste and title-casing helpers.                                            |
| **island**                  | Island                | Autocomplete    | Name of the specific island (e.g., `Mauritius`). Filtered by country and Island Group. Supports paste and title-casing helpers.                                                      |
| **locality**                | Locality              | Textarea        | Collection place name. Supports copy, paste, and title-casing helpers. Partial search looks up existing values from the database.                                                    |
| **cultivated**              | Cultivated            | Checkbox        | Check this if the specimen was collected from cultivation, such as botanic garden. Not a Darwin Core field but important for herbarium specimens.                                    |
| **verbatimCoordinates**     | Verbatim Coordinates  | Text            | Coordinates as written on label. Parsed to decimal coordinates by application and displays error badge if invalid.                                                                   |
| **decimalLatitude**         | Not indicated         | Text            | Calculated latitude. Automatically filled by coordinates parser from verbatimCoordinates.                                                                                            |
| **decimalLongitude**        | Not indicated         | Text            | Calculated longitude. Automatically filled by coordinates parser from verbatimCoordinates.                                                                                           |
| **locationNotes**           | Locality Notes        | Textarea        | Additional location remarks, directions. Typically compliments the locality value. Supports copy, paste, and casing helpers.                                                         |
| **verbatimLocality**        | Verbatim Locality     | Textarea        | Read only text to display information from the database. Copy and paste to the relevant locality fields above.                                                                       |
| **verbatimElevation**       | Verbatim Elevation    | Text            | Elevation as written on label (e.g., `1200 m` or `approx. 4000 ft`). Converted to meters in the background.                                                                          |
| **habitat**                 | Habitat               | Textarea        | Environmental description (e.g. `sandy soil, evergreen forest`). Supports title-casing.                                                                                              |
| **identificationQualifier** | Qualifier             | Select dropdown | Taxonomy qualifier prefix e.g. `cf.`, `aff.`, `nr.`.                                                                                                                                 |
| **scientificName**          | Scientific Name       | Autocomplete    | Identified scientific name. Queries WCVP taxonomy using partial searches. Custom names allowed.                                                                                      |
| **typeStatus**              | Type Status           | Autocomplete    | Type designation status. Autocompletes standard options like `holotype`, `isotype`, `syntype`. Custom values can be added.                                                           |
| **identifiedBy**            | Det By                | Multi-select    | Names of specialists who identified the specimen. Autocompletes agent names. Multiple names can be added.                                                                            |
| **yearIdentified**          | Year Ident.           | Numeric         | Year of identification. Validated to ensure it is not before collection year. Not a Darwin Core field but used to compile dwc:dateIdentified.                                        |
| **monthIdentified**         | Month Ident.          | Numeric         | Month of identification (1-12). Not a Darwin Core field but used to compile dwc:dateIdentified.                                                                                      |
| **dayIdentified**           | Day Ident.            | Numeric         | Day of identification (1-31). Not a Darwin Core field but used to compile dwc:dateIdentified.                                                                                        |
| **identificationRemarks**   | Identification Notes  | Text            | Notes about the identification provided by the identifier.                                                                                                                           |
