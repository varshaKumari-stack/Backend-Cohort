# Day1 - Basic Auth API (JWT + Cookies)

This project is a simple Express + MongoDB (Mongoose) backend that provides a **user registration** endpoint.

## Features

- Express server
- MongoDB connection using Mongoose
- User model (name, email, password)
- Register route that:
  - Validates unique email
  - Creates a user
  - Generates a **JWT token**
  - Stores the token in an **HTTP cookie** (`jwt_token`)

## Project Structure

- `server.js` - Starts the server and connects to the database
- `src/app.js` - Express app setup and route mounting
- `src/config/database.js` - MongoDB connection
- `src/models/user.model.js` - Mongoose user schema/model
- `src/routes/auth.routes.js` - Authentication routes (currently `POST /register`)

## Setup

### 1) Install dependencies

```bash
cd Day1
npm install
```

### 2) Environment variables

Create a `.env` file in the `Day1` folder with:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3) Run the server

```bash
npm run dev
```

The server runs on:

- `http://localhost:3000`

## API Endpoints

### Register a user

**POST** `/api/auth/register`

Registers a new user and returns a JWT token.

Request body:

```json
{
  "email": "test@example.com",
  "name": "Test User",
  "password": "your_password"
}
```

Responses:

- **201 Created**

```json
{
  "message": "User Registered.",
  "user": { "_id": "...", "name": "...", "email": "...", "password": "..." },
  "token": "<jwt_token>"
}
```

- **409 Conflict** (email already exists)

```json
{
  "message": "User EmailId is already Exists."
}
```

## Notes / Improvements

- Passwords are currently stored as plain strings (no hashing). In a real app, use `bcrypt` to hash passwords.
- JWT is set in a cookie named `jwt_token`, but the app also returns the token in the JSON response.
