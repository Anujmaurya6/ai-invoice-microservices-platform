const router = require("express").Router();
const {
  checkSubscription,
  upgradeSubscription
} = require("../controllers/subController");

// 🔍 check pro or not
router.get("/check", checkSubscription);

// 💳 upgrade to pro
router.post("/upgrade", upgradeSubscription);

module.exports = router;