require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ai", require("./routes/aiRoutes"));

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`🔵 AI Service running on ${PORT}`);
});