const fs = require("fs");
const path = require("path");

const readFromDb = (fileName) => {
  try {
    const filePath = path.join(__dirname, `../../db/${fileName}.json`);

    const data = fs.readFileSync(filePath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    console.log(`[ERROR: Failed to read from database | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to read from database",
    });
  }
};

const writeToDb = (fileName, data) => {
  try {
    const filePath = path.join(__dirname, `../../db/${fileName}.json`);

    return fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(`[ERROR: Failed to write to the database | ${error.message}]`);

    return res.status(500).json({
      suscess: false,
      error: "Failed to write to the database",
    });
  }
};
module.exports = { readFromDb, writeToDb };
