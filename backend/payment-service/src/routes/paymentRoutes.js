const router = require("express").Router();
const Razorpay = require("razorpay");


const razorpay = new Razorpay({
  key_id: "rzp_test_123",      // dummy डाल अभी
  key_secret: "test_secret"
});
router.post("/create-order", async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
    receipt: "receipt_123"
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

module.exports = router;