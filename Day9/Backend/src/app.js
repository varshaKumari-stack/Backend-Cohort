const express = require("express");
const noteModel = require("./model/note.model");
require("dotenv").config();
const app = express();
app.use(express.json());
app.post("/api/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await noteModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "Note Create Successfully..",
    note,
  });
});
app.get("/api/notes", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "Notes read successfully.",
    note,
  });
});
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const note = await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Delete note Successfully",
  });
});
app.patch("/api/notes/:id", async (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;
  const note = await noteModel.findByIdAndUpdate(id, { title, desc });
  res.status(200).json({
    message: "Update Successfully Data.",
    note,
  });
});
module.exports = app;
