# collab-kanban

A production-style fullstack monorepo for a collaborative Kanban board (Trello-like), built with Bun workspaces.

## Features
- Backend API with Node.js, Express, TypeScript, Prisma, PostgreSQL, Redis, JWT auth, and Socket.IO.
- Real-time task updates via board events (`taskMoved`, `taskUpdated`, `commentAdded`).
- Frontend with Next.js App Router, ShadCN UI, TanStack Query, and Tabler Icons.
- Local Dockerized stack for PostgreSQL and Redis.
- Test setup with Jest and Supertest.

## Structure
- `backend/`
  - `src/` application source
  - `prisma/` schema and migrations
  - `test/` backend tests
  - `Dockerfile`
- `frontend/`
  - `app/` App Router pages
  - `components/` UI and ShadCN components
  - `lib/` api client, query hooks, socket helpers
  - `public/`
- `docker-compose.yml`
- `.env.example`
- root `package.json` (workspace scripts)

## Prerequisites
- Bun 1.2+
- Docker and Docker Compose
- PostgreSQL and Redis (or run from compose)

## Quick start
```bash
# install dependencies
bun install

# copy env file
cp .env.example .env

# start infra
docker compose up -d

# generate Prisma client / run migrations
bun run prisma:migrate

# run apps
bun run dev:backend
bun run dev:frontend
```

To run both apps from root in one command:
```bash
bun run dev
```

## Scripts
- `bun run dev` - run backend and frontend
- `bun run dev:backend` - run backend only
- `bun run dev:frontend` - run frontend only
- `bun run build` - build backend and frontend
- `bun run test` - run backend tests
- `bun run prisma:generate` - generate Prisma client
- `bun run prisma:migrate` - run Prisma migrations

## Environment variables
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `BACKEND_URL`
- `FRONTEND_URL`
- `NEXT_PUBLIC_BACKEND_URL`
- `NEXT_PUBLIC_BACKEND_WS_URL`
