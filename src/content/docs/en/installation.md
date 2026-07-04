---
title: Installation
description: Download and installation instructions
---

## Installation

To install the Duplicate Finder you will need to download three files, the application installer, a copy of the World Catalog of Vascular Plants (WCVP) taxonomy, and a dataset with reference records (duplicates) for your area or region. Download links are below. 

#### Step 1: Download the application installer

[Application installer](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.3/duplicate-finder_0.6.3_x64-setup.exe)
The instructions below indicate how to install the application once you've downloaded it.

#### Step 2: Download the latest WCVP data
WCVP data are <a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">available here</a>. Click on the 'wcvp.zip' link there to download it and then unzip it. WCVP is the database behind the <a href="https://powo.science.kew.org/" target="_blank">Plants of the World Online (POWO)</a> website.  

#### Step 3: Select and download a reference dataset (CSV file) for your region

TODO: update these links
Select your region below. You can download data for more than one region if necessary. The dataset is zipped, so you need to unzip it also. 
- [West Indian Ocean Islands](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.0/wioi-reference-db-wioi-v0.6.0.zip)
- Southern Africa (coming soon...)

Once you have these files, double click the application installer to start the installation process. It will show you a blue screen saying Windows protected your PC. Here you can click on More Info, and then Install Anyway. The installer will run, you can accept all default options during the installation.

![Installation Blue Screen](/wioi-duplicate-finder-docs/blue-screen.png)
<span style="font-size: 80%;">Click on More Info, and then on Run Anyway.</span>


![Installer](/wioi-duplicate-finder-docs/installer.png)
<span style="font-size: 80%;">Click Next all the way through with the installer to select default options.</span>

When you run the app for the first time it will take you to the settings screen automatically, and you will need to import the WCVP and reference datasets before you will be able to start using using it. See help the [settings page](./docs/settings#) if needed.

Note that when you run the installer you will get a blue screen asking if you trust the publisher to install.

## App updates

Once installed, the app automatically checks for updates every time you start it (this needs an internet connection). If it finds an update it will display a button next to the language selector offering for you to download and install the update. The update happens automatically and the app will restart when it is completed. 

