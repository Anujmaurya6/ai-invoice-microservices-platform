require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const client = require("prom-client");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// =====================
// 🔴 PROMETHEUS METRICS SETUP
// =====================

// Default metrics (CPU, memory, etc.)
client.collectDefaultMetrics();

// Custom metrics
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Request duration in seconds",
  labelNames: ["method", "route", "status"],
  buckets: [0.1, 0.3, 0.5, 1, 2, 5],
});

// Middleware for metrics
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();

  res.on("finish", () => {
    const route = req.route?.path || req.path;

    httpRequestsTotal.inc({
      method: req.method,
      route,
      status: res.statusCode,
    });

    end({
      method: req.method,
      route,
      status: res.statusCode,
    });
  });

  next();
});

// =====================
// 🔴 IMPORTANT: METRICS ROUTE FIRST
// =====================
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// =====================
// 🔴 THEN NORMAL ROUTES
// =====================
app.use("/", require("./routes/invoiceRoutes"));

// =====================
// 🔴 DATABASE
// =====================
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://mongodb:27017/invoiceDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("🟡 Invoice DB Connected"))
  .catch((err) => {
    console.log("❌ DB Error:", err.message);
    process.exit(1);
  });

// =====================
// 🔴 SERVER START
// =====================
const PORT = process.env.PORT || 5002;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🧾 Invoice Service running on ${PORT}`);
});