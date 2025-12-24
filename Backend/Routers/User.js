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
  const { email, password } = req.body;

  const user = await UserSchema.findOne({ email });
  console.log("FOUND USER:", user && user.email, user && user.password);

  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  const pswcompare =await bcrypt.compare(req.body.password, user.password);
  if (!pswcompare)
    return res.status(400).json({ message: "Invalid email or password" });

  const data = {
    user: {
      id: user.id,
    },
  };
  const authtoken = jwt.sign(data, jwtsecret);
  return res.json({ message: "Login successful", authtoken:authtoken });
});

module.exports = router;


