require("dotenv").config();
const express = require("express");
const mongo = require("./db");
const cors = require("cors");

const app = express();

// 1. Initialize Database Connection 
mongo();

app.use(express.json());

// 2. Updated CORS for Production 
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "http://localhost:5174", 
      "https://gofood-app-psi.vercel.app" // Your deployed frontend URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  })
);

// 3. Define Routes 
app.get("/", (req, res) => res.send("GoFood API is running..."));

app.use("/api", require("./Routers/User.js"));
app.use("/api", require("./Routers/Showdata.js"));
app.use("/api/payment", require("./Routers/Payment.js"));

// 4. CRITICAL: Only use app.listen for local development 
// Vercel manages the port automatically in production.
if (process.env.NODE_ENV !== "production") {
    const port = 5000;
    app.listen(port, () => {
        console.log("✅ Backend connected locally on port", port);
    });
}

// 5. CRITICAL: Export the app for Vercel's Serverless Functions 
module.exports = app;