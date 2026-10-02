# Routecraft — Angular Nested Routes Playground

A small Angular app for practicing **Angular Router, nested routes, and lazy loading**. It has an overview page, a user area with Profile and Settings child pages, and a static admin dashboard. The user navigation stays visible while you move between its child routes.

The pages use static sample content and CSS for the interface. The admin dashboard's route counts and descriptions are illustrative, not live application data. Profile editing, functional settings controls, backend integration, and data persistence are not implemented.

## Routes

| URL | Page | What it demonstrates |
| --- | --- | --- |
| `/` | Overview | Route map and links into the user area |
| `/admin` | Admin panel | Standalone page loaded on demand with `loadComponent` |
| `/user` | User space | Lazily loaded parent route; redirects to `/user/profile` |
| `/user/profile` | Profile | A child page rendered inside the user layout |
| `/user/setting` | Settings | Lazily loaded child page rendered inside the user layout |

The route definitions are in [`src/app/app.routes.ts`](src/app/app.routes.ts). The `User` component contains a nested `<router-outlet>` where its child route is displayed. The User, Settings, and Admin pages use `loadComponent` so Angular can load them when their routes are visited.

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads the app when source files change.

## Useful commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm test` | Run unit tests |

## Project structure

```text
src/
├── app/
│   ├── pages/
│   │   ├── home/       # Overview route
│   │   ├── user/       # Parent user route and child outlet
│   │   └── admin/      # Static admin dashboard (/admin)
│   ├── profile/        # /user/profile child route
│   ├── setting/        # /user/setting child route
│   ├── app.routes.ts   # Route configuration
│   ├── app.html        # Shared application shell
│   └── app.css
└── styles.css          # Global styles and design tokens
```

## Learning goals

- Configure parent and child routes with Angular Router.
- Lazy-load standalone page components with `loadComponent`.
- Render child pages using a nested `<router-outlet>`.
- Navigate between routes with `routerLink`.
- Highlight the active destination with `routerLinkActive`.
- Redirect a parent route to its default child route.
- Build a static admin dashboard for exploring route metadata and lazy-loading concepts.

## Built with

- Angular
- TypeScript
- Angular Router
- CSS
