// ⚠️ Demo purpose (memory-based)
let isPro = false;

// 🟢 CHECK
exports.checkSubscription = (req, res) => {
  res.json({ isPro });
};

// 🔵 UPGRADE
exports.upgradeSubscription = (req, res) => {
  isPro = true;
  res.json({ msg: "User upgraded to PRO" });
};