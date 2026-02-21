# Clinic Care Platform

A full-stack web platform for small clinics to manage appointments and prescriptions.

## Current Status (Sprint 1 Baseline)
This repository currently includes:
- Backend scaffold: Django + Django REST Framework
- Frontend scaffold: Vite + React + TypeScript + Tailwind + daisyUI
- PostgreSQL setup via environment variables
- Health endpoints:
  - `GET /health`
  - `GET /api/health/` (compatibility route)

Planned features (JWT/RBAC, appointments, prescriptions, voice notes, Te Reo support) are defined in project planning docs and delivered in later sprints.

## Tech Stack
- Backend: Python 3.12, Django 5, Django REST Framework
- Frontend: Vite 5, React 18, TypeScript 5, Tailwind CSS, daisyUI
- Database: PostgreSQL 16
- Testing: PyTest + pytest-django
- Containers: Docker + Docker Compose

## Repository Structure
- `backend/` Django API service
- `frontend/` React web app
- `docker-compose.yml` local multi-service stack (`db`, `backend`, `frontend`)
- `.env.example` environment template
- `AGENTS.md` contributor/developer operating guide

## Prerequisites
- Docker Desktop (recommended), or
- Python 3.12+, Node.js 22+, PostgreSQL 16 (for non-Docker setup)

## Quick Start (Docker)
1. Create your env file:
```bash
cp .env.example .env
```
2. Start all services:
```bash
docker compose up --build
```
3. Open services:
- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:8000/health`

## Quick Start (Without Docker)
### 1) PostgreSQL
Create a local database:
- Database name: `clinic_care`
- User: `postgres`
- Password: `postgres`
- Host: `localhost`
- Port: `5432`

### 2) Backend
```bash
cd backend
python -m venv .venv
# Activate .venv (platform-specific)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

### 3) Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Use `.env.example` as a template.

Required database variables:
- `POSTGRES_HOST` (default `localhost`)
- `POSTGRES_PORT` (default `5432`)
- `POSTGRES_USER` (default `postgres`)
- `POSTGRES_PASSWORD` (default `postgres`)
- `POSTGRES_DB` (default `clinic_care`)

Backend variables:
- `DJANGO_DEBUG` (default `true`)
- `DJANGO_SECRET_KEY`
- `DJANGO_ALLOWED_HOSTS`

## Health Check
Verify backend is running:
```bash
curl http://localhost:8000/health
```
Expected response:
```json
{"status":"ok","service":"clinic-care-backend"}
```

## Test
Run backend tests:
```bash
cd backend
pytest
```

## Project Delivery Docs
- `week9-full-project-pack.md`
- `trello-sprint-operations-guide.md`

## Notes
Development follows an Agile, sprint-based delivery model managed in Trello.
