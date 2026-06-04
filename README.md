# SheyJobs Lite

Lightweight job board built with React and Firebase — a minimal, easy-to-run single-page app for posting, applying to, and managing jobs.

## Key Features

- User registration & authentication (Firebase)
- Post and manage jobs (admin and user views)
- Apply to jobs and view applications
- Notifications and alerts
- Redux for state management and Ant Design for UI components

## Tech Stack

- React 18
- Firebase (Authentication, Firestore / Realtime DB as configured)
- Redux Toolkit
- Ant Design
- react-router-dom

## Getting Started

Prerequisites

- Node.js (14+ recommended)
- npm or yarn

Install

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/vasylpryimakdev/sheyjobs-lite.git
cd sheyjobs-lite
npm install
```

2. Firebase configuration

- The project contains `src/firebaseConfig.js`. Replace the placeholder configuration in that file with your Firebase project's config (apiKey, authDomain, projectId, etc.).

3. Run the app

```bash
npm start
```

The app will open at `http://localhost:3000` by default.

## Available Scripts

- `npm start` — Starts the development server
- `npm run build` — Builds the app for production
- `npm test` — Runs the test runner
- `npm run eject` — Ejects from Create React App (irreversible)

## Project Structure (important files)

- `src/` — React source files
  - `App.js` — App entry and routes
  - `index.js` — React DOM bootstrap
  - `firebaseConfig.js` — Firebase initialization (update with your project settings)
  - `apis/` — API helper modules (`authentication.js`, `jobs.js`, `users.js`)
  - `components/` — Reusable UI components and route guards
  - `pages/` — Page components (home, login, register, job pages)
  - `redux/` — Redux slices and store
  - `stylesheets/` — Project CSS

## Notes

- The app uses Firebase v9 modular SDK. Ensure your Firebase project has Authentication enabled (Email/Password or other providers you prefer).
- If you plan to persist data to Firestore or Realtime Database, confirm the app's API helpers (`src/apis/*.js`) point to your chosen DB and rules.

## Contributing

Contributions are welcome. Open issues or pull requests for bug fixes and improvements.
