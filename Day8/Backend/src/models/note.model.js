const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  title: String,
  desc: String,
});
const noteModel = mongoose.model("noteData", noteSchema);
module.exports = noteModel;
