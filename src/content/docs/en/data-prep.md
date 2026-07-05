---
title: Data preparation
description: Steps for preparation of reference datasets from GBIF data
pagination: false
---

The Duplicate Finder uses a reference dataset of specimen records from other herbaria, obtained from GBIF. GBIF data isn't perfect: herbaria often publish their data as-is without cleaning (which is fine), and they sometimes don't use the Darwin Core standard consistently (for example, collector numbers might be stored in `dwc:recordedBy` instead of `dwc:recordNumber` or `dwc:fieldNumber`). For this reason, some data preparation steps are needed before a new dataset can be imported into the application. The steps below show the process to follow, and we've provided some scripts and guidance to help you along the way.

### Data download from GBIF

You first need to extract the data you want from GBIF. Go to the [GBIF website](https://www.gbif.org/), click the `Get data` button at the top of the page, and select `Occurrences`. On the page that opens, you can set filters on the GBIF dataset to set up your download. 

First, click on `Scientific name`, enter 'Tracheo', and select the option for `Tracheophyta` (vascular plants—though you can select another taxon if that fits your collection better).

![Scientific name](/wioi-duplicate-finder-docs/gbif-scientific-name.png)

Then click `Country or area`, and type and select the countries you want records for. 

![Country](/wioi-duplicate-finder-docs/gbif-country.png)

Next, go to `More`, click `Basis of record`, select `Preserved Specimen`, and click `Apply`. This filters out other kinds of observations, like records of living plants from iNaturalist.

![Basis of Record](/wioi-duplicate-finder-docs/gbif-basis-of-record.png)

You then have the option to filter for specific source collections. Avoid using the `Collection`, `Collection code`, or `dwc:datasetName` options under the `Record` section of the `More` filter—these aren't the correct fields to use here. Instead, scroll down to the `Provenance` section. There, you'll see the `Dataset` option, which you can use to choose the relevant datasets published to GBIF, such as Kew, Paris, or Missouri (Tropicos). It's a good idea to browse the available datasets on GBIF before starting your download, so you can see exactly what they're called. We recommend filtering by dataset so you only get records from herbaria that are likely to have duplicate specimens for your collection. If you don't, you'll get records from a large number of unnecessary sources (you'll see the effects of this in the institution/collection codes step below). If you don't know them already, try to find out which collections in other parts of the world your herbarium traditionally exchanged specimens with in the past—those are the ones you'll want to include in the `Dataset` filter. 

![Dataset](/wioi-duplicate-finder-docs/gbif-dataset.png)

Once you've selected the data you want, click the `Download` button on the page (register or sign in if needed). Under the `Darwin Core Archive` section, click `Configure`, then `Continue to Terms` (you don't need to change any of the settings). Check the boxes for the `Data Use Agreement` and `Data Citation` (after reading them), and click `Create Download`. If the number of records is relatively small, you can wait a few minutes while GBIF prepares your download (a great time to grab a cup of tea!). If it's a larger dataset, feel free to do something else—GBIF will send you an email with the download link when it's ready.

![Dataset](/wioi-duplicate-finder-docs/gbif-configure-continue.png)

Download the file to a folder on your computer, unzip it, and you're ready to start the data preparation steps. 

### Data preparation scripts

Some of the steps in this process use Python scripts to clean and update the data downloaded from GBIF. These scripts are located in the `data-prep` directory of the Duplicate Finder repository, which is [available on GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder). You'll need to clone the repository to your computer to run them. Feel free to ask your favorite AI assistant if you need help with cloning a GitHub repository! You'll also need Python installed on your computer.

### Formatting the dataset

Your downloaded Darwin Core Archive includes a file called `occurrence.txt`. This is a tab-separated file containing all the specimen records you'll be working with. Since GBIF datasets are large and compiled from many sources, small formatting issues or errors can sometimes creep in. So, the first step is to format the data to ensure the Duplicate Finder can read it properly, and to filter out any problematic records. 

In the `data-prep` directory of the repository you cloned, there is a script called `stream_clean.py`. This script streams the records out of `occurrence.txt` into a new file called `occurrence_formatted.csv`. This is now a properly formatted CSV file that you'll use for the next steps. 

To run the script, open a terminal or command prompt in your unzipped Darwin Core Archive folder and run:
`python "[repo path]/data-prep/stream_clean.py" .`
Make sure to replace `[repo path]` with the actual folder path of the repository you cloned (for example, `C:/projects/duplicate-finder` on Windows), keeping it inside the quotation marks.
If you ever need a quick reminder of the options for any of these scripts, you can run them with `-h` instead of the dot `.` at the end. And if you get stuck, feel free to ask your favorite AI assistant for help!

The script will output its progress to the screen as it runs. It also creates a few other files containing details about any problematic records it ran into. The screen will display the number of records that were quarantined (removed). This is usually a very small number, and you don't need to do anything further with them. 

![Data prep formatting output](/wioi-duplicate-finder-docs/data-prep-formatting.png)

### Filtering and fixing herbarium codes

Using standardized and officially accepted herbarium codes in the Duplicate Finder is important: it makes it easy to see where records come from and ensures the duplicates field is updated correctly. Unfortunately, many GBIF records don't have clean collection codes (some even have barcode numbers in the collection code field!), so you'll need to clean them up in your dataset. You might also notice some records in the download that you don't want to keep. Cleaning and standardizing the collection codes helps you filter these out. This is a simple three-step process: extracting the unique institution/collection code combinations, correcting or removing the ones you don't want, and applying those changes back to the main dataset. 

#### Extracting unique institution/collection code combinations

First, extract all the unique institution/collection code combinations so you can see what needs updating. We've provided a script called `unique_inst_coll_codes.py` to do this. Run it just like before:
`python "[repo path]/data-prep/unique_inst_coll_codes.py" .`
It will show its progress and save the results to `occurrence_formatted_inst_coll_codes.csv` once it's done. If you see thousands of unique combinations, it's likely that barcode numbers were accidentally stored in the collection code field. Don't worry—you'll fix that in the next step. 

#### Fixing incorrect and unnecessary codes

Open the newly created `occurrence_formatted_inst_coll_codes.csv` file in Excel (or a text editor like Notepad if you prefer). The list is ordered by the number of specimens for each combination. You'll likely notice right away that some herbarium codes are stored in the `institutionCode` field, or that some fields are blank. 

First, remove any rows that you won't need in your reference dataset. You can safely delete rows with very few records or from institutions that are unlikely to share duplicates with your herbarium. Take your time working through the list. If you don't recognize a code, you can look it up online or search [Index Herbariorum](https://sweetgum.nybg.org/science/ih/).  

Next, check if the collection code is correct. If it isn't, specify the correct one in the last column, `corrected`. (Be sure not to modify the original institution and collection code columns—the scripts need them exactly as they are to map the changes back to the main dataset). Common corrections include copying the collection code to the `corrected` column when it was misplaced in the institution column. Make sure to use the formal, uppercase herbarium codes so they display correctly in the Duplicate Finder (for example, `NHMUK` for the Natural History Museum, London, should be corrected to `BM`). 

Once you're done, save the file. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-codes.png)
<span style="font-size: 80%;">Institution and collection codes file open in Notepad, following removal of unwanted codes and corrections added.</span>

#### Updating collection codes in the main dataset

Now, apply those changes back to the main dataset using the `filter_collections.py` script. Run it with:
`python "[repo path]/data-prep/filter_collections.py" .`
If you renamed any files, you can run the script with `-h` instead of the dot `.` to see how to specify custom filenames, or ask an AI assistant for a hand. This script generates a filtered dataset called `occurrence_formatted_filtered.csv`. Next, let's standardize collector names. 

### Standardizing collectors

Standardizing collector names is crucial, since you'll typically search for duplicates using the collector's name and number. GBIF data often contains variations and transcription errors (like typos from herbarium labels), so cleaning this up makes searches much more reliable. 

To start, you'll need a list of all unique collector combinations from the dataset. The script will identify the primary collector (the first name in a list of collectors) for each record. We've provided `generate_collectors.py` to compile this list. Run it with:
`python "[repo path]/data-prep/generate_collectors.py" .`
This saves the unique collector list to `occurrence_unique_recorded_by.csv`.

Open the file in Excel, making sure to preserve special characters (you can follow the guide on the [Exporting data page](./docs/exporting#opening-exported-data-in-excel)). Sort the rows in Excel by `primary_collector_lastname` and then by `record_count`. This groups variations of a collector's name together and shows you the most frequent spellings first. Work through this list to standardize the names in the `primary_collector_lastname` column. Please avoid including initials, accents, or special characters—the application needs a clean, uppercase last name for matching. If the parser made a mistake (like putting initials in the last name field), simply correct it manually. You might want to refer to a local botanical collector index or directory for guidance. For very large datasets, cleaning names can take some time, but it makes a huge difference in duplicate lookup accuracy. Be sure not to edit the original `recordedBy` column—the script needs it untouched to map your corrections back to the main dataset. Once you're done, save the file. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-collectors-excel.png)
<span style="font-size: 80%;">Open the output in Excel, go to the Data tab, select Sort and sort on primary_collector_lastname and record_count, as in this image.</span>

### Updating the main dataset

With your cleaned collectors list ready, you can now generate the final file for import. We've provided `stream_finalize.py` for this, which performs several operations:

- Maps your standardized collector names back to the records to create a reliable search field.
- Standardizes collector numbers, stripping out extra text so you can search for exact numbers (like `1234` or `2025/1234`). 
- Translates two-letter country codes into full country names using the `countryCodes.csv` file from the repository. You can customize the country names in that file if you want, but leave the codes themselves unchanged.
- Cleans up specimen and identification dates (for example, converting partial/incorrect dates like 'January 1st' defaults back to the year only).
- Performs several other minor database formatting corrections.

Run the script with:
`python "[repo path]/data-prep/stream_finalize.py" .`
This creates `occurrence_final.csv`. This is the file you'll import into the application, but first, let's run a quick validation check.

### Validation

Before importing the file, run the `validate.py` script to check for any missing fields or formatting issues:
`python "[repo path]/data-prep/validate.py" .`
The script will print a report to the screen. If you followed all the steps above, everything should look good! If you modified any files manually, used an external tool (like OpenRefine), or missed a step, this validator will point out what needs fixing before you import. 

### Data import

Once validated, head over to the [Settings page](./docs/settings#duplicate-records) and follow the import instructions. You can choose to append these new records to your existing database or replace them entirely. Rest assured, this will never affect the specimen records you have captured in the app.

Good luck, and happy hunting for duplicates!
