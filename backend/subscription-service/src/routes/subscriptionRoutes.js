const router = require("express").Router();
const {
  checkSubscription,
  upgradeSubscription
} = require("../controllers/subController");

// 🔍 check
router.get("/check", checkSubscription);

// 💳 upgrade
router.post("/upgrade", upgradeSubscription);

module.exports = router;