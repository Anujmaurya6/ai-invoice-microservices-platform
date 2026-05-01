const router = require("express").Router();
const Razorpay = require("razorpay");

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
  console.log("❌ Razorpay ENV missing");
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    console.log("👉 Amount:", amount);

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Valid amount required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now()
    });

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount
    });

  } catch (err) {
    console.log("❌ Razorpay FULL ERROR:", err);
    res.status(500).json({
      success: false,
      error: err.error?.description || err.message
    });
  }
});

module.exports = router;