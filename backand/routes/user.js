const express = require("express");
const router = express.Router();

const { login, signup, logout ,getMe} = require("../controllers/auth");
const { auth } = require("../middleware/auth");
const User = require("../models/User");

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);


router.get("/me", auth, getMe);

module.exports = router;