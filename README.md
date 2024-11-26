# Immverse.AI Full Stack Developer Task

## Project Overview

This project demonstrates the use of **React** for building the frontend of the Immverse.AI Full Stack Developer task. The UI is built with React components, styled using **CSS**, and icons are added using **React Icons**. The application is deployed on both Vercel and Netlify.

## Project Structure

The project is organized as follows:

```
immverse-ai/
├── dist/                  # Production build files
├── node_modules/          # Installed dependencies
├── public/                # Static files (e.g., images, icons)
│   └── index.html         # Main HTML file
├── src/                   # Source files
│   ├── components/        # Reusable React components
│   │   ├── Header.jsx     # Header component
│   │   ├── MainComponents.css # Styles for main components
│   │   ├── MainComponents.jsx  # Main components logic
│   │   └── Sidebar.jsx    # Sidebar component
│   ├── App.css            # App-wide CSS styles
│   ├── App.jsx            # Root React component
│   ├── index.css          # Global CSS styles
│   ├── main.jsx           # Main entry point for React
│   └── index.js           # Entry point for application logic
├── .gitignore             # Git ignore configuration
├── eslint.config.js       # ESLint configuration
├── package-lock.json      # Locked versions of installed packages
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm**

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Sumitsahani/immverse.ai.git
   cd immverse.ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Features

- Built with **React** for dynamic and responsive user interfaces.
- Styled using **CSS** for custom styles.
- **React Icons** used to enhance the visual experience.
- Clean and responsive UI with components like `Header` and `Sidebar`.
- Deployed and accessible via [Vercel](https://immverse-ai.vercel.app/) and [Netlify](https://comfy-mooncake-276f29.netlify.app/).

## Deployment

- Vercel: [https://immverse-ai.vercel.app/](https://immverse-ai.vercel.app/)
- Netlify: [https://comfy-mooncake-276f29.netlify.app/](https://comfy-mooncake-276f29.netlify.app/)
