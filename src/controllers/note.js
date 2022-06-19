const { v4: uuidv4 } = require("uuid");
const { readFromDb } = require("../utils/readFromDb");

const getNotes = (req, res) => {
  // read from file
  const test = readFromDb("db");

  // return response(json)
  return res.json(test);
};

const deleteNote = (req, res) => {
  // get id of the note from req
  // get all notes from file
  // remove note from file
  // write to file
  // send response - {message:success:true}
  res.send("deleteNote");
};

const createNote = (req, res) => {
  // get payload from req
  // create uuid
  // put id and payload in a new notes obj
  // get all notes from file
  // insert new note
  // write to file(db)
  // send response - {message:success:true}
  res.send("createNote");
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
