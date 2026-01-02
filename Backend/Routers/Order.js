const express = require("express");
const router = express.Router();

router.get("/order/:orderId", (req, res) => {
  try {
    // const { orderId } = req.params;
    // console.log(orderId);
    const item = global.foodapp.find();

    console.log(item);
    if (!item) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(item);
  } catch (error) {
    console.error("Error in order lookup:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;