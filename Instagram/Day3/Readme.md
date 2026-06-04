# Instagram Backend (Day3)

Simple backend for authentication + creating posts with image upload.

## Tech Stack

- **Node.js** + **Express**
- **MongoDB** with **Mongoose**
- **JWT** (`jsonwebtoken`) for auth token
- **bcryptjs** for password hashing
- **multer** for file upload (memory storage)
- **ImageKit** (`@imagekit/nodejs`) for image hosting

## Folder Structure

- `server.js` - starts server on port 3000
- `src/app.js` - express app + route mounting
- `src/routes/`
  - `auth.routes.js` - `/api/auth/*`
  - `post.routes.js` - `/api/posts/*`
- `src/controller/`
  - `user.controller.js` - register/login
  - `post.controller.js` - create post (upload image)
- `src/models/`
  - `user.model.js` - users collection schema
  - `post.models.js` - posts collection schema
- `src/config/database.js` - MongoDB connection

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Environment Variables

Create a `.env` file in the project root with:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
jwt_token=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

> Note: ImageKit public key / url are not used in this code. Only `IMAGEKIT_PRIVATE_KEY` is referenced.

## Run the Server

```bash
npm run dev
```

Server runs at:

- `http://localhost:3000`

## API Endpoints

### Auth

#### 1) Register

**POST** `/api/auth/register`

**Body (JSON):**

```json
{
  "username": "your_username",
  "email": "you@example.com",
  "password": "your_password",
  "bio": "optional bio",
  "profileImg": "optional profile image url"
}
```

**Responses:**

- `201` - returns created user (without password) and sets `token` cookie
- `409` - if username/email already exists

#### 2) Login

**POST** `/api/auth/login`

**Body (JSON):**

```json
{
  "username": "your_username",
  "email": "you@example.com",
  "password": "your_password"
}
```

**Responses:**

- `200` - returns user and sets `token` cookie
- `404` - if user not found or password invalid

> Auth token is stored in a cookie named **`token`**.

---

### Posts

#### 3) Create Post (Upload Image)

**POST** `/api/posts/`

**Content-Type:** `multipart/form-data`

**Form Data:**

- `image` (required): the image file

**Behavior (from code):**

- Image is uploaded to **ImageKit** using `@imagekit/nodejs`
- The controller currently returns the ImageKit upload response

**Example (cURL):**

```bash
curl -X POST "http://localhost:3000/api/posts/" \
  -H "Content-Type: multipart/form-data" \
  -F "image=@./photo.jpg"
```

## Notes / Current Limitations

- `post.models.js` defines `caption`, `imgUrl`, and `user`, but the current `createPostController` does **not** create a MongoDB post document yet—it only uploads the file to ImageKit and returns the upload result.
- JWT cookie is set on register/login, but no middleware is present in this codebase to protect post routes yet.
