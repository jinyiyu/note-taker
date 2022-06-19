const { Router } = require("express");
const note = require("./note");

const router = Router();

router.use("/", note);

module.exports = router;
