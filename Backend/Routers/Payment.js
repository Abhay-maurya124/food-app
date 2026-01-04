const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: "cartItems must be a non-empty array" });
    }

    const line_items = cartItems.map(item => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: `${item.name} (${item.size})`,
          images: [item.img],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/payment-success`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-fail`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error detail:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
