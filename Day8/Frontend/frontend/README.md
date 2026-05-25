# Notes Frontend (React + Vite)

This is the **frontend** for the Notes CRUD application. It is built with **React** (Vite) and uses **Axios** to communicate with the backend.

## Features

- Fetch and display all notes
- Renders notes as:
  - `title`
  - `desc`

> Note: Currently `App.jsx` only supports **GET** to display notes.

## Tech Stack

- React
- Vite
- Axios

## Prerequisites

- Backend must be running and accessible at:
  - `http://localhost:3000`

## Setup

### 1) Install dependencies

```bash
cd Frontend/frontend
npm install
```

### 2) Run the frontend

```bash
npm run dev
```

## Backend API Used

The frontend fetches notes from:

- `GET http://localhost:3000/notes`
  - Response format:
  ```json
  {
    "message": "Read Data Successfully",
    "noteData": [ ... ]
  }
  ```

## File Reference

- `src/App.jsx`: Axios request + rendering of notes
