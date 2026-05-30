# Authentication - Day2

Simple Node.js (Express) + MongoDB authentication app.

It supports:

- **User registration**
- **User login**
- Sets a **JWT token in a cookie** (`jwt_token`)

---

## Tech Stack

- Node.js / Express
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- Cookie parser

---

## Prerequisites

- Node.js installed
- MongoDB running (or a MongoDB Atlas connection string)

---

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

---

## Install & Run

```bash
npm install
npm run dev
```

Server will start on:

- **http://localhost:3000**

---

## API Endpoints

All routes are mounted under:

- `/api/auth`

### 1) Register

**POST** `/api/auth/register`

**Body** (JSON):

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**: 201

- Sets cookie: `jwt_token`
- Returns: user, token, and message

---

### 2) Login

**POST** `/api/auth/login`

**Body** (JSON):

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**: 200

- Sets cookie: `jwt_token`
- Returns: user, token, and message

---

### 3) Protected (Demo)

**POST** `/api/auth/protected`

Currently this route returns a message but **does not enforce JWT validation** (there is no auth middleware protecting it yet).

**Response**: 200

```json
{
  "message": "This is Protected Route"
}
```

---

## Notes

- Passwords are hashed using **MD5** in the current implementation.
- JWT is generated using `JWT_SECRET`.
- The cookie name used is: **`jwt_token`**.

---

## Example curl commands

### Register

```bash
curl -i -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John\",\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

### Login

```bash
curl -i -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"john@example.com\",\"password\":\"password123\"}"
```
