require("dotenv").config();  // MUST be first

const express = require("express");
const mongo = require("./db");

const app = express();
const port = 5173;

mongo();  // no .catch here, we handle errors inside

app.get("/", (req, res) => res.send("hello"));

app.listen(port, () => {
  console.log("✅ backend connected on port", port);
});
