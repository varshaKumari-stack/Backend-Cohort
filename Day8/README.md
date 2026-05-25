# Day8 — Notes CRUD (Backend + Frontend)

## Overview

This project is a simple **Notes CRUD** application.

- **Backend**: Node.js + Express + Mongoose (MongoDB)
- **Frontend**: React (Vite) + Axios

The frontend communicates with the backend using these endpoints:

- `POST /notes`
- `GET /notes`
- `PATCH /notes/:id`
- `DELETE /notes/:id`

---

## Backend Setup (Express + MongoDB)

### 1) Install dependencies

```bash
cd Backend
npm install
```

### 2) Configure environment variables

Create a `.env` file inside the `Backend/` folder with:

```env
MONGO_URI=your_mongodb_connection_string
```

### 3) Run backend

```bash
npm run dev
```

Backend runs on: **http://localhost:3000**

---

## Frontend Setup (React + Vite)

### 1) Install dependencies

```bash
cd Frontend/frontend
npm install
```

### 2) Run frontend

```bash
npm run dev
```

The frontend fetches notes from:

- `http://localhost:3000/notes`

---

## API Details

### Create a note

`POST /notes`

- Body:

```json
{
  "title": "string",
  "desc": "string"
}
```

- Response: created note data

### Get all notes

`GET /notes`

- Response:

```json
{
  "message": "Read Data Successfully",
  "noteData": [ ... ]
}
```

### Update a note

`PATCH /notes/:id`

- Body:

```json
{
  "title": "string",
  "desc": "string"
}
```

### Delete a note

`DELETE /notes/:id`

---

## Running Both Together

1. Start MongoDB (or ensure your MongoDB Atlas URI is valid)
2. Start backend:
   - `cd Backend && npm run dev`
3. Start frontend:
   - `cd Frontend/frontend && npm run dev`

---

## Notes / Fixes

### Delete a note

`DELETE /notes/:id`

- Current backend response:
  - **200** with `{ "message": "Note Deleted" }`
