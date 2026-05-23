# Day 5 - Notes REST API (Express)

This project is a simple REST API built with **Express** to manage notes in memory.

## Tech Stack

- Node.js
- Express

## Project Setup

From the `Day5` folder:

```bash
npm install
```

## Run the Server

```bash
npm run dev
```

Server starts on:

- **http://localhost:3000**

## Data Storage

Notes are stored in an in-memory array (`notes`).

- When the server restarts, the notes array resets.

## API Endpoints

### 1) Create a note

**POST** `/notes`

Request body (JSON):

```json
{
  "title": "Note title",
  "description": "Note description"
}
```

Response (201):

```json
{
  "message": "Note Created"
}
```

---

### 2) Get all notes

**GET** `/notes`

Response (200):

```json
{
  "notes": [
    {
      "title": "Note title",
      "description": "Note description"
    }
  ]
}
```

---

### 3) Delete a note by index

**DELETE** `/notes/:index`

- `:index` is the array index of the note.

Response (200):

```json
{
  "message": "Delete note successfully"
}
```

---

### 4) Update a note by index

**PATCH** `/notes/:index`

Request body (JSON):

```json
{
  "description": "Updated description"
}
```

Response (200):

```json
{
  "message": "Update Note Successfully",
  "notes": [
    {
      "title": "Note title",
      "description": "Updated description"
    }
  ]
}
```

## Notes

- `PATCH` updates only the `description` field.
