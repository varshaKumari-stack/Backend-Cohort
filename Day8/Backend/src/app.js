const express = require("express");
const noteModel = require("./models/note.model");
require("dotenv").config();
const app = express();
app.use(express.json());
app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;
  const noteData = await noteModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "Note Create Successfully",
    noteData,
  });
});
app.get("/notes", async (req, res) => {
  const noteData = await noteModel.find();
  res.status(200).json({
    message: "Read Data Successfully",
    noteData,
  });
});
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id; //take a id from frontend side
  const noteData = delete (await noteModel.findByIdAndDelete(id));
  res.status(200).json({
    message: "Delete Data Successfully.",
  });
});
app.patch("/notes/:id", async (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;
  const noteData = await noteModel.findByIdAndUpdate(id, { title, desc });
  res.status(200).json({
    message: "Update Data Successfully",
    noteData,
  });
});

module.exports = app;
