require("dotenv").config();
const express = require("express");
const mongo = require("./db");
const cors = require("cors");

const app = express();

// 1. Initialize Database Connection
mongo();

app.use(express.json());

// 2. CORS (front domain + local)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://gofood-app-psi.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// 3. Define Routes
app.get("/", (req, res) => res.send("GoFood API is running..."));

app.use("/api", require("./Routers/User.js"));
app.use("/api", require("./Routers/Showdata.js"));
app.use("/api/payment", require("./Routers/Payment.js"));

// 4. Always listen on port (Render / local)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend connected on port ${PORT}`);
});

module.exports = app;
