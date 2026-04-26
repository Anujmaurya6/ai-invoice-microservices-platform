require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());

// 🔁 ROUTING (Gateway → Services)

app.use("/api/users", createProxyMiddleware({
  target: process.env.USER,
  changeOrigin: true
}));

app.use("/api/invoices", createProxyMiddleware({
  target: process.env.INVOICE,
  changeOrigin: true
}));

app.use("/api/subscription", createProxyMiddleware({
  target: process.env.SUB,
  changeOrigin: true
}));

app.use("/api/payment", createProxyMiddleware({
  target: process.env.PAYMENT,
  changeOrigin: true
}));

app.use("/api/ai", createProxyMiddleware({
  target: process.env.AI,
  changeOrigin: true
}));

// 🚀 START SERVER
app.listen(process.env.PORT, () => {
  console.log(`🌐 API Gateway running on port ${process.env.PORT}`);
});