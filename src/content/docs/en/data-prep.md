---
title: Data preparation
description: Steps for preparation of reference datasets from GBIF data
---

The duplicate finder uses a reference dataset of specimen records from other herbaria, obtained from GBIF. GBIF data are not perfect, herbaria often publish their data as is without cleaning (which is fine), and sometimes don't use the Darwin Core standard consistently (e.g. collector numbers might be stored in dwc:recordeBy or dwc:fieldNumber). For this reason some data preparation steps are needed before a new dataset can be imported into the application. The steps below indicate the process to follow, and we have provided some scripts and guidance to assist the process.

### Data download from GBIF

You first need to extract the data you want from GBIF. Go to the [GBIF website](https://www.gbif.org/), click the `Get data` button at the top of the page, and select `Occurrences`. On the page that opens you can set filters on the GBIF dataset to set up your download. 

First click on `Scientific name`, enter 'Tracheo' and select the option for `Tracheophyta` (this is vascular plants, you can select another taxon if that's more appropriate for your collection).

![Scientific name](/wioi-duplicate-finder-docs/gbif-scientific-name.png)

Then click `Country or area` and typing and selecting the countries you want records for. 

![Country](/wioi-duplicate-finder-docs/gbif-country.png)

Then go to `More`, click `Basis of record`, select `Preserved Specimen` and click `Apply`. This is needed to filter out other kinds of observations, such as records of living plants from iNaturalist.

![Basis of Record](/wioi-duplicate-finder-docs/gbif-basis-of-record.png)

You then have the option of filtering for specific source collections. DON'T use the `Collection`, `Collection code` or `dwc:datasetName` options under the `Record` section of the `More` filter, these are not the correct fields to use. Instead scroll down to the `Provenance` section, where you will see the `Dataset` option which you can use to choose the relevant datasets that have been published to GBIF, such as Kew, Paris, or Missouri (Tropicos). You might want to spend some time browsing the available datasets on GBIF first before you start your data download so that you can see what the datasets you want to use are called. It is recommended to filter on dataset like this so that you only get records from herbaria that are likely to have duplicate specimens for your collection. If you don't you will get records from a large number of unnecessary sources (you'll see this in the institution/collection codes step below). If you don't know already, try to find out which collections in other parts of the world your herbarium traditionally exchanged specimens with in the past - those are the ones you want to include in the `Dataset` filter. 

![Dataset](/wioi-duplicate-finder-docs/gbif-dataset.png)

Once you have selected the data you want to work with, click the `Download` button on the page, register or sign in if you need to, under the `Darwin Core Archive` section select `Configure`, then `Continue to Terms` (you don't need to change any of the options). Tick the boxes for `Data Use Agreement` and `Data Citation` after you've read the contents, and then click on `Create Download`. If the number of records is relatively small you can wait a few minutes while GBIF prepares your download (grab a cup of tea), or if it's a large dataset you can do something else and GBIF will send you an email with the download link when it's ready.

![Dataset](/wioi-duplicate-finder-docs/gbif-configure-continue.png)

Download the file to an appropriate folder on your computer, unzip it when the download is complete, and continue with the data preparation steps there. 

### Data preparation scripts

Some of the steps in this process will use Python scripts clean and update the data downloaded from GBIF. These scripts are available in the repository for the Duplicate Finder tool, [available on Github](https://github.com/ianengelbrecht/wioi-duplicate-finder), in the `data-prep` directory. You will need to clone that repository to your computer to run those scripts. Ask your favourite AI for help on how to do this. You will also need to have Python installed.

### Formatting the dataset

The Darwin Core Archive you downloaded includes a file called `occurrence.txt`. This is a tab separated file containing all the records we want to work with. However, GBIF datasets are not perfect and problems can creep into these very large dataset files. The first step of the process is therefore to format the data to ensure we can work with it properly, and to remove any problematic records. 

In the data-prep directory from the reponsitory you cloned above, there is a script called `stream-clean.py`. This script streams the records out of `occurrence.txt` into a new file called `occurrence_formatted.csv`. This is now a properly formatted CSV file that we will use for the next steps of the process. 

To run the script, open a command window in your Darwin Core archive directory, type `python "[repo path]/data-prep/stream_clean.py" .`, replacing the section in square brackets with the folder path of the duplicate finder repository you cloned, e.g. `C:/projects/duplicate-finder`,  make sure that's all inside the quotation marks, and press enter. Again if you need help, ask your favourite AI, it will know what to do. With any of the Python scripts mentioned in this file, you can get help by replacing that dot at the end of the command with `-h`.

The script will run and provide progress on the screen as it goes. It outputs several additional files also with details of any problem records it encountered. The output on the screen will tell you how many problematic records were removed from the dataset (Quarantined). This is typically a small number of records and you won't have to do anything further with them. 

![Data prep formatting output](/wioi-duplicate-finder-docs/data-prep-formatting.png)

### Filtering and fixing herbarium codes

It's important to work with standardized and accepted herbarium codes in the duplicate finder so that you can see where the records come from, and are also able to update the duplicates field appropriately. Unfortunately many herbaria don't provide the correct collection codes that we need for this (some accidentally include barcode numbers in the collection code field!), so we need to update them in the dataset. You might also find that your dataset includes records that you won't want to keep. For that reason we need to check and standardize the collection codes. This process involved three steps, extracting the unique institution/collection codes, fixing and removing records we don't want, and making those changes back in the main dataset. 

#### Extracting unique institution/collection code combinations

First we need to extract all the unique institution/collection code combinations from the dataset so we can see what we're working with and what needs to be updated. We have a script to help us, called `unique_inst_coll_codes.py`. Like above, run this script with `python "[repo path]/data-prep/unique_inst_coll_codes.py" .`. This will again show you progress as it goes, and will output a file called `occurrence_formatted_inst_coll_codes.csv` when it's complete, showing some details on the screen. If you see thousands of unique combinations it's likely because barcode numbers are being stored in the collection code field (someone didn't read the [Darwin Core field definition for dwc:collectionCode](https://dwc.tdwg.org/terms/#dwc:collectionCode)). We'll fix that in the next step. 

#### Fixing incorrect and unnecessary codes
The next step is to fix the codes in the output file `occurrence_formatted_inst_coll_codes.csv`. Right click this file and open it in Excel (or Notepad if you're comfortable working there). The output is ordered by the number of specimens for the particular institution/collection code. We'll see immediately that sometimes the herbarium code is stored in the institutionCode field. We might also see cases where institutionCode and/or collectionCode are blank. 

The first thing we want to do with this dataset is to remove any rows that we won't need in our reference dataset. We can do this by removing any rows that have small numbers of records, and rows from institutions or collections that are unlikely to have many duplicates for our collection. Work through this carefully making those changes. If you don't recognise the institution and collection codes look them up in a Google search, or use [Index Herbariorum](https://sweetgum.nybg.org/science/ih/).  

Next we need to update the collection code if it is not correct. Use the last column, `corrected` to do this (don't change anything in the institution and collection code columns, the scripts need these untouched to make changes back to the main dataset). The most common change will be where the collection code is in the institution code column - add these collection code to `corrected` in these cases. Also make sure to use the correct, formal herbarium codes (uppercase) appear correctly in the Duplicate Finder later, e.g. `NHMUK` (Natural History Museum, London) should become `BM`. 

Once you've made all the necessary changes, save the file and we'll move to the next step. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-codes.png)
<span style="font-size: 80%;">Institution and collection codes file open in Notepad, following removal of unwanted codes and corrections added.</span>


#### Updating collection codes in the main dataset

Once you've completed the two steps above we need to apply those changes back to the main dataset. For this we'll use the script `filter_collections.py`. As before, we'll run it with `python "[repo path]/data-prep/filter_collections.py" .` (you might see the pattern in how to run these scripts now). If you've changed the files names for any reason, run that script with `-h` at the end instead of the dot to see how to indicate the file names, and ask AI for help if you need to. This script will output a new file called `occurrence_formatted_filtered.csv`. We're now ready to move to the next step, standardizing collectors. 

### Standardizing collectors

We need to correct and standardize collector names for our dataset before we can use it for looking up duplicates. This step is important because you will typically be searching for duplicates using collector names and numbers. Again there are many types of issues with collector names on GBIF, especially transcription errors for herbarium labels. Hence correction and standardization are necessary first. 

Here we will need a file with all the unique collector values from the dataset (i.e. all the collectors listed for a particular specimen, which can be more than one). That dataset will include a column for primary collector, the first collector in a list of collectors for a specimen. We will use the script `generate_collectors.py` to create this list by running `python "[repo path]/data-prep/generate_collectors.py" .` like in the examples above. The output file is called `occurrence_unique_recorded_by.csv`.

Once you have generated that file, you need to open it in Excel but you need to preserve the special characters (see instructions on the [Exporting data page](./docs/exporting#opening-exported-data-in-excel)). Once you have the data open in Excel sort on the `primary_collector_lastname` and `record_count` fields so that variations of a collector name are grouped and you can see the numbers of associated records. Work through this file to correct and standardize all the collector names in `primary_collector_lastname`. Don't include special characters or initials, we just want an uppercase last name. You'll see that sometimes the name parser got it wrong and added initials instead of the last name, or other issues crept in. Just fix those all manually as quickly as you can. You might want to consult with a botanical collector names reference for your region for guidance. For very large datasets you might need a few days to complete this task, and you'll see just how messy GBIF data can be (remember these names were probably all typed in by hand). Don't change any values in the recordedBy column because we will use that to match updates back to the main dataset later. Once you've completed this task save the file again. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-collectors-excel.png)
<span style="font-size: 80%;">Open the output in Excel, go to the Data tab, select Sort and sort on primary_collector_lastname and record_count, as in this image.</span>

### Updating the main dataset

We now have a cleaned collectors dataset, so we're ready to update the main dataset and produce the final data we will import into our database. For this we will use a script called `stream_finalize.py`. This script does several things:

- it reads in the cleaned collectors file you created and uses that to create the field in the database we will use for searching collector names to find duplicate records.
- it cleans up collector numbers, removing prefixes and suffixes so we can search simply for collector numbers, like '1234' or '2025/1234'. 
- it adds a country field using the countryCodes files in the duplicates finder repository you downloaded from Github. GBIF downloads don't include country names, only country codes, but we want country names in our own records so we need this step. You're welcome to look at the country names in that field and update them as you see fit, just don't change any of the country codes. 
- fixes the formatting of collection and identification dates (many source databases include full identification dates with month and day set to January 1st, where most identification dates are year only - this is wrong).
- several other minor cleaning operations.

To run the script use `python "[repo path]/data-prep/stream_finalize.py" .`. Again if you changed any file names and need to see how to use those files replace the dot with `-h` for instructions. The output file is called `occurrence_final.csv`, this is the file you will import into your dataset, after the next step, validation.

### Validation

The output file from the previous step is the file we will import into our database for use in the Duplicate Finder application. Before we try to do that, we have one more script to run, `validate.py`. This just makes sure the dataset has everything it needs before we import it so that the application doesn't break. To run it, use `python "[repo path]/data-prep/validate.py" .`. This will tell you on the screen if there are any problems, particularly if there are missing fields or formatting issues, which you need to correct before you import the dataset. If you followed the steps above it should all be fine, if you if you opened the dataset and changed anything manually, or if you prepared the data using another approach (such as OpenRefine), or missed any of the steps above, we should catch the problems here. 

### Data import

To import your data into the database, follow the instructions on the [Settings page](./docs/settings#duplicate-records). You have the option there to append the data you've prepared to your existing reference records, or replace them completely. This will not affect your captured records at all. Best of luck!

