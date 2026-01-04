require("dotenv").config();

const express = require("express");
const mongo = require("./db");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(express.json());
mongo();

app.get("/", (req, res) => res.send("hello"));

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
// index.js (backend)
app.use("/api/payment", require("./Routers/Payment.js"));

app.listen(port, () => {
  console.log("✅ backend connected on port", port);
});
