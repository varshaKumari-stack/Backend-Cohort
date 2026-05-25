# Notes CRUD API (Day 7)

A simple REST API built with **Express** and **MongoDB (Mongoose)** to perform CRUD operations on notes.

## Features

- Create a note
- Get all notes
- Update a note
- Delete a note

## Tech Stack

- Node.js
- Express
- Mongoose
- dotenv

## Project Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
```

### 3) Run the server (dev)

```bash
npm run dev
```

Server will start on:

- `http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:3000`

### Create Note

**POST** `/notes`

**Body** (JSON):

```json
{
  "title": "My Note",
  "desc": "Note description"
}
```

### Get All Notes

**GET** `/notes`

**Response**:

```json
{
  "message": "Note fetch successfully",
  "note": [ ... ]
}
```

### Update Note

**PATCH** `/notes/:id`

**Params**:

- `id` (string): MongoDB document id

**Body** (JSON):

```json
{
  "title": "Updated title",
  "desc": "Updated description"
}
```

### Delete Note

**DELETE** `/notes/:id`

**Params**:

- `id` (string): MongoDB document id

**Response**:

```json
{
  "message": "Deleted note Successfully"
}
```

## Notes

- The `notes` collection schema contains:
  - `title` (string)
  - `desc` (string)
 
