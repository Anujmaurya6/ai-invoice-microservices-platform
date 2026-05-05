const router = require("express").Router();
const {
  checkSubscription,
  upgradeSubscription
} = require("../controllers/subController");

const auth = require("../middleware/auth");

// 🔍 check
router.get("/check", auth, checkSubscription);

// 💳 upgrade
router.post("/upgrade", auth, upgradeSubscription);

module.exports = router;