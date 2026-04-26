const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  amount: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);