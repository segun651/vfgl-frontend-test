# VFGL Frontend Test

A frontend coding test project for VFGL. This repository contains a small single-page application that demonstrates UI implementation, component structure, state management.



## Table of contents

- Project overview
- Tech stack
- Project goals & acceptance criteria
- Prerequisites
- Getting started
- Available scripts
- Troubleshooting


## Project overview

This repository is intended to be a focused frontend exercise. It should demonstrate clean code, accessible UI, responsive layout, and maintainable architecture. Typical deliverables include:

- Interactive UI matching provided design or wireframes
- Component-driven structure with clear separation of concerns
- State management (local state or chosen state library)
- API integration (mocked or real)

I
## Tech stack

- Framework: React (v18+) with TypeScript
- Bundler / dev server: Vite (recommended) or Create React App
- Styling:Tailwind CSS
- State: React built-in state + Context or lightweight state library (optional)

-



## Project goals & acceptance criteria

- UI implements the main screens and interactions described in the spec
- Components are reusable and well-structured
- Responsive and accessible (keyboard navigation, semantic HTML, alt text)
- Error handling for network and edge cases
- Tests cover core components and logic


## Prerequisites

- Node.js LTS (16+ recommended)
- npm (8+) or Yarn / pnpm
- Git

## Getting started

1. Clone the repo
  git clone <repo-url>
  cd vfgl-frontend-test

2. Install dependencies
  npm install
  # or
  yarn install
  # or
  pnpm install

3. Start the dev server
  npm run dev
  # or
  yarn dev

Open http://localhost:5173 (Vite default) or the URL shown in your terminal.

## Available scripts


- npm run dev — start development server
- npm run build — production build
- npm run preview — preview production build locally
- npm run test — run unit tests
- npm run test:watch — run tests in watch mode
- npm run lint — run ESLint
- npm run format — run Prettier formatting
- npm run typecheck — run TypeScript type check (if using TS)

Example package.json scripts:
{
  "scripts": {
   "dev": "vite",
   "build": "vite build",
   "preview": "vite preview --port 4173",
   "test": "vitest",
   "test:watch": "vitest watch",
   "lint": "eslint --ext .ts,.tsx src",
   "format": "prettier --write .",
   "typecheck": "tsc --noEmit"
  }
}



Deployment options:
- Vercel, Netlify, 




## Troubleshooting

- Dev server not starting: ensure Node version matches requirements and dependencies installed.
- Type errors: run npm run typecheck and fix TypeScript issues.
- Tests failing: run individual tests in watch mode to inspect failures.

