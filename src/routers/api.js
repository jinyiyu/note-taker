const { Router } = require("express");
const note = require("./note");

const router = Router();

router.use("/notes", note);

module.exports = router;
