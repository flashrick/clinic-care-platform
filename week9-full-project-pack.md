# Week 9 - Full Project Pack (Markdown)
## Appointment and Prescription Management Platform for Small Clinics

| Document Control | Details |
|---|---|
| Document Version | 1.1 |
| Date | 15 Feb 2026 |
| Delivery Approach | Agile (Scrum-inspired), 5 weeks / 5 sprints (1 week each) |
| Team Size | 2 people |
| Containerization | Docker + Docker Compose |
| Cloud Target | AWS |
| Agile Tooling | Trello |
| Version Control | GitHub (Repo link: TBD) |

---

## Table of Contents
1. Project Title  
2. Project Summary  
3. Tools and Technology Stack  
4. Expected Outcomes and Goals  
5. Agile Methodology Design (Week 9 - Activity 2)  
6. Team Roles and Responsibilities  
7. Ceremonies (Events)  
8. Artefacts and Lightweight Definition of Done (DoD)  
9. Trello Workflow  
10. Product Backlog Structure (Epics)  
11. 5-Sprint Delivery Plan  
12. Quality and Testing Strategy  
13. DevOps, Docker, and AWS Deployment Strategy  
14. Risks and Mitigations  
15. Submission Assets and File Placement  

---

## 1) Project Title
**Appointment and Prescription Management Platform for Small Clinics**

---

## 2) Project Summary
This project delivers a full-stack, clinic-focused web platform for managing appointments and prescriptions with secure role-based access and iterative Agile delivery.

### 2.1 Executive Snapshot
| Item | Detail |
|---|---|
| Business Need | Small clinics need a lightweight but reliable system for appointment and prescription workflows. |
| Proposed Solution | Django/DRF backend + React/TypeScript frontend with REST APIs and JWT security. |
| Primary Users | Patient, Doctor, Admin |
| Core Value | Faster booking flow, safer prescription handling, clearer patient history access |
| Cultural Commitment | Support Te Reo Māori in UI and align with Te Tiriti o Waitangi principles |

### 2.2 Core User Flows
| User Role | Core Capability | Expected Benefit |
|---|---|---|
| Patient | Register, book, reschedule, cancel appointments | Lower admin overhead and better patient self-service |
| Doctor | View schedules, issue prescriptions, review patient records | Faster consultation workflow and safer treatment decisions |
| Admin | Manage access and operational visibility | Better governance and reduced security risk |

### 2.3 Te Tiriti Alignment
- **Partnership:** collaborative planning and shared ownership across the two-person team.
- **Participation:** inclusive UX design, including bilingual interface support.
- **Protection:** strict JWT/RBAC controls and privacy-focused system behavior.

---

## 3) Tools and Technology Stack
| Layer | Technology | Usage in This Project |
|---|---|---|
| Backend | Python 3.10+, Django, Django REST Framework | Domain modeling, REST API development, business logic |
| Frontend | Vite, React, TypeScript, Tailwind CSS, daisyUI | Responsive and maintainable user interface |
| Database | PostgreSQL | Persistent storage for users, appointments, and prescriptions |
| Authentication | JWT (`djangorestframework-simplejwt`) | Token-based auth and role-specific access |
| API Docs | `drf-yasg` (Swagger UI) | API discoverability and sprint demo support |
| Testing | PyTest | Unit/integration/security boundary testing |
| CI/CD | GitHub + GitHub Actions | Automated checks and merge gates |
| Agile Management | Trello | Backlog, sprint tracking, and team visibility |
| Deployment | Docker, Docker Compose, AWS | Consistent local setup and cloud release path |

---

## 4) Expected Outcomes and Goals
| Goal | Success Indicator | Evidence |
|---|---|---|
| Multi-role application delivered | Patient, Doctor, Admin workflows all usable | Sprint demos and acceptance checks |
| Reliable containerized environment | One-command startup for backend and DB | `docker compose up` demo |
| Strong security posture | JWT auth + RBAC enforcement on protected routes | 401/403 test coverage |
| API quality and clarity | DRF endpoints documented and tested | Swagger updates + CI reports |
| Inclusive frontend experience | Te Reo Māori toggle on key screens | UI walkthrough screenshots/demo |
| Maintainable engineering baseline | CI-gated test suite and clear docs | GitHub Actions green runs |

---

## 5) Agile Methodology Design (Week 9 - Activity 2)
### 5.1 Operating Model
| Dimension | Decision |
|---|---|
| Framework | Scrum-inspired Agile |
| Sprint Cadence | 1 week per sprint, 5 sprints total |
| Delivery Principle | Every sprint ends with an integrated, demo-ready increment |
| Feedback Loop | Sprint Review -> backlog refinement -> next sprint planning |

### 5.2 Why Agile Fits This Project
- Requirements are likely to evolve (voice notes and bilingual scope).
- Incremental delivery reduces integration risk and improves stakeholder feedback quality.
- Weekly integration with testing supports stable release readiness.

### 5.3 Agile Cycle Visual
![Activity Diagram](activity%20diagram.png)

---

## 6) Team Roles and Responsibilities
### 6.1 Role Allocation
| Role | Owner | Responsibilities |
|---|---|---|
| Product Owner (PO) | Weizhao (Ted) Tan | Prioritize backlog, define acceptance criteria, validate sprint outcomes |
| Scrum Master (SM) | Weizhao (Ted) Tan | Facilitate ceremonies, remove blockers, maintain process discipline |
| Full-stack Lead Developer | Tianxiang Wang | Build backend/frontend features and integration workflows |
| DevOps/Cloud + QA Lead | Weizhao (Ted) Tan | Docker/CI/CD setup, AWS deployment readiness, test governance |

### 6.2 Lightweight RACI (Key Activities)
| Activity | Weizhao (PO/SM) | Tianxiang (Dev) | Weizhao (DevOps/QA) |
|---|---|---|---|
| Backlog prioritization | A | C | C |
| Sprint implementation | C | R | R |
| API/UI integration | C | R | C |
| CI/test gate management | C | C | A/R |
| Release readiness review | A | C | R |

R = Responsible, A = Accountable, C = Consulted

---

## 7) Ceremonies (Events)
| Ceremony | Cadence | Timebox | Participants | Primary Output |
|---|---|---|---|---|
| Sprint Planning | Weekly | 60-90 mins | PO/SM + Dev Team | Sprint goal, selected stories, task breakdown |
| Daily Stand-up | Daily | 10-15 mins | Dev Team | Blockers surfaced, plan aligned |
| Backlog Refinement | Weekly | 30-45 mins | PO/SM + Dev Team | Story clarity, split decisions, reprioritization |
| Sprint Review | Weekly | 30-60 mins | Team + stakeholders (if available) | Demo feedback and backlog updates |
| Sprint Retrospective | Weekly | 30 mins | Team | Process improvement actions |

---

## 8) Artefacts and Lightweight Definition of Done (DoD)
### 8.1 Artefacts
| Artefact | Purpose | Owner |
|---|---|---|
| Product Backlog | Organize epics, user stories, acceptance criteria | Product Owner |
| Sprint Backlog | Commit current sprint work and tasks | Sprint Team |
| Increment | Integrated build ready for demo/use | Sprint Team |

### 8.2 DoD Quality Gates
| Gate | Minimum Condition |
|---|---|
| Code Integration | PR merged to `main` (or agreed integration branch) |
| Build and Test | GitHub Actions green, PyTest passing |
| Security | JWT/RBAC checks verified, no privilege escalation |
| Documentation | Swagger updated when API changes |
| Functional Acceptance | Story acceptance criteria met and demoable |

---

## 9) Trello Workflow
### 9.1 Board Pipeline
**Backlog -> Ready -> Sprint To Do -> In Progress -> Code Review -> Testing -> Done**

### 9.2 Column Control Table
| Column | Entry Rule | Exit Rule |
|---|---|---|
| Backlog | Story drafted with business intent | Prioritized and clarified |
| Ready | Acceptance criteria clear | Pulled into sprint |
| Sprint To Do | Sprint-approved and estimated | Work started |
| In Progress | Active implementation | PR opened |
| Code Review | PR available and linked | Review complete, changes merged |
| Testing | Build deployed/testable | Tests pass and defects resolved |
| Done | DoD fully satisfied | Included in sprint demo |

### 9.3 Card Template Fields
- Story description and acceptance criteria
- Owner (Tianxiang / Weizhao)
- PR or commit link
- DoD checklist

---

## 10) Product Backlog Structure (Epics)
| Epic | Scope | Business Outcome |
|---|---|---|
| Epic A: Authentication and RBAC | Register/login/refresh + role permissions | Secure and controlled access |
| Epic B: Appointment Management | Booking, cancel, reschedule, doctor schedule | Efficient appointment operations |
| Epic C: Patient Profiles and History | Patient profile and treatment history | Better continuity of care |
| Epic D: Prescription Workflow | Doctor creates prescriptions, patient views history | Safer and trackable medication flow |
| Epic E: Voice Recognition Notes (MVP) | Speech-to-text notes linked to appointments | Faster documentation |
| Epic F: Te Reo Māori Toggle | Bilingual UI on key screens | Inclusive and culturally responsive UX |
| Epic G: Quality, Docs, Docker, AWS | CI, tests, deployment guides, release readiness | Stable delivery and maintainability |

---

## 11) 5-Sprint Delivery Plan
| Sprint | Sprint Goal | Must-have Scope | Owners | Definition of Done Evidence |
|---|---|---|---|---|
| Sprint 1 | Foundation, Docker, CI baseline | Django/DRF scaffold<br>React/TS scaffold<br>PostgreSQL config<br>Compose for backend + DB<br>Baseline GitHub Actions + PyTest | Tianxiang: scaffold and initial pages<br>Weizhao: Docker, CI, test baseline, README | `docker compose up` works<br>`/health` returns 200<br>CI run passes |
| Sprint 2 | Authentication, JWT, RBAC | Register/login/refresh<br>Patient/Doctor/Admin roles<br>RBAC on core endpoints<br>Basic auth UI<br>Auth + permission tests | Tianxiang: auth and RBAC implementation<br>Weizhao: test scenarios and CI verification | JWT issued on login<br>Protected routes return 401/403 correctly<br>Auth tests pass |
| Sprint 3 | Appointment MVP (end-to-end) | Create/list/cancel/reschedule appointments<br>Doctor schedule view<br>Booking and schedule UI<br>Validation for required fields and past time | Tianxiang: appointment APIs + UI integration<br>Weizhao: integration checks + regression list | Demo flow complete<br>Patient sees own data only<br>Appointment tests pass |
| Sprint 4 | Prescriptions + patient records | Minimal patient profile/history<br>Doctor prescription creation<br>Patient read-only prescription history<br>Doctor/patient screens<br>Negative RBAC tests | Tianxiang: feature delivery + UI<br>Weizhao: security and regression testing | Doctor creates, patient views<br>Unauthorized access blocked (403)<br>Swagger updated |
| Sprint 5 | Voice notes MVP + Te Reo + AWS hardening | Speech-to-text capture and transcript storage<br>Te Reo Māori toggle on key screens<br>Bug fixing and error handling<br>Deployment docs and env variables<br>AWS EC2 + Compose path | Tianxiang: voice notes + language toggle<br>Weizhao: AWS deployment + final regression | Voice notes record/save/view flow works<br>Māori toggle available on key screens<br>AWS demo or deployment evidence documented<br>CI green |

### 11.1 Sprint Timeline Visual
![Sprint Timeline](sprint%20timeline.png)

---

## 12) Quality and Testing Strategy
### 12.1 Test Scope and Gates
| Test Type | Scope | Tooling | Gate |
|---|---|---|---|
| Unit Tests | Models, serializers, services, permissions | PyTest | Must pass before merge |
| Integration Tests | Appointment and prescription end-to-end workflows | PyTest + API client | Must pass in CI |
| Security Verification | JWT and RBAC boundary checks (negative cases) | PyTest | 401/403 behavior verified |
| Regression Checks | Sprint-over-sprint core path stability | Manual + automated checklist | Required before sprint review |

### 12.2 Release Readiness Checklist
| Area | Required Evidence |
|---|---|
| Functional | Demo of accepted stories |
| Quality | Green CI pipelines and passing tests |
| Security | Access control verification logs |
| Documentation | Updated README, API docs, deployment notes |

---

## 13) DevOps, Docker, and AWS Deployment Strategy
### 13.1 Environment Strategy
| Environment | Runtime Model | Key Services |
|---|---|---|
| Local Development | Docker Compose | `backend`, `db`, optional `frontend` |
| CI | GitHub Actions | Test execution, lint/check gates |
| AWS Target | EC2 + Docker Compose | Containerized app stack with managed secrets/env |

### 13.2 AWS Deployment Approach (Recommended Simple Path)
1. Provision EC2 instance and security groups.
2. Install Docker and Docker Compose.
3. Pull source, configure environment variables/secrets.
4. Run migrations and seed demo data.
5. Start services via Compose and validate health endpoints.
6. Capture deployment evidence (screenshots/log snippets) for submission.

Alternative paths can be evaluated later (ECS Fargate, ECR, ALB) after MVP stabilization.

---

## 14) Risks and Mitigations
| Risk | Probability | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Scope creep across sprints | Medium | High | Lock sprint scope after planning; defer new requests to backlog reprioritization | PO |
| Feature integration conflicts | Medium | High | Frequent merges, CI gates, and integration checks each sprint | Dev Team |
| Security/privacy misconfiguration | Low-Medium | High | Centralized permission logic, least-privilege defaults, security test coverage | DevOps/QA |
| Voice notes uncertainty | Medium | Medium | Deliver MVP first, keep enhancement backlog for later STT improvements | Dev Lead |
| AWS deployment delays | Medium | Medium | Prepare deployment checklist early and dry-run before Sprint 5 close | DevOps/QA |

---

## 15) Submission Assets and File Placement
| Asset | Expected Location | Purpose |
|---|---|---|
| `week9-full-project-pack.md` | Current folder | Main planning and delivery document |
| `activity diagram.png` | Same folder as Markdown | Agile cycle visualization |
| `sprint timeline.png` | Same folder as Markdown | 5-sprint roadmap visualization |
| `activity diagram.uml` | Same folder | Source diagram file (editable) |
| `sprint timeline.uml` | Same folder | Source timeline file (editable) |

---

**End of Document**
