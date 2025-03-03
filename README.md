# Local Setup

This project follows a **micro-frontend architecture**, where each micro-frontend typically resides in its own repository. However, for this sample project, all micro-frontends are combined into a **single repository** for demonstration purposes.

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (Recommended: v16 or later)
- **pnpm** (Install via:  
```sh
  npm install -g pnpm
  ```

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/VimalU1437/mf-app
```

### 2. Install Dependencies for Each Micro-Frontend
Each micro-frontend has its own directory within the repo. You need to install dependencies separately for each.

Example for the main app:
```sh
cd main_app
pnpm install
pnpm start
```

### 3. Repeat for Other Micro-Frontends
Navigate to each micro-frontend directory, install dependencies, and start the application.

Example:
```sh
cd product_list
pnpm install
pnpm start

```

```sh
cd product_view
pnpm install
pnpm start

```
```sh
cd cart
pnpm install
pnpm start

```

### 4. Running the Full Application
Once all micro-frontends are running, the main application will integrate them seamlessly. Access the app in your browser at the provided local URL.

## Notes
 - Ensure all micro-frontends are running simultaneously for full functionality.
 - If needed, modify environment variables in .env files inside each micro-frontend.