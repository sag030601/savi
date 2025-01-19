const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");
const path = require("path")

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes for product management
router.post("/", authMiddleware, upload.single("image"), addProduct);
router.get("/", authMiddleware, getProducts);

module.exports = router; // Export the router
