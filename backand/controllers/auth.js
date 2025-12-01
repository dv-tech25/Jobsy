const bcrypt = require("bcryptjs");

const User = require("../models/User");
const jwt=require('jsonwebtoken')
require("dotenv").config();
//-------------signup handler-----------
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check for user already exist
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            });
        }
    
      
      let hashedPassword;

      try{
        hashedPassword=await bcrypt.hash(password,10);
      }
      catch(err){
        return res.status(500).json({
            success:false,
            message:"error in hashing password"
        });
      }

      // -----------create entry for user-----------
      const user=await User.create({name,email,password:hashedPassword})

      return res.status(200).json({
        success:true,
        message:"user created successful"
      });
    }
    catch (err) {
         console.log(err);
         return res.status(500).json({
            success:false,
            message:"user can not be registered now please try later"
          });
    }
}





// --------- Login Handler -----------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password"
      });
    }

    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate JWT token
    const payload = {
      email: user.email,
      id: user._id
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

    // Set cookie options
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict",
      secure: process.env.NODE_ENV === "production" // false on localhost, true in production
    };

    // Remove password from user object
    user.password = undefined;

    // Send response with cookie
    return res
      .cookie('token', token, options)
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        user
      });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again later"
    });
  }
};

// ...existing code...

// ----------------- logout handler ----------
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: "Logged out successfully"
  });
}





exports.getMe = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const user = await User.findById(userId).select("name"); 
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, name: user.name });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to fetch user", error: err.message });
  }
};




