const path = require("path");

const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

const renderNotePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");

  res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
  renderNotePage,
};
