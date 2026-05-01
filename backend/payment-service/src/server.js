require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5007;

app.listen(PORT, () => {
  console.log(`🟠 Payment Service running on ${PORT}`);
});