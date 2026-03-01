# NestifyDashboard - Smart BirdBox Overview Dashboard

A frontend conservation dashboard application for monitoring and visualizing birdbox data across the Genesee Land Trust properties in Rochester, NY. Features an interactive map, data visualization charts, and comprehensive reporting tools.

## Features

- **User Authentication** - Secure login and registration system.
- **Dashboard Overview** - Complete birdbox monitoring and status display.
- **Data Visualization** - Interactive charts and graphs using ReCharts.
- **Interactive Maps** - Birdbox coordinate visualization with Pigeon Maps.
- **Comprehensive Reports** - Aggregated data analysis across all birdboxes.
- **Profile Management** - User account settings and preferences.
- **Responsive Design** - Optimized for desktop and tablet use.
- **Real-Time Updates** - Dynamic data display and monitoring.

## Project Overview

This is the **frontend portion** of the conservation dashboard project, designed to help the Genesee Land Trust monitor and manage their birdbox conservation efforts. The dashboard provides conservationists and researchers with tools to track, analyze, and report on birdbox data across multiple locations.

**Hosted on Netlify**: The static frontend is deployed and accessible online.

## Live Demo

🔗 **Application Pages:**

- [Login](https://gltnestify.netlify.app/login)
- [Signup](https://gltnestify.netlify.app/signup)
- [Dashboard](https://gltnestify.netlify.app/dashboard)
- [Report](https://gltnestify.netlify.app/report)
- [Map](https://gltnestify.netlify.app/map)
- [Profile](https://gltnestify.netlify.app/profile)

## Tech Stack

- **React** - UI Library & Component Architecture
- **Vite** - Build Tool & Development Server
- **ReCharts** - Data Visualization Library for Charts & Graphs
- **Pigeon Maps** - Lightweight Mapping Library for Coordinate Visualization
- **HTML5** - Structure & Content
- **CSS3** - Styling & Layout

## Installation

### Prerequisites

- Node.js 16.0 or higher.
- npm (Node Package Manager).

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Balsha98/Repository-NestifyDashboard.git
```

2. Navigate to the project directory:

```bash
cd Repository-NestifyDashboard
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

## Application Pages

### Login/Signup

- User authentication interface.
- Secure credential management.
- New user registration.
- Password validation.

### Dashboard

- Detailed view of individual birdbox data.
- Status monitoring and health indicators.
- Quick access to key metrics.

### Report

- Aggregated data from all birdboxes in the system.
- Statistical summaries and trends.
- Comparative analysis across locations.
- Exportable reports.

### Map

- Geographic display of all birdbox locations.
- Coordinate-based mapping using Pigeon Maps.
- Clickable markers with birdbox information.

### Profile

- Update username.
- Change email address.
- Password modification.

## Data Visualization

### ReCharts Integration

The dashboard uses ReCharts for creating interactive and responsive data visualizations:

- Line charts for temporal trends.
- Bar charts for comparative analysis.
- Custom tooltips and legends.

### Pigeon Maps Integration

Lightweight mapping solution for birdbox coordinate visualization:

- Fast rendering and smooth interactions.
- Customizable markers for birdbox locations.
- Minimal dependencies and small bundle size.

## Project Structure

```
Repository-NestifyDashboard/
│
├── nestify-dashboard/  # Main application directory.
│   │
│   ├── public/         # Static public files.
│   │   │
│   │   ├── media/
│   │   │   ├── icons/          # Icon files.
│   │   │   └── images/         # Image files.
│   │   │
│   │   └── nestify.svg         # Site favicon.
│   │
│   ├── source/         # Source files.
│   │   │
│   │   ├── assets/     # Application assets.
│   │   │   │
│   │   │   ├── components/     # React components.
│   │   │   │   │
│   │   │   │   ├── partials/   # Reusable component partials.
│   │   │   │   │   ├── loaders/        # Loading components.
│   │   │   │   │   ├── modals/         # Modal components.
│   │   │   │   │   ├── signs/          # Sign-related components.
│   │   │   │   │   ├── views/          # View-specific partials.
│   │   │   │   │   │   ├── auth/           # Auth page partials.
│   │   │   │   │   │   ├── dashboard/      # Dashboard page partials.
│   │   │   │   │   │   ├── invalid/        # Invalid page partials.
│   │   │   │   │   │   ├── map/            # Map page partials.
│   │   │   │   │   │   ├── profile/        # Profile page partials.
│   │   │   │   │   │   └── report/         # Report page partials.
│   │   │   │   │   │
│   │   │   │   │   ├── Logo.jsx        # Logo component.
│   │   │   │   │   └── Nav.jsx         # Navigation component.
│   │   │   │   │
│   │   │   │   ├── views/      # Main view components.
│   │   │   │   │   └── ...             # View .jsx modules.
│   │   │   │   │
│   │   │   │   └── App.jsx             # Main app component.
│   │   │   │
│   │   │   └── css/            # Stylesheets.
│   │   │       │
│   │   │       ├── partials/           # CSS partials.
│   │   │       │   ├── loaders/            # Loading styles.
│   │   │       │   ├── modals/             # Modal styles.
│   │   │       │   ├── signs/              # Sign styles.
│   │   │       │   ├── views/              # View-specific styles.
│   │   │       │   │   ├── auth/               # Auth styles.
│   │   │       │   │   ├── dashboard/          # Dashboard styles.
│   │   │       │   │   ├── invalid/            # Invalid page styles.
│   │   │       │   │   ├── map/                # Map styles.
│   │   │       │   │   ├── profile/            # Profile styles.
│   │   │       │   │   └── report/             # Report styles.
│   │   │       │   │
│   │   │       │   └── nav.css             # Navigation styles.
│   │   │       │
│   │   │       ├── responsive/         # Responsive styles.
│   │   │       │   ├── partials/
│   │   │       │   │   ├── modals/         # Responsive modal styles.
│   │   │       │   │   ├── views/          # Responsive view styles.
│   │   │       │   │   │   ├── dashboard/      # Dashboard responsive.
│   │   │       │   │   │   ├── map/            # Map responsive.
│   │   │       │   │   │   └── report/         # Report responsive.
│   │   │       │   │   │
│   │   │       │   │   └── nav.css         # Responsive nav styles.
│   │   │       │   │
│   │   │       │   └── views/
│   │   │       │       └── ...             # View-specific responsive CSS files.
│   │   │       │
│   │   │       ├── views/              # Main view styles.
│   │   │       │   └── ...             # View-specific CSS files.
│   │   │       │
│   │   │       ├── general.css         # General styling.
│   │   │       ├── reusable.css        # Reusable classes.
│   │   │       └── variables.css       # CSS variables.
│   │   │
│   │   └── app.jsx     # Application entry point.
│   │
│   ├── index.html              # Application index file.
│   ├── netlify.toml            # Netlify-specific routing rules.
│   ├── package.json            # Dependencies and scripts.
│   └── vite.config.js          # Vite configuration.
│
└── README.md           # Project documentation.
```

## Scripts

```bash
# Start development server.
npm run dev

# Build for production.
npm run build

# Preview production build.
npm run preview

# Lint code.
npm run lint
```

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## Future Enhancements

**Note**: This is the frontend portion of the project. Backend integration would include:

- Database connectivity.
- API integration for real-time data.
- User authentication with backend.
- Export functionality to PDF/CSV.
- Data persistence.

## About Genesee Land Trust

The Genesee Land Trust is a non-profit organization dedicated to protecting and preserving natural areas in the Genesee River watershed region of Rochester, NY. This dashboard supports their conservation efforts by providing tools to monitor and analyze birdbox data across their managed properties.

## Let's Connect

If you enjoyed this project or have any questions, feel free to reach out!

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balsa.bazovic@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/balsha-bazovich)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balsha98)

⭐ If you found this project helpful, please consider giving it a star!
