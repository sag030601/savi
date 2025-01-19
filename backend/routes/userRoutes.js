const express = require("express");
const { signup, login } = require("../controllers/userController");
const router = express.Router();

// Routes for user signup and login
router.post("/signup", signup);
router.post("/login", login);

module.exports = router; // Export the router
