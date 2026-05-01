const router = require("express").Router();
const { register, login } = require("../controllers/userController");

router.get("/ping", (req, res) => {
  console.log("✅ PING HIT");
  res.json({ message: "pong" });
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;