const express = require("express");
const router = express.Router();
const UserSchema = require("../models/UserSchema");
router.post("/createuser", async (req, res) => {
  try {
    await UserSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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
router.post("/loginuser", async (req, res) => {

  try {
    await UserSchema.findOne({
      email: req.body.email,
      password: req.body.password,
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
module.exports = router;
