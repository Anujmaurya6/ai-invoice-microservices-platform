require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Routes
app.use("/api/ai", require("./routes/aiRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`🔵 AI Service running on ${process.env.PORT}`);
});