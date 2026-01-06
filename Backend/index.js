require("dotenv").config();
const express = require("express");
const path = require("path"); // <--- Add this
const mongo = require("./db");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Use environment variable

app.use(express.json());
mongo();

// Move CORS before routes
app.use(cors()); 

// API Routes
app.use("/api", require("./Routers/User.js"));
app.use("/api", require("./Routers/Showdata.js"));
app.use("/api/payment", require("./Routers/Payment.js"));

// Serve Frontend Static Files
// Note: Vercel handles the backend as serverless functions, 
// so the pathing needs to be precise relative to the root.
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(port, () => {
    console.log("✅ backend connected");
});