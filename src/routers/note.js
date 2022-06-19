const { Router } = require("express");
const { setNotes, deleteNote, createNote } = require("../controllers/note");

const router = Router();

router.get("/", setNotes);
router.delete("/:id", deleteNote);
router.post("/", createNote);

module.exports = router;
