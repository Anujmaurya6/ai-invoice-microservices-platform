const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔥 REGISTER (REAL)
exports.register = async (req, res) => {
  try {
    console.log("🔥 REGISTER HIT");

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id
    });

  } catch (err) {
    console.log("❌ REGISTER ERROR:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔥 LOGIN (REAL)
exports.login = async (req, res) => {
  try {
    console.log("🔥 LOGIN HIT");

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (err) {
    console.log("❌ LOGIN ERROR:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};