require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

// 🔍 DEBUG
app.use((req, res, next) => {
  console.log("👉 Incoming:", req.method, req.url);
  next();
});

// 🔥 USERS SERVICE
app.use("/api/users", createProxyMiddleware({
  target: "http://localhost:5001",
  changeOrigin: true,
  pathRewrite: { "^/api/users": "" }
}));

// 🔥 INVOICE SERVICE
app.use("/api/invoices", createProxyMiddleware({
  target: "http://localhost:5002",
  changeOrigin: true,
  pathRewrite: { "^/api/invoices": "" }
}));

// 🔥 SUBSCRIPTION SERVICE
app.use("/api/subscription", createProxyMiddleware({
  target: "http://localhost:5003",
  changeOrigin: true,
  pathRewrite: { "^/api/subscription": "" }
}));

// 🔥 PAYMENT SERVICE
app.use("/api/payment", createProxyMiddleware({
  target: "http://localhost:5007",
  changeOrigin: true,
  pathRewrite: { "^/api/payment": "" }
}));

// 🔥 AI SERVICE
app.use("/api/ai", createProxyMiddleware({
  target: "http://localhost:5005",
  changeOrigin: true,
  pathRewrite: { "^/api/ai": "" }
}));

// HEALTH
app.get("/", (req, res) => {
  res.send("🚀 Gateway running...");
});

app.listen(5000, () => {
  console.log("🔥 Gateway running on 5000");
});