# Day 3 - Notes API (Express)

This project is a simple **Notes API** built with **Express**.

## Features

- Create a note
- List all notes

## Setup

1. Navigate to `Day3` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   (or `node server.js`)

## Server

- Runs on: **http://localhost:3000**

## API Endpoints

### 1) Create a note

- **POST** `/notes`
- Body (JSON):
  ```json
  {
    "title": "Note 1",
    "content": "This is a sample note"
  }
  ```
- Response:
  - `note created`

### 2) Get all notes

- **GET** `/notes`
- Response:
  - An array of notes stored in memory.

## Notes

- Notes are stored in an in-memory array (`notes`).
- Restarting the server will clear all notes.
