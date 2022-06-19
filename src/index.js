const express = require("express");
const path = require("path");

const router = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});
