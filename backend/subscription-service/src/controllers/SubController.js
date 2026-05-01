const Subscription = require("../models/Subscription");

// 🔍 CHECK SUBSCRIPTION
exports.checkSubscription = async (req, res) => {
  try {
    const { userId } = req.query;

    const sub = await Subscription.findOne({ userId });

    if (!sub) {
      return res.json({
        isPro: false,
        message: "No subscription found"
      });
    }

    res.json({
      isPro: sub.plan === "PRO",
      data: sub
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server error" });
  }
};


// 🔵 UPGRADE SUBSCRIPTION
exports.upgradeSubscription = async (req, res) => {
  try {
    const { userId } = req.body;

    let sub = await Subscription.findOne({ userId });

    if (!sub) {
      sub = await Subscription.create({
        userId,
        plan: "PRO",
        status: "active"
      });
    } else {
      sub.plan = "PRO";
      sub.status = "active";
      await sub.save();
    }

    res.json({
      success: true,
      message: "User upgraded to PRO",
      data: sub
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server error" });
  }
};