# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a React-based personal portfolio website for Ezequiel Rivero (Data Science & ML Portfolio). The site dynamically fetches repository data from GitHub's API and displays selected projects, skills, and contact information. It's deployed on GitHub Pages using a HashRouter for client-side routing.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### State Management (Redux Toolkit)
- **Store**: `src/app/store.js` - Combines `appSlice` (theme state), `projectsSlice` (project data), and `apiSlice` (RTK Query)
- **API Layer**: `src/app/apiSlice.js` - RTK Query hooks for GitHub API:
  - `useGetUsersQuery()` - Fetches user profile data
  - `useGetSocialsQuery()` - Fetches social accounts
  - `useGetProjectsQuery()` - Fetches repositories list

### Data Flow
1. `App.js` fetches GitHub repos via `useGetProjectsQuery()`
2. Filters out excluded projects (from `excludedProjects` in `config.js`)
3. Merges custom images with project data (from `projectCardImages` in `config.js`)
4. Dispatches to Redux store via `setProjects()` and `setMainProjects()`
5. Components consume from Redux using `useSelector(selectProjects)`

### Routing
- Uses `HashRouter` (required for GitHub Pages deployment)
- Routes:
  - `/` - Home page (Hero, Projects, Skills, About, Contact)
  - `/All-Projects` - Full project list
  - `*` - 404 NotFound page

### Theming
- Styled-components with ThemeProvider
- Light/dark mode toggle stored in localStorage
- Theme preference: stored > user preference > system preference
- Theme utilities in `src/utils.js`

## Configuration (`src/config.js`)

**Critical:** This is the main configuration file. All portfolio content is managed here:

- `githubUsername` - GitHub username for API calls (currently "ezemriv")
- `filteredProjects` - Array of repo names to display on home page (shows these in order)
- `excludedProjects` - Array of repo names to hide from "All Projects" page
- `projectCardImages` - Maps repo names to custom images (imports from `src/images/`)
- `moreInfo` - About Me section text content
- `skillData` - Skills icons and names (uses Iconify React)
- `resume` - Google Drive link to resume PDF
- `formspreeUrl` - Contact form endpoint
- `navLogo` - Custom navbar logo (currently null)
- `footerTheme` - Footer theme ("light" or "dark")

### Adding New Projects
1. Add project image to `src/images/`
2. Import image at top of `config.js`
3. Add repo name to `filteredProjects` array (for home page display)
4. Add image mapping to `projectCardImages` array
5. Projects are auto-fetched from GitHub API - no manual data entry needed

## Component Structure

### Pages (`src/pages/`)
- `Home.jsx` - Main landing page combining all major sections
- `AllProjects.jsx` - Complete project gallery
- `NotFound.jsx` - 404 error page

### Key Components (`src/components/`)
- `NavBar.jsx` - Navigation with theme toggle
- `Hero.jsx` - Hero section with animated text
- `Projects.jsx` - Filtered projects display (uses `filteredProjects`)
- `ProjectCard.jsx` - Individual project card with image/description
- `Skills.jsx` - Skills grid from `skillData`
- `AboutMe.jsx` - Bio section with avatar from GitHub API
- `Contact.jsx` - Contact form (uses Formspree)
- `Footer.jsx` - Footer with social links from GitHub API
- `GlobalStyles.js` - Styled-components global styles

## Deployment

The site deploys to GitHub Pages via `gh-pages` package:
- Production URL: https://ezemriv.github.io/DS-Portfolio/
- Build output: `/build` directory
- `npm run deploy` handles build and deployment
- GitHub Actions not used - deployment is manual via npm script

## Service Worker

- PWA-enabled with Workbox (registered in `src/index.js`)
- Configured in `src/serviceWorkerRegistration.js` and `src/service-worker.js`
- Currently **registered** (enabled for offline functionality)

## Key Dependencies

- **React 18** with React Router v6 (HashRouter)
- **Redux Toolkit** with RTK Query for API calls
- **Styled-components** for CSS-in-JS theming
- **React Bootstrap** for UI components
- **Iconify React** for skill icons (see https://icon-sets.iconify.design/)
- **Formspree** for contact form handling (no backend needed)

## GitHub API Integration

The portfolio dynamically fetches data from GitHub's REST API (no authentication token needed for public data):
- User profile: `https://api.github.com/users/{githubUsername}`
- Social accounts: `https://api.github.com/users/{githubUsername}/social_accounts`
- Repositories: `https://api.github.com/users/{githubUsername}/repos`

API endpoints are defined in `src/app/apiSlice.js`. If GitHub username changes, update `githubUsername` in `src/config.js`.

## Error Handling

- **ErrorBoundary** wraps entire app (`AppFallback` component)
- API errors display in-app with helpful messages pointing to config files
- Loading states handled via RTK Query `isLoading` flag

## Styling

- Base styles: `src/custom.scss` (Bootstrap SASS overrides)
- Global styles: `src/components/GlobalStyles.js` (styled-components)
- Theme switching: Light/dark modes via styled-components ThemeProvider
- Responsive design: Bootstrap grid + custom breakpoints
