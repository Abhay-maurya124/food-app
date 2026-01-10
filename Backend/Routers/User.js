const express = require("express");
const router = express.Router();
const UserSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtsecret = "mynameisabhaymauryathisisbackend"
// CREATE USER
router.post("/createuser", async (req, res) => {
  const salt =await bcrypt.genSalt(10);
  const pswtoken =await bcrypt.hash(req.body.password, salt);
  try {
    await UserSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: pswtoken,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// LOGIN USER
router.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received login:", { email, password });

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await UserSchema.findOne({ email });
    console.log("DB user:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const data = { user: { id: user.id } };
    const token = jwt.sign(data, jwtsecret, { expiresIn: "1h" });

    return res.json({ message: "Login successful", authtoken: token });
  } catch (err) {
    console.error("Login error:", err);
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
});


module.exports = router;


