const express = require("express");
const app = express();
const port = 8091;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`API listening on port ${port}!`);
});