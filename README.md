# Routecraft — Angular Nested Routes Playground

A small Angular app for practicing **nested routing**. It has an overview page and a user area with Profile and Settings child pages. The user navigation stays visible while you move between its child routes.

The pages use static sample content and CSS for the interface. Profile editing, settings controls, and data persistence are not implemented.

## Routes

| URL | Page | What it demonstrates |
| --- | --- | --- |
| `/` | Overview | Route map and links into the user area |
| `/user` | User space | Redirects to `/user/profile` |
| `/user/profile` | Profile | A child page rendered inside the user layout |
| `/user/setting` | Settings | Another child page rendered inside the user layout |

The route definitions are in [`src/app/app.routes.ts`](src/app/app.routes.ts). The `User` component contains a nested `<router-outlet>` where its child route is displayed.

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
│   │   └── user/       # Parent user route and child outlet
│   ├── profile/        # /user/profile child route
│   ├── setting/        # /user/setting child route
│   ├── app.routes.ts   # Route configuration
│   ├── app.html        # Shared application shell
│   └── app.css
└── styles.css          # Global styles and design tokens
```

## Learning goals

- Configure parent and child routes with Angular Router.
- Render child pages using a nested `<router-outlet>`.
- Navigate between routes with `routerLink`.
- Highlight the active destination with `routerLinkActive`.
- Redirect a parent route to its default child route.

## Built with

- Angular
- TypeScript
- Angular Router
- CSS
