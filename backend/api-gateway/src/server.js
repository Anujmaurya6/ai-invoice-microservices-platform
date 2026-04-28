require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());
app.use(express.json());

// USER
app.use("/api/users", createProxyMiddleware({
  target: "http://user-service:5001",
  changeOrigin: true
}));

// INVOICE
app.use("/api/invoices", createProxyMiddleware({
  target: "http://invoice-service:5002",
  changeOrigin: true
}));

// SUBSCRIPTION
app.use("/api/subscription", createProxyMiddleware({
  target: "http://subscription-service:5003",
  changeOrigin: true
}));

// PAYMENT
app.use("/api/payment", createProxyMiddleware({
  target: "http://payment-service:5004",
  changeOrigin: true
}));

// AI
app.use("/api/ai", createProxyMiddleware({
  target: "http://ai-service:5005",
  changeOrigin: true
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 API Gateway running on ${PORT}`);
});