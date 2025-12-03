# Nithen AI - Workplace Wellness & Professional Development Platform

## Overview

Nithen AI is a single-page web application designed to strengthen human relationships and build "relationship capital" through AI-powered connection tools. The platform helps users maintain meaningful connections with family, friends, and professional networks by providing smart suggestions, gentle reminders, and relationship management features. The application features a marketing landing page with sections covering the product's value proposition, team information, and a waitlist signup flow for early access.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (single-page application)
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**UI Component System**
- Shadcn UI component library with "new-york" style preset
- Radix UI primitives for accessible, unstyled component foundations
- TailwindCSS for utility-first styling with custom design tokens
- Inter font family (Google Fonts) for typography
- Custom color system using HSL values with CSS variables for light/dark mode support
- Component structure follows atomic design principles with reusable UI primitives

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- Form validation using React Hook Form with Zod resolvers
- Toast notifications for user feedback via custom toast hook

**Design System**
- Custom spacing scale (4, 6, 8, 12, 16, 20, 24) for consistent rhythm
- Responsive breakpoints: mobile-first with md (768px) and lg (1024px+)
- Design inspired by modern SaaS landing pages (Linear, Stripe, Vercel)
- Gradient backgrounds and subtle animations for visual polish
- Fixed navigation bar with smooth scroll behavior

**Page Structure**
- Single Home page composed of modular sections:
  - Hero with value proposition and CTA
  - Social proof with testimonials
  - Why (problem statement with statistics)
  - How (6-step process explanation)
  - Who (target audience)
  - Founder message with photo
  - Team showcase
  - Contact/waitlist signup
  - Final inspiration/CTA section
  - Footer with links

### Backend Architecture

**Server Framework**
- Express.js as the web server framework
- TypeScript for type safety across the stack
- ESM modules throughout (type: "module" in package.json)
- Custom request logging middleware for API endpoints
- JSON body parsing with raw body preservation for webhooks

**API Design**
- RESTful API endpoints under `/api` prefix
- Two main endpoints:
  - `POST /api/focus-group-signup` - Create new waitlist signups
  - `GET /api/focus-group-signups` - Retrieve all signups (admin)
- Input validation using Zod schemas shared between client and server
- Consistent error handling with appropriate HTTP status codes

**Development & Production Modes**
- Development: Vite middleware integration for HMR and instant feedback
- Production: Static file serving from compiled dist directory
- Separate build processes for client (Vite) and server (esbuild)

### Data Storage Solution

**Database**
- PostgreSQL via Neon serverless platform (@neondatabase/serverless)
- Connection pooling for efficient database connections
- Schema management with Drizzle ORM

**Schema Design**
- Two main tables:
  - `users` - Basic user authentication (id, username, password)
  - `focus_group_signups` - Waitlist/early access signups (id, name, email, createdAt)
- UUID generation using PostgreSQL's gen_random_uuid()
- Timestamps with automatic defaulting to current time

**Data Access Layer**
- Repository pattern via IStorage interface and DatabaseStorage implementation
- Type-safe queries using Drizzle ORM's query builder
- Shared TypeScript types between database schema and application code
- Zod schemas derived from Drizzle tables for validation

**Migrations**
- Drizzle Kit for schema migrations
- Migration files stored in `./migrations` directory
- Push-based deployment with `db:push` command

## External Dependencies

**UI & Component Libraries**
- Radix UI ecosystem (20+ component primitives for accessibility)
- Shadcn UI for pre-styled component implementations
- Lucide React for iconography
- CMDK for command palette functionality
- Embla Carousel for image/content carousels
- React Day Picker for date selection
- Vaul for drawer components

**Styling & Design**
- TailwindCSS for utility-first styling
- PostCSS with Autoprefixer for browser compatibility
- Class Variance Authority for component variant management
- clsx and tailwind-merge for conditional className composition
- Google Fonts (Inter) loaded via CDN

**Data Fetching & Forms**
- TanStack Query for API state management
- React Hook Form for form handling
- Zod for schema validation and type inference
- @hookform/resolvers for integrating Zod with React Hook Form

**Database & ORM**
- Neon serverless PostgreSQL
- Drizzle ORM for type-safe database queries
- drizzle-zod for deriving Zod schemas from Drizzle tables
- drizzle-kit for migrations

**Development Tools**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TSX for running TypeScript directly in development
- esbuild for server bundling in production
- TypeScript compiler for type checking

**Utilities**
- date-fns for date manipulation
- nanoid for generating unique identifiers
- connect-pg-simple for PostgreSQL session storage (infrastructure for future auth)