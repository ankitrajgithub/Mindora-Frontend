# Mindora Frontend

A lightweight React + Vite frontend for the Mindora app. It provides:

- User authentication (sign up / sign in)
- A dashboard to add / view content cards (YouTube videos and Twitter posts)
- A simple client-side content refresh loop + sharing flow

## ✅ Built With

- **React 19** + **TypeScript**
- **Vite** as the build tool
- **Tailwind CSS** for styling (via `@tailwindcss/vite`)
- **React Router v7** for page routing
- **Axios** for API communication

## 🚀 Getting Started

### 1) Prerequisites

- Node.js (≥ 20)
- npm (bundled with Node.js)

### 2) Clone & Install

```bash
cd path/to/Projects
cd "Mindora Frontend"
npm install
```

### 3) Configure Environment

Copy the example env file and update the backend URL if needed:

```bash
cp .env.example .env
```

By default, `.env.example` points at:

```env
VITE_BACKEND_URL=http://localhost:3000
```

> The frontend expects a backend to exist at `VITE_BACKEND_URL` and uses it for auth and content APIs.

### 4) Run Locally

```bash
npm run dev
```

Then open: **http://localhost:5173**

### 5) Build / Preview

```bash
npm run build
npm run preview
```

## 📁 Project Structure

- `src/`
  - `pages/` – Signin / Signup / Dashboard routes
  - `components/` – UI components (buttons, cards, modals, sidebar)
  - `hooks/` – `useContent` fetches the content list from the backend
  - `icons/` – SVG icon components

## 🔌 API Dependencies

This frontend calls these endpoints (based on `VITE_BACKEND_URL`):

- `POST /api/v1/signup` – create new user
- `POST /api/v1/signin` – authenticate user (stores token in `localStorage`)
- `GET /api/v1/content` – fetch saved content (requires `Authorization` header)
- `POST /api/v1/content` – add new content card (requires `Authorization` header)
- `POST /api/v1/brain/share` – generate share link (requires `Authorization` header)

## 🧠 Notes

- Token management is done via `localStorage` (`token`).
- The dashboard refreshes content every 10 seconds.
- The share flow generates a link based on the response hash (example: `http://localhost:5173/share/<hash>`).

---

If you’re running the backend from the sibling folder, start it first (e.g., `Mindora Backend`).
