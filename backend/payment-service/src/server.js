require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/payment", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`🟠 Payment Service running on ${PORT}`);
});