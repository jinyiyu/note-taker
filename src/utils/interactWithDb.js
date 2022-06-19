const fs = require("fs");
const path = require("path");

const readFromDb = (fileName) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);

  const data = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(data);
};

const writeToDb = (fileName, data) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);

  return fs.writeFileSync(filePath, JSON.stringify(data));
};
module.exports = { readFromDb, writeToDb };
