---
title: Capture Sessions
description: Learn how to organize and manage your specimen capture groups.
---

A **Capture Session** represents a distinct batch of specimen records. For example, you might create
a session for a specific drawer, cabinet, taxonomic family, or data capture date range (e.g.,
_Malvaceae Cupboard 2_ or _15-20 June_).

Organizing your work into sessions makes data review, export, and curation straightforward.

To access your sessions:

1. Open the application and sign in.
2. Select the **Capture Sessions** tab in the dashboard left navigation.

![Capture Sessions List](/wioi-duplicate-finder-docs/sessions-tab.png)

---

## Managing Sessions

### Creating a Capture Session

1. In the text input field under **Data Capture Sessions**, type a descriptive name for your session
   (e.g., `Cupboard 2 Malvaceae`).
2. Click **Create Session** (or press Enter).
3. The session is immediately created, and the application opens the dual-pane capturing workspace
   for it.

### Switching Between Sessions

- On the dashboard, click on any session card in the sessions list.
- This will open the capturing workspace for that session, displaying any previously captured
  records at the bottom table.
- To return to the sessions list, click the arrow button at the top left of the data capture screen.

### Renaming a Session

1. Hover over a session name in the list. The text will show an underline, indicating it is
   editable.
2. Click on the session name. It will turn into an active text input field.
3. Type the new name.
4. Press **Enter** to save the changes or **Escape** to cancel renaming.

### Deleting a Session

1. Click the red **Delete** button next to the session in the dashboard list.
2. A confirmation modal will appear. Make doubly sure you want to delete the session before
   proceeding, and you should ideally only delete sessions after the data have been exported.

![Delete Session Confirmation Modal](/wioi-duplicate-finder-docs/delete-session-modal.png)

> [!CAUTION] Deleting a session permanently deletes all specimen records captured inside it. This
> action is irreversible. Always ensure you have exported your data before deleting a session.

---

## Session Status & Statistics

For each session in the dashboard list, the application displays crucial metadata:

- **Specimen Count**: A gray badge showing the total number of records captured (e.g.
  `24 specimens`).
- **Last Record**: Displays the date and time of the most recently saved or modified specimen in
  this session. If no specimens have been saved, it shows `No records captured`.
- **Last Export**: Displays the date and time the session was last exported to a CSV file.
- **Export Warning Flag**:
  - An orange warning border or badge (`Never exported` or highlighted date) will display if the
    session contains unexported changes.
  - This warning shows if the session has never been exported, OR if the last record timestamp is
    _newer_ than the last export timestamp (i.e. records have been added or edited since the last
    export).
  - This additional information helps you to manage your sessions and make sure that no data are
    lost.
