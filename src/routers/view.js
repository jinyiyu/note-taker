const { Router } = require("express");
const { renderHomePage, renderNotePage } = require("../controllers/view");

const router = Router();

router.get("/", renderHomePage);
router.get("/note", renderNotePage);

module.exports = router;
