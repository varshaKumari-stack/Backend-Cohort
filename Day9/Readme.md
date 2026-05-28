# Day 9 — Notes CRUD (MERN-style)

This project contains a simple **Notes CRUD app** built with:

- **Backend**: Node.js + Express + Mongoose (MongoDB)
- **Frontend**: React + Vite

## Folder Structure

- `Backend/`
  - `server.js` - starts the server on port `3000`
  - `src/app.js` - CRUD API routes (`/api/notes`)
  - `src/config/database.js` - connects to MongoDB using `MONGO_URI`
  - `src/model/note.model.js` - Mongoose schema/model

- `frontend/curd/`
  - React UI that calls the backend APIs using `axios`

## Backend (API)

### Base URL

`http://localhost:3000`

### Endpoints

- `POST /api/notes`
  - Body: `{ "title": string, "desc": string }`
- `GET /api/notes`
  - Returns all notes
- `PATCH /api/notes/:id`
  - Body: `{ "title": string, "desc": string }`
- `DELETE /api/notes/:id`

### Setup

1. Go to `Backend/`
2. Create a `.env` file with:
   - `MONGO_URI=your_mongodb_connection_string`
3. Install dependencies and run the server.

## Frontend (React)

### Notes

The frontend (in `frontend/curd/`) calls the backend at:
`http://localhost:3000/api/notes`

### Setup

1. Go to `frontend/curd/`
2. Install dependencies and run Vite.

## Run the Project

### 1) Start Backend

- Runs on: `http://localhost:3000`

### 2) Start Frontend

- Runs Vite dev server (typically `http://localhost:5173`)

Open the React app, and you can create, view, update, and delete notes.
