# Day 4 - Notes REST API (Express)

This project is a simple REST API built with **Express** to manage notes in memory.

## Tech Stack

- Node.js
- Express

## Project Setup

From the `Day4` folder:

```bash
npm install
```

## Run the Server

```bash
npm run dev
```

The server will start on:

- **http://localhost:3000**

## API Endpoints

All notes are stored in-memory (an array). Data resets when the server restarts.

### 1) Create a note

**POST** `/notes`

Request body (JSON):

```json
{
  "title": "Note title",
  "description": "Note description"
}
```

Response:

- `note Created`

---

### 2) Get all notes

**GET** `/notes`

Response:

- An array of notes

Example:

```json
[
  {
    "title": "Note title",
    "description": "Note description"
  }
]
```

---

### 3) Delete a note by index

**DELETE** `/notes/:index`

- `:index` is the array index of the note.

Response:

- `note deleted successfully`

---

### 4) Update a note by index

**PATCH** `/notes/:index`

Request body (JSON):

```json
{
  "description": "Updated description"
}
```

Response:

- `note update successfully`

## Notes

- The `PATCH` route updates only the `description` field.
- Because storage is in-memory, the notes array is cleared when the server restarts.
