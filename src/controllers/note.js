const { v4: uuidv4 } = require("uuid");
const { readFromDb, writeToDb } = require("../utils/read_and_write_db");

const getNotes = (req, res) => {
  try {
    // read from file
    const db = readFromDb("db");

    // return response(json)
    return res.json(db);
  } catch (error) {
    console.log(`[ERROR: Failed to get Notes | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to get Notes",
    });
  }
};

const deleteNote = (req, res) => {
  try {
    // get id of the note from req
    const { id } = req.params;

    // get all notes from file
    const db = readFromDb("db");

    // remove note from file
    const filteredDb = db.filter((item) => {
      return item.id !== id;
    });

    // write to file
    writeToDb("db", filteredDb);

    // send response - {message:"success!"}
    return res.json({
      message: "successfully delated the note!",
    });
  } catch (error) {
    console.log(`[ERROR: Failed to delete Notes | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to delete Notes",
    });
  }
};

// work in progress
const createNote = (req, res) => {
  try {
    // get payload from req
    const { title, text } = req.body;

    // create uuid
    const id = uuidv4();

    // put id and payload in a new notes obj
    const noteObject = {
      id,
      title,
      text,
    };

    // get all notes from file
    const db = readFromDb("db");

    // insert new note
    db.push(noteObject);
    console.log(db);

    // write to file(db)
    writeToDb("db", db);

    return res.json({
      success: true,
      data: db,
    });
  } catch (error) {
    console.log(`[ERROR: Failed to create Notes | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to create Notes",
    });
  }
};

module.exports = {
  getNotes,
  deleteNote,
  createNote,
};
