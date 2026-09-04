# Resume GenAI

An AI-powered interview prep tool. Upload your resume, add a job description and a short self-description, and it generates a structured interview report — match score, likely technical and behavioral questions (with intent and suggested answers), skill gaps, and a day-by-day prep plan. It can also generate a tailored resume PDF from the same inputs.

## How it works

1. Sign up / log in (JWT-based auth, cookie sessions)
2. Upload a resume (PDF), paste a job description and a self-description
3. The backend parses the resume, sends everything to an LLM (via Groq) with a strict schema, and returns:
   - Match score (0–100)
   - Technical & behavioral questions, each with the interviewer's intent and how to answer
   - Skill gaps, ranked by severity
   - A day-wise preparation plan
4. Reports are saved per user and browsable later
5. A tailored resume can be generated as HTML and rendered to PDF via Puppeteer

## Stack

**Frontend** — React 19, Vite, Redux Toolkit, TanStack Query, React Router, Tailwind CSS, Radix UI / shadcn

**Backend** — Node.js, Express 5, MongoDB (Mongoose), JWT auth, Multer (file uploads)

**AI/PDF** — Groq SDK for structured generation (Zod-validated schemas), Puppeteer for HTML → PDF

## Project structure

```
resume-genai/
├── backend/
│   ├── controllers/     # auth & interview logic
│   ├── routes/          # /api/v1/auth, /api/v1/interview
│   ├── models/          # User, InterviewReport, Blacklist (Mongoose)
│   ├── services/        # AI report generation, resume PDF generation
│   └── middlewares/      # auth, file upload
└── frontend/
    ├── src/pages/        # Login, SignUp, GenerateInterviewReport, InterviewReport, PreviousInterviewReports, About
    ├── src/components/   # feature components, layouts
    └── src/app/          # Redux store & slices
```

## API

| Method | Route | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Log in |
| POST | `/api/v1/auth/logout` | Log out (blacklists token) |
| GET | `/api/v1/auth/get-me` | Get current user |
| POST | `/api/v1/interview/report` | Generate an interview report from resume + job description |
| GET | `/api/v1/interview/report/:id` | Get a specific report |
| GET | `/api/v1/interview/reports` | Get all reports for the current user |
| POST | `/api/v1/interview/resume/pdf` | Generate a tailored resume PDF |

## Links

- **Live demo:** _Coming Soon_
- **Frontend repo/folder:** [`/frontend`](https://github.com/Atishay180/resume-genai/tree/main/frontend)
- **Backend repo/folder:** [`/backend`](https://github.com/Atishay180/resume-genai/tree/main/backend)

## Getting started

```bash
# Backend
cd backend
npm install
npm run dev          # nodemon, needs a .env — see below

# Frontend
cd frontend
npm install
npm run dev           # Vite dev server
```

### Backend `.env`

```
PORT=
FRONTEND_URL=
MONGODB_URI=
JWT_SECRET=
GROQ_API_KEY=
```

## Status

Actively being built out — auth, report generation, and resume PDF export are working end to end.
