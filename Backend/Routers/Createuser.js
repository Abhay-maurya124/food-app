const express = require("express");
const router = express.Router();
const UserSchema = require("../models/UserSchema");
router.post("/createuser", async (req, res) => {
  try {
    await UserSchema.create({
      name: "abhay",
      email: "Abhay@gmail.com",
      location: "huh",
      password: "1234",
    });
    res.json({success:true})
  } catch (error) {
        res.json({success:false})
        console.log(error)
  }
});
module.exports = router