const express = require("express");
const authRouter = require("./routes/auth.routes");
require("dotenv").config();
const cookie = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookie());
app.use("/api/auth", authRouter);
module.exports = app;
