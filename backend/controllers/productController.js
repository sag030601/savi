const db = require("../models/db");

// Add a Product
exports.addProduct = async (req, res) => {
  const { name, price } = req.body;
  const userId = req.user.id; // Set by authMiddleware
  const image = req.file ? req.file.path : null;

  try {
    await db.query(
      "INSERT INTO products (name, price, user_id, image) VALUES (?, ?, ?, ?)",
      [name, price, userId, image]
    );
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const [products] = await db.query("SELECT * FROM products");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
