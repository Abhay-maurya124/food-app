require("dotenv").config();

const express = require("express");
const mongo = require("./db");
const cors = require("cors");

const app = express();
const port = 5000;

mongo();

app.get("/", (req, res) => res.send("hello"));

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
// Updated line - changed Createuser.js to User.js
app.use("/api", require("./Routers/User.js"));
// app.use("/api", require("./Routers/Order.js"));
app.use("/api", require("./Routers/Showdata.js"));
app.listen(port, () => {
  console.log("✅ backend connected on port", port);
});
