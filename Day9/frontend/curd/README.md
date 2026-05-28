# Frontend (React + Vite) — Notes CRUD

This is the frontend UI for the Day9 Notes CRUD application.

## What it does

- Create a note (Title + Description)
- Fetch and display all notes
- Update a note (uses browser `prompt()`)
- Delete a note

## Tech Stack

- React (Vite)
- axios

## Backend API

All requests are sent to the backend running at:

- **Base URL:** `http://localhost:3000`

### Endpoints used

- `GET  /api/notes` (fetch notes)
- `POST /api/notes` (create note)
- `PATCH /api/notes/:id` (update note)
- `DELETE /api/notes/:id` (delete note)

## Run the frontend

1. Go to `frontend/curd/`
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`

## Notes

- Make sure the backend server is running on port **3000** before using the frontend.
