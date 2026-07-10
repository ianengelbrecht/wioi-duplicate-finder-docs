---
title: Sign up/Sign in
prev:
  link: /en/installation
  label: Installation
---

The application uses a **local database system** to store specimen records and user accounts. All
login data and captured records remain fully offline on your local computer.

## Database Initialization

When launching the application for the first time, it automatically sets up the SQLite database
environment. You will see a temporary database initialization loading screen.

![Database Initialization Loading Screen](/wioi-duplicate-finder-docs/loading-db.png)

If the database is prepared successfully:

- If a user was previously logged in on the device, the app automatically opens the dashboard.
- If no user is logged in, you will be redirected to the account login screen.

---

## Local Accounts

Because the database is stored entirely on your computer, account creation does not register you on
a remote website. Instead, it creates a local user profile within your offline database. This
enables multiple researchers using the same machine to maintain separate collections.

![Sign In & Registration Form](/wioi-duplicate-finder-docs/auth-screen.png)

### Creating an Account (Sign Up)

1. On the Sign In screen, click **Need an account? Register** at the bottom of the card.
2. Enter your desired **Username** and **Password**.
3. Click **Create Account**.
4. Once registered, the system returns you to the Sign In state to log in.

### Logging In (Sign In)

1. Enter your local **Username** and **Password**.
2. Click **Sign In**.
3. Upon success, you are logged in and redirected to the main session management dashboard.

### Logging Out

To secure your data or switch user accounts:

1. Click the **Sign Out** button located in the top-right corner of the header.
2. You will be logged out and returned to the Sign In screen immediately.

---

## Database Recovery Screen

In rare cases where the local SQLite database fails to open or gets corrupted (for example, due to
an unexpected computer shutdown), the application displays a **Database Recovery** page.

This interface provides two options:

- **Retry Check**: Attempts to re-initialize and repair the database connection.
- **Restore Backup**: Allows you to browse your local computer and restore the database state from a
  previously exported database backup file (`.db`).
