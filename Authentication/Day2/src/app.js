const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookie = require("cookie-parser");
require("dotenv").config();
const crypto=require('crypto')
const app = express();
app.use(express.json());
app.use(cookie());
app.use("/api/auth", authRouter);
module.exports = app;
