# Backend Cohort - Day-wise Projects

This repository contains day-wise backend assignments for the **Backend Cohort**:

- Express basics (Day 1–2)
- Notes APIs (Day 3–5)
- Notes CRUD with MongoDB + Mongoose (Day 6)

> Each day is a separate Node/Express project inside its own folder.

## Folder Structure

- **Day1/**: Basic Express server
- **Day2/**: Express routes (`/`, `/home`, `/about`)
- **Day3/**: Notes API (`POST /notes`, `GET /notes`) in memory
- **Day4/**: Notes REST API with CRUD-style operations (in memory)
- **Day5/**: Notes REST API (improved responses/structure) in memory
- **Day6/**: Notes API with Express + MongoDB (Mongoose)
- **Day7/**: Notes CRUD API (Express + MongoDB)
- **Day8/**: Notes CRUD (Backend + Frontend)

## How to Run (Per Day)

Each day is a separate project.

1. Go to the required day folder (example: Day 3):
   ```bash
   cd Day3
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (development):
   ```bash
   npm run dev
   ```

## Port

Each project runs on **http://localhost:3000** (default).

## Notes

- Data is in-memory for Day 3–Day 5, so notes reset when the server restarts.
- Day 6/7/8 uses MongoDB; make sure `MONGODB_URI` is set in `.env`.
