require("dotenv").config();

const express = require("express");
const mongo = require("./db");
const cors = require("cors")
const app = express();
const port = 5000;
mongo();

app.get("/", (req, res) => res.send("hello"));
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",   // your React frontend origin
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type"]
}))

app.use("/api",require('./Routers/Createuser'))
app.listen(port, () => {
  console.log("✅ backend connected on port", port);
});
