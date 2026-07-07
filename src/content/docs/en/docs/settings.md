---
title: Application Settings
description: Configure the collection code, export formats, and database backup locations.
---

The settings tab allows you to see your current reference database details and configure your local working defaults, export formats, and database backup preferences.

To access the settings:
1. Log in to the application.
2. On the dashboard, click the **Application Settings** button in the left navigation panel.

![Application Settings Panel](/wioi-duplicate-finder-docs/settings-tab.png)

---

## Reference datasets

### Duplicate records

The Duplicate Finder makes use of a reference dataset of specimen records prepared from GBIF, for a particular region and source herbaria. For example, if you know that your collection has many duplicates in Kew, you would work with GBIF data from Kew for your country or region. 

Available datasets are listed on the [Installation](./installation) page. If you would like a dataset for your region/country, please log an issue on the Github repo for the tool. It takes quite a lot of work to prepare a dataset because GBIF data are no perfect (collectors and collection codes need to be standardized, for example). The scripts for preparing datasets are also available on the Github repo if you would like to prepare a dataset yourself. 

Once you have a dataset ready for import, you can click on the Load New Dataset button, and you will be given the option to select the file to import. Note that the import will remove the existing reference records from your database and replace them with the new data. The import will take a few minutes, and then you can use the new dataset for capturing your specimens. 

### WCVP taxonomic records

The Duplicate Finder makes use of the World Catalog of Vascular Plants as its taxon backbone. The WCVP is updated twice a year and the latest version is available for 
<a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">download at this link</a>. If you want to update the WCVP dataset in your app, download the latest file from that link (`wcvp.zip`), unzip the contents, and then in the Duplicate Finder click the Import/Update WCVP button, and select the `wcvp_names.csv` file. The app will update the WCVP data and then you can continue working. 

## Configuration Settings

### Working Collection Code
- **What it is**: The standard internationally recognized acronym for your home herbarium (i.e. the herbarium you are capturing records in, e.g., `TAN` for the Tsimbazaza Herbarium, `NU` for the University of KwaZulu-Natal Herbarium, `PRE` for the National Herbarium in Pretoria).
- **How it works**: Entering a code here saves it as the default collection code. Whenever you capture or select a specimen, this value is recorded for the specimen's home institution.
- You only need to capture this value once, when you start using the app.

### Export Format
- **What it is**: The format of the comma-separated values (CSV) file generated when you export your sessions.
- **Options**:
  - **Darwin Core (DwC)**: Maps data to standard DwC headers like `catalogNumber`, `recordedBy`, `decimalLatitude`, etc.
  - **BRAHMS**: Maps data to standard BRAHMS7 headers like `BARCODE`, `COLLECTOR`, `DAY`, `MONTH`, `YEAR`, etc. (best for importing directly into a BRAHMS7 database).
- If you have another data format that you want to export to, such as Microsoft Excel, please visit the [Github page]() for the project and create new issue there will your request

### Include Grid Reference (QDS)
- **What it is**: A checkbox option to calculate the Quarter Degree Square (QDS) code.
- **How it works**: If checked, when you export your captured records, the system calculates the QDS (Quarter Degree Grid Cell) code from the GPS coordinates (`decimalLatitude` and `decimalLongitude`) and includes it in the exported dataset. QDSs are primarily used in Southern and East African herbaria, but if you have another grid reference system you would like to use please create a Github issue also.

---

## Database Backups

Because all captured specimens and sessions are stored in an offline SQLite file on your local hard drive, regular backups are critical to protect your work against data loss or hard drive failure. Backups are created automatically every time you close the application, and saved for the current day, one per day for the last week, one per week for the last month, and one per month for the last six months. Unneeded backups are pruned automatically by the application.

![Database Backups](/wioi-duplicate-finder-docs/backups.png)

### Database Backup Location
- **Field**: Shows the file path to the folder where backups are saved.
- **Choose Folder**: Opens a file explorer dialog allowing you to select a directory on your computer (or an external drive/cloud folder).

### Manual Backups
- **Back Up Now**: Click this button to make an instant backup of your database. A timestamped `.db` file containing all users, sessions, and captured records will be created in your backup folder. A success notification will display the path of the saved backup. Manual backups are not pruned from the backup history like automatic backups are. 

### Restoring a Backup
- **Restore Backup**: Click this button if you need to restore your application to a previous state. 
- You will be prompted to select a backup `.db` file.
- **WARNING**: Restoring a backup will overwrite your current local database. Ensure you have backed up any new data before proceeding.
- A confirmation dialog will appear to prevent accidental overwrites.

### Managing your backups
It's a good idea to make copies of your backup files and keep them on a separate hard drive or copy them not another computer, in case the current computer crashes, gets stolen, or falls prey to any kind of disaster. It is also good practice to keep a second copy of your backups off-site. Database backups are just a copy of the database file, so making such copies is easy. 
