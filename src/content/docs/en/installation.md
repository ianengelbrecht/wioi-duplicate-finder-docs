---
title: Installation
description: Download and installation instructions
---

To get started with the Duplicate Finder, you'll need to download three things: the application installer, a copy of the World Checklist of Vascular Plants (WCVP) taxonomy, and a reference specimen dataset for your region. You can find the links for each of these below. 

#### Step 1: Download the application installer

[Application installer](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.3/duplicate-finder_0.6.3_x64-setup.exe)

We've included step-by-step instructions below on how to run this installer once your download completes.

#### Step 2: Download the latest WCVP data

The latest WCVP data is <a href="https://sftp.kew.org/pub/data-repositories/WCVP/" target="_blank">available here</a>. Click on the `wcvp.zip` link to download it, and then unzip the archive on your computer. WCVP is the official taxonomic backbone behind the <a href="https://powo.science.kew.org/" target="_blank">Plants of the World Online (POWO)</a> portal.  

#### Step 3: Select and download a reference dataset (CSV file) for your region

TODO: update these links
Select and download your region's reference dataset from the list below. (You're welcome to download multiple regions if your collection covers them). These datasets are zipped, so you'll need to unzip them after downloading. 
- [West Indian Ocean Islands](https://github.com/ianengelbrecht/wioi-duplicate-finder/releases/download/app-v0.6.0/wioi-reference-db-wioi-v0.6.0.zip)
- Southern Africa (coming soon...)

---

### Installing the Application

Once you've downloaded the files, double-click the application installer (`.exe`) to start installing.

Because the app is not signed with a commercial certificate, Windows SmartScreen will show a blue warning screen saying **Windows protected your PC**. Don't worry! Click **More info**, and then click **Run anyway** to proceed.

![Installation Blue Screen](/wioi-duplicate-finder-docs/blue-screen.png)
<span style="font-size: 80%;">Click on More Info, and then on Run Anyway.</span>

The installer will run, and you can simply accept the default options to complete the installation.

![Installer](/wioi-duplicate-finder-docs/installer.png)
<span style="font-size: 80%;">Click Next all the way through with the installer to select default options.</span>

The first time you run the app, it will automatically take you to the settings screen. You'll need to import the WCVP file (`wcvp_names.csv`) and your region's reference dataset (`occurrence_final.csv`) before you can search for duplicates or capture records. If you need a hand with this step, check out the [settings page](./docs/settings).

### App updates

Once installed, the app will automatically check for updates every time you open it (as long as you have an active internet connection). If a new update is available, a notification button will appear in the top header next to the language selector.

Clicking this button will download and install the update in the background, and the app will restart automatically once it's finished.
