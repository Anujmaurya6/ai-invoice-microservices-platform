require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", require("./routes/subscriptionRoutes"));

// DB
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://mongodb:27017/subDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("🟣 Subscription DB Connected"))
  .catch(err => {
    console.log("❌ DB Error:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`🟣 Subscription Service running on ${PORT}`);
});