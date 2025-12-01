const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//-------------signup handler-----------
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return res.status(200).json({
      success: true,
      message: "User created successfully"
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered now, please try later"
    });
  }
};

// --------- Login Handler -----------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "Please provide both email and password" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    // Remove password before sending
    user.password = undefined;

 
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,       // mandatory for https
        sameSite: "none",   // allow frontend and backend on different domains
        path: "/",          // allow clearing on logout
        maxAge: 3 * 24 * 60 * 60 * 1000
      })
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        user
      });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Login failed. Please try again later" });
  }
};

// ----------------- logout handler ----------
exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully"
  });
};

// ---------------- get current user -----------------
exports.getMe = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const user = await User.findById(userId).select("name");
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, name: user.name });

  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to fetch user", error: err.message });
  }
};
