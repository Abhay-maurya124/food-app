// const express = require("express");
// const router = express.Router();
// const Food = require("../models/Food");

// router.get("/order/:orderId", async (req, res) => {
//   try {
    
//     const { orderId } = req.params;
//     const item = await Food.findById(orderId);

//     if (!item) {
//       return res.status(404).json({ error: "Order not found" });
//     }

//     return res.json(item);
//   } catch (error) {
//     console.error("Error in order lookup:", error);
//     return res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;
