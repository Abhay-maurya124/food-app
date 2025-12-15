require("dotenv").config();

const express = require("express");
const mongo = require("./db");

const app = express();
const port = 5173;
mongo();
app.get("/", (req, res) => res.send("hello"));

app.listen(port, () => {
  console.log("✅ backend connected on port", port);
});
