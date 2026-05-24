# Day6 - Notes API (Express + MongoDB)

## Backend-Cohort Notes API (Day 6)

This project is a simple backend to perform CRUD basics for notes using Express + MongoDB.

A simple Notes REST API built using **Express** and **Mongoose**.

## Features

- Create a note: `POST /notes`
- Read all notes: `GET /notes`

## Tech Stack

- Node.js
- Express
- Mongoose (MongoDB)
- dotenv

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create an environment file:
   - Rename `.env.example` to `.env` if provided, or create `.env` manually.
   - Add your MongoDB connection string:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   The server runs on:
   - `http://localhost:3000`

## API Endpoints

### 1) Create a note

**POST** `/notes`

Request body:

```json
{
  "title": "Sample Title",
  "desc": "Sample Description"
}
```

Response (201):

```json
{
  "message": "note created Successfully",
  "note": {
    "_id": "...",
    "title": "...",
    "desc": "...",
    "createdAt": "..."
  }
}
```

### 2) Get all notes

**GET** `/notes`

Response (200):

```json
{
  "message": "Notes read Successfully.",
  "note": [
    {
      "_id": "...",
      "title": "...",
      "desc": "..."
    }
  ]
}
```

## Project Structure

- `server.js` - Starts the server and connects to MongoDB
- `src/config/database.js` - MongoDB connection
- `src/app.js` - Express app + routes
- `src/models/note.models.js` - Mongoose schema/model

## Notes

- The `/notes` POST endpoint expects `title` and `desc` in the request body.
- Make sure `MONGODB_URI` is set correctly before running.
