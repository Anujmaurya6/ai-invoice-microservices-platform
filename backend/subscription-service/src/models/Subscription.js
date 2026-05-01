const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    enum: ["FREE", "PRO"],
    default: "FREE"
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive"
  }
}, { timestamps: true });

module.exports = mongoose.model("Subscription", subscriptionSchema);