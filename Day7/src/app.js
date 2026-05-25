const express = require("express");
const noteModel = require("./models/note.model");
require("dotenv").config();

const app = express();
app.use(express.json());

//POST API-/notes
//const {title,desc}=req.body

app.post("/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await noteModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "note create Successfully.",
    note,
  });
});
app.get("/notes", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "Note fetch successfully",
    note,
  });
});
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const note = delete (await noteModel.findByIdAndDelete(id));
  res.status(200).json({
    message: "Deleted note Successfully",
  });
});
//params- single value k lye use (like:id)
app.patch("/notes/:id", async (req, res) => {
  const { title, desc } = req.body;
  const id = req.params.id;
  const note = await noteModel.findByIdAndUpdate(id, { title, desc });
  res.status(200).json({
    message: "Successfully Updated Note",
    note,
  });
});
module.exports = app;
