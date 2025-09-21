# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript website for Indigo Chic Villas in Antiparos. It's a luxury hotel/villa website built with Vite, React Router, and Tailwind CSS.

## Essential Commands

```bash
# Development
npm run dev          # Start development server on localhost

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS with custom beige/brown color scheme (#F4F3EB background, #3A3532 text)
- **UI Libraries**: Radix UI (dialogs), Heroicons, Lucide React
- **Font**: Roboto (primary), Special Elite (typewriter effect)

### Project Structure
```
src/
├── App.tsx              # Main app component with routing
├── pages/
│   └── Home.tsx        # Home page with magazine-style layout
├── components/         # All UI components
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Landing hero section
│   ├── Footer.tsx      # Site footer
│   ├── Rooms.tsx       # Rooms showcase
│   ├── Gallery.tsx     # Photo gallery
│   ├── Wellness.tsx    # Wellness/spa section
│   ├── EatDrink.tsx    # Restaurant/bar section
│   └── ...            # Other feature components
├── data/
│   └── roomData.ts     # Room information data
└── types/
    └── index.ts        # TypeScript type definitions
```

### Routing Structure
- `/` - Home page
- `/rooms` - Room listings
- `/wellness` - Wellness/spa page
- `/eat-drink` - Restaurant/bar page
- `/destination` - Location information
- `/gallery` - Photo gallery
- `/privacy-policy` - Privacy policy
- `/cookies-policy` - Cookies policy

### Key Design Patterns
1. **Component Organization**: Each major section is a separate component (Hero, About, Rooms, etc.)
2. **Routing**: React Router handles navigation with ScrollToTop for page transitions
3. **Styling**: Tailwind CSS with consistent color palette (#F4F3EB, #3A3532, #8E7D67)
4. **Layout**: Magazine-style offset grid layouts on home page using CSS Grid
5. **Typography**: Consistent use of uppercase, letter-spacing, and Roboto font

## Development Notes

- The site uses a luxury hotel aesthetic with beige/brown color scheme
- Images are primarily from Unsplash (placeholder images)
- Mobile-responsive design with hamburger menu
- Smooth scrolling behavior is enabled globally
- Components use React functional components with TypeScript