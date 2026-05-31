# Instagram - Day 1 Backend (Auth + Users)

This repo contains a simple Node.js + Express + MongoDB backend for user registration and JWT-based authentication.

## Folder structure

- `Day1/` - backend project
  - `server.js` - starts the server and connects to MongoDB
  - `src/app.js` - Express app + middleware + routes mounting
  - `src/config/database.js` - MongoDB connection (Mongoose)
  - `src/models/user.model.js` - Mongoose user schema/model
  - `src/routes/auth.routes.js` - authentication routes (currently: register)

## Tech stack

- Node.js
- Express
- Mongoose (MongoDB)
- JWT (`jsonwebtoken`)
- Cookies (`cookie-parser`)
- `dotenv`

## Prerequisites

- MongoDB running (local or Atlas)
- Node.js installed

## Setup

1. Go to the Day1 project:

   ```bash
   cd Day1
   ```

2. Create a `.env` file in `Day1/` with:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Run the server

Development (with nodemon):

```bash
npm run dev
```

Server runs on port **3000** by default.

## API

### Register user

**POST** `/api/auth/register`

Request body:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "your_password",
  "bio": "optional bio",
  "profileImg": "optional image url"
}
```

Behavior:

- Checks if `email` or `username` already exists.
- Hashes password using SHA-256.
- Creates a JWT token signed with `JWT_SECRET` (expires in `1d`).
- Sets the JWT in a cookie named `token`.

Success response: **201**

```json
{
  "message": "user registered",
  "user": {
    "username": "john_doe",
    "email": "john@example.com",
    "bio": "optional bio",
    "profileImg": "https://.../user.webp"
  }
}
```

Conflict response: **409** if user exists.

## Notes / current limitations

- The project currently only implements **registration** (`/register`).
- Password hashing uses SHA-256 (not bcrypt).
- JWT is stored in a cookie (`res.cookie('token', token)`), but no login/refresh/logout routes are present yet.
