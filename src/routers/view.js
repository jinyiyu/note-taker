const { Router } = require("express");
const { renderHomePage, renderNotePage } = require("../controllers/view");

const router = Router();

router.get("/notes", renderNotePage);
router.get("/*", renderHomePage);

module.exports = router;
