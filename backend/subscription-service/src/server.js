require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use("/api/subscription", require("./routes/subRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`🟣 Subscription Service running on ${process.env.PORT}`);
});