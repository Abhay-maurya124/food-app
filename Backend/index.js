const express = require("express");
const mongo = require("./db");
const app = express();
port = 5173;

mongo().catch(console.error);

app.get("/", (req, res) => res.send("hello"));


app.listen(port, () => {
  console.log("backend connected");
});
