const { v4: uuidv4 } = require("uuid");
const { readFromDb, writeToDb } = require("../utils/interactWithDb");

const getNotes = (req, res) => {
  // read from file
  const db = readFromDb("db");

  // return response(json)
  return res.json(db);
};

const deleteNote = (req, res) => {
  // get id of the note from req
  const { id } = req.params;

  // get all notes from file
  const db = readFromDb("db");
  // remove note from file
  const filteredDb = db.filter((item) => {
    item.id !== id;
  });
  console.log(filteredDb);

  // write to file
  writeToDb("db", filteredDb);
  const updatedDb = readFromDb("db");
  // send response - {message:"success!"}
  res.json({
    message: "successfully delated the note!",
  });
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
