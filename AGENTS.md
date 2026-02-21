# AGENTS.md

## Purpose
This file is for AI coding agents (Codex) working in this repository.
Do not treat this as end-user documentation.

## Repo Scope
Current baseline is Sprint 1:
- Backend scaffold: Django + DRF
- Frontend scaffold: Vite + React + TypeScript + Tailwind + daisyUI
- Database: PostgreSQL
- Health endpoint: `/health` (compatibility route: `/api/health/`)

## Directory Map
- `backend/` Django project
- `frontend/` React app
- `docker-compose.yml` local services (`db`, `backend`, `frontend`)
- `.env.example` environment template
- `README.md` user-facing guide

## Agent Working Rules
- Keep all code, docs, comments, commit messages, and UI copy in English.
- Keep comments short and practical.
- Prefer minimal, focused changes over broad refactors.
- Do not introduce new frameworks without explicit request.
- Keep backend and frontend in sync when API paths change.
- When changing setup or run behavior, update `README.md` in the same task.

## Backend Conventions
- Framework: Django + DRF.
- Database config must come from env vars (`POSTGRES_*`).
- Health endpoint contract:
  - Path: `/health`
  - Response: `{"status":"ok","service":"clinic-care-backend"}`
  - Status: `200`
- Keep `/api/health/` compatibility unless explicitly removed.

## Frontend Conventions
- Framework: Vite + React + TypeScript.
- Use Tailwind + daisyUI for UI styling.
- Local API calls should work through Vite proxy.
- Keep the health-check indicator functional on the landing page.

## Verification Commands (Agent)
Run what is available in the environment:
- Backend syntax check: `python3 -m compileall backend`
- Backend tests: `cd backend && pytest`
- Compose validation: `docker compose config`
- Full stack run (if Docker access exists): `docker compose up --build`

## Sprint 1 Done Conditions
- Backend scaffold is runnable.
- Frontend scaffold is runnable.
- PostgreSQL connection is env-driven.
- `/health` returns 200 with expected JSON.

## Documentation Boundary
- `README.md` is user-facing.
- `AGENTS.md` is agent-facing.
