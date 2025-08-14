# Mobile Operator - AI-Powered Mobile Testing Platform

## Overview

Mobile Operator is an AI-powered mobile application testing platform that provides comprehensive testing automation, crash detection, performance analytics, and intelligent quality assurance. The platform uses machine learning to analyze app behavior patterns, generate smart test cases, and identify potential issues before they impact users. It supports cross-platform testing across iOS, Android, and hybrid applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable interface components
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **State Management**: TanStack Query (React Query) for server state management and caching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL) for scalable cloud database hosting
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Structure**: RESTful endpoints with `/api` prefix, centralized error handling middleware

### Data Storage Solutions
- **Primary Database**: PostgreSQL for relational data storage
- **ORM**: Drizzle ORM with Zod schema validation for type-safe database interactions
- **Migration System**: Drizzle Kit for database schema migrations and management
- **In-Memory Storage**: Fallback memory storage implementation for development/testing

### Authentication and Authorization
- **Session-based Authentication**: Server-side session management with PostgreSQL storage
- **User Management**: Basic user system with username/password authentication
- **Security**: Built-in security middleware for request validation and error handling

### Development and Build System
- **Monorepo Structure**: Shared types and schemas between client and server
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: Optimized client bundle with esbuild for server compilation
- **Type Checking**: Comprehensive TypeScript configuration across all modules

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### UI and Design System
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Shadcn/ui**: Pre-built component library with customizable design tokens
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit Integration**: Development environment support with runtime error overlay
- **Framer Motion**: Animation library for enhanced user interactions
- **React Hook Form**: Form management with Zod resolver for validation
- **Date-fns**: Date manipulation utilities for time-based features

### Frontend Libraries
- **TanStack Query**: Server state management with caching and synchronization
- **Wouter**: Minimal routing library for single-page application navigation
- **Class Variance Authority**: Utility for managing component variants and styling
- **CLSX**: Conditional class name utility for dynamic styling