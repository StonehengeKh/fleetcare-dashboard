# FleetCare Dashboard

FleetCare is a maintenance & compliance dashboard for industrial equipment fleets
(forklifts, tractors, loaders, production line machinery).

## Problem it addresses

- Supervisors can see which assets are OK, which require maintenance soon, and which are already overdue / unsafe.
- Technicians can log maintenance / incident reports (“what happened / what was fixed / by whom / when”).
- Compliance deadlines (safety inspections, legal checks, TÜV-like obligations) are visible so no machine is operated past its allowed date.

---

## Tech stack

### Frontend (`/client`)
- React 19 + Vite
- React Router (nested layouts, error boundaries)
- Redux Toolkit + RTK Query
- react-hook-form + Zod (typed validation)
- i18next (de / en / uk)
- Tailwind-based dark industrial design system
- Vitest + React Testing Library

### Backend (`/server`)
- Node.js + TypeScript
- Express
- SQLite via Drizzle ORM
- REST API with OpenAPI contract (`openapi.yaml`)
- Centralized error handling returning consistent JSON

---

## Main features

- **Dashboard**
    - Compliance summary cards: OK / due soon / overdue / open incident reports
    - Skeleton during loading, graceful error states

- **Assets**
    - Asset list with status badges and responsible technician
    - Asset details with:
        - Maintenance log
        - Compliance tab (next / last inspection, overdue flag)

- **Maintenance Report Form**
    - Technicians can submit a new maintenance/incident report
    - Client-side validation (react-hook-form + Zod)
    - Server-side validation with JSON error messages
    - Disabled submit while sending, success toast

---

## Repository layout

```txt
client/   React app (UI, routing, store, forms, i18n)
server/   Node/Express API + SQLite (Drizzle ORM)
openapi.yaml   REST API contract
```

## Local development

### 1. Backend API
```bash
cd server
npm install
npm run dev        # http://localhost:4000
```

### 2. Frontend
```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

## Notes

- The UI is intentionally calm and industrial: dark theme, subtle gradients,
  soft shadows, and status colors (OK / due soon / overdue).
- The project demonstrates production patterns:
  feature branches, squash merge, OpenAPI contract, typed API layer,
  and consistent error handling UX.