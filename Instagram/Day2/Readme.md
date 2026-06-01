# Instagram - Day2 (Auth Module)

This project is a Node.js + Express backend that provides basic **user registration and login** with JWT stored in an **httpOnly cookie**.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (jsonwebtoken)
- Cookie handling (cookie-parser)
- Password hashing (crypto - SHA256)

## Folder Structure

- `server.js` - Server entry point
- `src/app.js` - Express app setup and routes
- `src/config/database.js` - MongoDB connection
- `src/routes/auth.route.js` - Auth routes
- `src/controller/auth.controller.js` - Register/Login controller logic
- `src/models/user.model.js` - User schema/model

## API Endpoints

### 1) Register

**POST** `/api/auth/register`

**Body (JSON):**

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "yourPassword",
  "bio": "Hello!",
  "profileImg": "https://..."
}
```

**Responses:**

- `201` - user created and `jwt_token` cookie is set
- `409` - user already exists

### 2) Login

**POST** `/api/auth/login`

**Body (JSON):**

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "yourPassword"
}
```

> Note: Login accepts either `username` or `email` due to `$or` query.

**Responses:**

- `200` - user logged in and `jwt_token` cookie is set
- `404` - user not found
- `401` - wrong password

## JWT Cookie

- Cookie name: `jwt_token`
- Expiration: `1d`
- JWT payload includes: `{ id: user._id }`

## Environment Variables

Create a `.env` file in the project root and set:

- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - secret used to sign JWT

## Run the Project

### Development

```bash
npm run dev
```

Server will start on:

- **http://localhost:3000**

## Notes / Observations

- Passwords are hashed using **SHA256** (not bcrypt). Consider upgrading to a stronger password hashing algorithm for production.
- JWT is stored in a cookie; make sure your frontend/backend cookie settings (e.g., `httpOnly`, `secure`, `sameSite`) match your environment.
