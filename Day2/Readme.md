# Day 2 - Express Server

This folder contains a simple Express server created for Day 2.

## What’s inside

- **Server (`Server.js`)**
  - `GET /` → returns **Hello World**
  - `GET /home` → logs **This is Home page** to the console
  - `GET /about` → returns **Hello, This is About Page**

- **Dependencies**
  - `express`

## Setup

1. Open a terminal in the **Day2** folder.
2. Install dependencies:
   ```bash
   npm install
   ```

## Run the server

### Development (with nodemon)

```bash
npm run dev
```

The server starts on:

- **http://localhost:3000**

## Test Endpoints

- `http://localhost:3000/`
- `http://localhost:3000/home`
- `http://localhost:3000/about`

## Notes

- The `/home` route currently only logs to the console and does not send a response body.
