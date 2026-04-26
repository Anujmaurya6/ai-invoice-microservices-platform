require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use("/api/invoices", require("./routes/invoiceRoutes"));

// 🗄️ DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟡 Invoice DB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// 🚀 Start
app.listen(process.env.PORT, () => {
  console.log(`🧾 Invoice Service running on ${process.env.PORT}`);
});