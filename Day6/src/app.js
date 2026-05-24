const express = require("express");
const noteModel = require("./models/note.models");
require("dotenv").config();
const app = express();
app.use(express.json());
//  postApi-/notes
// req.body-{title,desc}

app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await noteModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "note created Successfully",
    note,
  });
});
app.get("/notes", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "Notes read Successfully.",
    note,
  });
});
module.exports = app;
