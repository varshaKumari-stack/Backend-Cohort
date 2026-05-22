const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/home", (req, res) => {
  console.log("This is Home page");
});
app.get("/about", (req, res) => {
  res.send("Hello, This is About Page");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
