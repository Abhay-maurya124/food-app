const express = require("express");
const router = express.Router();

router.post("/Alldata", (req, res) => {
  try {
    res.send(global.foodapp);
  } catch (error) {
    console.log(error, "something went wrong");
  }
});

// router.post("/Allcategory", (req, res) => {
//   try {
//     res.send(global.foodcategory);
//   } catch (error) {
//     console.log(error, "something went wrong");
//   }
// });

module.exports = router;
