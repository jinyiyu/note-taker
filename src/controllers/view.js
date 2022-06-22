const path = require("path");

const renderHomePage = (req, res) => {
  try {
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(`[ERROR: Failed to renderHomePage | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to renderHomePage",
    });
  }
};

const renderNotePage = (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../public/notes.html");

    return res.sendFile(filePath);
  } catch (error) {
    console.log(`[ERROR: Failed to renderNotePage | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to renderNotePage",
    });
  }
};

module.exports = {
  renderHomePage,
  renderNotePage,
};
