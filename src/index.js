const express = require("express");
const router = require("./routers/index");

const app = express();

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});
