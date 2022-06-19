const res = require("express/lib/response");

const setNotes = (req, res) => {
  res.send("setNotes");
};

const deleteNote = (req, res) => {
  res.send("deleteNote");
};

const createNote = (req, res) => {
  res.send("createNote");
};

module.exports = {
  setNotes,
  deleteNote,
  createNote,
};
